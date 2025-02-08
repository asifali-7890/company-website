
const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-2 border-gray-200 pb-4">
                        Privacy Policy
                    </h1>

                    <div className="space-y-8">
                        {/* Last Updated Section */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Last Updated: May 21, 2024</h2>
                            <p className="text-gray-600 leading-relaxed">
                                This Privacy Policy describes how BlueNext Technologies ("we", "us", "our") collects,
                                uses, and shares information in connection with your use of our services.
                            </p>
                        </section>

                        {/* Information We Collect Section */}
                        <section className="border-b border-gray-200 pb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Information You Provide</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Account details: Name, email, company information</li>
                                        <li>Payment information processed through Stripe</li>
                                        <li>Communications and content you submit</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Automated Collection</h3>
                                    <p className="text-gray-600">
                                        We collect technical data including IP addresses, device information, and usage
                                        patterns through cookies and similar technologies.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Information Section */}
                        <section className="border-b border-gray-200 pb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Information</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Provide and maintain our services</li>
                                <li>Improve and personalize user experience</li>
                                <li>Process transactions and prevent fraud</li>
                                <li>Communicate with users</li>
                            </ul>
                        </section>

                        {/* Data Sharing Section */}
                        <section className="border-b border-gray-200 pb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    We may share information with:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Service providers (e.g., payment processors)</li>
                                    <li>Legal authorities when required</li>
                                    <li>Business transferees in mergers/acquisitions</li>
                                </ul>
                                <p className="text-gray-600 mt-4">
                                    We use Google Analytics and may work with advertising partners. Review their policies:
                                    <br />
                                    <a
                                        href="https://stripe.com/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Stripe Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </section>

                        {/* Your Rights Section */}
                        <section className="border-b border-gray-200 pb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    Under GDPR, you have the right to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access and update your information</li>
                                    <li>Request data deletion</li>
                                    <li>Object to processing</li>
                                    <li>Withdraw consent</li>
                                </ul>
                                <p className="text-gray-600 mt-4">
                                    To exercise these rights, contact us at:
                                    <a
                                        href="mailto:privacy@bluenexttech.com"
                                        className="text-blue-600 hover:underline ml-2"
                                    >
                                        privacy@bluenexttech.com
                                    </a>
                                </p>
                            </div>
                        </section>

                        {/* Policy Updates Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>
                            <p className="text-gray-600">
                                We may update this policy periodically. Significant changes will be communicated through
                                our services or via email.
                            </p>
                            <p className="text-gray-600 mt-4">
                                For questions about this policy, contact our Data Protection Officer at:
                                <a
                                    href="mailto:dpo@bluenexttech.com"
                                    className="text-blue-600 hover:underline ml-2"
                                >
                                    dpo@bluenexttech.com
                                </a>
                            </p>
                        </section>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            BlueNext Technologies is committed to protecting your privacy and securing your data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;