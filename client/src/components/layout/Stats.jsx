

const Stats = () => {
    const stats = [
        { number: 76, label: 'Developed Custom CRM' },
        { number: 154, label: 'Satisfied Clients' },
        { number: 10, label: 'Ongoing Projects' },
        { number: 8, label: 'Years of Experience' }
    ];

    return (
        <div className="container mx-auto p-6 text-center">
            <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="button-64 flex items-center gap-2 self-center align-center"
                    >
                        <h3 className="text-4xl font-bold">{stat.number}</h3>
                        <p className="text-lg">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
