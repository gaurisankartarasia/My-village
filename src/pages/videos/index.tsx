import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

import videoData from "@/content/JSON_data/videos.json";

interface Video {
  id: string;
  title?: string;
  description?: string;
}

const VideoPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    setVideos(videoData);
  }, []);

  return (
    <Container maxWidth="xl" className="py-8 min-h-screen bg-gray-100">
      <Typography
        variant="h5"
        component="h5"
        className="text-center font-bold text-gray-800 mb-8"
      >
        Video Gallery
      </Typography>
      <Grid container spacing={4}>
        {videos.map((video) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={video.id}>
            <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow">
              <CardMedia>
                <Box className="relative pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default VideoPage;
