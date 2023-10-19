import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../components/Headers";
import BarChart from "../../components/BarChart";
import samplesData from "../../data/samplesHelper";

const Stat = () => {
  const { palette } = useTheme();
  return (
    <div>
      <Box m="20px" pr="10px" background={palette.background.main}>
        <Header title="Stat" />
        <BarChart data={samplesData} />
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="150px"
          gap="20px"
          sx={{ height: "100%" }}
        >
          <Box gridColumn="span 12" gridRow="span 4" backgroundColor="#ffffff">
            <Typography
              variant="h3"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Distribution Across All Samples
            </Typography>
            <Box height="70vh" mt="-20px">
              <BarChart data={samplesData} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default Stat;
