import { motion } from 'framer-motion';

const CustomSoftwareSection = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Custom Software Development Company
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            BlueNext Technologies is a leading Indian website and custom software development company
                            that provides individualized Android and iOS platform solutions. We leverage technology
                            so that our clients can focus on running their business.
                        </p>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CustomSoftwareSection
