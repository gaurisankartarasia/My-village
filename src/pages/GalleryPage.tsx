import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import Masonry from "react-masonry-css";

// Define the Image interface
interface Image {
  src: string;
  name: string;
  description: string;
}

const GalleryPage: React.FC = () => {
  // State for images and selected image in modal
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fetch images from JSON file
  useEffect(() => {
    fetch('src/data/images.json')
      .then((response) => response.json())
      .then((data: Image[]) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  // Lazy loading with IntersectionObserver
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([]);

  useEffect(() => {
    // Initialize visibleImages based on images length
    setVisibleImages(new Array(images.length).fill(false));

    // Copy imageRefs.current to a local variable
    const currentRefs = imageRefs.current;

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

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Use the copied variable in the cleanup function
    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [images]); // Add images as dependency since visibleImages depends on images length

  // Breakpoints for masonry grid
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-8">Village Gallery</h2>

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
