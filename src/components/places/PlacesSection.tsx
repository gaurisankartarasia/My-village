// src/components/PlacesSection.tsx
import { PlaceCard } from "./card";

const places = [
  {
    title: "Green Valley Lake",
    description: "A serene lake surrounded by lush greenery. Perfect for picnics and boating.",
    imageUrl: "https://res.cloudinary.com/decshjgje/image/upload/v1739940078/samples/landscapes/beach-boat.jpg",
  },
  {
    title: "Sunrise Hill",
    description: "Offers breathtaking sunrise views. A favorite spot for early risers and hikers.",
    imageUrl: "/images/sunrise-hill.jpg",
  },
  {
    title: "Old Banyan Tree",
    description: "A 500-year-old tree that's a historical and cultural landmark of our village.",
    imageUrl: "/images/old-banyan.jpg",
  },
   {
    title: "Old Banyan Tree",
    description: "A 500-year-old tree that's a historical and cultural landmark of our village.",
    imageUrl: "/images/old-banyan.jpg",
  }
];

export const PlacesSection = () => (
  <section className="lg:px-32 py-8 md:py-12 lg:py-16 bg-background text-foreground">
    <div className="max-w-8xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Beautiful Places</h2>
      <div className="flex flex-wrap justify-center gap-6">
       <div className="flex flex-wrap justify-center gap-6">
  {places.map((place, idx) => (
    <PlaceCard key={idx} {...place} />
  ))}
</div>

      </div>
    </div>
  </section>
);
