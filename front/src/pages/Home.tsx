import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Box, Button, IconButton, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { AffectationTable } from "../components/AffectationsTable";
import CreateConstraintList from "../components/CreateConstraintList";
import SideMenu from "../components/SideMenu";

import { VersionsList } from "../components/VersionsList";
import { ConstraintsList } from "../components/constraints/ConstraintsList";
import { endPoint } from "../config";
import { useSchedules } from "../contexts/SchedulesContext";

export default function Home() {
  const { initSchedules, schedules } = useSchedules();

  const [selectedVerison, setSelectedVersion] = useState(0); // [0, 1, 2, 3]
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    fetch(`${endPoint}/all/`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        initSchedules(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (schedules.length === 0) {
    return <></>;
  }

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
        <Box sx={{ p: 4, overflowX: "scroll" , flex:1}}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <VersionsList
              versions={schedules.length}
              selectedVersion={selectedVerison}
              onSelectVersion={(index) => setSelectedVersion(index)}
            />
          </Box>
          <AffectationTable schedule={schedules[selectedVerison]} />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleOpenModal}>
            Ajouter une contrainte
          </Button>
          <ConstraintsList constraints={schedules[selectedVerison].constraints} />
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
          <CreateConstraintList />
        </Box>
      </Modal>
    </>
  );
}
