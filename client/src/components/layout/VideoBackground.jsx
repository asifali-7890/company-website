import videoFile from '../../assets/video/video.mp4'

const VideoBackground = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white p-2 text-4xl font-bold">
                    Welcome to BlueNext Technologies
                </h1>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        </div>
    )
}

export default VideoBackground
