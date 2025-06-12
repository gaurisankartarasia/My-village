import React, { memo, useCallback } from "react";
import Masonry from "react-masonry-css";
import { GalleryImageCard } from "./GalleryImageCard";
import { type Image } from "@/types";

interface GalleryGridProps {
  images: Image[];
  visibleImages: boolean[];
  onImageClick: (src: string) => void;
  imageRefs: React.RefObject<(HTMLDivElement | null)[]>;
}

export const GalleryGrid = memo<GalleryGridProps>(
  ({ images, visibleImages, onImageClick, imageRefs }) => {
    const breakpointColumnsObj = {
      default: 3,
      1100: 2,
      700: 2,
    };

    const setRef = useCallback(
      (el: HTMLDivElement | null, index: number) => {
        imageRefs.current[index] = el;
      },
      [imageRefs]
    );

    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-1"
        columnClassName="pl-1"
      >
        {images.map((image, index) => (
          <GalleryImageCard
            key={`${image.src}-${index}`}
            image={image}
            index={index}
            isVisible={visibleImages[index]}
            onImageClick={onImageClick}
            setRef={setRef}
          />
        ))}
      </Masonry>
    );
  }
);

GalleryGrid.displayName = "GalleryGrid";
