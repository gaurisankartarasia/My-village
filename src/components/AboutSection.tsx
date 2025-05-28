import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Our Village</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Our History</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Founded in 1850, our village thrives on centuries-old traditions and a close-knit community.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Culture & Festivals</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Experience our vibrant festivals, from harvest celebrations to local music gatherings.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Natural Beauty</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Surrounded by rolling hills and rivers, our village is a haven for nature lovers.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;