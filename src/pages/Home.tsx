import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { PlacesSection } from "@/components/places/PlacesSection";
import FestivalsSection from "@/components/festivals/FestivalsSection";


const Home: React.FC = () => {
  useEffect(() => {
    // Preload background image to improve performance
    const img = new Image();
    img.src =
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
  }, []);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Our Village
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Discover the charm and serenity of our beautiful village, where
            tradition meets nature.
          </p>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Explore Now
          </Button>
        </div>
      </section>
      <PlacesSection />
      <FestivalsSection />

    </>
  );
};

export default Home;
