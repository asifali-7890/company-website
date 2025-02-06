import { motion } from 'framer-motion';
import React from 'react';
import { CheckCircle, Globe, CreditCard, Server, MapPin, ShoppingCart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    // Keep your existing pricingPlans and seoPlans arrays

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
            transition={{ duration: 0.5 }}
            className="group relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
            <div className="absolute inset-0 border-2 border-white/10 rounded-2xl group-hover:border-blue-300/30 transition-colors" />

            <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full">
                    {React.cloneElement(icon, { size: 40, className: 'text-white' })}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-3xl font-extrabold text-blue-600 mb-4">{price}</p>
                <p className="text-gray-500 mb-6 text-sm">{description}</p>

                <ul className="w-full space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ x: 5 }}
                            className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                            <span className="text-gray-700">{feature}</span>
                        </motion.li>
                    ))}
                </ul>


                <Link to="/contact" className='w-full'>
                    <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:-translate-y-1">
                        Get Started
                    </button>
                </Link>

            </div>
        </motion.div>
    );

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Transparent Pricing Plans
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect plan for your business needs with our flexible pricing options
                    </p>
                </div>

                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Website Development</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <PricingCard key={index} {...plan} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">SEO Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {seoPlans.map((plan, index) => (
                            <PricingCard key={index} {...plan} />
                        ))}
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
                    <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;