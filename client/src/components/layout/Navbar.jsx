import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/bg1.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <nav className="bg-transparent shadow-md hover:bg-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-auto items-center">
                    <div className="flex-shrink-0">
                        <Link to="/" onClick={closeMenu}>
                            <img
                                className="h-15 object-cover"
                                src={logo}
                                alt="BlueNext Technologies"
                                style={{
                                    filter: 'brightness(0.0)' // Increases brightness slightly
                                }}
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center">
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="px-3 py-2 rounded-md text-sm font-medium text-white  "
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white  "
                        >
                            About Us
                        </Link>
                        <Link
                            to="/services"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white  "
                        >
                            Services
                        </Link>
                        <Link
                            to="/portfolio"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white  "
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/pricing"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white  "
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/reviews"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white  "
                        >
                            Review
                        </Link>
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white  "
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <MdClear size={30} />
                            ) : (
                                <GiHamburgerMenu size={30} />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white  "
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white  "
                        >
                            About Us
                        </Link>
                        <Link
                            to="/services"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white  "
                        >
                            Services
                        </Link>
                        <Link
                            to="/portfolio"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white  "
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/pricing"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white  "
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/reviews"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white  "
                        >
                            Review
                        </Link>
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white  "
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
