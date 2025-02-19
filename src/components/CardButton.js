import { Button } from "@mui/material";
import React from "react";

const CardButton = ({ text, background, color, onClick }) => {
  return (
    <Button
      p={1}
      sx={{
        color: color,
        backgroundColor: background,
        borderRadius: "3rem",
        transition: "0.5s",
        padding: "0.2rem",
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
