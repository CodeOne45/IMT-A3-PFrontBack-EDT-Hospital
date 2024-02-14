import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

export const ResumeAffectations = ({
  nbAffectionsPerNurse: nbAffectationsPerNurse,
}: {
  nbAffectionsPerNurse: number[][];
}) => {
  const shifts = ["morning", "evening", "night"];

  return (
    <>
      <h1>Resume Affectations</h1>
      <table>
        <thead>
          <tr style={{ borderBottom: "solid 3px" }}>
            {/* the th Nurse takes 2 lines  */}
            <th rowSpan={2}>Nurse</th>
            <th colSpan={3}>Shifts</th>
            <th rowSpan={2}>Total</th>
          </tr>
          <tr>
            <th className="column morning">
              <span>Morning</span>
              <br />
              <WbTwilightIcon key={"M"} />
            </th>
            <th className="column evening">
              <span>Afternoon</span> <br />
              <LightModeIcon key={"E"} />
            </th>
            <th className="column night">
              <span>Evening</span>
              <br />
              <NightsStayIcon key={"N"} />
            </th>
          </tr>
        </thead>

        <tbody>
          {nbAffectationsPerNurse.map((nbAffectations, index) => {
            return (
              <tr
                key={index}
                style={{
                  borderTop: index === 0 ? "2px solid" : "",
                  borderBottom:
                    index + 1 !== nbAffectationsPerNurse.length
                      ? "2px solid"
                      : "",
                }}
              >
                <td>{index + 1}</td>
                {nbAffectations.map((nbAffection, index) => {
                  return (
                    <td key={index} className={shifts[index % 3]}>
                      {nbAffection}
                    </td>
                  );
                })}
                <td>{nbAffectations.reduce((a, b) => b + a)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
