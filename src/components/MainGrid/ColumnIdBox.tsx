import { useMemo, useState } from "react";
import { ColumnId } from "../../types/types";
import { Cross } from "../Symbols/Checking/Cross";
import { useScoreContext } from "../../hooks/checkboxContext";

export const ColumnIdBox = ({
  columnId,
  redText = false,
  marginAdjust,
}: {
  columnId: ColumnId;
  redText?: boolean;
  marginAdjust?: "top" | "bottom";
}) => {
  const { letterHeaderBoxesState, letterHeaderBoxesDispatch } =
    useScoreContext();

  const isChecked = useMemo(
    () => letterHeaderBoxesState.find((el) => el.index === columnId)!.isChecked,
    [letterHeaderBoxesState]
  );

  const OnClick = () => {
    letterHeaderBoxesDispatch({
      type: "check",
      index: columnId,
      isChecked: !isChecked,
    });
  };

  return (
    <span
      id={columnId}
      key={columnId}
      className={
        "main-grid-scoring-boxes" +
        (marginAdjust ? ` ${marginAdjust}-margin` : "")
      }
      onClick={() => OnClick()}
    >
      <svg
        fill={redText ? "red" : "black"}
        stroke={redText ? "red" : "black"}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
          {columnId}
        </text>
      </svg>
      {isChecked && <Cross />}
    </span>
  );
};
