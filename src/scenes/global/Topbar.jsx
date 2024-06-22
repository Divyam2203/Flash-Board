import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  return (
    <div className="flex justify-between">
      {/* Search Bar */}
      <div className="flex rounded">
        <input placeholder="Search" />
        <button>
          <SearchIcon />
        </button>
      </div>
      {/* Icons */}
      <div className="flex">
        <div>
          <button>
            <LightModeOutlinedIcon />
          </button>
        </div>
        <div>
          <button>
            <DarkModeOutlinedIcon />
          </button>
        </div>
        <div>
          <button>
            <NotificationsOutlinedIcon />
          </button>
        </div>
        <div>
          <button>
            <SettingsOutlinedIcon />
          </button>
        </div>
        <div>
          <button>
            <PersonOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
