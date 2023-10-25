import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import QrCodeIcon from "@mui/icons-material/QrCode";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import Header from "../../components/Headers";

import BarChart from "../../components/BarChart";
import SunburstChart from "../../components/SunburstChart";
import StatTable from "../../components/StatTable";
import StatBox from "../../components/StatBox";
import Footer from "../../components/Footer";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import samplesData from "../../data/samplesHelper";

const getSampleData = async (token) => {
  const filePath = `../../data/output/output${token}.json`;
  console.log(filePath);

  // Dynamically import the JSON file
  const module = await import(filePath);

  return module.default;
};

const Sample = () => {
  const { token } = useParams();

  console.log("This is he token", token);
  const { palette } = useTheme();

  const sampleData = samplesData[parseInt(token, 10) - 1];

  return (
    <Box m="20px" pr="10px" sx={{ height: "100%" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title={`Sample ${token}`} subtitle="Dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: palette.primary[600],
              color: palette.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px"
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="120px"
        gap="20px"
        sx={{ height: "100%" }}
        pb="10px"
      >
        <Box gridColumn="span 2">
          <StatBox
            title={"###"}
            subtitle="Sample ID"
            icon={
              <QrCodeIcon
                sx={{ color: palette.primary[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box gridColumn="span 2">
          <StatBox
            title={new Date(sampleData.date).toLocaleDateString()}
            subtitle="Date Collected"
            icon={
              <CalendarTodayIcon
                sx={{ color: palette.primary[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box gridColumn="span 2">
          <StatBox
            title={
              new Set(sampleData.output.map((item) => item.organism.trim()))
                .size
            }
            subtitle="Number of Species"
            icon={
              <NumbersOutlinedIcon
                sx={{ color: palette.primary[600], fontSize: "26px" }}
              />
            }
          />
        </Box>{" "}
        <Box gridColumn="span 2">
          <StatBox
            title={"95%"}
            subtitle="Confidence Level *"
            icon={
              <CheckCircleOutlineIcon
                sx={{ color: palette.primary[600], fontSize: "26px" }}
              />
            }
            progress="0.80"
          />
        </Box>
        {/* <Box
          gridColumn="span 4"
          // backgroundColor="#ffffff"
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
        >
          <StatBox
            title={new Date(sampleData.date).toLocaleDateString()}
            subtitle="Date Collected"
            icon={
              <CalendarTodayIcon
                sx={{ color: palette.primary[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}
        {/* PIE */}
        <Box gridColumn="span 4" gridRow="span 3" backgroundColor="#ffffff">
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={palette.grey[900]}
              >
                Breakdown of Species Identity
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: palette.primary[600] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="350px">
            <SunburstChart data={[sampleData]} />
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor="#ffffff"
          overflow="auto"
          // sx={{ height: "20%" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // borderBottom={`4px solid ${palette.grey[100]}`}
            palette={palette.grey[100]}
            p="15px"
          >
            <Typography color={palette.grey[900]} variant="h3" fontWeight="600">
              All Species Found
            </Typography>
          </Box>
          <Box height="240px">
            <StatTable data={sampleData.output} />
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor="#ffffff">
          <Typography
            variant="h3"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Top 5 Species
          </Typography>
          <Box height="220px" mt="-20px">
            <BarChart data={[sampleData]} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default Sample;
