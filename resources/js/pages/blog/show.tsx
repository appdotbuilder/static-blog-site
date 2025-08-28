import React from 'react';
import { Link } from '@inertiajs/react';
import { BlogHeader } from '@/components/blog-header';
import { BlogSidebar } from '@/components/blog-sidebar';
import { BlogFooter } from '@/components/blog-footer';

interface Props {
    post: {
        id: number;
        title: string;
        slug: string;
        content: string;
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
    relatedPosts: Array<{
        id: number;
        title: string;
        slug: string;
        excerpt: string;
    }>;
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

export default function BlogShow({ post, relatedPosts, popularPosts, categories, tags }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatContent = (content: string) => {
        // Simple content formatting
        return content
            .split('\n\n')
            .map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('```')) {
                    const codeContent = paragraph.replace(/```[\w]*\n?|```$/g, '');
                    return (
                        <pre key={index} className="bg-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
                            <code className="text-sm text-gray-800">{codeContent}</code>
                        </pre>
                    );
                }
                if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return (
                        <ul key={index} className="list-disc list-inside space-y-2 my-4">
                            {items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700">
                                    {item.replace('- ', '')}
                                </li>
                            ))}
                        </ul>
                    );
                }
                return <p key={index} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>;
            });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <BlogHeader />
            
            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <span>›</span>
                    <Link href={`/category/${post.category.slug}`} className="hover:text-blue-600">
                        {post.category.name}
                    </Link>
                    <span>›</span>
                    <span className="text-gray-900">{post.title}</span>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Article Content */}
                    <article className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/* Article Header */}
                            <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <Link
                                        href={`/category/${post.category.slug}`}
                                        className="inline-block px-3 py-1 bg-white bg-opacity-20 backdrop-blur-sm text-sm font-medium rounded-full hover:bg-opacity-30 transition-colors mb-4"
                                    >
                                        {post.category.name}
                                    </Link>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                        {post.title}
                                    </h1>
                                    <div className="flex items-center text-sm opacity-90">
                                        <span>📅 {formatDate(post.created_at)}</span>
                                        <span className="mx-3">•</span>
                                        <span>👁️ {post.views} views</span>
                                    </div>
                                </div>
                            </div>

                            {/* Article Body */}
                            <div className="p-6 md:p-8">
                                <div className="prose max-w-none">
                                    {formatContent(post.content)}
                                </div>

                                {/* Tags */}
                                <div className="border-t pt-6 mt-8">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">🏷️ Tags</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag.slug}
                                                className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 cursor-pointer transition-colors"
                                            >
                                                #{tag.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Share */}
                                <div className="border-t pt-6 mt-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">📤 Share this article</h4>
                                    <div className="flex space-x-4">
                                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                            </svg>
                                            Twitter
                                        </button>
                                        <button className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                            </svg>
                                            Facebook
                                        </button>
                                        <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            Copy Link
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Related Posts */}
                        {relatedPosts.length > 0 && (
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 Related Articles</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {relatedPosts.map((relatedPost) => (
                                        <div key={relatedPost.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                            <div className="p-4">
                                                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                                    <Link href={`/post/${relatedPost.slug}`} className="hover:text-blue-600 transition-colors">
                                                        {relatedPost.title}
                                                    </Link>
                                                </h4>
                                                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                                                    {relatedPost.excerpt}
                                                </p>
                                                <Link
                                                    href={`/post/${relatedPost.slug}`}
                                                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                                                >
                                                    Read more →
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>

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