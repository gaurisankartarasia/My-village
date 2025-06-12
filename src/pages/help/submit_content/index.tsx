import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function SubmitIdeaPage() {
  const adminEmail = "gaurisankartarasia@gmail.com";

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold">
          Contribute Content to Our Village Page
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mt={1}>
          Share your ideas, images, blog posts, or gallery suggestions with us!
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Submission Steps
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <span className="material-icons-outlined">description</span>
            </ListItemIcon>
            <ListItemText
              primary="Prepare Your Content"
              secondary="Write your blog post in Markdown or plain text. Include a title, summary, and any headings you want."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <span className="material-icons-outlined">collections</span>
            </ListItemIcon>
            <ListItemText
              primary="Select Your Image(s)"
              secondary="Choose images suitable for the gallery. Include a descriptive caption or name for each image."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <span className="material-icons-outlined">article</span>
            </ListItemIcon>
            <ListItemText
              primary="Format Your Submission"
              secondary={
                <>
                  For blogs: one markdown file. For images: either email
                  attachments or hosted links. No upload via site—just share the
                  links or files.{" "}
                  <Link
                    className="underline-offset-4 underline "
                    to="/help/markdown_guide"
                  >
                    Markdown (.md) file guide{" "}
                    <span
                      className="material-icons-outlined "
                      style={{ fontSize: "18px" }}
                    >
                      launch
                    </span>
                  </Link>
                </>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <span className="material-icons-outlined">email</span>
            </ListItemIcon>
            <ListItemText
              primary="Email to Admin"
              secondary={
                <>
                  Attach your `.md` blog post and/or image files, or include
                  hosted image links, and send them to{" "}
                  <Link
                    className="underline underline-offset-4"
                    to={`mailto:${adminEmail}`}
                    target="_blank"
                  >
                    {adminEmail}{" "}
                    <span
                      className="material-icons-outlined"
                      style={{ fontSize: "18px" }}
                    >
                      launch
                    </span>
                  </Link>
                  .
                </>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <span className="material-icons-outlined">email</span>
            </ListItemIcon>
            <ListItemText
              primary="Expect Feedback"
              secondary="The admin will review your submission, may ask for edits, and confirm when it's live."
            />
          </ListItem>
        </List>
      </Box>

      <Box textAlign="center">
        <Button
          variant="contained"
          startIcon={<span className="material-icons-outlined">email</span>}
          href={`mailto:${adminEmail}?subject=Content Submission`}
        >
          Submit via Email
        </Button>
      </Box>
    </Container>
  );
}
