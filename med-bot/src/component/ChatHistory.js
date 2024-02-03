import React from "react";
import { Typography } from "@mui/material";
import "./MyComponent.css";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import IconButton from "@mui/material/IconButton";

export default function ChatHistory() {
  return (
    <div>
      <Typography
        sx={{
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "600",
          fontStyle: "normal",
          textAlign: "left",
          marginTop: "10px",
        }}
      >
        Upload Report
      </Typography>
      <hr style={{ border: "1px solid grey", marginTop: "35px" }} />
      <IconButton
        type="button"
        sx={{
          p: "10px",
          position:'relative',
          top:'150px',
          "& .MuiSvgIcon-root": {
            fontSize: "8rem", // Adjust the font size as needed to increase the icon size
          },
        }}
        aria-label="search"
      >
        <AttachEmailOutlinedIcon />
      </IconButton>
    </div>
  );
}
