import FrontBanner from "@/components/banner/front";
import Visit from "@/components/visit";
import AboutSection from "@/components/about";
import Attractions from "@/components/attractions";
import Culture from "@/components/culture";
import Community from "@/components/community";

const Home: React.FC = () => {
  return (
    <>
      <FrontBanner
        altText="front banner"
        imageUrl="/assets/banners/front/front-banner.jpeg"
      />
      <AboutSection />
      <Attractions />
      <Culture />
      <Community />
      <Visit />
    </>
  );
};

export default Home;
