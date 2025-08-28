import React from 'react';
import { Link } from '@inertiajs/react';

interface BlogSidebarProps {
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
}

export function BlogSidebar({ popularPosts, categories, tags }: BlogSidebarProps) {
    return (
        <aside className="space-y-8">
            {/* Email Subscription */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">📬 Subscribe to Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                    Get the latest posts delivered straight to your inbox.
                </p>
                <form className="space-y-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🔥 Popular Posts</h3>
                <div className="space-y-4">
                    {popularPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/post/${post.slug}`}
                            className="block group"
                        >
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                                {post.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                                👁️ {post.views} views
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">📂 Categories</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="flex justify-between items-center py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 -mx-2 rounded transition-colors"
                        >
                            <span>{category.name}</span>
                            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                                {category.posts_count}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🏷️ Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag.id}
                            className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                        >
                            {tag.name}
                            <span className="ml-1 text-xs text-gray-500">({tag.posts_count})</span>
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
}