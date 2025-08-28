import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import { BlogHeader } from '@/components/blog-header';
import { BlogCard } from '@/components/blog-card';
import { BlogSidebar } from '@/components/blog-sidebar';
import { BlogFooter } from '@/components/blog-footer';
import { Pagination } from '@/components/pagination';

interface Props {
    posts: {
        data: Array<{
            id: number;
            title: string;
            slug: string;
            excerpt: string;
            created_at: string;
            views: number;
            category: {
                name: string;
                slug: string;
            };
            tags: Array<{
                name: string;
                slug: string;
            }>;
        }>;
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    popularPosts: Array<{
        id: number;
        title: string;
        slug: string;
        views: number;
    }>;
    categories: Array<{
        id: number;
        name: string;
        slug: string;
        posts_count: number;
    }>;
    tags: Array<{
        id: number;
        name: string;
        slug: string;
        posts_count: number;
    }>;
    searchTerm: string;
    [key: string]: unknown;
}

export default function Welcome({ posts, popularPosts, categories, tags, searchTerm }: Props) {
    const [search, setSearch] = useState(searchTerm);

    const handleSearch = (value: string) => {
        setSearch(value);
        
        // Debounce search requests
        setTimeout(() => {
            router.get('/', { search: value }, {
                preserveState: true,
                preserveScroll: true,
                replace: true
            });
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <BlogHeader showSearch={true} searchTerm={search} onSearchChange={handleSearch} />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        📚 Welcome to TechBlog
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                        Discover the latest insights, tutorials, and trends in technology and web development. 
                        Join thousands of developers learning and growing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold">📖</div>
                            <div className="text-sm text-blue-100">Latest Articles</div>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold">🚀</div>
                            <div className="text-sm text-blue-100">Expert Insights</div>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold">💡</div>
                            <div className="text-sm text-blue-100">Practical Tips</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Blog Posts */}
                    <div className="lg:col-span-2">
                        {searchTerm && (
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Search Results for "{searchTerm}"
                                </h2>
                                <p className="text-gray-600">
                                    Found {posts.data.length} article{posts.data.length !== 1 ? 's' : ''}
                                </p>
                            </div>
                        )}
                        
                        {posts.data.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {posts.data.map((post) => (
                                        <BlogCard key={post.id} post={post} />
                                    ))}
                                </div>
                                
                                <Pagination links={posts.links} />
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    No articles found
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {searchTerm 
                                        ? `We couldn't find any articles matching "${searchTerm}". Try a different search term.`
                                        : "No articles are available at the moment."
                                    }
                                </p>
                                {searchTerm && (
                                    <button
                                        onClick={() => handleSearch('')}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Clear Search
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <BlogSidebar 
                            popularPosts={popularPosts}
                            categories={categories}
                            tags={tags}
                        />
                    </div>
                </div>
            </main>

            <BlogFooter />
        </div>
    );
}