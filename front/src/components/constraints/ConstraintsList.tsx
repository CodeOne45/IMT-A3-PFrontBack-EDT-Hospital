import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useUpdatedConstraints } from "../../contexts/UpdatedConstraintsContext";
import { Constraint } from "../../types";
import { ConstraintsListItem } from "./ConstraintsListItem";

export const ConstraintsList = ({
  constraints,
  onUpdateConstraints,
  isLastVersion,
}: {
  constraints: Constraint[];
  onUpdateConstraints: (constraints: Constraint[]) => void;
  isLastVersion: boolean;
}) => {
  const { removedConstraints, addedConstraints, setRemovedConstraints } =
    useUpdatedConstraints();
  let constraintsByType: { [key: string]: Constraint[] } = {};

  // regrouper les contraintes par type
  constraints
    .filter((c) => !removedConstraints.includes(c.id))
    .forEach((constraint) => {
      if (!constraintsByType[constraint.type!]) {
        constraintsByType[constraint.type!] = [];
      }
      constraintsByType[constraint.type!].push(constraint);
    });
  /**
   * removes a constraint from the list
   * @param cons constraint to remove
   */
  const removeConstraint = (cons: Constraint) => {
    console.log("remove constraint", cons.id);
    removedConstraints.push(cons.id);
    setRemovedConstraints([...removedConstraints]);
  };

  // afficher les contraintes de chaque type
  return (
    <>
      {isLastVersion && (
        <>
          {addedConstraints.length > 0 && (
            <Box sx={{ background: green[50] }}>
              <h2>new Constraints</h2>
              {addedConstraints.map((constraint) => (
                <ConstraintsListItem
                  key={constraint.id}
                  constraint={constraints.find((c) => c.id === constraint.id)!}
                  onRemove={() => {}}
                  canRemove={false}
                />
              ))}
            </Box>
          )}
          {removedConstraints.length > 0 && (
            <Box sx={{ background: red[50] }}>
              <Typography>Removed Constriants</Typography>
              {removedConstraints.map((constraintId) => (
                <ConstraintsListItem
                  key={"removed" + constraintId}
                  constraint={constraints.find((c) => c.id === constraintId)!}
                  onRemove={() => {
                    removedConstraints.splice(
                      removedConstraints.indexOf(constraintId),
                      1
                    );
                    setRemovedConstraints([...removedConstraints]);
                  }}
                  canRemove={true}
                />
              ))}
            </Box>
          )}
        </>
      )}
      {Object.keys(constraintsByType).map((type, i) => (
        <Accordion
          key={type}
          style={{ backgroundColor: i % 2 === 0 ? "#eee" : "#fff" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            id="panel-header"
            aria-controls="panel-content"
          >
            <h3>{constraintsByType[type][0].name}</h3>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              gridTemplateColumns: "1fr 1fr",
              display: "grid",
              margin: "10px",
            }}
          >
            {constraintsByType[type].map((constraint) => (
              <ConstraintsListItem
                key={constraint.id}
                constraint={constraint}
                onRemove={removeConstraint}
                canRemove={isLastVersion}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
