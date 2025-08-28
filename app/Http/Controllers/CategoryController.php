<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display the specified category with its posts.
     */
    public function show(Category $category)
    {
        $posts = Post::with(['category', 'tags'])
            ->published()
            ->where('category_id', $category->id)
            ->latest()
            ->paginate(6);

        // Sidebar data
        $popularPosts = Post::published()
            ->orderBy('views', 'desc')
            ->limit(5)
            ->get(['id', 'title', 'slug', 'views']);

        $categories = Category::withCount('posts')
            ->orderBy('posts_count', 'desc')
            ->get()
            ->filter(function ($category) {
                return $category->posts_count > 0;
            });

        $tags = Tag::withCount('posts')
            ->orderBy('posts_count', 'desc')
            ->limit(15)
            ->get()
            ->filter(function ($tag) {
                return $tag->posts_count > 0;
            });

        return Inertia::render('blog/category', [
            'category' => $category,
            'posts' => $posts,
            'popularPosts' => $popularPosts,
            'categories' => $categories,
            'tags' => $tags,
        ]);
    }
}