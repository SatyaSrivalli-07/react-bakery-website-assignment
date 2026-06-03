import Hero from "../components/Hero";
import Features from "../components/Features/Features";
import Traditions from "../components/Traditions/Traditions";
import OurBread from "../components/OurBread/OurBread";
import Banner from "../components/Banner/Banner";
import QualityBread from "../components/QualityBread/QualityBread";
import FreshBread from "../components/FreshBread/FreshBread";
import BakeryImage from "../components/BakeryImage/BakeryImage";
import Values from "../components/Values/Values";
import ProductCards from "../components/ProductCards/ProductCards";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

function Home(){
    return(
        <>
        <Hero/>
        <Features/>
        <Traditions/>
        <OurBread/>
        <Banner/>
        <QualityBread/>
        <FreshBread/>
        <BakeryImage/>
        <Values/>
        <ProductCards/>
        <ContactSection/>
        <Footer/>
        
      
        </>
    );
}
export default Home;