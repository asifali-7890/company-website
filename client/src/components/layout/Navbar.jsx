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
        <nav className="fixed w-full z-50  backdrop-blur-md shadow-sm mb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" onClick={closeMenu} className="flex items-center">
                            <img
                                className="h-12 w-auto transition-transform hover:scale-105"
                                src={logo}
                                alt="BlueNext Technologies"
                                style={{ filter: 'brightness(0)' }}
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center space-x-6">
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
                                className="relative px-3 py-2 text-gray-700 hover:text-blue-700 font-medium 
                                transition-colors duration-300 group"
                            >
                                {item.text}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 
                                transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link
                            to="/careers"
                            onClick={closeMenu}
                            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-700 to-purple-600 
                            text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-200/40
                            transition-all duration-300 flex items-center border-2 border-white/20
                            hover:border-transparent button-85"
                        >
                            Apply Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-700 hover:text-blue-700 transition-colors"
                        >
                            {isOpen ? (
                                <MdClear className="w-8 h-8" />
                            ) : (
                                <GiHamburgerMenu className="w-8 h-8" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-2">
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
                                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg 
                                transition-colors font-medium"
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;