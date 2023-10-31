import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

interface SideMenuItemProps {
    index: number;
    title: string;
}

export default function SideMenuItem(props: SideMenuItemProps) {
    const { index, title } = props;
    return (
        <Box sx={{ display: "flex", alignItems: "center", height: "50px" }}>
            <Avatar
                sx={{
                    width: "25px",
                    height: "25px",
                    bgcolor: "red",
                    mr: 1,
                    fontSize: "17px",
                }}
            >
                {index}
            </Avatar>
            <Typography sx={{ fontSize: "12px" }}>{title}</Typography>
        </Box>
    );
}
