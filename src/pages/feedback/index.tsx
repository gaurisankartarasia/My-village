import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { Helmet } from "@dr.pogodin/react-helmet";

import { useState } from "react";

const FeedbackReportPage: React.FC = () => {
  const [type, setType] = useState<"feedback" | "report">("feedback");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const adminEmail = "gaurisankartarasia@gmail.com";

  const handleSubmit = () => {
    const subject = type === "feedback" ? "Website Feedback" : "Issue Report";
    const body = `Message: ${encodeURIComponent(message)}\n\nReply-to: ${
      email || "Not provided"
    }`;
    const mailtoLink = `mailto:${adminEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Helmet>
        <title> Give your feedbacks here</title>
        <meta
          name="description"
          content="Feedback page to submit your experience."
        />
      </Helmet>
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="bold">
            {type === "feedback" ? "Send Feedback" : "Report an Issue"}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Help us improve by sharing your thoughts or reporting any problems.
          </Typography>
        </Box>

        <Stack spacing={3}>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Button
              variant={type === "feedback" ? "contained" : "outlined"}
              startIcon={
                <span className="material-icons-outlined">thumb_up</span>
              }
              onClick={() => setType("feedback")}
            >
              Feedback
            </Button>
            <Button
              variant={type === "report" ? "contained" : "outlined"}
              startIcon={
                <span className="material-icons-outlined">report_problem</span>
              }
              onClick={() => setType("report")}
            >
              Report
            </Button>
          </Stack>

          <TextField
            label="Your Message"
            placeholder="Type your message or report..."
            fullWidth
            multiline
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <TextField
            label="Your Email (optional)"
            placeholder="you@example.com"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Alert severity="info">
            Your message will open in your email app. No data is stored on this
            site.
          </Alert>

          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={!message.trim()}
            onClick={handleSubmit}
          >
            Send {type === "feedback" ? "Feedback" : "Report"}
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default FeedbackReportPage;
