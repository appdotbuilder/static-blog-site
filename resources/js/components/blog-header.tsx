import React from 'react';
import { Link } from '@inertiajs/react';

interface BlogHeaderProps {
    showSearch?: boolean;
    searchTerm?: string;
    onSearchChange?: (value: string) => void;
}

export function BlogHeader({ showSearch = false, searchTerm = '', onSearchChange }: BlogHeaderProps) {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    <div>
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-2xl">📝</span>
                            <h1 className="text-2xl font-bold text-gray-900">TechBlog</h1>
                        </Link>
                        <p className="text-gray-600 mt-1">Insights, tutorials, and tech trends</p>
                    </div>

                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                        >
                            Login
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {showSearch && (
                    <div className="pb-6">
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => onSearchChange?.(e.target.value)}
                                placeholder="Search articles..."
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}