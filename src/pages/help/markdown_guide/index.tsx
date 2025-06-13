import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const MarkdownHelp = () => {
  const downloadMarkdownExample = () => {
    const markdownContent = `# Markdown Syntax Guide

This file demonstrates common Markdown syntax for writing content for your village website.

## Headings
Use # for headings. More # symbols create smaller headings.
# Heading 1
## Heading 2
### Heading 3
#### Heading 4

## Text Formatting
Use asterisks or underscores for styling text.
**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~

## Lists
Create lists for organizing content.
### Unordered List
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

### Ordered List
1. First item
2. Second item
3. Third item

## Links
Link to external or internal pages.
[Visit our village website](https://example.com)
[Relative link to about page](/about)

## Images
Add images with an exclamation mark before a link.
![Village photo](https://via.placeholder.com/150)

## Code
Show code snippets or inline code.
Inline \`code\` example

\`\`\`javascript
// Code block example
function welcome() {
  console.log("Welcome to our village!");
}
\`\`\`

## Blockquotes
Quote text for emphasis.
> This is a blockquote about our village history.
> It can span multiple lines.

## Tables
Organize data in tables.
| Name  | Role       | Contact         |
|-------|------------|-----------------|
| Alice | Organizer   | alice@village.com |
| Bob   | Volunteer  | bob@village.com |

## Horizontal Rule
Separate sections with a horizontal line.
---

## Tips
- Use a plain text editor like VS Code or Notepad to write Markdown.
- Save files with a .md extension.
- Test your Markdown in a viewer to ensure it renders correctly.
`;

    const blob = new Blob([markdownContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "example-markdown.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const CodeBlock = ({ children }: { children: React.ReactNode }) => (
    <Paper
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        p: 2,
        borderRadius: 1,
        fontFamily: "monospace",
        fontSize: "0.875rem",
        overflow: "auto",
        whiteSpace: "pre-wrap",
      }}
    >
      {children}
    </Paper>
  );

  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh", py: 4 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box>
          <CardContent sx={{ p: 4 }}>
            <Box mb={3}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                fontWeight="bold"
              >
                Markdown Syntax Guide
              </Typography>
              <Typography variant="body1" color="text.secondary">
                A guide to writing Markdown for your village website
              </Typography>
            </Box>

            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  fontWeight="semiBold"
                >
                  About Markdown
                </Typography>
                <Typography variant="body1" paragraph>
                  Markdown is a simple way to format text using plain text
                  syntax. It's perfect for writing content for your village
                  website because it's easy to learn and works well with web
                  platforms.
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  fontWeight="semiBold"
                >
                  Key Markdown Syntax
                </Typography>

                <Stack spacing={3}>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="medium"
                    >
                      Headings
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Use 1-6 # symbols for headings (1 is largest).
                    </Typography>
                    <CodeBlock>
                      {`# Heading 1
## Heading 2
### Heading 3`}
                    </CodeBlock>
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="medium"
                    >
                      Text Formatting
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Style text with asterisks or underscores.
                    </Typography>
                    <CodeBlock>
                      {`**Bold**
*Italic*
~~Strikethrough~~`}
                    </CodeBlock>
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="medium"
                    >
                      Lists
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Use - or * for unordered lists, numbers for ordered lists.
                    </Typography>
                    <CodeBlock>
                      {`- Item 1
- Item 2
  - Subitem

1. First
2. Second`}
                    </CodeBlock>
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="medium"
                    >
                      Links
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Use square brackets for text and parentheses for URLs.
                    </Typography>
                    <CodeBlock>[Text](https://example.com)</CodeBlock>
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="medium"
                    >
                      Images
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Add images with ! before a link.
                    </Typography>
                    <CodeBlock>
                      ![Alt text](https://example.com/image.jpg)
                    </CodeBlock>
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="medium"
                    >
                      Code
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Use backticks for code: single for inline, triple for
                      blocks.
                    </Typography>
                    <CodeBlock>
                      {`\`inline code\`

\`\`\`javascript
console.log("Hello!");
\`\`\``}
                    </CodeBlock>
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="medium"
                    >
                      Blockquotes
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Use ＞ for quotes.
                    </Typography>
                    <CodeBlock>＞ Quote text here</CodeBlock>
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="medium"
                    >
                      Tables
                    </Typography>
                    <Typography variant="body2" component="p">
                      Use pipes and hyphens for tables.
                    </Typography>
                    <CodeBlock>
                      {`| Header | Header |
|--------|--------|
| Cell   | Cell   |`}
                    </CodeBlock>
                  </Box>
                </Stack>
              </Box>

              <Divider />

              <Box>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  fontWeight="semiBold"
                >
                  Download Example File
                </Typography>
                <Typography variant="body1" paragraph>
                  Download this example Markdown file to use as a template for
                  your village website pages.
                </Typography>
                <Button
                  variant="contained"
                  onClick={downloadMarkdownExample}
                  startIcon={
                    <span className="material-icons-outlined">download</span>
                  }
                  sx={{ mt: 1 }}
                >
                  Download Example Markdown File
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Box>
      </Box>
    </Container>
  );
};

export default MarkdownHelp;
