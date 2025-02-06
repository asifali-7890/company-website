import { useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Careers = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
    });



    const [validationErrors, setValidationErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: '',
    });
    const [agreed, setAgreed] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoading === true) {
            const timer = setTimeout(() => setIsLoading(null), 5000);

            return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts or status changes
        }
    }, [isLoading]);

    const validateField = (name, value) => {
        switch (name) {
            case 'fullName':
                return value.trim() ? '' : 'Full name is required';
            case 'email':
                {
                    if (!value) return 'Email is required';
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(value) ? '' : 'Invalid email format';
                }
            case 'phone':
                {
                    if (!value) return 'Phone number is required';
                    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Adjust regex as needed
                    return phoneRegex.test(value) ? '' : 'Invalid phone number format';
                }
            case 'resume':
                return value ? '' : 'Resume/CV is required';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));

        const error = validateField(name, type === 'file' ? files[0] : value);
        setValidationErrors(prev => ({ ...prev, [name]: error }));
    };

    const isFormValid = () => {
        return Object.values(validationErrors).every(err => err === '') &&
            Object.values(formData).every(field => field !== '' && field !== null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid()) return;

        setIsLoading(true);
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        formDataToSend.append('subscribe', subscribe);

        try {
            const response = await fetch('/api/career', {
                method: 'POST',
                body: formDataToSend,
            });

            if (!response.ok) throw new Error('Submission failed');

            // Reset form on success
            console.log('Submission successful', (await response.json()).data);
            setFormData({ fullName: '', email: '', phone: '', resume: null, coverLetter: '' });
            setValidationErrors({ fullName: '', email: '', phone: '', resume: '' });
            setAgreed(false);
            setSubscribe(false);
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Join BlueNext Technologies
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Help us shape the future of digital innovation. Explore opportunities to grow your career with our dynamic team.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-2xl shadow-xl p-8 sm:p-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Form</h2>

                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${validationErrors.fullName ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    required
                                />
                                {validationErrors.fullName && <p className="text-red-500 text-sm">{validationErrors.fullName}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${validationErrors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    required
                                />
                                {validationErrors.email && <p className="text-red-500 text-sm">{validationErrors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${validationErrors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    required
                                />
                                {validationErrors.phone && <p className="text-red-500 text -sm">{validationErrors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Resume/CV
                                </label>
                                <input
                                    type="file"
                                    name="resume"
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${validationErrors.resume ? 'border-red-500' : 'border-gray-200'} file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100`}
                                    accept=".pdf,.doc,.docx"
                                    required
                                />
                                {validationErrors.resume && <p className="text-red-500 text-sm">{validationErrors.resume}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Cover Letter
                            </label>
                            <textarea
                                rows="5"
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Tell us why you'd be a great fit..."
                            ></textarea>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="privacy-policy"
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="privacy-policy" className="text-gray-700">
                                        I have read and agree to the{' '}
                                        <Link to="/privacypolicy" className="text-blue-600 hover:underline">
                                            Privacy Policy
                                        </Link>
                                    </label>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="newsletter"
                                        type="checkbox"
                                        checked={subscribe}
                                        onChange={(e) => setSubscribe(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="newsletter" className="text-gray-700">
                                        Subscribe to our monthly newsletter
                                    </label>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={!agreed || !isFormValid()}
                            className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all ${agreed && isFormValid()
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            <BriefcaseIcon className="w-6 h-6 mr-2 inline-block" />
                            Submit Application
                        </motion.button>
                        {isLoading && (
                            <div
                                style={{
                                    marginTop: '1rem',
                                    padding: '1rem',
                                    backgroundColor: '#d4edda',
                                    color: '#155724',
                                    borderRadius: '8px',
                                    textAlign: 'center'
                                }}
                            >
                                Message sent successfully!
                            </div>)}
                    </form>
                </motion.div>

                <div className="mt-12 text-center text-gray-600">
                    <p>Have questions? Email us at{' '}
                        <a href="mailto:careers@bluenexttech.com" className="text-blue-600 hover:underline">
                            careers@bluenexttech.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Careers;