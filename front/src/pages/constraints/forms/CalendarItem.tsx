import React from "react";
import { Box } from "@mui/material";

interface CalendarItemProps {
  day: number;
  selected: boolean;
  onClick: () => void;
}

export default function CalendarItem(props: CalendarItemProps) {
  const { day, selected, onClick } = props;

  return (
    <Box
      sx={{
        height: "30px",
        width: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor: selected ? "primary.main" : "transparent",
        color: selected ? "white" : "black",
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={onClick}
    >
      {day + 1}
    </Box>
  );
}
