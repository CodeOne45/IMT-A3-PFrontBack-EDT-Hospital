import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import AssignShift from "../pages/constraints/AssignShift";
import ConstraintItem from "./CreateConstraintItem";

export default function CreateConstraintList() {
  const [component, setComponent] = React.useState<any>(null);
  const [search, setSearch] = React.useState<string>("");

  const handleBack = () => {
    setComponent(null);
  };

  type Category = {
    title: string;
    constraints: {
      name: string;
      component: any;
    }[];
  };

  // 1 2 3 4 5 / 10 13 14 16 18 19 20 21 / 5 8 11 12 15 17 / 6 7 / 9)

  const category1: Category = {
    title: "Assign/Forbid shift",
    constraints: [
      {
        name: "1-2: Assign shift to nurses",
        component: (
          <AssignShift
            onBack={handleBack}
            title="1-2: Assign shift to nurses"
            id="cst0"
          />
        ),
      },
      {
        name: "3-4: Forbid shift to nurses",
        component: <></>,
      },
      {
        name: "5: Forbid a pattern for a group of nurses over a certain period (S,D,N)",
        component: <></>,
      },
    ],
  };

  const category2: Category = {
    title: "Preferences",
    constraints: [
      {
        name: "6: Fix a maximum of shift types for a group of nurses over a certain period (S,D,N,P)",
        component: <></>,
      },
      {
        name: "7: Respect a certain amount of preferences for a group of nurses (N,P)",
        component: <></>,
      },
    ],
  };

  const category3: Category = {
    title: "Cover",
    constraints: [
      {
        name: "9: Cover demand for each shift (P)",
        component: <></>,
      },
    ],
  };

  const category4: Category = {
    title: "Minimum/Maximum",
    constraints: [
      {
        name: "10: Minimum days off each fortnight (N,P)",
        component: <></>,
      },
      {
        name: "13: Maximum hours each week (N,P)",
        component: <></>,
      },
      {
        name: "14: Minimum hours each week (N,P)",
        component: <></>,
      },
      {
        name: "16: Maximum hours of work for each 7-day period (N,P)",
        component: <></>,
      },
      {
        name: "18: Maximum hours on a given period (D,N,P)",
        component: <></>,
      },
      {
        name: "19: Maximum number of shifts worked on a given period (N,P)",
        component: <></>,
      },
      {
        name: "20: Minimum hours on a given period (D,N,P)",
        component: <></>,
      },
      {
        name: "21: Maximum number of shifts worked on a given period (N,P)",
        component: <></>,
      },
    ],
  };

  const category5: Category = {
    title: "Breaks",
    constraints: [
      {
        name: "8: Avoid isolated days off (D,N)",
        component: <></>,
      },
      {
        name: "11: Minimum break time between 2 working shifts (D,N,P)",
        component: <></>,
      },
      {
        name: "12: Limit consecutive working days (D,N,P)",
        component: <></>,
      },
      {
        name: "15: At least one block of a x-hour break each week (N,P)",
        component: <></>,
      },
      {
        name: "17: At least one weekend (Sat/Sun or Sun/Mon) off each fortnight (N)",
        component: <></>,
      },
    ],
  };

  const categories: Category[] = [
    category1,
    category2,
    category3,
    category4,
    category5,
  ];

  return (
    <>
      {component ? (
        component
      ) : (
        <>
          <Typography variant="h6">Constraints</Typography>
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            placeholder="Search for a constraint..."
            sx={{ mt: 2 }}
            onChange={(e) => setSearch(e.target.value)}
          />
          {categories
            // .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
            .map((category) => {
              return (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6">{category.title}</Typography>
                  {category.constraints.map((constraint) => (
                    <Box sx={{ mt: 1 }}>
                      <ConstraintItem
                        name={constraint.name}
                        onClick={() => {
                          setComponent(
                            <AssignShift
                              onBack={handleBack}
                              title="Assign 1 shift to 1/many nurse(s) once (S,D,N)"
                              id="cst0"
                            />
                          );
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              );
            })}
        </>
      )}
    </>
  );
}
