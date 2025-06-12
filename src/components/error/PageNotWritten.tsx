import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MuiLink from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

interface PageNotWrittenProps {
  helpPageLink?: string;
}

export default function PageNotWritten({
  helpPageLink = "/help/submit_content",
}: PageNotWrittenProps) {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="text.primary" mb={2}>
        Page Not Yet Written
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        This page is not yet written. We&apos;re working on it!
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={4}>
        Please go to our{" "}
        <MuiLink
          component={RouterLink}
          to={helpPageLink}
          underline="hover"
          color="primary"
        >
          help page
        </MuiLink>{" "}
        for more information, or click the button below to request or submit
        your idea.
      </Typography>

      <Button
        component={RouterLink}
        to={helpPageLink}
        variant="contained"
        size="large"
        sx={{ px: 4, py: 1.5, fontSize: "1rem" }}
      >
        Request or Submit Idea
      </Button>
    </Box>
  );
}
