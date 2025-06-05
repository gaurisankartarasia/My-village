import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import cultureData from '@/data/culture.json';

interface CultureItem {
  id: number;
  category: string;
  name: string;
  description: string;
  imageUrl: string;
  highlight: string;
}

const Culture: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-8">Culture & Traditions in Badamba</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cultureData.map((item: CultureItem) => (
            <Accordion key={item.id} type="single" collapsible className="w-full">
              <AccordionItem value={`item-${item.id}`} className="border-b">
                <AccordionTrigger className="px-4 py-3 text-left">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">{item.name}</h3>
                      <Badge variant="outline" className="mt-1">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3">
                  <div className="flex flex-col md:flex-row gap-4">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full md:w-1/4 h-40 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                      <Badge variant="secondary" className="mt-3">
                        Highlight: {item.highlight}
                      </Badge>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;