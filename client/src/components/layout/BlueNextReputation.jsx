import { Link } from 'react-router-dom'
import videoFile from '../../assets/video/imgVideo1.mp4'

const BlueNextReputation = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-50 to-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-fadeIn">
                    Industries We <span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">Excel</span> In
                </h1>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 md:pr-12 animate-fadeInLeft">
                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Crafting Digital Excellence with
                                <span className="block bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">
                                    BlueNext Technologies
                                </span>
                            </h2>
                            <div className="absolute -bottom-4 left-0 w-32 h-1 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full animate-underline"></div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                <strong className="font-semibold text-teal-600">300+ success stories</strong> across diverse sectors through our innovative digital solutions. We deliver:
                            </p>

                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    'Scalable Web Platforms',
                                    'High-performance Mobile Solutions',
                                    'AI-Enhanced Systems',
                                    'Enterprise-grade Infrastructure'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center space-x-3 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                                        <div className="flex-shrink-0 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8">
                            <Link
                                to="/contact"
                                className="inline-block px-8 py-4 bg-gradient-to-r from-teal-700 to-indigo-600 text-white rounded-xl font-bold uppercase tracking-wider text-sm 
                                hover:shadow-2xl hover:shadow-teal-200/40 hover:-translate-y-1
                                transition-all duration-500 relative overflow-hidden group"
                            >
                                <span className="relative z-10">Start Your Project</span>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </Link>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="relative group transform hover:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] animate-fadeInRight">
                        <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-indigo-400 rounded-2xl opacity-15 blur-xl group-hover:opacity-25 transition-opacity duration-500"></div>
                        <video
                            src={videoFile}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px] transform group-hover:shadow-3xl transition-all duration-500"
                        />
                        <div className="absolute inset-0 rounded-2xl border-2 border-white/20 mix-blend-overlay pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes underline {
                    from { width: 0; }
                    to { width: 8rem; }
                }

                .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
                .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out; }
                .animate-fadeInRight { animation: fadeInRight 0.8s ease-out; }
                .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
                .animate-underline { animation: underline 0.8s ease-out forwards; }
            `}</style>
        </section>
    )
}

export default BlueNextReputation