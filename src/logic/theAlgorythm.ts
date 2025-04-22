import { type } from "@testing-library/user-event/dist/type";
import { Colors } from "../types/types";

type Square = {
  neighbors: Neighbor[];
  color: Colors;
  position: [number, number];
  domanSize: number;
  domainIndex: number;
};

type Vacancy = { position: [number, number] };

type Neighbor = Square | Vacancy | null;

const colors = [
  Colors.Red,
  Colors.Green,
  Colors.Blue,
  Colors.Yellow,
  Colors.Orange,
];
const domains = new Map<Colors, number[]>([
  [Colors.Red, [1, 2, 3, 4, 5, 6]],
  [Colors.Green, [1, 2, 3, 4, 5, 6]],
  [Colors.Blue, [1, 2, 3, 4, 5, 6]],
  [Colors.Yellow, [1, 2, 3, 4, 5, 6]],
  [Colors.Orange, [1, 2, 3, 4, 5, 6]]
]);

export default function generate() {
  const firstPosition: [number, number] = [0, 0];
  const firstColorIndex = Math.floor(Math.random() * colors.length);
  const firstColor = colors[firstColorIndex];
  const firstColorsDomain = domains.get(firstColor);
  const firstDomainSizeindex = Math.floor(Math.random() * firstColorsDomain!.length);
  const firstDomainSize = firstColorsDomain![firstDomainSizeindex];
  const firstDomainIndex = 0;

  const vacancies: Vacancy[] = [];
  const squares = new Map<[number, number], Square>();

  const firstSquare: Square = {
    neighbors: [{ position: [1,0] }, { position: [0,1] }],
    position: firstPosition,
    color: firstColor,
    domanSize: firstDomainSize,
    domainIndex: 0
  };

  const firstDomainVacancies: Vacancy[] = [];
  firstSquare.neighbors.forEach((neighbor) => {

  });

  for (let i = 1; i <= firstDomainSize; i++) {
    const domainIndex = i;
    const color = firstColor;
    const domanSize = firstDomainSize;
    


    const square: Square = {
      neighbors: [], //{ top: null, right: { position: [1,0] }, bottom: { position: [0,1] }, left: null },
      position: firstPosition,
      color: firstColor,
      domanSize: firstDomainSize,
      domainIndex: 0
    };
  }




  // when we need to know if a certain vacnacy has neighbors,
  // we take the neighboring coordinates and check if they exist in the squares map
}

function getAdjacentCoordinates(coordinates: [number, number]) {
  const adjacents: [number, number][] = [];
  const top: [number, number] = [coordinates[0], coordinates[1] - 1];
  const right: [number, number] = [coordinates[0] + 1, coordinates[1]];
  const bottom: [number, number] = [coordinates[0], coordinates[1] + 1];
  const left: [number, number] = [coordinates[0] - 1, coordinates[1]];
  if (top[1] >= 0) adjacents.push(top);
  if (right[0] <= 14) adjacents.push(right);
  if (bottom[1] >= 6) adjacents.push(bottom);
  if (left[0] >= 0) adjacents.push(left);
}
