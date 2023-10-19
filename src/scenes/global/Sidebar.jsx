import React, { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import InsightsIcon from "@mui/icons-material/Insights";
import samplesData from "../../data/samplesHelper";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const { palette } = useTheme();

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: palette.grey[100]
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        "& .pro-sidebar-inner": {
          background: `#002851 !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          color: "#12efc8!important"
        },
        "& .pro-menu-item.active": {
          color: `#12efc8 !important`
        }
      }}
    >
      <ProSidebar>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            icon={<MenuOutlinedIcon color={palette.grey[100]} />}
            style={{
              margin: "10px 0 20px 0",
              //   color: "#f8f8f8"
              color: palette.grey[100]
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={palette.grey[100]}>
                eDNADash
              </Typography>
            </Box>
          </MenuItem>
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/fish.jpeg`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={palette.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Name
              </Typography>
              <Typography variant="h5" color={palette.primary[500]}>
                location
              </Typography>
            </Box>
          </Box>

          <Box paddingLeft={"10%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={palette.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            {samplesData.map((item, index) => (
              <Item
                key={index}
                title={`Sample ${index + 1}`}
                to={`sample/${item.id}`}
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            ))}

            <Typography
              variant="h6"
              color={palette.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Other
            </Typography>
            <Item
              title="Insights"
              to="/insights"
              icon={<InsightsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
