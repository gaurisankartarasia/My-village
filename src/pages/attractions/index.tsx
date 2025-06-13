import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import attractionsData from "@/content/JSON_data/ats.json";
import { Helmet } from "@dr.pogodin/react-helmet";
import { type Attraction } from "@/types";

const Attractions: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Badamba attractions</title>
        <meta name="description" content="Attractions in Badamba" />
      </Helmet>
      <Box component="section" py={{ xs: 6, md: 12 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            textAlign="center"
            mb={8}
            sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
          >
            Attractions & Landmarks in Badamba
          </Typography>
          <Grid container spacing={3}>
            {attractionsData.map((attraction: Attraction) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={attraction.id}>
                <Card
                  variant="outlined"
                  sx={{
                    minHeight: "450px",
                    position: "relative",
                    "&:hover": {
                      "& .MuiTypography-root": {
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      },
                    },
                  }}
                >
                  <Link
                    to={`/attractions/${attraction.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    {attraction.imageUrl ? (
                      <CardMedia
                        component="img"
                        image={attraction.imageUrl}
                        alt={attraction.title}
                        sx={{
                          height: "450px",
                          width: "100%",
                          objectFit: "cover",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          height: "450px",
                          bgcolor: "grey.200",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        }}
                      >
                        <span className="material-icons-outlined">
                          broken_image
                        </span>
                      </Box>
                    )}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        zIndex: 2,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0) 100%)",
                      }}
                    >
                      <CardContent sx={{ p: 3, color: "white" }}>
                        <Typography
                          variant="h6"
                          component="h3"
                          fontWeight="medium"
                          gutterBottom
                        >
                          {attraction.title}
                        </Typography>
                        <Typography variant="body2">
                          {attraction.description}
                        </Typography>
                        <Chip
                          label={`Best Time: ${attraction.bestTime}`}
                          sx={{
                            mt: 1,
                            whiteSpace: "normal",
                            wordBreak: "break-word",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            color: "white",
                          }}
                        />
                      </CardContent>
                    </Box>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Attractions;
