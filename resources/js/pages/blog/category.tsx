import React from 'react';
import { Link } from '@inertiajs/react';
import { BlogHeader } from '@/components/blog-header';
import { BlogCard } from '@/components/blog-card';
import { BlogSidebar } from '@/components/blog-sidebar';
import { BlogFooter } from '@/components/blog-footer';
import { Pagination } from '@/components/pagination';

interface Props {
    category: {
        id: number;
        name: string;
        slug: string;
        description: string | null;
    };
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
    [key: string]: unknown;
}

export default function CategoryShow({ category, posts, popularPosts, categories, tags }: Props) {
    return (
        <div className="min-h-screen bg-gray-50">
            <BlogHeader />
            
            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <span>›</span>
                    <span className="text-gray-900">Category: {category.name}</span>
                </div>
            </nav>

            {/* Category Header */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="text-6xl mb-4">📂</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {category.name}
                        </h1>
                        {category.description && (
                            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
                                {category.description}
                            </p>
                        )}
                        <div className="flex justify-center">
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                                <span className="text-lg font-semibold">
                                    {posts.data.length} Article{posts.data.length !== 1 ? 's' : ''} in this category
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Blog Posts */}
                    <div className="lg:col-span-2">
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
                                <div className="text-6xl mb-4">📝</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    No articles found
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    There are no articles in the {category.name} category yet.
                                </p>
                                <Link
                                    href="/"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Browse All Articles
                                </Link>
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