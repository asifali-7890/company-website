import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/bg1.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/80 shadow-lg border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo with hover effect */}
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="flex items-center group"
                        >
                            <img
                                className="h-14 w-auto transition-all duration-500 hover:scale-105 hover:drop-shadow-lg"
                                src={logo}
                                alt="BlueNext Technologies"
                                style={{ filter: 'brightness(0)' }}
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center space-x-8">
                        {[
                            { to: "/", text: "Home" },
                            { to: "/about", text: "About" },
                            { to: "/services", text: "Services" },
                            { to: "/portfolio", text: "Work" },
                            { to: "/pricing", text: "Pricing" },
                            { to: "/contact", text: "Contact" },
                        ].map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={closeMenu}
                                className="relative px-4 py-2.5 text-gray-700 hover:text-blue-800 
                                font-semibold uppercase tracking-wider text-sm
                                transition-all duration-300 group"
                            >
                                {item.text}
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 
                                transition-all duration-500 origin-center transform -translate-x-1/2
                                group-hover:w-4/5"></span>
                            </Link>
                        ))}
                        <Link
                            to="/careers"
                            onClick={closeMenu}
                            className="ml-4 px-8 py-3
                            text-white rounded-full font-bold uppercase tracking-wider text-sm
                            
                            transition-all duration-500 hover:-translate-y-1
                            hover:border-transparent
                            relative overflow-hidden"
                        >
                            <span className="relative z-10">Apply Now</span>
                            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 
                            transition-opacity duration-300"></span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button with animation */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-700 hover:text-blue-800 transition-all duration-500"
                        >
                            {isOpen ? (
                                <MdClear className="w-8 h-8 transform rotate-180 transition-transform duration-500" />
                            ) : (
                                <GiHamburgerMenu className="w-8 h-8 transform hover:rotate-180 transition-transform duration-500" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with slide animation */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 
                animate-slideIn">
                    <div className="px-4 pt-4 pb-8 space-y-3">
                        {[
                            { to: "/", text: "Home" },
                            { to: "/about", text: "About" },
                            { to: "/services", text: "Services" },
                            { to: "/portfolio", text: "Work" },
                            { to: "/pricing", text: "Pricing" },
                            { to: "/contact", text: "Contact" },
                            { to: "/careers", text: "Careers" },
                        ].map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={closeMenu}
                                className="block px-6 py-4 text-gray-700 hover:bg-blue-50 rounded-xl 
                                transition-all duration-500 font-semibold uppercase tracking-wide text-sm
                                hover:pl-8 hover:text-blue-800 border-b border-gray-100/50"
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Add custom animation keyframes */}
            <style>{`
                @keyframes slideIn {
                    0% {
                        transform: translateY(-20px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                .animate-slideIn {
                    animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
            `}</style>
        </nav>
    );
};

export default Navbar;