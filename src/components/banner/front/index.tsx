import React from 'react';

interface BannerProps {
  imageUrl: string;
  altText: string;
  className?: string;
}

const FrontBanner: React.FC<BannerProps> = ({ imageUrl, altText, className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <picture>
        <source 
          srcSet={`${imageUrl}?w=1200&h=300&fit=crop&auto=format`} 
          media="(min-width: 1024px)"
        />
        <source 
          srcSet={`${imageUrl}?w=768&h=192&fit=crop&auto=format`} 
          media="(min-width: 640px)"
        />
        <source 
          srcSet={`${imageUrl}?w=480&h=120&fit=crop&auto=format`} 
          media="(max-width: 639px)"
        />
        <img
          src={`${imageUrl}?w=1200&h=300&fit=crop&auto=format`}
          alt={altText}
          className="w-full h-auto object-cover aspect-[1200/300]"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 639px) 480px, (max-width: 1023px) 768px, 1200px"
        />
      </picture>
    </div>
  );
};

export default FrontBanner;