import React, { Fragment, useState } from "react";
import ConstraintPage from "../ConstraintPage";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import CalendarPicker from "./CalendarPicker";
import { useSchedules } from "../../../contexts/SchedulesContext";
import { Constraint } from "../../../types";
import { endPoint } from "../../../config";
import { mockNurses, mockShifts } from "./mocks";

interface GenericFormProps {
  onBack: () => void;
  id: number;
  title: string;
  S?: boolean;
  D?: boolean;
  N?: boolean;
  P?: boolean;
}

export default function GenericForm(props: GenericFormProps) {
  const { onBack, id, title, S, D, N, P } = props;

  const { schedules, addSchedule } = useSchedules();
  const currentSchedule = schedules[schedules.length - 1];

  const [constraints, setConstraints] = useState(
    currentSchedule.constraints.filter((c) => c.id === `cst${id}`)
  );

  const handleSave = (constraint: Constraint) => {
    const payload = {
      id_model: currentSchedule.id_model,
      iteration: true,
      id_iteration: -1,
      new_constraints: [
        {
          id,
          days: D ? constraint.days : [],
          shifts: S ? constraint.shifts : [],
          nurses: N ? constraint.nurses : [],
          params: [],
        },
      ],
    };
    fetch(`${endPoint}/constraint`, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((response) => {
        // update context with the new schedule
        addSchedule(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddConstraint = () => {
    const blankConstraint = {
      id: "",
      days: [],
      shifts: [],
      nurses: [],
    };
    setConstraints([blankConstraint, ...constraints]);
  };

  const checkIfConstraintIsNew = (constraint: Constraint) => {
    return !currentSchedule.constraints.find(
      (c) =>
        c.id === constraint.id &&
        c.shifts === constraint.shifts &&
        c.days === constraint.days &&
        c.nurses === constraint.nurses
    );
  };

  const handleUpdateConstraint = (index: number, field: keyof Constraint) => {
    return (value: any) => {
      const newConstraints = [...constraints] as any[];
      newConstraints[index][field] = value;
      setConstraints(newConstraints);
    };
  };

  return (
    <ConstraintPage onBack={onBack}>
      <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold", mt: 2, mb: 2 }}>
          {title}
        </Typography>

        <Button
          variant="contained"
          onClick={handleAddConstraint}
          color="primary"
          sx={{ mb: 4 }}
        >
          Add constraint
        </Button>

        <Box>
          {constraints.map((constraint, index) => (
            <Fragment key={`constraint-${index}`}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "ceneter",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                >
                  #{constraints.length - index} constraint
                </Typography>
                {checkIfConstraintIsNew(constraint) && (
                  <Button
                    variant="contained"
                    onClick={() => handleSave(constraint)}
                    color="success"
                  >
                    Save
                  </Button>
                )}
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "40px",
                  padding: "10px",
                }}
              >
                // D
                {D && (
                  <Box>
                    <Typography sx={{ fontSize: "14px", mb: 2 }}>
                      Date
                    </Typography>
                    <CalendarPicker
                      selectedDays={constraint.days || []}
                      onSelectDay={handleUpdateConstraint(index, "days")}
                    />
                  </Box>
                )}
                {/* S */}
                {S && (
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
                        handleUpdateConstraint(index, "shifts")([shiftIndex]);
                      }}
                    />
                  </Box>
                )}
                {/* N */}
                {N && (
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
                )}
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.12)",
                  mb: 4,
                }}
              />
            </Fragment>
          ))}
        </Box>
      </Box>
    </ConstraintPage>
  );
}