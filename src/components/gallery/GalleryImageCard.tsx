import { memo } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { type Image } from "@/types";

interface GalleryImageCardProps {
  image: Image;
  index: number;
  isVisible: boolean;
  onImageClick: (src: string) => void;
  setRef: (el: HTMLDivElement | null, index: number) => void;
}

export const GalleryImageCard = memo<GalleryImageCardProps>(
  ({ image, index, onImageClick, setRef }) => {
    return (
      <Box
        ref={(el: HTMLDivElement | null) => setRef(el, index)}
        data-index={index}
        sx={{ mb: 1 }}
      >
        <Card
          sx={{
            position: "relative",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              "& .overlay": {
                opacity: 1,
              },
            },
          }}
          onClick={() => onImageClick(image.src)}
        >
          <CardMedia
            component="img"
            image={image.src}
            alt={image.name}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 1,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
            loading="lazy"
          />

          <Box
            className="overlay"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
              color: "white",
              p: 2,
              opacity: 0,
              transition: "opacity 0.2s",
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "semibold" }}
            >
              {image.name}
            </Typography>
            <Typography variant="body2">{image.description}</Typography>
          </Box>
        </Card>
      </Box>
    );
  }
);

GalleryImageCard.displayName = "GalleryImageCard";
