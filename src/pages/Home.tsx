import FrontBanner from "@/components/banner/front";
import Visit from "@/components/visit";
import AboutSection from "@/components/AboutSection";
import Attractions from "@/components/attractions";
import Culture from "@/components/culture/Culture";
import Community from "@/components/community/Community";
import ContactConnect from "@/components/contact";

const Home: React.FC = () => {
 

  return (
    <>
   <FrontBanner altText="front banner"  imageUrl="/assets/banners/front/front-banner.jpeg" />
<AboutSection/>
<Attractions/>
<Culture/>
<Community/>
<Visit/>
<ContactConnect/>
    </>
  );
};

export default Home;
