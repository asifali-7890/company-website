const Stats = () => {
    const stats = [
        { number: 76, label: 'Developed Custom CRM' },
        { number: 154, label: 'Satisfied Clients' },
        { number: 10, label: 'Ongoing Projects' },
        { number: 8, label: 'Years of Experience' }
    ];

    return (
        <div className="relative py-20 bg-gradient-to-br from-slate-50 to-zinc-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
                        Driving Digital Excellence
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp delay-100">
                        Quantifying our impact through measurable success metrics
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-fadeInUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative flex flex-col items-center">
                                <div className="absolute -top-4 right-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl" />
                                <h3 className="text-3xl font-bold text-emerald-600 mb-2">
                                    {stat.number}+
                                </h3>
                                <div className="w-16 h-1 bg-emerald-500/30 mb-4 rounded-full" />
                                <p className="text-gray-700 font-medium uppercase tracking-wide text-sm text-center">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx global>{`
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
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                .delay-100 {
                    animation-delay: 100ms;
                }
            `}</style>
        </div>
    );
};

export default Stats;