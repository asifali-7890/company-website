import { FaTshirt, FaCar, FaHospital, FaDog, FaPlane, FaGraduationCap, FaBuilding, FaStore, FaMobileAlt, FaTruck, FaHandsHelping, FaCamera } from 'react-icons/fa';

const industries = [
    { name: 'Fashion & Beauty', icon: <FaTshirt className="w-5 h-5" /> },
    { name: 'Automobile', icon: <FaCar className="w-5 h-5" /> },
    { name: 'Healthcare', icon: <FaHospital className="w-5 h-5" /> },
    { name: 'Pet Care', icon: <FaDog className="w-5 h-5" /> },
    { name: 'Travel', icon: <FaPlane className="w-5 h-5" /> },
    { name: 'Education', icon: <FaGraduationCap className="w-5 h-5" /> },
    { name: 'Real Estate', icon: <FaBuilding className="w-5 h-5" /> },
    { name: 'E-Commerce', icon: <FaStore className="w-5 h-5" /> },
    { name: 'Electronics', icon: <FaMobileAlt className="w-5 h-5" /> },
    { name: 'Logistics', icon: <FaTruck className="w-5 h-5" /> },
    { name: "NGO's", icon: <FaHandsHelping className="w-5 h-5" /> },
    { name: 'Photography', icon: <FaCamera className="w-5 h-5" /> },
];

const IndustriesGrid = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
                    Industry Expertise
                </h2>
                <p className="text-sm text-gray-600 uppercase tracking-wide">
                    Serving 20+ sectors globally
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {industries.map((industry, index) => (
                    <div
                        key={industry.name}
                        className="group relative bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 
                                border border-gray-100 hover:border-blue-100 animate-fadeInUp"
                        style={{ animationDelay: `${index * 30}ms` }}
                    >
                        <div className="flex flex-col items-center text-center space-y-2">
                            <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                                {industry.icon}
                            </div>
                            <h3 className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-blue-600 
                                        uppercase tracking-wide leading-tight">
                                {industry.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustriesGrid;