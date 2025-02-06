import { useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Careers = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Join Our Team
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        We're always looking for passionate individuals to help us build
                        the future of digital experiences.
                    </p>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full 
          font-semibold text-lg hover:shadow-lg transition-all duration-300 inline-flex items-center"
                >
                    <BriefcaseIcon className="w-6 h-6 mr-2" />
                    Apply for Open Positions
                </motion.button>

                {/* Application Modal */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl p-8 max-w-2xl w-full relative shadow-xl">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            >
                                <XMarkIcon className="w-8 h-8" />
                            </button>

                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Apply Now
                            </h3>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2
                    focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2
                    focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Resume</label>
                                    <input
                                        type="file"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2
                    focus:ring-blue-500 focus:border-transparent"
                                        accept=".pdf,.doc,.docx"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2
                    focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Why do you want to join our team?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                  hover:bg-blue-700 transition-colors"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Careers;