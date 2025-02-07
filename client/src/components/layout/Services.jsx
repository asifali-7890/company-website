import { motion } from 'framer-motion';
import React from 'react';
import { FaLaptopCode, FaSearch, FaMobileAlt, FaChartLine, FaPaintBrush, FaCogs } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaLaptopCode />,
            title: 'Website Development',
            description: 'Enhance accessibility and brand visibility with professional web solutions that keep you competitive.',
            planLink: 'View Website Plans'
        },
        {
            icon: <FaSearch />,
            title: 'SEO Marketing',
            description: 'Boost organic search performance and drive meaningful engagement through strategic optimization.',
            planLink: 'Explore SEO Strategies'
        },
        {
            icon: <FaMobileAlt />,
            title: 'Mobile App Development',
            description: 'Strengthen customer loyalty with personalized mobile experiences and direct communication channels.',
            planLink: 'Mobile Solutions'
        },
        {
            icon: <FaChartLine />,
            title: 'Digital Marketing',
            description: 'Cost-effective campaigns delivering measurable results across the marketing funnel.',
            planLink: 'Marketing Plans'
        },
        {
            icon: <FaPaintBrush />,
            title: 'Graphic Design',
            description: 'Clear visual communication that strengthens brand identity and messaging consistency.',
            planLink: 'Design Services'
        },
        {
            icon: <FaCogs />,
            title: 'Custom CRM',
            description: 'Tailored business management solutions for streamlined operations and growth.',
            planLink: 'CRM Solutions'
        }
    ];

    return (
        <section className="relative py-16 bg-gradient-to-br from-blue-900 to-purple-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Background elements */}
                <div className="absolute -top-20 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-xl" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-xl" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-3">
                        Our Core Services
                    </h2>
                    <p className="text-lg text-blue-200 max-w-xl mx-auto">
                        Strategic solutions for digital transformation and growth
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-200"
                        >
                            <div className="absolute inset-0 border border-white/5 rounded-xl group-hover:border-blue-400/20 transition-colors" />

                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 p-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg">
                                    {React.cloneElement(service.icon, {
                                        className: 'w-8 h-8 text-white'
                                    })}
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors"
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