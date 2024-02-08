import { Box } from "@mui/material";
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
  console.log("render constraints list");

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

  const removeConstraint = (cons: Constraint) => {
    console.log("remove constraint", cons.id);
    removedConstraints.push(cons.id);
    setRemovedConstraints([...removedConstraints]);
    // onUpdateConstraints(constraints.filter((c) => c.id !== cons.id));
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
              <h2>Removed Constriants</h2>
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
      {Object.keys(constraintsByType).map((type) => (
        <Box
          sx={{
            gridTemplateColumns: "1fr 1fr",
            display: "grid",
            margin: "10px",
          }}
          key={type}
        >
          {constraintsByType[type].map((constraint) => (
            <ConstraintsListItem
              key={`${type}${constraint.id}`}
              constraint={constraint}
              onRemove={removeConstraint}
              canRemove={isLastVersion}
            />
          ))}
        </Box>
      ))}
    </>
  );
};
