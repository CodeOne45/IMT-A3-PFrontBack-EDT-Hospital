import { createContext, useContext, useState } from "react";
import { Constraint } from "../types";

interface UpdatedConstraintsContextProps {
  addedConstraints: Constraint[]; // list of  contstraints
  removedConstraints: string[]; // list of  string ids
  setAddedConstraints: (constraints: Constraint[]) => void;
  setRemovedConstraints: (constraints: string[]) => void;
  reset: () => void;
  init: () => void;
  constraintFromRecommandation: Constraint | undefined;
  setConstraintFromRecommandation: (constraint: Constraint | undefined) => void;
}

const UpdatedConstraintsContext = createContext<UpdatedConstraintsContextProps>(
  {
    removedConstraints: [], // liste des ids des contraintes à suppirmer los de la prochaine version
    addedConstraints: [], // liste des ids des contraintes à ajouter lors de la prochaine version
    setAddedConstraints: () => {},
    setRemovedConstraints: () => {},
    reset: () => {},
    init: () => {},
    constraintFromRecommandation: undefined,
    setConstraintFromRecommandation: () => {},
  }
);

export const UpdatedConstraintsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [removedConstraints, _setRemovedConstraints] = useState<string[]>([]);
  const [addedConstraints, _setAddedConstraints] = useState<Constraint[]>([]);
  const [constraintFromRecommandation, _setConstraintFromRecommandation] =
    useState<Constraint | undefined>(undefined);

  const reset = () => {
    _setRemovedConstraints([]);
    _setAddedConstraints([]);
  };

  const init = () => {
    _setRemovedConstraints(
      JSON.parse(localStorage.getItem("removedConstraints") || "[]") as string[]
    );
    _setAddedConstraints(
      JSON.parse(
        localStorage.getItem("addedConstraints") || "[]"
      ) as Constraint[]
    );
    console.log(localStorage.getItem("removedConstraints"));
  };

  const setRemovedConstraints = (constraints: string[]) => {
    localStorage.setItem("removedConstraints", JSON.stringify(constraints));
    _setRemovedConstraints(constraints);
  };

  const setAddedConstraints = (constraints: Constraint[]) => {
    localStorage.setItem("addedConstraints", JSON.stringify(constraints));
    _setAddedConstraints(constraints);
  };

  const setConstraintFromRecommandation = (
    constraint: Constraint | undefined
  ) => {
    _setConstraintFromRecommandation(constraint);
  };

  return (
    <UpdatedConstraintsContext.Provider
      value={{
        removedConstraints,
        addedConstraints,
        setAddedConstraints,
        setRemovedConstraints,
        reset,
        init,
        constraintFromRecommandation,
        setConstraintFromRecommandation,
      }}
    >
      {children}
    </UpdatedConstraintsContext.Provider>
  );
};

export const useUpdatedConstraints = () =>
  useContext(UpdatedConstraintsContext);
