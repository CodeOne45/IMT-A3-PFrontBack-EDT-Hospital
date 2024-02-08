import { Box, FormControl, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import CalendarLabelItem from "./CalendarLabelItem";
import CalendarItem from "./CalendarItem";
import { CheckBox } from "@mui/icons-material";

interface CalendarPickerProps {
  selectedDays: number[];
  onSelectDay: (day: number[]) => void;
}

export default function CalendarPicker(props: CalendarPickerProps) {
  const { selectedDays, onSelectDay } = props;
  const [isWeekSelected, setIsWeekSelected] = useState(false);

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  // Array of number from 1 to 28
  const dayNumber = Array.from(Array(28).keys());

  const handleDayClick = (day: number) => {
    if (isWeekSelected) {
      // if the day is already selected, uncheck all the week
      if (selectedDays.includes(day)) {
        const dayNumber = day / 7;
        onSelectDay(selectedDays.filter((d) => d % dayNumber !== 0));
        return;
      } else {
        // if the day is not selected, check all the week
        const dayNumber = day / 7;
        const newSelectedDays = selectedDays.filter((d) => d % dayNumber !== 0);
        for (let i = dayNumber; i < 28; i += 7) {
          newSelectedDays.push(i);
        }
        onSelectDay(newSelectedDays);
        return;
      }
    }
    onSelectDay(
      selectedDays.includes(day)
        ? selectedDays.filter((d) => d !== day)
        : [...selectedDays, day]
    );
  };

  return (
    <Box>
      <FormControlLabel
        control={
          <CheckBox
            onClick={() => {
              setIsWeekSelected((prev) => !prev);
            }}
          />
        }
        label="Select Week"
        sx={{ ml: 2, mb: 2 }}
      />
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
    </Box>
  );
}
