import { Box } from "@mui/material";
import React, { useState } from "react";
import CalendarLabelItem from "./CalendarLabelItem";
import CalendarItem from "./CalendarItem";

interface CalendarPickerProps {
  selectedDays: number[];
  onSelectDay: (day: number[]) => void;
}

export default function CalendarPicker(props: CalendarPickerProps) {
  const { selectedDays, onSelectDay } = props;

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  // Array of number from 1 to 28
  const dayNumber = Array.from(Array(28).keys());

  return (
    <Box
      sx={{
        height: 300,
        width: 300,
        border: "2px solid grey",
        borderStyle: "dashed",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          columnGap: "10px",
          paddingTop: "10px",
        }}
      >
        {days.map((day) => (
          <CalendarLabelItem title={day} />
        ))}
        {dayNumber.map((day) => (
          <CalendarItem
            day={day}
            selected={selectedDays.includes(day)}
            onClick={() =>
              onSelectDay(
                selectedDays.includes(day)
                  ? selectedDays.filter((d) => d !== day)
                  : [...selectedDays, day]
              )
            }
          />
        ))}
      </Box>
    </Box>
  );
}
