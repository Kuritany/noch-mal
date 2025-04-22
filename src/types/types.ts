export enum Colors {
  Blue = "blue",
  Green = "green",
  Orange = "orange",
  Red = "red",
  Yellow = "yellow"
}

export type ColumnId =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O";

export class BoxData {
  index: string;
  column: string;
  row: number;
  color: Colors;
  stared: boolean;

  constructor(column: string, row: number, color: Colors, stared: boolean) {
    this.color = color;
    this.column = column;
    this.row = row;
    this.stared = stared;
    this.index = column + row;
  }
};

export type ColumnData = {
  column: ColumnId;
  boxesData: BoxData[];
  pointsBase: number;
  pointsFirstBonus: number;
};

export type CheckedState = {
  index: string;
  isChecked: boolean;
};

export type MainGridCheckedState = {
  index: string;
  stared: boolean;
  isChecked: boolean;
};

export enum Mark {
  Blank = 0,
  Circled = 1,
  Scratched = 2
};

export type MarkedState = {
  index: string;
  score: number;
  mark: Mark;
};
