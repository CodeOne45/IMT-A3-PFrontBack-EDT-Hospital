import { Box, Typography } from "@mui/material";
import React from "react";
import AssignShift from "../pages/constraints/AssignShift";
import ConstraintItem from "./CreateConstraintItem";

export default function CreateConstraintList() {
    const [component, setComponent] = React.useState<any>(null);

    const handleBack = () => {
        setComponent(null);
    };

    const constraints = [
        {
            name: "1: Assign 1 shift to 1/many nurse(s) once (S,D,N)",
            component: <AssignShift onBack={handleBack} />,
        },
        {
            name: "2: Assign 1 shift to 1/many nurse(s) each week (S,D,N)",
            component: <></>,
        },
        {
            name: "3: Forbid 1 shift to 1/many nurse(s) once (S,D,N)",
            component: <></>,
        },
        {
            name: "4: Forbid 1 shift to 1/many nurse(s) each week (S,D,N)",
            component: <></>,
        },
        {
            name: "5: Forbid a pattern for a group of nurses over a certain period (S,D,N)",
            component: <></>,
        },
        {
            name: "6: Fix a maximum of shift types for a group of nurses over a certain period (S,D,N,P)",
            component: <></>,
        },
        {
            name: "7: Respect a certain amount of preferences for a group of nurses (N,P)",
            component: <></>,
        },
        {
            name: "8: Avoid isolated days off (D,N)",
            component: <></>,
        },
        {
            name: "9: Cover demand for each shift (P)",
            component: <></>,
        },
        {
            name: "10: Minimum days off each fortnight (N,P)",
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
            name: "13: Maximum hours each week (N,P)",
            component: <></>,
        },
        {
            name: "14: Minimum hours each week (N,P)",
            component: <></>,
        },
        {
            name: "15: At least one block of a x-hour break each week (N,P)",
            component: <></>,
        },
        {
            name: "16: Maximum hours of work for each 7-day period (N,P)",
            component: <></>,
        },
        {
            name: "17: At least one weekend (Sat/Sun or Sun/Mon) off each fortnight (N)",
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
    ];

    return (
        <>
            {component ? (
                component
            ) : (
                <>
                    <Typography variant="h6">Contraintes</Typography>
                    {constraints.map((constraint) => {
                        return (
                            <Box sx={{ mt: 3 }}>
                                <ConstraintItem
                                    name={constraint.name}
                                    onClick={() => {
                                        setComponent(
                                            <AssignShift onBack={handleBack} />
                                        );
                                    }}
                                />
                            </Box>
                        );
                    })}
                </>
            )}
        </>
    );
}
