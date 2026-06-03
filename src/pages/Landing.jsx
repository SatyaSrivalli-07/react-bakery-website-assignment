import Hero from "../components/Hero";
import LandingFeatures from "../components/LandingFeatures/LandingFeatures";
import LandingBreadGallery from "../components/LandingBreadGallery/LandingBreadGallery";

function Landing() {
  return (
    <>
      <Hero reverse={true} />
      <LandingFeatures />
      <LandingBreadGallery/>
    </>
  );
}

export default Landing;