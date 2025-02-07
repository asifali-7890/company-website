
import { motion } from 'framer-motion';
import React from 'react';
import { CheckCircle, Globe, CreditCard, Server, MapPin, ShoppingCart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    // Pricing plans data remains the same

    const pricingPlans = [
        {
            name: 'Hatching Plan',
            price: '$499 Only',
            description: 'This image relates to our hatching website plan to choose.',
            features: [
                'Free Domain 1 Year',
                'Free Hosting 1 Year',
                '5 Dynamic Pages',
                '8 Professional Accounts',
                'HTML Site Map',
                'XML Site Map',
                'Meta tag Analysis',
                'Google Analytics',
                'E-commerce Store',
                'Paypal Payment Gateway',
                'Google map location',
                'Content Management System',
                '24/7 lifetime Support',
            ],
            icon: <Globe size={32} />
        },
        {
            name: 'Most Trending Plan',
            price: '$699 Only',
            description: 'This image relates to our most trending website pricing plan to choose.',
            features: [
                'Free Domain 1 Year',
                'Free Hosting 1 Year',
                '8 Dynamic Pages',
                '12 Professional Accounts',
                'HTML Site Map',
                'XML Site Map',
                'Meta tag Analysis',
                'Google Analytics',
                'E-commerce Store',
                'Paypal Payment Gateway',
                'Google map location',
                'Content Management System',
                '24/7 lifetime Support',
            ],
            icon: <Server size={32} />
        },
        {
            name: 'Premium Plan',
            price: '$999 Only',
            description: 'This image relates to our premium website segment pricing plan to choose.',
            features: [
                'Free Domain 1 Year',
                'Free Hosting 1 Year',
                '15 Dynamic Pages',
                '16 Professional Accounts',
                'HTML Site Map',
                'XML Site Map',
                'Meta tag Analysis',
                'Google Analytics',
                'E-commerce Store',
                'Paypal Payment Gateway',
                'Google map location',
                'Content Management System',
                '24/7 lifetime Support',
            ],
            icon: <ShoppingCart size={32} />
        },
    ];

    const seoPlans = [
        {
            name: 'Hatching SEO Plan',
            price: '$149 / mo',
            description: 'This image relates to our hatching SEO pricing plan to choose.',
            features: [
                '5 Targeted Keywords',
                '5 Pages',
                '20 Man Hours',
                '600 Submissions',
                '60 Backlinks',
                'SMO Optimization',
                'Video Optimization',
                'E-Commerce SEO',
                '2 Articles (500 words)',
                'Weekly Reporting',
                '24/7 lifetime Support',
            ],
            icon: <Calendar size={32} />
        },
        {
            name: 'Most Popular SEO Plan',
            price: '$299 / mo',
            description: 'This image relates to our most popular SEO pricing plan to choose.',
            features: [
                '10 Targeted Keywords',
                '20 Pages',
                '45 Man Hours',
                '1000 Submissions',
                '150 Backlinks',
                'SMO Optimization',
                'Video Optimization',
                'E-Commerce SEO',
                '4 Articles (500 words)',
                'Weekly Reporting',
                '24/7 lifetime Support',
            ],
            icon: <MapPin size={32} />
        },
        {
            name: 'Premium SEO Plan',
            price: '$399 / mo',
            description: 'This image relates to our premium SEO pricing plan to choose.',
            features: [
                '20 Targeted Keywords',
                'Unlimited Pages',
                '90 Man Hours',
                '2000 Submissions',
                '300 Backlinks',
                'SMO Optimization',
                'Video Optimization',
                'E-Commerce SEO',
                '8 Articles (500 words)',
                'Weekly Reporting',
                '24/7 lifetime Support',
            ],
            icon: <CreditCard size={32} />
        },
    ];

    const PricingCard = ({ name, price, description, features, icon }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
        >
            <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-lg text-blue-600">
                    {React.cloneElement(icon, { size: 28, className: 'text-current' })}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
                <p className="text-2xl font-bold text-gray-800 mb-3">{price}</p>
                <p className="text-gray-600 text-sm mb-4">{description}</p>

                <ul className="w-full space-y-2.5 mb-6">
                    {features.map((feature, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ x: 5 }}
                            className="flex items-start p-2.5 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-left">{feature}</span>
                        </motion.li>
                    ))}
                </ul>

                <Link to="/contact" className="w-full">
                    <button className="w-full py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Get Started
                    </button>
                </Link>
            </div>
        </motion.div>
    );

    return (
        <section className="relative py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-3xl font-bold text-gray-900 mb-3"
                    >
                        Transparent Pricing
                    </motion.h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Flexible plans tailored to your business requirements
                    </p>
                </div>

                <div className="mb-14">
                    <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">Website Development</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {pricingPlans.map((plan, index) => (
                            <PricingCard key={index} {...plan} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">SEO Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {seoPlans.map((plan, index) => (
                            <PricingCard key={index} {...plan} />
                        ))}
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;