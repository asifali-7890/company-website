
import {
    ClockIcon,
    RocketLaunchIcon,
    ChartBarSquareIcon,
    ChatBubbleLeftRightIcon,
    UserGroupIcon,
    ArrowsPointingOutIcon,
    CheckIcon
} from '@heroicons/react/24/outline';
import development from '../assets/images/development.png'

const ServicesShowcase = () => {
    const services = [
        {
            icon: ClockIcon,
            title: "Time-Optimized Development",
            description: "Leverage cutting-edge technologies and agile methodologies to ensure timely project delivery without compromising quality"
        },
        {
            icon: RocketLaunchIcon,
            title: "Peak Performance",
            description: "Engineer blazing-fast websites with optimized code architecture and advanced caching strategies"
        },
        {
            icon: ChartBarSquareIcon,
            title: "Data-Driven Insights",
            description: "Advanced analytics integration with real-time performance tracking and conversion optimization"
        },
        {
            icon: ChatBubbleLeftRightIcon,
            title: "Transparent Collaboration",
            description: "Dedicated communication channels with daily progress updates and milestone tracking"
        },
        {
            icon: UserGroupIcon,
            title: "User-Centric Design",
            description: "Human-centered design philosophy creating intuitive experiences that drive engagement"
        },
        {
            icon: ArrowsPointingOutIcon,
            title: "Scalable Solutions",
            description: "Future-proof architectures designed for business growth and evolving needs"
        }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
                        Digital Excellence
                    </span>
                    <h2 className="mt-6 text-4xl font-bold text-white">
                        Why Choose BlueNext Technologies?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-white/5 backdrop-blur-lg rounded-xl p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 group"
                        >
                            <div className="absolute inset-0 border-2 border-white/10 rounded-xl group-hover:border-blue-400/30 transition-all" />
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 p-4 bg-blue-500/20 rounded-full">
                                    <service.icon className="w-12 h-12 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Visual Divider */}
                <div className="mt-20 relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-gray-900 px-4 text-xl text-blue-400 font-semibold">
                            Our Development Edge
                        </span>
                    </div>
                </div>

                {/* Feature Section */}
                <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="p-6 bg-white/5 rounded-xl">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Full-Cycle Development Process
                            </h3>
                            <p className="text-gray-300">
                                From initial concept to post-launch optimization, our comprehensive approach ensures every digital solution is:
                            </p>
                            <ul className="mt-4 space-y-3">
                                <li className="flex items-center text-blue-400">
                                    <CheckIcon className="w-5 h-5 mr-2" />
                                    <span>Strategically aligned with business goals</span>
                                </li>
                                <li className="flex items-center text-blue-400">
                                    <CheckIcon className="w-5 h-5 mr-2" />
                                    <span>Technologically superior</span>
                                </li>
                                <li className="flex items-center text-blue-400">
                                    <CheckIcon className="w-5 h-5 mr-2" />
                                    <span>User experience optimized</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform">
                        <img
                            src={development}
                            alt="Development Process"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;