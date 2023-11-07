import { Box, IconButton } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface ConstraintPageProps {
    children: React.ReactNode;
    onBack: () => void;
}

export default function ConstraintPage(props: ConstraintPageProps) {
    const { children, onBack } = props;
    return (
        <Box>
            <IconButton
                sx={{ position: "absolute", top: 0, left: 0 }}
                onClick={onBack}
            >
                <ArrowBackIcon />
            </IconButton>

            {children}
        </Box>
    );
}
