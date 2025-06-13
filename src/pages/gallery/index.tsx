import React, { useState, useCallback } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ImageModal } from "@/components/gallery/ImageModal";
import { useImageIntersection } from "@/hooks/useImageIntersection";
import { type Image } from "@/types";
import imagesData from "@/content/JSON_data/images.json";
import { Helmet } from "@dr.pogodin/react-helmet";

const GalleryPage: React.FC = () => {
  const [images] = useState<Image[]>(imagesData);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { imageRefs, visibleImages } = useImageIntersection(images);

  const handleImageClick = useCallback((src: string) => {
    setSelectedImage(src);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <>
      <Helmet>
        <title>Photos gallery of Badamba</title>
        <meta name="description" content="Photos of Badamba" />
      </Helmet>

      <Box sx={{ py: 2, px: 1, bgcolor: "grey.50" }}>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: "bold",
            color: "grey.800",
            textAlign: "center",
            mb: 4,
          }}
        >
          Gallery
        </Typography>

        <GalleryGrid
          images={images}
          visibleImages={visibleImages}
          onImageClick={handleImageClick}
          imageRefs={imageRefs}
        />

        <ImageModal selectedImage={selectedImage} onClose={handleCloseModal} />
      </Box>
    </>
  );
};

export default GalleryPage;
