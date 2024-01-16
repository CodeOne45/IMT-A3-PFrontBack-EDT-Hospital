import { Constraint } from "../../types";
import { ConstraintsListItem } from "./ConstraintsListItem";

export const ConstraintsList = ({
  constraints,
  onUpdateConstraints,
}: {
  constraints: Constraint[];
  onUpdateConstraints: (constraints: Constraint[]) => void;
}) => {
  let constraintsByType: { [key: string]: Constraint[] } = {};
  // regrouper les contraintes par type
  constraints.forEach((constraint) => {
    if (!constraintsByType[constraint.type!]) {
      constraintsByType[constraint.type!] = [];
    }
    constraintsByType[constraint.type!].push(constraint);
  });

  const removeConstraint = (cons: Constraint) => {
    console.log("remove constraint", cons.desc);
    onUpdateConstraints(constraints.filter((c) => c.desc !== cons.desc));
  };

  // afficher les contraintes de chaque type
  return (
    <>
      {Object.keys(constraintsByType).map((type) => (
        <div key={type}>
          <h2>Category {type}</h2>
          {constraintsByType[type].map((constraint) => (
            <ConstraintsListItem
              key={`${type}${constraint.desc}`}
              constraint={constraint}
              onRemove={removeConstraint}
            />
          ))}
        </div>
      ))}
    </>
  );
};
