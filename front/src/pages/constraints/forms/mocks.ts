import { Constraint } from "../../../types";

export const mockNurses = [
  "Jeanne",
  "Marie",
  "Pierre",
  "Paul",
  "Celine",
  "Amelie",
  "Sylvie",
  "Léa",
];

export const mockShifts = ["Matin", "Soir", "Nuit"];

export const mockConstraints: Constraint[] = [
  {
    id: "1",
    name: "MaxShifts",
    shifts: [0, 1, 2],
    days: [0, 2, 3, 5, 6],
    nurses: [0, 1, 4, 5, 7],
    type: 0,
  },
];
