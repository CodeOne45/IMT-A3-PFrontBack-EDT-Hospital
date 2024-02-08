import { Avatar, Box, Button, Typography } from "@mui/material";
import { Constraint } from "../../types";

export const ConstraintsListItem = ({
  onRemove,
  constraint,
  canRemove,
  style,
}: {
  onRemove: (cons: Constraint) => void;
  constraint: Constraint;
  canRemove: boolean;
  style?: {};
}) => {
  return (
    <Box
      sx={{
        ...style,
        display: "flex",
        flex: "1 1 0",
        alignContent: "center",
        alignItems: "center",
        borderColor: "#f0F0F0",
        borderWidth: "2px",
        borderStyle: "solid",
        margin: "10px",
        height: "50px",
      }}
    >
      {canRemove && (
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
      )}
      <Typography sx={{ marginLeft: canRemove ? "" : "15px" }}>
        {constraint.desc}
      </Typography>
    </Box>
  );
};
