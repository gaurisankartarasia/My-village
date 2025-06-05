import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import communityData from '@/data/community.json';

interface CommunityItem {
  id: number;
  category: string;
  name: string;
  description: string;
  imageUrl: string;
  highlight: string;
}

const Community: React.FC = () => {
  const categories = Array.from(new Set(communityData.map((item: CommunityItem) => item.category)));

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-8">Community in Badamba</h2>
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList
            className="flex justify-start sm:justify-center mb-6 overflow-x-auto whitespace-nowrap w-full scrollbar-hide"
          >
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-base flex-shrink-0"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="space-y-6">
                {communityData
                  .filter((item: CommunityItem) => item.category === category)
                  .map((item: CommunityItem) => (
                    <Card key={item.id} className="w-full">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div>
                            <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
                            <Badge variant="secondary" className="mt-1">
                              {item.highlight}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Community;