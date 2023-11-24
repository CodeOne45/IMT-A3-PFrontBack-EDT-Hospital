import React, { ReactNode, createContext, useState } from "react";
import { Schedule } from "../types";

interface SchedulesContextProps {
  schedules: Schedule[];
  addSchedule: (schedule: Schedule) => void;
  initSchedules: (initialData: Schedule[]) => void;
}

const initialData: SchedulesContextProps = {
  schedules: [],
  addSchedule: (schedule: Schedule) => {},
  initSchedules: () => {},
};

const SchedulesContext = createContext<SchedulesContextProps>(initialData);

export const SchedulesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const addSchedule = (schedule: Schedule) => {
    setSchedules([...schedules, schedule]);
  };

  const initSchedules = (initialData: Schedule[]) => {
    setSchedules(initialData);
  };

  return (
    <SchedulesContext.Provider
      value={{ schedules, addSchedule, initSchedules }}
    >
      {children}
    </SchedulesContext.Provider>
  );
};

export const useSchedules = () => React.useContext(SchedulesContext);
