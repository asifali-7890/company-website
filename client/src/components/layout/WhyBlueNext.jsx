
import videoFile from '../../assets/video/imgVideo.mp4'

const WhyBlueNext = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-between flex-col md:flex-row items-center">
                {/* Left Side - Video */}
                <div className="w-full min-h-screen  flex items-center flex-start">
                    <video
                        src={videoFile} // Update with your video path
                        autoPlay
                        muted
                        loop
                        className="rounded-xl shadow-lg object-cover w-3/4 h-[75vh]"
                    />
                </div>


                {/* Right Side - Text */}
                <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                        Why BlueNext Technologies?
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Web design creativity – We try our best, and we make sure we deliver the best.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        BlueNext Technologies is a leading website and mobile app development company with more than 4 years of experience using the most recent technologies to create a seamless web application for a significant online presence.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        We are here for you always. We are a group of thinkers and doers who work diligently with clients' ideas to develop the best project to increase brand value and facilitate global user engagement.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhyBlueNext
