import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import cultureData from "@/content/JSON_data/culture.json";
import Chip from "@mui/material/Chip";
import { type CultureItem } from "@/types";
import Card from "@mui/material/Card";

const colors = {
  bigStone: "#152536",
  white: "#fff",
  smaltBlue: "#4e958b",
  liteBigStone: "rgba(21, 37, 54, 0.7)",
  liteGrey: "rgba(0, 0, 0, 0.2)",
};

// Transition timing from the SCSS example
const transitions = {
  timing1: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)",
  timing2: "0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03)",
};

const CultureAndTraditions: React.FC = () => {
  return (
    <section>
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1.5rem", lg: "2.5rem" } }}
          >
            Culture & Traditions
          </Typography>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={2}
          justifyItems="center"
        >
          {cultureData.specific_page_data[0].map((item: CultureItem) => (
            <Card
              key={item.id}
              className="culture-card"
              variant="outlined"
              sx={{
                position: "relative",
                width: 350,
                height: 350,
                overflow: "hidden",
                "&:hover .infos": {
                  transform: "translateY(-260px)",
                },
                "&:hover .hidden-details": {
                  opacity: 1,
                },
              }}
            >
              <Box
                className="thumb"
                sx={{
                  width: "100%",
                  height: 260,
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <Box
                className="infos"
                sx={{
                  width: "100%",
                  height: 350,
                  backgroundColor: colors.white,
                  p: "14px 24px",
                  position: "relative",
                  transition: `transform ${transitions.timing1}`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    position: "relative",
                    margin: "10px 0",
                    letterSpacing: "0.5px",
                    color: colors.bigStone,
                    fontSize: "1rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {item.name}
                  <Chip
                    label={item.category}
                    size="small"
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontWeight: "bold",
                    }}
                  />
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: "24px",
                    pb: "24px",
                    borderBottom: `1px solid ${colors.liteGrey}`,
                    fontSize: "0.85rem",
                    color: colors.liteBigStone,
                  }}
                >
                  {item.highlight}
                </Typography>

                <Typography
                  variant="body1"
                  className="hidden-details"
                  sx={{
                    lineHeight: 2,
                    fontSize: "0.95rem",
                    color: colors.liteBigStone,
                    opacity: 0,
                    transition: `opacity ${transitions.timing2}`,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default CultureAndTraditions;
