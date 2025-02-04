import { FaTshirt, FaCar, FaHospital, FaDog, FaPlane, FaGraduationCap, FaBuilding, FaStore, FaMobileAlt, FaTruck, FaHandsHelping, FaCamera } from 'react-icons/fa';

const industries = [
    { name: 'Fashion & Beauty', icon: <FaTshirt /> },
    { name: 'Automobile', icon: <FaCar /> },
    { name: 'Doctors & Hospital', icon: <FaHospital /> },
    { name: 'Animals & Pet', icon: <FaDog /> },
    { name: 'Tours & Travel', icon: <FaPlane /> },
    { name: 'Education', icon: <FaGraduationCap /> },
    { name: 'Real Estate', icon: <FaBuilding /> },
    { name: 'E-Commerce Store', icon: <FaStore /> },
    { name: 'Electronics', icon: <FaMobileAlt /> },
    { name: 'Logistics', icon: <FaTruck /> },
    { name: "NGO's", icon: <FaHandsHelping /> },
    { name: 'Photography', icon: <FaCamera /> },
];

const IndustriesGrid = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Our Expertise Across Industries</h2>
            <p className="text-center mb-12">This image represents our expertise over the global market.</p>

            {/* Responsive grid with 2 columns for small devices and 4 for larger screens */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg text-center">
                        <div className="text-2xl text-blue-600">{industry.icon}</div>
                        <h3 className="text-sm sm:text-md button-asif font-semibold">{industry.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustriesGrid;
