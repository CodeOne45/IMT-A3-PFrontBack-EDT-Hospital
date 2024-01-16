import { createContext, useContext, useState } from "react";

interface UpdatedConstraintsContextProps {
  removedConstraints: string[]; // list of  string ids
  addedConstraints: string[]; // list of  string ids listed by versio
  setAddedConstraints: (constraints: string[]) => void;
  setRemovedConstraints: (constraints: string[]) => void;
  reset: () => void;
  init: () => void;
}

const UpdatedConstraintsContext = createContext<UpdatedConstraintsContextProps>(
  {
    removedConstraints: [],
    addedConstraints: [],
    setAddedConstraints: () => {},
    setRemovedConstraints: () => {},
    reset: () => {},
    init: () => {},
  }
);

export const UpdatedConstraintsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [removedConstraints, setRemovedConstraints] = useState<string[]>([]);
  const [addedConstraints, setAddedConstraints] = useState<string[]>([]);

  const reset = () => {
    setRemovedConstraints([]);
    setAddedConstraints([]);
  };

  const init = () => {
    setRemovedConstraints(
      JSON.parse(localStorage.getItem("removedConstraints") || "[]") as string[]
    );
    setAddedConstraints(
      JSON.parse(localStorage.getItem("addedConstraints") || "[]") as string[]
    );
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
      }}
    >
      {children}
    </UpdatedConstraintsContext.Provider>
  );
};

export const useUpdatedConstraints = () =>
  useContext(UpdatedConstraintsContext);
