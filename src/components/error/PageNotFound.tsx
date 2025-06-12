import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        px: 2,
        position: "relative",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        component="div"
        sx={{
          fontSize: { xs: "6rem", md: "9rem" },
          fontWeight: "bold",
          color: "grey.300",
        }}
      >
        404
      </Typography>

      <Box
        sx={{
          position: "absolute",
          bgcolor: "primary.main",
          px: 2,
          py: 0.5,
          borderRadius: 1,
          transform: "rotate(12deg)",
          top: { xs: "25%", md: "10%" },
          left: { xs: "60%", md: "68%" },
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: "common.white", fontWeight: "medium" }}
        >
          Not Found
        </Typography>
      </Box>

      <Typography variant="h6" color="grey.600" sx={{ mt: 4 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>

      <Button
        component={RouterLink}
        to="/"
        variant="outlined"
        size="large"
        sx={{ mt: 4 }}
      >
        Go Home
      </Button>
    </Box>
  );
}
