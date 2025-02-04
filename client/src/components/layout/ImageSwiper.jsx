// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import all images
import img1 from "../../assets/images/portfolio1.jpg";
import img2 from "../../assets/images/portfolio2.jpg";
import img3 from "../../assets/images/portfolio3.jpg";
import img4 from "../../assets/images/portfolio4.jpg";
import img5 from "../../assets/images/portfolio5.jpg";
import img6 from "../../assets/images/portfolio6.jpg";
import img7 from "../../assets/images/portfolio7.jpg";
import img8 from "../../assets/images/portfolio8.jpg";
import img9 from "../../assets/images/portfolio9.jpg";
import img10 from "../../assets/images/portfolio10.jpg";

// Store all images in an array
const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10
];

const ImageSwiper = () => {
    return (
        <div className="my-10 flex justify-center items-center w-full mx-auto flex-col">
            <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
            <div className="flex justify-center items-center w-full">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]} // Register required modules
                    spaceBetween={10} // Space between slides
                    slidesPerView={1} // Show 1 image at a time
                    loop={true} // Enable loop to make it infinite
                    autoplay={{ delay: 2500 }} // Auto play after every 2.5 seconds
                    pagination={{ clickable: true }} // Show pagination bullets
                    navigation={true} // Show navigation arrows
                    className="w-3/4" // Make Swiper 3/4 of the container width to center it properly
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <img
                                src={image}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full mx-auto md:w-3/5 lg:w-2/3 h-auto object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageSwiper;
