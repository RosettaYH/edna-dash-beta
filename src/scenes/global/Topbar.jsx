import React, { useState } from "react";
import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const { palette } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    // For now, we're just logging the query to the console
    console.log("Searching for:", searchQuery);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      backgroundColor={palette.background.light}
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={palette.grey[200]}
        borderRadius="3px"
      >
        <InputBase
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search"
        />
        <IconButton type="button" sx={{ p: 1 }} onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
