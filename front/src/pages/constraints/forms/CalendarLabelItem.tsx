import { Box } from "@mui/material";
import React from "react";

interface CalendarItemProps {
  title: string;
}

export default function CalendarLabelItem(props: CalendarItemProps) {
  const { title } = props;

  return (
    <Box
      sx={{
        height: "30px",
        width: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "lighter",
        fontSize: "10px",
        marginBottom: "-20px",
      }}
    >
      {title}
    </Box>
  );
}
