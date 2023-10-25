import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme, Box } from "@mui/material";

const StatTable = ({ data }) => {
  const { palette } = useTheme();
  const columns = [
    {
      field: "organism",
      headerName: "Organism",
      flex: 2
    },

    {
      field: "percent_identity",
      headerName: "Percent Identity",
      flex: 1
    },
    {
      field: "value",
      headerName: "Number of Occurences",
      flex: 1
    },
    {
      field: "accession",
      headerName: "Species Accession",
      flex: 1
    },

    {
      field: "class_name",
      headerName: "Class Name",
      flex: 1
    },
    {
      field: "order_name",
      headerName: "Order Name",
      flex: 1
    },
    // {
    //   field: "suborder",
    //   headerName: "Suborder",
    //   flex: 1,
    // },
    {
      field: "family",
      headerName: "Family",
      flex: 1
    },
    {
      field: "genus",
      headerName: "Genus",
      flex: 1
    }
  ];

  return (
    <Box
      height="480px"
      display="auto" // Sets this box as a flex container.
      flexDirection="column" // Ensures children stack vertically.
      sx={{
        flex: "1", // Allows the box to grow and fill its parent's height.
        backgroundColor: "#ffffff",
        color: "#3661eb",
        "& .MuiDataGrid-columnHeaders": {
          color: palette.grey[700]
        },
        "& .MuiDataGrid-root": {
          borderColor: "transparent"
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          whiteSpace: "normal",
          wordWrap: "break-word",
          lineHeight: "15px"
        }
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        slots={{
          toolbar: GridToolbar
        }}
        sx={{
          color: "#0f0f0f",
          flex: "1" // This is crucial. It makes DataGrid fill the height of its parent box.
        }}
      />
    </Box>
  );
};

export default StatTable;
