import React from 'react';
import { BlogHeader } from '@/components/blog-header';
import { BlogFooter } from '@/components/blog-footer';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <BlogHeader />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-6xl mb-6">👋</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        About TechBlog
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        We're passionate about sharing knowledge and helping developers grow their skills through quality content and practical insights.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Our Mission</h2>
                        <p className="text-gray-700 mb-6">
                            At TechBlog, our mission is to democratize access to high-quality technical knowledge. We believe that 
                            everyone should have access to the latest insights, tutorials, and best practices in technology and 
                            web development, regardless of their background or experience level.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 What We Offer</h2>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                            <li><strong>In-depth Tutorials:</strong> Step-by-step guides that help you master new technologies</li>
                            <li><strong>Best Practices:</strong> Learn from industry experts and avoid common pitfalls</li>
                            <li><strong>Latest Trends:</strong> Stay updated with the rapidly evolving tech landscape</li>
                            <li><strong>Practical Examples:</strong> Real-world code samples and implementation guides</li>
                            <li><strong>Career Insights:</strong> Tips for growing your career in tech</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Our Focus Areas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-blue-50 rounded-lg p-6">
                                <div className="text-2xl mb-2">🌐</div>
                                <h3 className="font-bold text-gray-900 mb-2">Web Development</h3>
                                <p className="text-gray-600 text-sm">
                                    Modern frameworks, libraries, and tools for building amazing web applications.
                                </p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-6">
                                <div className="text-2xl mb-2">⚡</div>
                                <h3 className="font-bold text-gray-900 mb-2">Performance</h3>
                                <p className="text-gray-600 text-sm">
                                    Optimization techniques to make your applications fast and efficient.
                                </p>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-6">
                                <div className="text-2xl mb-2">🔧</div>
                                <h3 className="font-bold text-gray-900 mb-2">Development Tools</h3>
                                <p className="text-gray-600 text-sm">
                                    The best tools and workflows to improve your development productivity.
                                </p>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-6">
                                <div className="text-2xl mb-2">📈</div>
                                <h3 className="font-bold text-gray-900 mb-2">Career Growth</h3>
                                <p className="text-gray-600 text-sm">
                                    Strategies for advancing your career and building a successful tech journey.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🌟 Our Values</h2>
                        <div className="bg-gray-50 rounded-lg p-6 mb-6">
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1">✨</span>
                                    <div>
                                        <strong>Quality First:</strong> Every article is carefully researched, tested, and reviewed to ensure accuracy.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1">🤝</span>
                                    <div>
                                        <strong>Community-Driven:</strong> We listen to our readers and create content that addresses real needs.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1">🎓</span>
                                    <div>
                                        <strong>Educational Focus:</strong> We don't just show you what to do, but explain why and how it works.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1">🔓</span>
                                    <div>
                                        <strong>Open Access:</strong> Knowledge should be free and accessible to everyone.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">📬 Get In Touch</h2>
                        <p className="text-gray-700 mb-4">
                            We love hearing from our readers! Whether you have suggestions for topics, feedback on our content, 
                            or just want to say hello, don't hesitate to reach out.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                                📧 Contact Us
                            </a>
                            <a
                                href="#newsletter"
                                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                            >
                                📬 Subscribe to Newsletter
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <BlogFooter />
        </div>
    );
}