import { Info } from "@mui/icons-material";
import { Box, Popover } from "@mui/material";
import { useState } from "react";
import { useRecommandations } from "../../contexts/RecommandationsContext";

export const AffectationTableItem = ({
  recommandations,
  affectation,
  iNurse,
}: {
  recommandations: {
    text: string | undefined;
    shift:
      | {
          day: number;
          shift: number;
          nurse: number;
        }
      | undefined;
  }[];
  affectation: {
    name: string;
    days: JSX.Element[];
  };
  iNurse: number;
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const { areRecommandationsShowed } = useRecommandations();
  const open = Boolean(anchorEl);

  const valueToClass = (value: string) => {
    switch (value) {
      case "N":
        return "night";
      case "R":
        return "rest";
      case "E":
        return "evening";
      case "M":
        return "morning";
    }
  };

  return (
    <tr key={affectation.name}>
      <td>{affectation.name}</td>
      {affectation.days.map((day, iJours) => (
        <td className={valueToClass(day.key ?? "")} key={iNurse}>
          {areRecommandationsShowed &&
          recommandations.find(
            (r) => r.shift?.day === iJours + 1 && r.shift.nurse === iNurse + 1
          ) ? (
            <Box sx={{ display: "inline-block" }}>
              <Box
                sx={{
                  transform: "scale(0.6, 0.6) translate(100%, -50%)",
                  position: "absolute",
                  cursor: "help",
                }}
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <Info
                  sx={{
                    fill: "red !important",
                  }}
                />
              </Box>
              <Popover
                transformOrigin={{ horizontal: "center", vertical: "bottom" }}
                anchorOrigin={{ horizontal: "center", vertical: "top" }}
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                {
                  recommandations.find(
                    (r) =>
                      r.shift?.day === iJours + 1 &&
                      r.shift.nurse === iNurse + 1
                  )?.text
                }
              </Popover>
            </Box>
          ) : null}
          {day}
        </td>
      ))}
    </tr>
  );
};
