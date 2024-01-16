import {
  Autocomplete,
  TextField,
  Box,
  List,
  ListItem,
  Checkbox,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ConstraintPage from "./ConstraintPage";
import CalendarPicker from "./forms/CalendarPicker";
import { mockConstraints, mockNurses, mockShifts } from "./forms/mocks";
import { useSchedules } from "../../contexts/SchedulesContext";
import { Constraint } from "../../types";
import { useState } from "react";

interface AssignShiftProps {
  onBack: () => void;
  title: string;
}

export default function AssignShift(props: AssignShiftProps) {
  const { onBack, title } = props;

  const { schedules } = useSchedules();
  const currentSchedule = schedules[0];
  const [constraits, setConstraints] = useState(mockConstraints);

  const handleUpdateConstraint = (index: number, field: keyof Constraint) => {
    return (value: any) => {
      const newConstraints = [...constraits] as any[];
      newConstraints[index][field] = value;
      setConstraints(newConstraints);
    };
  };

  return (
    <ConstraintPage onBack={onBack}>
      <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 4 }}>
          {title}
        </Typography>

        <Box>
          {constraits.map((constraint, index) => (
            <>
              <Typography
                sx={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                #{index + 1} constraint
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "40px",
                  padding: "10px",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "14px", mb: 2 }}>Date</Typography>
                  <CalendarPicker
                    selectedDays={constraint.days || []}
                    onSelectDay={handleUpdateConstraint(index, "days")}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px", mb: 2 }}>
                    Shift
                  </Typography>
                  <Autocomplete
                    disablePortal
                    options={mockShifts}
                    renderInput={(params) => (
                      <TextField {...params} label="Shift" />
                    )}
                    defaultValue={
                      mockShifts[constraint.shifts ? constraint.shifts[0] : 0]
                    }
                    onChange={(event, value) => {
                      const shiftIndex = mockShifts.indexOf(value as string);
                      handleUpdateConstraint(index, "shifts")(shiftIndex);
                    }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px", mb: 2 }}>
                    Nurses
                  </Typography>
                  <List
                    dense
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    {mockNurses.map((value, i) => {
                      const labelId = `checkbox-list-secondary-label-${value}`;
                      return (
                        <ListItem
                          key={value}
                          secondaryAction={
                            <Checkbox
                              edge="end"
                              onChange={() => {
                                const newNurses = [
                                  ...(constraint.nurses || []),
                                ];

                                if (newNurses.includes(i)) {
                                  newNurses.splice(newNurses.indexOf(i), 1);
                                  handleUpdateConstraint(
                                    index,
                                    "nurses"
                                  )(newNurses);
                                } else {
                                  newNurses.push(i);
                                  handleUpdateConstraint(
                                    index,
                                    "nurses"
                                  )(newNurses);
                                }
                              }}
                              checked={constraint.nurses?.includes(i)}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          }
                          disablePadding
                        >
                          <ListItemButton>
                            <ListItemAvatar>
                              <Avatar
                                alt={value}
                                src={`/static/images/avatar/${value + 1}.jpg`}
                              />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={value} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.12)",
                }}
              />
            </>
          ))}
        </Box>
      </Box>
    </ConstraintPage>
  );
}
