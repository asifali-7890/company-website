
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { Alert, Stack } from '@mui/material';

const Careers = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [validationErrors, setValidationErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: '',
    });

    useEffect(() => {
        if (submissionStatus === 'success') {
            const timer = setTimeout(() => setSubmissionStatus(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [submissionStatus]);

    const [agreed, setAgreed] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Validation and submission logic remains the same

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
            setSubmissionStatus('success');
        } catch (error) {
            console.error('Submission error:', error);
            setSubmissionStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Join Our Team
                    </h1>
                    <p className="text-gray-600 md:text-lg max-w-xl mx-auto">
                        Help shape the future of digital innovation with BlueNext Technologies
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Application Form</h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4 sm:gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2.5 rounded-lg border ${validationErrors.fullName ? 'border-red-300' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm`}
                                />
                                {validationErrors.fullName && <p className="text-red-500 text-xs mt-1">{validationErrors.fullName}</p>}
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
                                    className={`w-full px-4 py-2.5 rounded-lg border ${validationErrors.email ? 'border-red-300' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm`}
                                />
                                {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
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
                                    className={`w-full px-4 py-2.5 rounded-lg border ${validationErrors.phone ? 'border-red-300' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm`}
                                />
                                {validationErrors.phone && <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Resume/CV
                                </label>
                                <input
                                    type="file"
                                    name="resume"
                                    onChange={handleChange}
                                    className={`w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${validationErrors.resume ? 'border-red-300' : 'border-gray-200'}`}
                                    accept=".pdf,.doc,.docx"
                                />
                                {validationErrors.resume && <p className="text-red-500 text-xs mt-1">{validationErrors.resume}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Cover Letter
                                </label>
                                <textarea
                                    rows="4"
                                    name="coverLetter"
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                    placeholder="Tell us why you're a great fit..."
                                ></textarea>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <input
                                    id="privacy-policy"
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded mt-1 focus:ring-blue-500"
                                />
                                <label htmlFor="privacy-policy" className="ml-3 text-sm text-gray-600">
                                    I agree to the{' '}
                                    <Link to="/privacypolicy" className="text-blue-600 hover:underline">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            <div className="flex items-start">
                                <input
                                    id="newsletter"
                                    type="checkbox"
                                    checked={subscribe}
                                    onChange={(e) => setSubscribe(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded mt-1 focus:ring-blue-500"
                                />
                                <label htmlFor="newsletter" className="ml-3 text-sm text-gray-600">
                                    Subscribe to our newsletter
                                </label>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={!agreed || !isFormValid()}
                            className={`w-full py-3 px-6 rounded-lg font-medium text-sm transition-all ${agreed && isFormValid()
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <FaSpinner className="animate-spin mr-2" />
                                    Submitting...
                                </div>
                            ) : (
                                <span className="flex items-center justify-center">
                                    <BriefcaseIcon className="w-5 h-5 mr-2" />
                                    Submit Application
                                </span>
                            )}
                        </motion.button>
                        {submissionStatus && (
                            <Stack spacing={2} sx={{ mt: 3 }}>
                                <Alert
                                    severity={submissionStatus}
                                    variant="filled"  // 'filled' gives a more modern look
                                    sx={{ borderRadius: 2 }}
                                >
                                    {submissionStatus === 'success'
                                        ? 'Message sent successfully!'
                                        : 'Failed to send message. Please try again.'}
                                </Alert>
                            </Stack>
                        )}

                    </form>
                </motion.div>

                <div className="mt-8 text-center text-sm text-gray-600">
                    <p>
                        Questions?{' '}
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