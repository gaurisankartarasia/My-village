import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ThingsToDoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Things to Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Hiking Trails</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore scenic trails with breathtaking views of our rolling hills.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Local Markets</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Shop for fresh produce and handmade crafts every Saturday.</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Plan Your Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDoSection;