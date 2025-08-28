<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\StaticPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Blog routes
Route::get('/', [BlogController::class, 'index'])->name('home');
Route::get('/post/{post:slug}', [BlogController::class, 'show'])->name('post.show');
Route::get('/category/{category:slug}', [CategoryController::class, 'show'])->name('category.show');

// Static pages
Route::get('/{page}', [StaticPageController::class, 'show'])
    ->where('page', 'about|contact|terms|privacy')
    ->name('static.page');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
