import React from "react";
import { Container, Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ p: 1, borderTop: "1px solid #e0e0e0" }}>
      <Container maxWidth="lg">
        {/* <Typography variant="body2" color="textSecondary" align="center">
          © Species Tracks {new Date().getFullYear()}
        </Typography> */}
        <Typography variant="body2" color="textSecondary" align="center" mt={0}>
          * All data are shown for matches over 500 occurences
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
