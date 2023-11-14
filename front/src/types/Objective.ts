// {
//   "name": "Objective 2",
//   "shifts": [
//     3
//   ],
//   "days": [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     11,
//     12,
//     13,
//     14,
//     15,
//     16,
//     17,
//     18,
//     19,
//     20,
//     21,
//     22,
//     23,
//     24,
//     25,
//     26,
//     27,
//     28
//   ],
//   "id": "obj2",
//   "nurses": [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9
//   ],
//   "params": [],
//   "type": 2
// },

export default interface Objective {
  name: string;
  shifts: number[];
  days: number[];
  id: string;
  nurses: number[];
  params: any[];
  type: number;
}