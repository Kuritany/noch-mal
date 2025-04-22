import { useCallback, useMemo, useState } from "react";
import { BoxData } from "../../types/types";
import { Cross } from "../Symbols/Checking/Cross";
import { Star } from "../Symbols/Star";
import { Circle } from "../Symbols/Circle";
import { useScoreContext } from "../../hooks/checkboxContext";

export const MainGridBox = ({
  box,
  centerLine,
}: {
  box: BoxData;
  centerLine?: boolean;
}) => {
  const { mainGridState, mainGridDispatch } =
    useScoreContext();

  const isChecked = useMemo(
    () => mainGridState.find((el) => el.index === box.index)!.isChecked,
    [mainGridState]
  );

  const OnClick = (boxIndex: string) => {
    mainGridDispatch({
      type: "check",
      index: box.index,
      isChecked: !isChecked,
    });
  };

  return (
    <span
      id={box.index}
      key={box.index}
      className={`box ${box.color} ${centerLine ? "center-column" : ""}`}
      onClick={() => OnClick(box.index)}
    >
      {box.stared || <Circle />}
      {box.stared && <Star />}
      {isChecked && <Cross />}
    </span>
  );
};
