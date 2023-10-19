import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  const { palette } = useTheme();
  return (
    <Box mb="30px">
      <Typography
        variant="h1"
        color={palette.grey[900]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h3" color={palette.primary[600]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
