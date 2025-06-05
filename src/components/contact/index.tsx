import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import contactData from '@/data/contact.json';

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

interface ContactItem {
  id: number;
  type: string;
  title: string;
  description: string;
}

interface EmailOrSocialItem extends ContactItem {
  type: 'Email' | 'Social Media';
  value: string;
  link: string;
  fields?: never;
  submitLabel?: never;
}

interface FormItem extends ContactItem {
  type: 'Form';
  value?: never;
  link?: never;
  fields: FormField[];
  submitLabel: string;
}

type ContactItemUnion = EmailOrSocialItem | FormItem;

const ContactConnect: React.FC = () => {
  const forms = contactData.filter((item: ContactItemUnion) => item.type === 'Form');
  const contacts = contactData.filter((item: ContactItemUnion) => item.type !== 'Form');

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-8">Contact & Connect with Badamba</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Forms */}
          <div className="space-y-6">
            {forms.map((form: FormItem) => (
              <Card key={form.id} className="w-full">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{form.title}</CardTitle>
                  <CardDescription>{form.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    {form.fields.map((field) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                          {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                          <Textarea
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                            className="mt-1"
                          />
                        ) : (
                          <Input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            className="mt-1"
                          />
                        )}
                      </div>
                    ))}
                    <Button type="submit">{form.submitLabel}</Button>
                  </form>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Right Column: Contact Details */}
          <div className="space-y-6">
            {['Email', 'Social Media'].map((type) => (
              <Card key={type} className="w-full">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{type}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contacts
                    .filter((item: EmailOrSocialItem) => item.type === type)
                    .map((item: EmailOrSocialItem) => (
                      <div key={item.id} className="flex items-start gap-4">
                        <div>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {item.title}
                          </a>
                          <CardDescription className="mt-1">{item.description}</CardDescription>
                          <Badge variant="secondary" className="mt-2">
                            {item.value}
                          </Badge>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactConnect;