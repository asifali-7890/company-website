import { Link } from 'react-router-dom'
import videoFile from '../../assets/video/imgVideo1.mp4'
const BlueNextReputation = () => {
    return (
        <section className="bg-gray-100 py-12">
            <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-4">
                Industries We are <span className='bg-pink-100'>Expertise</span> With
            </h1>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
                {/* Left Side - Text */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                        Building Global Reputation with <span className='bg-pink-100'>BlueNext Technologies</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                        BlueNext Technologies is a reputable company that has helped more than
                        300 small to enterprise-level businesses across various industries by creating
                        mobile apps and websites that enhance their reputation in the global market.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        With a strong commitment to quality and innovation, we ensure that our clients receive solutions that are not only functional but also scalable and reliable.
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/contact"
                            className="button-85"
                            role="button"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8 mx-auto flex items-center justify-center">
                    <video
                        src={videoFile} // Update with your video path
                        autoPlay
                        muted
                        loop
                        className="rounded-xl shadow-lg object-cover w-3/4 h-[75vh]"
                    />
                </div>
            </div>
        </section>
    )
}

export default BlueNextReputation
