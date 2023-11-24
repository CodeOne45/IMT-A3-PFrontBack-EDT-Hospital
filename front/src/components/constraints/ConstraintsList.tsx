import { Constraint } from "../../types";
import { ConstraintsListItem } from "./ConstraintsListItem";

export const ConstraintsList = ({
  constraints,
}: {
  constraints: Constraint[];
}) => {
  return (
    <>
      {constraints
        .sort((a, b) => (Number(a.type) > Number(b.type) ? 1 : -1))
        .map((constraint) => (
          <ConstraintsListItem
            constraint={constraint}
            onRemove={(cons) => {}}
          />
        ))}
    </>
  );
};
