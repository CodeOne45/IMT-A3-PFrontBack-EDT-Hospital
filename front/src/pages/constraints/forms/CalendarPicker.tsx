import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import CalendarItem from "./CalendarItem";
import CalendarLabelItem from "./CalendarLabelItem";

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
      const dayOfTheWeek = Math.floor(day % 7);
      const newSelectedDays = selectedDays.filter(
        (d) => Math.floor(d % 7) !== dayOfTheWeek
      );
      if (selectedDays.includes(day)) {
        onSelectDay(newSelectedDays);

        return;
      } else {
        // if the day is not selected, check all the week
        for (let i = dayOfTheWeek; i < 28; i += 7) {
          newSelectedDays.push(i);
        }
        console.log("newSelectedDays", newSelectedDays);
        onSelectDay(newSelectedDays);
        return;
      }
    } else {
      onSelectDay(
        selectedDays.includes(day)
          ? selectedDays.filter((d) => d !== day)
          : [...selectedDays, day]
      );
    }
  };

  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            onChange={() => {
              setIsWeekSelected((prev) => !prev);
            }}
            checked={isWeekSelected}
          />
        }
        label="Select Week"
        sx={{ mb: 2 }}
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
          {days.map((day, i) => (
            <CalendarLabelItem key={i + day} title={day} />
          ))}
          {dayNumber.map((day, j) => (
            <CalendarItem
              key={j + day}
              day={day}
              selected={selectedDays.includes(day)}
              onClick={() => handleDayClick(day)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
