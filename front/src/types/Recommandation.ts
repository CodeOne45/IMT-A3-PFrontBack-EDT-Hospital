import Constraint from "./Constraint"

export default interface Recommandation {
  constraint?: Constraint,
  shifts?: [{
    day: number,
    shift: number,
    nurse: number
  }],
  text?: string,
  type?: number
}