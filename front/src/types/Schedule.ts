import Constraint from "./Constraint";
import Objective from "./Objective";
import Recommandation from "./Recommandation";

export default interface Schedule {
  schedule: string[];
  recommendations: Recommandation[];
  constraints: Constraint[];
  status: string;
  demand: number[][];
  objective: Objective;
  preferences: number[][];
  nb_nurses: number;
  id_model: number;
}