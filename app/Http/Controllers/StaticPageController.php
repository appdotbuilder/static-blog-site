<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StaticPageController extends Controller
{
    /**
     * Display the specified static page.
     */
    public function show(string $page)
    {
        $validPages = ['about', 'contact', 'terms', 'privacy'];
        
        if (!in_array($page, $validPages)) {
            abort(404);
        }

        return Inertia::render("pages/{$page}");
    }
}