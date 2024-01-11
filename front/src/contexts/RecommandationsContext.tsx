import { createContext, useContext, useState } from "react";

interface RecommandationsContextProps {
  areRecommandationsShowed: boolean;
  switchShowRecommandations: () => void;
  initRecommandations: () => void;
}

const initialData: RecommandationsContextProps = {
  areRecommandationsShowed: false,
  switchShowRecommandations: () => {},
  initRecommandations: () => {},
};

const RecommandationsContext =
  createContext<RecommandationsContextProps>(initialData);

export const RecommandationsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [areRecommandationsShowed, setAreRecommandationsShowed] =
    useState<boolean>(false);

  const switchShowRecommandations = () => {
    setAreRecommandationsShowed(!areRecommandationsShowed);
  };

  const initRecommandations = () => {
    setAreRecommandationsShowed(false);
  };

  return (
    <RecommandationsContext.Provider
      value={{
        areRecommandationsShowed,
        switchShowRecommandations,
        initRecommandations,
      }}
    >
      {children}
    </RecommandationsContext.Provider>
  );
};

export const useRecommandations = () => useContext(RecommandationsContext);
