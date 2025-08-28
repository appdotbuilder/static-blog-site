import React from 'react';
import { Link } from '@inertiajs/react';

interface PaginationProps {
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    className?: string;
}

export function Pagination({ links, className = '' }: PaginationProps) {
    if (!links || links.length <= 3) {
        return null;
    }

    return (
        <nav className={`flex justify-center ${className}`}>
            <ul className="flex items-center space-x-1">
                {links.map((link, index) => {
                    const isFirst = index === 0;
                    const isLast = index === links.length - 1;
                    const isPrevious = isFirst;
                    const isNext = isLast;
                    
                    // Handle previous/next buttons
                    if (isPrevious || isNext) {
                        const label = isPrevious ? '« Previous' : 'Next »';
                        const icon = isPrevious ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        );

                        return (
                            <li key={index}>
                                {link.url ? (
                                    <Link
                                        href={link.url}
                                        className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 transition-colors"
                                    >
                                        {isPrevious && icon}
                                        <span className="mx-1">{label}</span>
                                        {isNext && icon}
                                    </Link>
                                ) : (
                                    <span className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-md cursor-not-allowed">
                                        {isPrevious && icon}
                                        <span className="mx-1">{label}</span>
                                        {isNext && icon}
                                    </span>
                                )}
                            </li>
                        );
                    }

                    // Handle ellipsis
                    if (link.label.includes('...')) {
                        return (
                            <li key={index}>
                                <span className="px-3 py-2 text-sm font-medium text-gray-500">
                                    {link.label}
                                </span>
                            </li>
                        );
                    }

                    // Handle number buttons
                    return (
                        <li key={index}>
                            {link.url ? (
                                <Link
                                    href={link.url}
                                    className={`px-3 py-2 text-sm font-medium border rounded-md transition-colors ${
                                        link.active
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <span
                                    className={`px-3 py-2 text-sm font-medium border rounded-md ${
                                        link.active
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'text-gray-300 bg-gray-100 border-gray-200 cursor-not-allowed'
                                    }`}
                                >
                                    {link.label}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}