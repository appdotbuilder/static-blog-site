import React from 'react';
import { BlogHeader } from '@/components/blog-header';
import { BlogFooter } from '@/components/blog-footer';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-gray-50">
            <BlogHeader />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-6xl mb-6">🔒</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🌟 1. Information We Collect</h2>
                        <p className="text-gray-700 mb-4">We collect information you provide directly to us, such as when you:</p>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                            <li>Subscribe to our newsletter</li>
                            <li>Create an account on our website</li>
                            <li>Submit comments or contact forms</li>
                            <li>Participate in surveys or promotions</li>
                        </ul>

                        <div className="bg-blue-50 rounded-lg p-6 mb-6">
                            <h3 className="font-bold text-gray-900 mb-2">📊 Types of Information:</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li><strong>Personal Information:</strong> Name, email address, phone number</li>
                                <li><strong>Usage Information:</strong> Pages visited, time spent, clicks, referral sources</li>
                                <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
                                <li><strong>Cookies:</strong> Preferences, session data, analytics information</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 2. How We Use Your Information</h2>
                        <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-green-50 rounded-lg p-4">
                                <h4 className="font-bold text-gray-900 mb-2">📧 Communication</h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>Send newsletters and updates</li>
                                    <li>Respond to your inquiries</li>
                                    <li>Send important notifications</li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-4">
                                <h4 className="font-bold text-gray-900 mb-2">🔧 Service Improvement</h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>Analyze website usage</li>
                                    <li>Improve user experience</li>
                                    <li>Develop new features</li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-4">
                                <h4 className="font-bold text-gray-900 mb-2">🛡️ Security</h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>Prevent fraud and abuse</li>
                                    <li>Maintain system security</li>
                                    <li>Comply with legal requirements</li>
                                </ul>
                            </div>
                            <div className="bg-pink-50 rounded-lg p-4">
                                <h4 className="font-bold text-gray-900 mb-2">📈 Analytics</h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>Understand user behavior</li>
                                    <li>Measure content effectiveness</li>
                                    <li>Optimize performance</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🤝 3. Information Sharing</h2>
                        <p className="text-gray-700 mb-4">
                            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                            <li><strong>Service Providers:</strong> Trusted partners who help operate our website (hosting, analytics, email services)</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                            <li><strong>Consent:</strong> When you explicitly agree to share information</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🍪 4. Cookies and Tracking</h2>
                        <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                            <p className="text-gray-700 mb-4">
                                We use cookies and similar technologies to enhance your browsing experience. These include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                                <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
                            </ul>
                            <p className="text-gray-700 mt-4 text-sm">
                                You can control cookie settings through your browser preferences.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">⚙️ 5. Your Rights and Choices</h2>
                        <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h4 className="font-bold text-gray-900 mb-2">📋 Access & Portability</h4>
                                <p className="text-gray-700 text-sm">Request a copy of your personal information</p>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h4 className="font-bold text-gray-900 mb-2">✏️ Correction</h4>
                                <p className="text-gray-700 text-sm">Update or correct inaccurate information</p>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h4 className="font-bold text-gray-900 mb-2">🗑️ Deletion</h4>
                                <p className="text-gray-700 text-sm">Request deletion of your personal information</p>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h4 className="font-bold text-gray-900 mb-2">🚫 Opt-out</h4>
                                <p className="text-gray-700 text-sm">Unsubscribe from marketing communications</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔐 6. Data Security</h2>
                        <p className="text-gray-700 mb-4">
                            We implement appropriate security measures to protect your information against unauthorized access, 
                            alteration, disclosure, or destruction:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                            <li>SSL encryption for data transmission</li>
                            <li>Regular security audits and updates</li>
                            <li>Limited access to personal information</li>
                            <li>Secure data storage and backup systems</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">👶 7. Children's Privacy</h2>
                        <p className="text-gray-700 mb-6">
                            Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
                            information from children under 13. If you are a parent and believe your child has provided us with 
                            personal information, please contact us to have it removed.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🌍 8. International Users</h2>
                        <p className="text-gray-700 mb-6">
                            If you are accessing our website from outside the United States, please be aware that your information 
                            may be transferred to, stored, and processed in the United States where our servers are located and our 
                            central database is operated.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 9. Changes to Privacy Policy</h2>
                        <p className="text-gray-700 mb-6">
                            We may update this privacy policy from time to time. We will notify you of any changes by posting the 
                            new privacy policy on this page and updating the "Last updated" date. We encourage you to review this 
                            policy periodically.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">📞 10. Contact Us</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p className="text-gray-700 mb-4">
                                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li><strong>📧 Email:</strong> privacy@techblog.com</li>
                                <li><strong>📱 Contact Form:</strong> <a href="/contact" className="text-blue-600 hover:underline">/contact</a></li>
                                <li><strong>📮 Mail:</strong> TechBlog Privacy Team, [Your Address]</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <BlogFooter />
        </div>
    );
}