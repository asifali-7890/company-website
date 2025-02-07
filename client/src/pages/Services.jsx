import {
    GlobeAltIcon,
    ClockIcon,
    ChartBarIcon,
    ShoppingCartIcon,
    TrophyIcon,
    ChatBubbleLeftRightIcon,
    CurrencyDollarIcon,
    DevicePhoneMobileIcon,
    UserGroupIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import ServicesShowcase from './ServicesShowcase';
import ContactUs from './ContactUs';
import { Link } from 'react-router-dom';

const Services = () => {
    const features = [
        {
            icon: GlobeAltIcon,
            title: "Establish Digital Presence",
            description: "Build credibility with a professional online identity that works 24/7 to represent your brand"
        },
        {
            icon: ClockIcon,
            title: "Round-the-Clock Accessibility",
            description: "Your virtual storefront never closes, serving customers across time zones"
        },
        {
            icon: ChartBarIcon,
            title: "Marketing Powerhouse",
            description: "Central hub for SEO, content strategies, and digital campaigns"
        },
        {
            icon: ShoppingCartIcon,
            title: "Product Showcase",
            description: "Beautifully present your offerings with rich media and testimonials"
        },
        {
            icon: TrophyIcon,
            title: "Level the Playing Field",
            description: "Compete with industry leaders through strategic online positioning"
        },
        {
            icon: ChatBubbleLeftRightIcon,
            title: "Enhanced Engagement",
            description: "Interactive features like live chat and AI-powered assistance"
        },
        {
            icon: CurrencyDollarIcon,
            title: "Cost-Effective Growth",
            description: "Maximize ROI with measurable digital strategies outperforming traditional ads"
        },
        {
            icon: DevicePhoneMobileIcon,
            title: "Mobile-First Experience",
            description: "Responsive designs optimized for 65%+ mobile traffic"
        },
        {
            icon: UserGroupIcon,
            title: "Community Building",
            description: "Foster loyalty through integrated blogs and forums"
        },
        {
            icon: SparklesIcon,
            title: "Future-Proof Strategy",
            description: "Stay ahead with continuous updates and emerging tech integration"
        }
    ];

    return (
        <>
            <section className="relative py-20 bg-gradient-to-br from-indigo-900 to-purple-800 overflow-hidden">
                <div className="container mx-auto px-4">


                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        <div className="text-center mb-20">
                            <span className="text-blue-300 font-semibold uppercase tracking-wide">
                                Digital Necessity
                            </span>
                            <h2 className="mt-4 text-4xl font-bold text-white">
                                Why Your Business Needs a Website
                            </h2>
                            <div className="mt-2 relative max-w-2xl mx-auto">
                                <p className="text-xl text-indigo-100">
                                    In the digital age, your website is your most powerful business asset
                                </p>
                            </div>
                        </div>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/20 hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 border-2 border-white/10 rounded-2xl transition-all duration-300 group-hover:border-white/30" />
                                <div className="flex items-center mb-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                            <feature.icon className="w-7 h-7 text-purple-300" />
                                        </div>
                                    </div>
                                    <h3 className="ml-4 text-xl font-semibold text-white">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-lg text-indigo-100 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                            <Link to='/contact'>
                                <span className="text-lg font-semibold text-white">
                                    Start Your Digital Journey
                                </span>
                            </Link>
                            <svg
                                className="ml-2 w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <ServicesShowcase />
            <ContactUs />
        </>
    );
};

export default Services;