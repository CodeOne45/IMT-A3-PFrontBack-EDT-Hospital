import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Box, Button, IconButton, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { AffectationTable } from "../components/AffectationsTable";
import ConstraintList from "../components/CreateConstraintList";
import SideMenu from "../components/SideMenu";

import { VersionsList } from "../components/VersionsList";
import { endPoint } from "../config";

export default function Home() {
  const [versions, setVersions] = useState([]);
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
        setVersions(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
            <VersionsList versions={versions.length} selectedVersion={selectedVerison} onSelectVersion={(index) => setSelectedVersion(index)}  />
          </Box>
          <AffectationTable schedule={versions[selectedVerison]} />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleOpenModal}>
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
