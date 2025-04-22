import { ColumnId, Mark } from "../../types/types";
import { Circled } from "../Symbols/Circled";
import { Cross } from "../Symbols/Checking/Cross";
import { useScoreContext } from "../../hooks/checkboxContext";

export const ColumnFirstScoringBox = ({
  columnId,
  score,
  redText = false,
  marginAdjust,
  index
}: {
  columnId: ColumnId;
  score: number;
  redText?: boolean;
  marginAdjust?: "top" | "bottom";
  index: string;
}) => {
  const stateArray: Mark[] = [Mark.Blank, Mark.Circled, Mark.Scratched];
  const { letterScoreingBoxesState, letterScoreingBoxesDispatch } = useScoreContext();

  const getState = () => letterScoreingBoxesState.find((el) => el.index === index)!.mark;

  const OnClick = () => {
    const nextMark =
      stateArray[
        (getState() + 1) % 3
      ];
    letterScoreingBoxesDispatch({
      type: "mark",
      index: index,
      mark: nextMark,
    });
  };

  return (
    <span
      id={columnId}
      key={columnId}
      className={"main-grid-scoring-boxes" + (marginAdjust ? ` ${marginAdjust}-margin` : "")}
      onClick={OnClick}
    >
      <svg
        fill={redText ? "red" : "black"}
        stroke={redText ? "red" : "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        className="character"
      >
        <text
          x="47%"
          y="50%"
          fontSize="24"
          textAnchor="middle"
          dominantBaseline="central"
          className="small"
        >
          {score}
        </text>
      </svg>
      {getState() === Mark.Scratched && (
        <Cross />
      )}
      {getState() === Mark.Circled && (
        <Circled />
      )}
    </span>
  );
};
