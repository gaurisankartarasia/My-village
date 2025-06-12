import aboutData from "@/content/JSON_data/about.json";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <Box py={{ xs: 8, md: 12 }}>
      <Container maxWidth="lg" id="about">
        <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
          <Typography
            variant="h2"
            component="h2"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            {aboutData.title}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            mt={2}
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: 300,
            }}
          >
            {aboutData.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 2, md: 2 },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              borderRadius: 3,
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant="h4"
                component="h3"
                fontWeight="bold"
                mb={2}
                textAlign="center"
                sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}
              >
                {aboutData.history.title}
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                lineHeight={1.7}
                textAlign="center"
                mx="auto"
              >
                {aboutData.history.content}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box
          mb={{ xs: 6, md: 8 }}
          component={Link}
          to={aboutData.history.slug}
          sx={{
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          <Typography component="p" mb={2} textAlign="center" color="primary">
            Read more about our history
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              borderRadius: 3,
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 4, md: 6 },
                  alignItems: { xs: "stretch", md: "flex-start" },
                }}
              >
                <Box sx={{ flex: { xs: "1", md: "1 1 50%" } }}>
                  <Typography
                    variant="h4"
                    component="h3"
                    fontWeight="bold"
                    mb={2}
                    sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}
                  >
                    {aboutData.facts.title}
                  </Typography>
                  <List>
                    {aboutData.facts.items.map((item, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon>
                          <span className="material-icons-outlined">
                            {item.icon}
                          </span>
                        </ListItemIcon>
                        <ListItemText
                          primary={<strong>{item.label}:</strong>}
                          secondary={item.value}
                          sx={{
                            "& .MuiListItemText-secondary": {
                              color: "text.secondary",
                              pt: 0.5,
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Box sx={{ flex: { xs: "1", md: "1 1 50%" } }}>
                  <Typography
                    variant="h4"
                    component="h3"
                    fontWeight="bold"
                    mb={2}
                    sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}
                  >
                    {aboutData.special.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {aboutData.special.intro}
                  </Typography>
                  <List>
                    {aboutData.special.items.map((item, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon>
                          <span className="material-icons-outlined">
                            {item.icon}
                          </span>
                        </ListItemIcon>
                        <ListItemText
                          primary={<strong>{item.label}:</strong>}
                          secondary={item.value}
                          sx={{
                            "& .MuiListItemText-secondary": {
                              color: "text.secondary",
                              pt: 0.5,
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Box>
        <Box
          mb={{ xs: 6, md: 8 }}
          component={Link}
          to={aboutData.slug}
          sx={{
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          <Typography component="p" mb={2} textAlign="center" color="primary">
            Read more
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
