import HotelIcon from "@mui/icons-material/Hotel";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

import { Schedule } from "../types";
import "./AffectationsTable.scss";
export const AffectationTable = ({ schedule }: { schedule: Schedule }) => {
  console.log(schedule);

  if (!schedule) {
    return <></>;
  }

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

  const dayTable = [];
  for (let i = 0; i < schedule.schedule[0].length; i++) {
    dayTable.push(<th key={i}>J{i + 1}</th>);
  }
  const affectations = schedule.schedule.map((affectation, i) => ({
    name: `Nurse ${i+1}`,
    days: affectation.split("").map((day) => {
      switch (day) {
        case "N":
          return <NightsStayIcon key={"N"} />;
        case "R":
          return <HotelIcon key={"R"} />;
        case "E":
          return <LightModeIcon key={"E"} />;
        case "M":
          return <WbTwilightIcon key={"M"} />;
        default:
          return <>{day}</>;
      }
    }),
  }));

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <td></td>
            {/* make a for loop from 0 to 28 */}
            {dayTable}
          </tr>
        </thead>
        <tbody>
          {affectations.map((affectation) => (
            <tr key={affectation.name}>
              <td>{affectation.name}</td>
              {affectation.days.map((day, index) => (
                <td className={valueToClass(day.key ?? "")} key={index}>
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
