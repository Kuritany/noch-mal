import { Colors, Mark } from "../../types/types";
import { Circled } from "../Symbols/Circled";
import { ColorMap } from "../../constants/ColorMap";
import { useScoreContext } from "../../hooks/checkboxContext";
import { useMemo } from "react";

export const ColorLaterScoringBox = ({
  color,
  index,
}: {
  color: Colors;
  index: string;
}) => {
  const { colorBoxesMarkedState, colorBoxesMarkedDispatch } = useScoreContext();


  const isCircled = useMemo(
      () => colorBoxesMarkedState.find((el) => el.index === index)!.mark === Mark.Circled,
      [colorBoxesMarkedState]
    );

  const onClick = () => {
    colorBoxesMarkedDispatch({
      type: "mark",
      index: index,
      mark: !isCircled ? Mark.Circled : Mark.Blank,
    });
  };

  return (
    <span className={`box ${color}`} onClick={onClick}>
      <span className="light" />
      <svg
        fill={ColorMap.get(color)}
        stroke={ColorMap.get(color)}
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
        >
          3
        </text>
      </svg>
      {isCircled && <Circled />}
    </span>
  );
};
