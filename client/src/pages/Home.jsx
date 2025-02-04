import BlueNextReputation from "../components/layout/BlueNextReputation"
import CustomSoftwareSection from "../components/layout/CustomSoftwareSection"
import ImageSwiper from "../components/layout/ImageSwiper"
import IndustriesGrid from "../components/layout/IndustriesGrid"
import PricingSection from "../components/layout/PricingSection"
import Services from "../components/layout/Services.JSX"
import Stats from "../components/layout/Stats"
import VideoBackground from "../components/layout/VideoBackground"
import WhyBlueNext from "../components/layout/WhyBlueNext.JSX"
import CustomerReviews from "./CustomerReviews"


const Home = () => {
    return (
        <div>
            <VideoBackground />
            <CustomSoftwareSection />
            <WhyBlueNext />
            <BlueNextReputation />
            <IndustriesGrid />
            <Stats />
            <Services />
            <ImageSwiper />
            <PricingSection />
            <CustomerReviews />
        </div>
    )
}

export default Home
