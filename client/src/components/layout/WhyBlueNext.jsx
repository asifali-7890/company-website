import videoFile from '../../assets/video/imgVideo.mp4';

const WhyBlueNext = () => {
    return (
        <section className="relative py-16 bg-gradient-to-br from-slate-50 to-zinc-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Video Section */}
                    <div className="relative group transform hover:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-indigo-400 rounded-2xl opacity-15 blur-xl group-hover:opacity-25 transition-opacity duration-500"></div>
                        <video
                            src={videoFile}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="relative rounded-2xl shadow-xl object-cover w-full h-[400px] transform group-hover:shadow-lg transition-all duration-500"
                        />
                        <div className="absolute inset-0 rounded-2xl border border-white/20 mix-blend-overlay pointer-events-none"></div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 md:pl-10">
                        <div className="relative inline-block">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                Why Choose{' '}
                                <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                                    BlueNext?
                                </span>
                            </h2>
                            <div className="absolute -bottom-1 left-0 w-20 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full animate-scaleX"></div>
                        </div>

                        <div className="space-y-5">
                            {[
                                {
                                    iconColor: 'bg-emerald-500',
                                    title: 'Design Excellence',
                                    content: 'Creativity meets cutting-edge technology for exceptional digital experiences',
                                    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
                                },
                                {
                                    iconColor: 'bg-indigo-500',
                                    title: 'Proven Expertise',
                                    content: '4+ years crafting seamless web/mobile solutions for global engagement',
                                    icon: 'M5 13l4 4L19 7'
                                },
                                {
                                    iconColor: 'bg-emerald-500',
                                    title: 'Client-Centric Approach',
                                    content: 'Collaborative partnerships transforming ideas into digital solutions',
                                    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className={`w-7 h-7 rounded-full ${item.iconColor} flex items-center justify-center`}>
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm mt-1">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx global>{`
                @keyframes scaleX {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
                .animate-scaleX {
                    animation: scaleX 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
            `}</style>
        </section>
    )
}

export default WhyBlueNext