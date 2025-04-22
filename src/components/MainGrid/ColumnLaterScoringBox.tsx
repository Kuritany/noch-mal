import { ColumnId, Mark } from "../../types/types";
import { Circled } from "../Symbols/Circled";
import { useScoreContext } from "../../hooks/checkboxContext";
import { useMemo } from "react";

export const ColumnLaterScoringBox = ({
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
  const { letterScoreingBoxesState, letterScoreingBoxesDispatch } = useScoreContext();


  const isCircled = useMemo(
    () => letterScoreingBoxesState.find((el) => el.index === index)!.mark === Mark.Circled,
    [letterScoreingBoxesState]
  );

  const OnClick = () => {
    letterScoreingBoxesDispatch({
      type: "mark",
      index: index,
      mark: !isCircled ? Mark.Circled : Mark.Blank,
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
      {isCircled && (
        <Circled />
      )}
    </span>
  );
};
