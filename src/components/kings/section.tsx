import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Define the King interface for TypeScript type safety
interface King {
  id: number;
  name: string;
  reign: string;
  description: string;
}

function Kings() {
  // State to hold the list of kings and loading/error states
  const [kings, setKings] = useState<King[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the static JSON file on component mount
  useEffect(() => {
    const fetchKings = async () => {
      try {
        const response = await fetch('/kings.json');
        if (!response.ok) {
          throw new Error('Failed to fetch kings data');
        }
        const data: King[] = await response.json();
        setKings(data);
      } catch (err: unknown) {
        setError(`Error loading kings data: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchKings();
  }, []);

  // Function to generate Google search URL
  const getGoogleSearchUrl = (name: string) => {
    const query = encodeURIComponent(`${name} king of Baramba`);
    return `https://www.google.com/search?q=${query}`;
  };

  // Render loading state
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card className='border-none shadow-none' >
        <CardHeader>
          <CardTitle>Kings of Our Village</CardTitle>
        </CardHeader>
        <CardContent>
          {kings.length === 0 ? (
            <p>No kings found.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Reign</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kings.map((king) => (
                  <TableRow key={king.id} className='text-lg' >
                    <TableCell>
                      <div className="relative group">
                        <a  
                         href={getGoogleSearchUrl(king.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='hover:underline hover:text-blue-600 underline-offset-4'
                        >{king.name}</a>
                        
                      </div>
                    </TableCell>
                    <TableCell>{king.reign}</TableCell>
                    <TableCell>{king.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Kings;