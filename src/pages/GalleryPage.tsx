import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import Masonry from "react-masonry-css";

// Sample image data (replace with your village images)
const images = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    name: "Turquoise Sea",
    description: "A serene beach with crystal-clear waters.",
  },
  {
    src: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
    name: "Frozen Mount",
    description: "Snow-capped peaks under a golden sunset.",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    name: "Rocky Outcrop",
    description: "Majestic rock formations against a blue sky.",
  },
  {
    src: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    name: "Sunset Stroll",
    description: "A peaceful walk along the shore at dusk.",
  },
  
];

const GalleryPage: React.FC = () => {
  // State for selected image in modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lazy loading with IntersectionObserver
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleImages, setVisibleImages] = useState<boolean[]>(new Array(images.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleImages((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "100px" }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Breakpoints for masonry grid
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Village Gallery</h2>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4"
          columnClassName="pl-4"
        >
          {images.map((image, index) => (
  <div
    key={index}
    ref={(el) => {
      imageRefs.current[index] = el;
    }}
    data-index={index}
    className="mb-4 relative group cursor-pointer"
    onClick={() => setSelectedImage(image.src)}
  >

              {/* Image with lazy loading */}
              {visibleImages[index] ? (
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full rounded-lg shadow-md transition-transform hover:opacity-90"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>
              )}

              {/* Overlay with name and description */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg text-white">
                <h3 className="text-lg font-semibold">{image.name}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </Masonry>

        {/* Zoom Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogOverlay className="fixed inset-0 bg-black/80" />
          <DialogContent className="p-0 bg-transparent border-none max-w-4xl">
            <div className="relative">
              <img
                src={selectedImage || ""}
                alt="Zoomed image"
                className="w-full h-auto max-h-[80vh] rounded-lg"
              />
              
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GalleryPage;