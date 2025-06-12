export interface Attraction {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  bestTime: string;
  lastEdited?: string;
  author?: string;
}

export interface Image {
  src: string;
  name?: string;
  description?: string;
}

export interface CultureItem {
  id: number;
  category: string;
  name: string;
  description: string;
  imageUrl: string;
  highlight: string;
}

export interface Slug {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  bestTime: string;
  lastEdited?: string;
  author?: string;
}
