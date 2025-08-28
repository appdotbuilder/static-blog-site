<?php

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;

it('displays posts on blog home page', function () {
    // Create categories, tags, and posts
    $category = Category::factory()->create();
    $tag = Tag::factory()->create();
    
    $post = Post::factory()->create([
        'category_id' => $category->id,
        'published' => true,
    ]);
    $post->tags()->attach($tag);

    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertInertia(fn ($assert) => $assert
        ->component('welcome')
        ->has('posts.data', 1)
        ->has('popularPosts')
        ->has('categories')
        ->has('tags')
    );
});

it('displays blog post on show page', function () {
    $category = Category::factory()->create();
    $tag = Tag::factory()->create();
    
    $post = Post::factory()->create([
        'category_id' => $category->id,
        'published' => true,
        'slug' => 'test-post',
    ]);
    $post->tags()->attach($tag);

    $response = $this->get("/post/{$post->slug}");

    $response->assertStatus(200);
    $response->assertInertia(fn ($assert) => $assert
        ->component('blog/show')
        ->where('post.id', $post->id)
        ->where('post.title', $post->title)
        ->has('relatedPosts')
        ->has('popularPosts')
        ->has('categories')
        ->has('tags')
    );
});

it('displays posts from specific category', function () {
    $category = Category::factory()->create(['slug' => 'test-category']);
    $otherCategory = Category::factory()->create();
    
    // Create posts in the category
    Post::factory()->count(3)->create([
        'category_id' => $category->id,
        'published' => true,
    ]);
    
    // Create posts in other category
    Post::factory()->count(2)->create([
        'category_id' => $otherCategory->id,
        'published' => true,
    ]);

    $response = $this->get("/category/{$category->slug}");

    $response->assertStatus(200);
    $response->assertInertia(fn ($assert) => $assert
        ->component('blog/category')
        ->where('category.id', $category->id)
        ->has('posts.data', 3)
        ->has('popularPosts')
        ->has('categories')
        ->has('tags')
    );
});

it('searches blog posts', function () {
    $category = Category::factory()->create();
    
    Post::factory()->create([
        'title' => 'Laravel Tutorial',
        'category_id' => $category->id,
        'published' => true,
    ]);
    
    Post::factory()->create([
        'title' => 'React Guide',
        'category_id' => $category->id,
        'published' => true,
    ]);

    $response = $this->get('/?search=Laravel');

    $response->assertStatus(200);
    $response->assertInertia(fn ($assert) => $assert
        ->component('welcome')
        ->has('posts.data', 1)
        ->where('searchTerm', 'Laravel')
    );
});

it('serves static pages', function () {
    $pages = ['about', 'contact', 'terms', 'privacy'];

    foreach ($pages as $page) {
        $response = $this->get("/{$page}");
        $response->assertStatus(200);
        $response->assertInertia(fn ($assert) => $assert->component("pages/{$page}"));
    }
});

it('increments post views on show', function () {
    $category = Category::factory()->create();
    $post = Post::factory()->create([
        'category_id' => $category->id,
        'published' => true,
        'views' => 5,
    ]);

    $this->get("/post/{$post->slug}");

    $this->assertDatabaseHas('posts', [
        'id' => $post->id,
        'views' => 6,
    ]);
});

it('does not show unpublished posts', function () {
    $category = Category::factory()->create();
    
    Post::factory()->create([
        'category_id' => $category->id,
        'published' => false,
    ]);
    
    Post::factory()->create([
        'category_id' => $category->id,
        'published' => true,
    ]);

    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertInertia(fn ($assert) => $assert
        ->component('welcome')
        ->has('posts.data', 1)
    );
});