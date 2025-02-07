import { motion } from 'framer-motion';

const WorkProcess = () => {
    const processSteps = [
        {
            title: "Discovery & Planning",
            description: "We initiate with comprehensive discussions to understand your vision, brand identity, and technical needs. Through collaborative workshops, we define project scope, features, and establish realistic timelines.",
        },
        {
            title: "Strategic Blueprinting",
            description: "Within 48 hours, we deliver a detailed project blueprint including architecture, tech stack, timeline, and investment breakdown. This evolving document incorporates your feedback until final sign-off.",
        },
        {
            title: "Secure Engagement",
            description: "Begin with a 25% initial investment to commence development. Subsequent payments align with project milestones, ensuring transparency and shared commitment throughout our journey.",
        },
        {
            title: "Visual Design Phase",
            description: "Our designers craft modern UI/UX concepts using industry-leading tools. We iterate designs until you're completely satisfied with every pixel, color scheme, and brand element.",
        },
        {
            title: "Frontend Engineering",
            description: "We transform approved designs into responsive, interactive interfaces using cutting-edge frameworks. Focus on performance, accessibility, and cross-browser compatibility.",
        },
        {
            title: "Backend Architecture",
            description: "Our engineers build robust server-side systems with scalable cloud infrastructure. Includes custom CMS development and third-party API integrations.",
        },
        {
            title: "Quality Assurance",
            description: "Rigorous testing across devices and scenarios. We conduct security audits, load testing, and user acceptance trials to ensure flawless performance.",
        },
        {
            title: "Launch & Scale",
            description: "Managed deployment with global CDN configuration, SEO optimization, and analytics integration. Post-launch support and scaling strategies included.",
        },
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16"
                >
                    Our Development Process
                </motion.h2>

                <div className="relative">
                    {/* Vertical timeline */}
                    <div className="absolute left-1/2 w-0.5 bg-gray-200 h-full -translate-x-1/2 hidden lg:block" />

                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative mb-10 md:mb-16"
                        >
                            <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 lg:gap-12`}>
                                {/* Content Card */}
                                <div className="w-full lg:w-5/12 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-lg font-semibold">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Arrow */}
                                {index !== processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <svg
                                            className="w-8 h-16 text-gray-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;