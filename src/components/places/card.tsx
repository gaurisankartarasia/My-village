import React from 'react';
import {Link} from "react-router-dom"

interface PlaceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Link to={'/places'} className="w-[340px] bg-white shadow-xl rounded-lg active:shadow-md overflow-hidden dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};