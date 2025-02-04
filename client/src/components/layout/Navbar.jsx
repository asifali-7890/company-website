import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/bg1.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <nav className="bg-slate-100 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-auto items-center">
                    <div className="flex-shrink-0">
                        <Link to="/" onClick={closeMenu}>
                            <img
                                className="h-15 object-cover"
                                src={logo}
                                alt="BlueNext Technologies"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center">
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/services"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                        >
                            Services
                        </Link>
                        <Link
                            to="/portfolio"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/pricing"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/reviews"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                        >
                            Review
                        </Link>
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
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
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/services"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                        >
                            Services
                        </Link>
                        <Link
                            to="/portfolio"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/pricing"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/reviews"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                        >
                            Review
                        </Link>
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
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
