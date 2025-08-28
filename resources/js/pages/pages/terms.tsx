import React from 'react';
import { BlogHeader } from '@/components/blog-header';
import { BlogFooter } from '@/components/blog-footer';

export default function Terms() {
    return (
        <div className="min-h-screen bg-gray-50">
            <BlogHeader />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-6xl mb-6">📜</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Please read these terms carefully before using our website and services.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                    <div className="prose max-w-none">
                        <div className="text-sm text-gray-500 mb-8">
                            <strong>Last updated:</strong> December 2024
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔍 1. Acceptance of Terms</h2>
                        <p className="text-gray-700 mb-6">
                            By accessing and using TechBlog ("we," "our," or "us"), you accept and agree to be bound by the terms 
                            and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">📖 2. Use License</h2>
                        <p className="text-gray-700 mb-4">
                            Permission is granted to temporarily download one copy of the materials on TechBlog for personal, 
                            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                            <li>modify or copy the materials</li>
                            <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                            <li>attempt to decompile or reverse engineer any software contained on the website</li>
                            <li>remove any copyright or other proprietary notations from the materials</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 3. User Comments and Content</h2>
                        <div className="bg-blue-50 rounded-lg p-6 mb-6">
                            <p className="text-gray-700 mb-4">
                                When you post comments or submit content to TechBlog, you agree that:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Your content will not contain harmful, offensive, or inappropriate material</li>
                                <li>You own the rights to the content you submit</li>
                                <li>We may moderate, edit, or remove content at our discretion</li>
                                <li>You grant us a license to use, modify, and display your content</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">⚠️ 4. Disclaimer</h2>
                        <p className="text-gray-700 mb-6">
                            The materials on TechBlog are provided on an 'as is' basis. TechBlog makes no warranties, expressed or implied, 
                            and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions 
                            of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🚫 5. Limitations</h2>
                        <p className="text-gray-700 mb-6">
                            In no event shall TechBlog or its suppliers be liable for any damages (including, without limitation, damages for 
                            loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials 
                            on TechBlog, even if TechBlog or a TechBlog authorized representative has been notified orally or in writing of the 
                            possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations 
                            of liability for consequential or incidental damages, these limitations may not apply to you.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 6. Accuracy of Materials</h2>
                        <p className="text-gray-700 mb-6">
                            The materials appearing on TechBlog could include technical, typographical, or photographic errors. TechBlog does 
                            not warrant that any of the materials on its website are accurate, complete, or current. TechBlog may make changes 
                            to the materials contained on its website at any time without notice. However, TechBlog does not make any commitment 
                            to update the materials.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔗 7. Links</h2>
                        <p className="text-gray-700 mb-6">
                            TechBlog has not reviewed all of the sites linked to our website and is not responsible for the contents of any such 
                            linked site. The inclusion of any link does not imply endorsement by TechBlog of the site. Use of any such linked 
                            website is at the user's own risk.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 8. Modifications</h2>
                        <p className="text-gray-700 mb-6">
                            TechBlog may revise these terms of service for its website at any time without notice. By using this website, 
                            you are agreeing to be bound by the then current version of these terms of service.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">⚖️ 9. Governing Law</h2>
                        <p className="text-gray-700 mb-6">
                            These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and 
                            you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">📧 10. Contact Information</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p className="text-gray-700 mb-4">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li><strong>Email:</strong> legal@techblog.com</li>
                                <li><strong>Contact Page:</strong> <a href="/contact" className="text-blue-600 hover:underline">/contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <BlogFooter />
        </div>
    );
}