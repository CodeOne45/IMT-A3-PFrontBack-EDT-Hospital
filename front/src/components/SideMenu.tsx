import { Box, List, ListItemButton } from "@mui/material";
import React from "react";
import SideMenuItem from "./SideMenuItem";

export default function SideMenu() {
    return (
        <Box
            sx={{
                width: "300px",
                boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.70)",
                height: "100vh",
            }}
        >
            <List>
                <ListItemButton>
                    <SideMenuItem index={1} title="Choix de la matrice" />
                </ListItemButton>
                <ListItemButton>
                    <SideMenuItem index={2} title="Contraintes spécifiques" />
                </ListItemButton>
                <ListItemButton>
                    <SideMenuItem
                        index={3}
                        title="Contrainte categories par type"
                    />
                </ListItemButton>
            </List>
        </Box>
    );
}
