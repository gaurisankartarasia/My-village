import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import attractionsData from '@/data/ats.json';
import { ImageOff } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Attraction {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  bestTime: string;
}

const Attractions: React.FC = () => {


  return (
    <section className="py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-8">Attractions & Landmarks in Badamba</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractionsData.map((attraction: Attraction) => (
            <Card key={attraction.id} className='hover:underline underline-offset-2 hover:text-blue-700' >
              <Link  to={`/attractions/${attraction.name}`} >
              <CardHeader className="p-0">
                {attraction.imageUrl ? (
                  <img
                    src={attraction.imageUrl}
                    alt={attraction.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
                    <ImageOff className="w-24 h-24 text-gray-500" />
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold">{attraction.name}  </CardTitle>
                <CardDescription className="mt-2 ">
                  {attraction.description}
                </CardDescription>
                {/* Apply whitespace-normal and break-words to the Badge */}
                <Badge variant="secondary" className="mt-4 whitespace-normal break-words">
                  Best Time: {attraction.bestTime}
                </Badge>
              </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;