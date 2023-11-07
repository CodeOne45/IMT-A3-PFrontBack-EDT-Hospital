import { AppBar, Box, Button, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import SideMenu from "../components/SideMenu";
import { AffectationTable } from "../components/AffectationsTable";
import CloseIcon from "@mui/icons-material/Close";
import ConstraintList from "../components/ConstraintList";
import { VersionComponent } from "../components/Version";
import AddIcon from "@mui/icons-material/Add";

export default function Home() {
    const [versions, setVersions] = useState(1);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px",
                    pl: 2,
                }}
            >
                Hospital Planning
            </AppBar>
            <Box
                sx={{
                    display: "flex",
                    height: "calc(100vh - 60px)",
                }}
            >
                <SideMenu />
                <Box sx={{ p: 4, overflowX: "scroll" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {Array.from({ length: versions }).map((_, index) => (
                            <VersionComponent
                                versionNumber={index + 1}
                                selectedVersion={index === versions - 1}
                                key={index}
                            />
                        ))}
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                height: "100%",
                                margin: "0 10px",
                                aspectRatio: "1/1",
                            }}
                            onClick={() => setVersions(versions + 1)}
                        >
                            <AddIcon fontSize="large" />
                        </Button>
                    </Box>
                    <AffectationTable />
                    <Button
                        variant="contained"
                        sx={{ mt: 2 }}
                        onClick={handleOpenModal}
                    >
                        Ajouter une contrainte
                    </Button>
                </Box>
            </Box>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 600,
                        height: 600,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        borderRadius: 2,
                        p: 4,
                        overflowY: "scroll",
                    }}
                >
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                        }}
                        onClick={handleCloseModal}
                    >
                        <CloseIcon />
                    </IconButton>
                    <ConstraintList />
                </Box>
            </Modal>
        </>
    );
}
