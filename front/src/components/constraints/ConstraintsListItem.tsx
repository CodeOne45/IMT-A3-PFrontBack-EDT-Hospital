import { Avatar, Box, Button, Typography } from "@mui/material";
import { Constraint } from "../../types";

export const ConstraintsListItem = ({
  onRemove,
  constraint,
}: {
  onRemove: (cons: Constraint) => void;
  constraint: Constraint;
}) => {
  return (
    <Box sx={{
      display: "flex",
      flex: "1 1 0",
      alignContent: "center",
      alignItems: "center",
    }}>
      <Button
        onClick={() => onRemove(constraint)}
        sx={{ display: "flex", alignItems: "center", height: "50px" }}
      >
        <Avatar
          sx={{
            width: "25px",
            height: "25px",
            bgcolor: "secondary.main",
            mr: 1,
            fontSize: "17px",
          }}
        >
          X
        </Avatar>
      </Button>
        <Typography sx={{ fontSize: "24px" }}>{constraint.name}</Typography>
    </Box>
  );
};
