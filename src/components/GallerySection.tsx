import { Card, CardContent } from "@/components/ui/card";

const GallerySection: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1519985176271-2b2b4e6e76e8",
    "https://images.unsplash.com/photo-1498038432885-65f1c3ebedf5",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Village Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={src}
                  alt={`Village scene ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;