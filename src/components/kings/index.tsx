import { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import kingsData from "@/content/JSON_data/kings.json"; // Direct import

interface King {
  id: number;
  name: string;
  reign: string;
  description: string;
}

const ScrollContainer = styled(Box)({
  overflowX: "auto",
});

const DescriptionCell = styled(TableCell)({
  maxWidth: 240,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
});

export default function Kings() {
  const [kings] = useState<King[]>(kingsData); // Set state from import

  const getGoogleSearchUrl = (name: string) =>
    `https://www.google.com/search?q=${encodeURIComponent(
      `${name} king of Baramba`
    )}`;

  return (
    <TableContainer sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Former Kings of Our Village
      </Typography>
      {kings.length === 0 ? (
        <Typography>No kings found.</Typography>
      ) : (
        <ScrollContainer>
          <Table size="medium" padding="normal">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Reign</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {kings.map((king) => (
                <TableRow key={king.id}>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Link
                        href={getGoogleSearchUrl(king.name)}
                        target="_blank"
                        rel="noopener"
                        underline="hover"
                        sx={{ textUnderlineOffset: "4px" }}
                      >
                        <Typography variant="body1" fontWeight="600">
                          {king.name}
                        </Typography>
                      </Link>
                    </Box>
                  </TableCell>
                  <TableCell>{king.reign}</TableCell>
                  <DescriptionCell>{king.description}</DescriptionCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollContainer>
      )}
    </TableContainer>
  );
}
