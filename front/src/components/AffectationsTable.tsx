import HotelIcon from "@mui/icons-material/Hotel";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

import "./AffectationsTable.scss";
export const AffectationTable = () => {
    function generateRandomValue() {
        const values = [
            <LightModeIcon key={"D"} />,
            <HotelIcon key={"R"} />,
            <WbTwilightIcon key={"M"} />,
            <NightsStayIcon key={"N"} />,
        ];
        const randomIndex = Math.floor(Math.random() * values.length);
        return values[randomIndex];
    }
    const valueToClass = (value: string) => {
        switch (value) {
            case "D":
                return "day";
            case "M":
                return "morning";
            case "N":
                return "night";
            case "R":
                return "rest";
            default:
                return "";
        }
    };

    const dayTable = [];
    for (let i = 0; i < 28; i++) {
        dayTable.push(<th key={i}>J{i + 1}</th>);
    }
    const affectations = [
        {
            name: "Marie",
            days: Array.from({ length: 28 }, () => generateRandomValue()),
        },
        {
            name: "Juliette",
            days: Array.from({ length: 28 }, () => generateRandomValue()),
        },
        {
            name: "Christelle",
            days: Array.from({ length: 28 }, () => generateRandomValue()),
        },
        {
            name: "Jean",
            days: Array.from({ length: 28 }, () => generateRandomValue()),
        },
    ];
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        {/* make a for loop from 0 to 28 */}
                        <tr></tr>
                        {dayTable}
                    </tr>
                </thead>
                <tbody>
                    {affectations.map((affectation) => (
                        <tr key={affectation.name}>
                            <td>{affectation.name}</td>
                            {affectation.days.map((day, index) => (
                                <td
                                    className={valueToClass(day.key ?? "")}
                                    key={index}
                                >
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
