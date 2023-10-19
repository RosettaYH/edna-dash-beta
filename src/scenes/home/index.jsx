import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar, GridEventListener } from "@mui/x-data-grid";
import Header from "../../components/Headers";
import BarChart from "../../components/BarChart";
import TimeChart from "../../components/TimeChart";
import { useTheme } from "@mui/material";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import samplesData from "../../data/samplesHelper";

const Home = () => {
  const { palette } = useTheme();

  const handleEvent: GridEventListener<"rowClick"> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    console.log(params.row);
    return <Link to={`sample/${params.row.id}`} />;
  };

  const columns = [
    { field: "id", headerName: "Sample ID", flex: 0.5 },
    {
      field: "date",
      headerName: "Date Collected",
      flex: 1,
      valueFormatter: (params) => {
        const formattedDate = new Date(params.value).toLocaleDateString();
        return formattedDate;
      }
    }
  ];
  // console.log(barcodes);
  return (
    <div>
      <Box m="20px" pr="10px" background={palette.background.main}>
        <Header title="Home" subtitle="List of Samples" />
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="150px"
          gap="20px"
          sx={{ height: "100%" }}
        >
          <Box
            gridColumn="span 6"
            gridRow="span 4"
            m="0 0 0 0"
            //   height="75vh"
            sx={{
              backgroundColor: "#ffffff",
              color: palette.primary[400],
              "& .name-column--cell": {
                color: palette.primary[300]
              },
              "& .MuiDataGrid-columnHeaders": {
                color: "#3661eb",
                fontSize: 16,
                fontWeight: "bold"
              }
            }}
          >
            <DataGrid
              rows={samplesData}
              columns={columns}
              onRowClick={handleEvent}
              getRowId={(row) => row.id}
              sx={{
                color: palette.grey[900]
              }}
            />
          </Box>
          <Box gridColumn="span 6" gridRow="span 2" backgroundColor="#ffffff">
            <Typography
              variant="h3"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Distribution of species
            </Typography>
            <Box height="300px" mt="-20px">
              <BarChart data={samplesData} />
            </Box>
          </Box>
          <Box gridColumn="span 6" gridRow="span 2" backgroundColor="#ffffff">
            <Typography
              variant="h3"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Date Collected
            </Typography>
            <Box height="300px" mt="-30px">
              <TimeChart data={samplesData} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
