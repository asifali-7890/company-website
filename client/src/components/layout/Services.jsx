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
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Services We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:-translate-y-1 ease-in-out duration-300">
                        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <a
                            href="#"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            {service.planLink}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
