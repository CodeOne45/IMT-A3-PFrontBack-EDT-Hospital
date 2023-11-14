import { Constraint } from "../../types";
import { ConstraintsListItem } from "./ConstraintsListItem";

export const ConstraintsList = ({constraints} : {constraints: Constraint[]}) => {
  
  return (
    <>
      {constraints.map((constraint) => (
        <ConstraintsListItem
          constraint={constraint}
          onRemove={(cons) => {
            console.log(constraint)
            constraints.splice(constraints.indexOf(cons), 1)
            // remove  constraint from constraints
          }}
        />
      ))}
    </>
  );
};
