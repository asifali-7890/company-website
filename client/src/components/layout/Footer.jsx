
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const Footer = () => (
    <footer className="bg-gray-900 text-gray-300">

        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
                    <p className="text-sm leading-relaxed">
                        Founded in mid 2018, BlueNext Technologies has a team of highly skilled and experienced designers and developers who specialize in creating custom, responsive websites that are tailored to the unique needs of each client. Their expertise allows them to create websites that are not only visually stunning but also functional and user-friendly.
                    </p>
                    <div className="mt-4">
                        <span className="text-sm font-semibold text-white">DMCA.com Protection Status</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white transition-colors">About us</Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/reviews" className="hover:text-white transition-colors">Review</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white transition-colors">Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-white transition-colors">Web Development</li>
                        <li className="hover:text-white transition-colors">Digital Marketing</li>
                        <li className="hover:text-white transition-colors">Seo Marketing</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/asifaliquraishy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm">
                    © 2024 Copyright || Proudly Developed and Designed bluenext.com || All rights reserved ||
                    <Link to="/privacy-policy" className="hover:text-white transition-colors mx-1">Privacy Policy</Link> ||
                    <Link to="/terms-of-use" className="hover:text-white transition-colors mx-1">Terms of use</Link>
                </p>
            </div>
        </div>
        <ScrollToTop />
    </footer>
)

export default Footer
