import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import visitData from '@/data/visit.json';

interface VisitItem {
  id: number;
  section: string;
  title: string;
  description: string;
  imageUrl: string;
  highlight: string;
}

const Visit: React.FC = () => {
  const sections = Array.from(new Set(visitData.map((item: VisitItem) => item.section)));

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-8">How to Visit Badamba</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column: Accordion with Travel Info */}
          <div className="md:col-span-2 space-y-4">
            <Accordion type="single" collapsible>
              {sections
                .filter((section) => section !== 'Map') // Exclude Map section from accordion
                .map((section) => (
                  <AccordionItem key={section} value={section} className="border-b">
                    <AccordionTrigger className="text-lg font-semibold px-4 py-3">
                      {section}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3">
                      <div className="space-y-4">
                        {visitData
                          .filter((item: VisitItem) => item.section === section)
                          .map((item: VisitItem) => (
                            <Card key={item.id} className="w-full">
                              <CardHeader>
                                <div className="flex items-center gap-4">
                                  <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-12 h-12 object-cover rounded-md"
                                  />
                                  <div>
                                    <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
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
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
          {/* Right Column: Sticky Map */}
          <div className="md:col-span-1">
            <div className="sticky top-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Badamba Map</CardTitle>
                  <Badge variant="secondary">Pincode: 754031</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Use Google Maps for navigation to Badamba and landmarks like Singhanath Temple.
                  </CardDescription>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239686.39843496605!2d85.23813942913799!3d20.352752999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d2bffffffff%3A0xbec6a3b4e1e54b1!2sBadamba%2C%20Odisha%20754031!5e0!3m2!1sen!2sin!4v1730321234567!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;