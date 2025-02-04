import { CheckCircle, Globe, CreditCard, Server, MapPin, ShoppingCart, Calendar } from 'lucide-react';

const pricingPlans = [
    {
        name: 'Hatching Plan',
        price: '$499 Only',
        description: 'This image relates to our hatching website plan to choose.',
        features: [
            'Free Domain 1 Year',
            'Free Hosting 1 Year',
            '5 Dynamic Pages',
            '8 Professional Accounts',
            'HTML Site Map',
            'XML Site Map',
            'Meta tag Analysis',
            'Google Analytics',
            'E-commerce Store',
            'Paypal Payment Gateway',
            'Google map location',
            'Content Management System',
            '24/7 lifetime Support',
        ],
        icon: <Globe size={32} />
    },
    {
        name: 'Most Trending Plan',
        price: '$699 Only',
        description: 'This image relates to our most trending website pricing plan to choose.',
        features: [
            'Free Domain 1 Year',
            'Free Hosting 1 Year',
            '8 Dynamic Pages',
            '12 Professional Accounts',
            'HTML Site Map',
            'XML Site Map',
            'Meta tag Analysis',
            'Google Analytics',
            'E-commerce Store',
            'Paypal Payment Gateway',
            'Google map location',
            'Content Management System',
            '24/7 lifetime Support',
        ],
        icon: <Server size={32} />
    },
    {
        name: 'Premium Plan',
        price: '$999 Only',
        description: 'This image relates to our premium website segment pricing plan to choose.',
        features: [
            'Free Domain 1 Year',
            'Free Hosting 1 Year',
            '15 Dynamic Pages',
            '16 Professional Accounts',
            'HTML Site Map',
            'XML Site Map',
            'Meta tag Analysis',
            'Google Analytics',
            'E-commerce Store',
            'Paypal Payment Gateway',
            'Google map location',
            'Content Management System',
            '24/7 lifetime Support',
        ],
        icon: <ShoppingCart size={32} />
    },
];

const seoPlans = [
    {
        name: 'Hatching SEO Plan',
        price: '$149 / mo',
        description: 'This image relates to our hatching SEO pricing plan to choose.',
        features: [
            '5 Targeted Keywords',
            '5 Pages',
            '20 Man Hours',
            '600 Submissions',
            '60 Backlinks',
            'SMO Optimization',
            'Video Optimization',
            'E-Commerce SEO',
            '2 Articles (500 words)',
            'Weekly Reporting',
            '24/7 lifetime Support',
        ],
        icon: <Calendar size={32} />
    },
    {
        name: 'Most Popular SEO Plan',
        price: '$299 / mo',
        description: 'This image relates to our most popular SEO pricing plan to choose.',
        features: [
            '10 Targeted Keywords',
            '20 Pages',
            '45 Man Hours',
            '1000 Submissions',
            '150 Backlinks',
            'SMO Optimization',
            'Video Optimization',
            'E-Commerce SEO',
            '4 Articles (500 words)',
            'Weekly Reporting',
            '24/7 lifetime Support',
        ],
        icon: <MapPin size={32} />
    },
    {
        name: 'Premium SEO Plan',
        price: '$399 / mo',
        description: 'This image relates to our premium SEO pricing plan to choose.',
        features: [
            '20 Targeted Keywords',
            'Unlimited Pages',
            '90 Man Hours',
            '2000 Submissions',
            '300 Backlinks',
            'SMO Optimization',
            'Video Optimization',
            'E-Commerce SEO',
            '8 Articles (500 words)',
            'Weekly Reporting',
            '24/7 lifetime Support',
        ],
        icon: <CreditCard size={32} />
    },
];

// eslint-disable-next-line react/prop-types
const PricingCard = ({ name, price, description, features, icon }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center transition transform hover:scale-105">
            <div className="mb-4 text-blue-500">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-lg text-gray-500 mb-4">{price}</p>
            <p className="text-sm text-gray-400 mb-6">{description}</p>
            <ul className="text-sm text-left list-none space-y-2 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={16} /> {feature}
                    </li>
                ))}
            </ul>
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Book Now</button>
        </div>
    );
};

const PricingSection = () => {
    return (
        <div className="my-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Our Website Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>

            <h2 className="text-3xl font-bold text-center mt-16 mb-8">Our SEO Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {seoPlans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </div>
    );
};

export default PricingSection;
