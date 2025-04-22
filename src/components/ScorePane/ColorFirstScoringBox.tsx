import { Colors, Mark } from "../../types/types";
import { Circled } from "../Symbols/Circled";
import { Cross } from "../Symbols/Checking/Cross";
import { ColorMap } from "../../constants/ColorMap";
import { useScoreContext } from "../../hooks/checkboxContext";

export const ColorFirstScoringBox = ({
  color,
  index,
}: {
  color: Colors;
  index: string;
}) => {
  const stateArray: Mark[] = [Mark.Blank, Mark.Circled, Mark.Scratched];
  const { colorBoxesMarkedState, colorBoxesMarkedDispatch } = useScoreContext();

  const getState = () =>
    colorBoxesMarkedState.find((el) => el.index === index)!.mark;

  const onClick = () => {
    const nextMark = stateArray[(getState() + 1) % 3];
    colorBoxesMarkedDispatch({
      type: "mark",
      index: index,
      mark: nextMark,
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
          5
        </text>
      </svg>
      {getState() === Mark.Scratched && <Cross />}
      {getState() === Mark.Circled && <Circled />}
    </span>
  );
};
