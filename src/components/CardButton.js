import { Button } from "@mui/material";
import React from "react";

const CardButton = ({ text, background, color, onClick, size }) => {
  return (
    <Button
    size={size}
      p={1}
      sx={{
        color: color,
        backgroundColor: background,
        borderRadius: "3rem",
        transition: "0.5s",
        padding: "0.5rem",
        fontSize:"0.8rem",
        textTransform:"lowercase",
        "&:hover": {
          backgroundColor: color,
          color: "#fff",
        },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CardButton;
