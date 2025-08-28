<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display the blog home page with posts and search.
     */
    public function index(Request $request)
    {
        $query = Post::with(['category', 'tags'])->published();

        // Search functionality
        if ($request->has('search') && $request->search) {
            $searchTerm = $request->search;
            $query->where(function ($q) use ($searchTerm) {
                $q->where('title', 'like', '%' . $searchTerm . '%')
                  ->orWhere('excerpt', 'like', '%' . $searchTerm . '%');
            });
        }

        $posts = $query->latest()->paginate(6);

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

        return Inertia::render('welcome', [
            'posts' => $posts,
            'popularPosts' => $popularPosts,
            'categories' => $categories,
            'tags' => $tags,
            'searchTerm' => $request->search ?? '',
        ]);
    }

    /**
     * Display the specified blog post.
     */
    public function show(Post $post)
    {
        $post->load(['category', 'tags']);
        $post->increment('views');

        // Related posts
        $relatedPosts = Post::published()
            ->where('id', '!=', $post->id)
            ->where('category_id', $post->category_id)
            ->limit(3)
            ->get(['id', 'title', 'slug', 'excerpt']);

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

        return Inertia::render('blog/show', [
            'post' => $post,
            'relatedPosts' => $relatedPosts,
            'popularPosts' => $popularPosts,
            'categories' => $categories,
            'tags' => $tags,
        ]);
    }


}