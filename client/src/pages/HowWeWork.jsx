
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
        <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white mt-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
                    Our Development Process
                </h2>

                <div className="relative">
                    {/* Vertical connector line */}
                    <div className="absolute left-1/2 w-1 bg-blue-200 h-full -translate-x-1/2"></div>

                    {processSteps.map((step, index) => (
                        <div key={index} className="relative mb-12">
                            {/* Step container */}
                            <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 mb-8`}>
                                {/* Content card */}
                                <div className="w-full lg:w-1/2 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-2xl font-semibold text-gray-800">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector arrow */}
                                {index !== processSteps.length - 1 && (
                                    <div className={`hidden lg:block absolute ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} -bottom-24`}>
                                        <svg
                                            className="w-12 h-24 text-blue-200"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;