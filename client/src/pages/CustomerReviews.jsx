import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const CustomerReviews = () => {
    const reviews = [
        {
            name: "Emily Richards",
            position: "Business Owner",
            review:
                "BlueNext Technologies went above and beyond to create a stunning website that perfectly reflects my business. The team was highly professional and responsive, making the entire process smooth. I couldn’t be happier with the results!",
            rating: 5,
        },
        {
            name: "Oliver Benson",
            position: "Freelancer",
            review:
                "The website designed by BlueNext Technologies has significantly increased my online presence. The attention to detail and quality of work is unmatched. The team was always available and supportive throughout the project.",
            rating: 5,
        },
        {
            name: "Sophia Blake",
            position: "Entrepreneur",
            review:
                "I’m so grateful to BlueNext Technologies for delivering a user-friendly, beautifully designed website. It was a great experience working with such a knowledgeable and creative team. Highly recommend them!",
            rating: 5,
        },
        {
            name: "Lucas Carter",
            position: "E-commerce Store Owner",
            review:
                "Working with BlueNext Technologies has been a fantastic experience. They understood my needs perfectly and delivered a functional, visually appealing website. Their support throughout the process was invaluable!",
            rating: 4,
        },
        {
            name: "Isabella Moore",
            position: "Designer",
            review:
                "I am extremely satisfied with the website BlueNext Technologies created for me. Their design skills are top-notch, and they helped enhance my brand’s online presence significantly. I’m grateful for their dedication.",
            rating: 5,
        },
        {
            name: "Ethan Cooper",
            position: "Startup Founder",
            review:
                "BlueNext Technologies transformed my vision into reality with their web design expertise. The entire team was friendly, responsive, and truly cared about delivering a great product. Highly recommended!",
            rating: 5,
        },
    ];

    return (
        <section className="py-10 bg-[#f5f5f7]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Clients Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <Card key={index} className="shadow-lg rounded-2xl p-6 bg-white">
                            <CardContent>
                                <div className="flex items-center mb-4">
                                    <FaUserCircle className="text-4xl text-gray-500 mr-3" />
                                    <div>
                                        <h3 className="text-xl font-semibold">{review.name}</h3>
                                        <p className="text-gray-500">{review.position}</p>
                                    </div>
                                </div>
                                <FaQuoteLeft className="text-gray-400 text-3xl mb-2" />
                                <p className="text-gray-700 mb-4">{review.review}</p>
                                <div className="flex items-center">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
