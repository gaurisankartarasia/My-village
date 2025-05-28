import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StoriesSection: React.FC = () => {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Community Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Anna, Local Farmer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Growing up here has been a blessing. The community feels like family."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>John, Visitor</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"The village’s charm and hospitality made my trip unforgettable!"</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;