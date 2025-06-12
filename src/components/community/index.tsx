import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import communityData from "@/content/JSON_data/community.json";

const Community: React.FC = () => {
  const categories = Array.from(
    new Set(communityData.map((item) => item.category))
  );
  const [value, setValue] = React.useState<string>(categories[0]);

  const handleChange = (_: React.SyntheticEvent, newVal: string) => {
    setValue(newVal);
  };

  return (
    <section>
      <Container>
        <Box textAlign="center" py={4}>
          <Typography variant="h5" fontWeight="bold">
            Community
          </Typography>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            textColor="primary"
            indicatorColor="primary"
            aria-label="Community categories"
          >
            {categories.map((cat) => (
              <Tab
                key={cat}
                label={cat}
                value={cat}
                sx={{
                  textTransform: "none",
                  "&:hover": { backgroundColor: "ButtonFace" },
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Box display="grid" gap={3}>
          {communityData
            .filter((item) => item.category === value)
            .map((item) => (
              <Card key={item.id}>
                <CardHeader
                  avatar={
                    <Avatar
                      src={item.imageUrl}
                      alt={item.name}
                      sx={{ width: 56, height: 56 }}
                    />
                  }
                  title={
                    <Box>
                      <Typography variant="h6" fontWeight="medium">
                        {item.name}
                      </Typography>
                      {item.highlight && (
                        <Chip
                          label={item.highlight}
                          size="small"
                          sx={{ mt: 0.5 }}
                        />
                      )}
                    </Box>
                  }
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </Box>
      </Container>
    </section>
  );
};

export default Community;
