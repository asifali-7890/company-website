import { motion } from 'framer-motion';
import React from 'react';
import { FaLaptopCode, FaSearch, FaMobileAlt, FaChartLine, FaPaintBrush, FaCogs } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaLaptopCode className="text-4xl mb-4 text-blue-500" />,
            title: 'Website Development',
            description: 'Businesses with a Website are easily accessible, build relationships, and make your brand more visible. Most importantly, all of your competitors are already having a website.',
            planLink: 'Check out all of our Website Development Plans'
        },
        {
            icon: <FaSearch className="text-4xl mb-4 text-green-500" />,
            title: 'SEO Marketing',
            description: 'Organic search is a massive part of most businesses’ website performance. It’s a critical component of the buyer funnel, ultimately getting users to complete conversions or engagement.',
            planLink: 'Check out all of our SEO Benefit Plans'
        },
        {
            icon: <FaMobileAlt className="text-4xl mb-4 text-red-500" />,
            title: 'Mobile App Development',
            description: 'A mobile app for your business boosts customer loyalty, as it allows direct communication with your customers, providing a personalized experience.',
            planLink: 'Check out all of our Android Application Plans'
        },
        {
            icon: <FaChartLine className="text-4xl mb-4 text-orange-500" />,
            title: 'Digital Marketing',
            description: 'Digital marketing is considerably less expensive than other marketing methods. It’s more cost-effective while achieving great results in the marketing funnel.',
            planLink: 'Check out all of our Digital Marketing Plans'
        },
        {
            icon: <FaPaintBrush className="text-4xl mb-4 text-purple-500" />,
            title: 'Graphic Designing',
            description: 'Graphic design is vital for businesses to communicate with ease. It makes your messaging clearer and helps in building your brand identity.',
            planLink: 'Check out all of our Graphic Designing Plans'
        },
        {
            icon: <FaCogs className="text-4xl mb-4 text-teal-500" />,
            title: 'Custom CRM Software',
            description: 'Streamline your business operations effortlessly with our tailored CRM software, empowering you to efficiently manage and grow your business.',
            planLink: 'Coming Soon! In-House SaaS Plans'
        }
    ];

    return (
        <section style={{ marginBottom: "10px" }} className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
            <div className="container mx-auto px-4" >
                {/* Decorative background elements */}
                <div className="absolute -top-20 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Our Premium Services
                    </h2>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Transform your digital presence with our comprehensive suite of professional services
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                        >
                            {/* Hover border animation */}
                            <div className="absolute inset-0 border-2 border-white/10 rounded-2xl group-hover:border-blue-400/30 transition-colors" />

                            <div className="flex flex-col items-center text-center">
                                {/* Icon container with gradient */}
                                <div className="mb-6 p-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl">
                                    {React.cloneElement(service.icon, {
                                        className: 'text-4xl text-white'
                                    })}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-blue-200 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <a
                                    href="#"
                                    className="hidden items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                                >
                                    {service.planLink}
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;