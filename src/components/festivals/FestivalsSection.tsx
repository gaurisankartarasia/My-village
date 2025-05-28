import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const festivals = [
  {
    name: "Festival 1",
    date: "15th May",
    time: "20:00",
    description: "Celebrate spring with traditional dances and music in the village square.",
    image: "https://images.unsplash.com/photo-1622299893788-0001d2b8e7b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Festival 2",
    date: "18th May",
    time: "20:00",
    description: "Join us for a vibrant harvest festival with local food and crafts.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Festival 3",
    date: "20th May",
    time: "20:00",
    description: "Experience our annual cultural festival with performances and art exhibitions.",
    image: "https://images.unsplash.com/photo-1519985176271-2b2b4e6e76e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Festival 4",
    date: "19th May",
    time: "20:00",
    description: "Enjoy a night of music and celebration under the stars.",
    image: "https://images.unsplash.com/photo-1498038432885-65f1c3ebedf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const FestivalsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Festivals</h2>
          <p className="text-lg text-gray-600 mt-2 relative inline-block">
            Upcoming 2025
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-emerald-500 rounded"></span>
          </p>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivals.map((festival, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="pt-4">
                <h3 className="text-lg font-semibold text-gray-800">{festival.name}</h3>
                <p className="text-sm font-medium text-gray-600">
                  {festival.date} {festival.time}
                </p>
                <p className="text-sm text-gray-500 mt-2">{festival.description}</p>
                <div className="mt-4 flex justify-between">
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">
                    Details
                  </Button>
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    RSVP
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalsSection;