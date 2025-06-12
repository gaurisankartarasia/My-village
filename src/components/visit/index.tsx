import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import visitData from "@/content/JSON_data/visit.json";

const HighlightBadge = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.info.contrastText,
  borderRadius: theme.shape.borderRadius,
  fontSize: "0.75rem",
  fontWeight: 500,
}));

const Visit: React.FC = () => {
  const sections = Array.from(new Set(visitData.map((it) => it.section)));

  return (
    <section>
      <Container>
        <Box textAlign="center" py={4}>
          <Typography variant="h5" fontWeight="bold">
            How to Visit
          </Typography>
        </Box>

        <Box display="grid" gridTemplateColumns={{ md: "2fr 1fr" }} gap={4}>
          <Box>
            {sections
              .filter((sec) => sec !== "Map")
              .map((section) => (
                <Accordion key={section} disableGutters>
                  <AccordionSummary
                    expandIcon={
                      <span className="material-icons-outlined">
                        expand_more
                      </span>
                    }
                    aria-controls={`${section}-content`}
                    id={`${section}-header`}
                  >
                    <Typography variant="h6" fontWeight="medium">
                      {section}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {visitData
                      .filter((it) => it.section === section)
                      .map((item) => (
                        <Card
                          key={item.id}
                          sx={{ mb: 2, backgroundColor: "white" }}
                        >
                          <CardHeader
                            avatar={
                              <Avatar
                                src={item.imageUrl}
                                alt={item.title}
                                sx={{ width: 48, height: 48 }}
                              />
                            }
                            title={
                              <Typography
                                variant="subtitle1"
                                fontWeight="medium"
                              >
                                {item.title}
                              </Typography>
                            }
                            action={
                              <HighlightBadge>{item.highlight}</HighlightBadge>
                            }
                          />
                          <CardContent>
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      ))}
                  </AccordionDetails>
                </Accordion>
              ))}
          </Box>

          <Box sx={{ position: "sticky", top: 16 }}>
            <Card>
              <CardHeader
                title={
                  <Typography variant="h6" fontWeight="medium">
                    Badamba Map
                  </Typography>
                }
                action={<HighlightBadge>Pincode: 754031</HighlightBadge>}
              />
              <CardContent sx={{ p: 0 }}>
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239686.39843496605!2d85.23813942913799!3d20.352752999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d2bffffffff%3A0xbec6a3b4e1e54b1!2sBadamba%2C%20Odisha%20754031!5e0!3m2!1sen!2sin!4v1730321234567!5m2!1sen!2sin"
                  width="100%"
                  height={400}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sx={{ border: 0 }}
                  title="Badamba Map"
                />
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Visit;
