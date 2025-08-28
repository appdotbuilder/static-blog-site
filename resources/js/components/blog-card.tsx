import React from 'react';
import { Link } from '@inertiajs/react';

interface BlogCardProps {
    post: {
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
    };
}

export function BlogCard({ post }: BlogCardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4">
                    <Link
                        href={`/category/${post.category.slug}`}
                        className="inline-block px-3 py-1 bg-white bg-opacity-90 text-sm font-medium text-gray-800 rounded-full hover:bg-opacity-100 transition-colors"
                    >
                        {post.category.name}
                    </Link>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm opacity-90">
                        <span>📅 {formatDate(post.created_at)}</span>
                        <span className="mx-2">•</span>
                        <span>👁️ {post.views} views</span>
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link
                        href={`/post/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                    >
                        {post.title}
                    </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag.slug}
                            className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                            #{tag.name}
                        </span>
                    ))}
                </div>
                
                <Link
                    href={`/post/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                    Read more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </article>
    );
}