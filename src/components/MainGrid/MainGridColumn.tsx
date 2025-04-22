import { ColumnData } from "../../types/types";
import { ColumnFirstScoringBox } from "./ColumnFirstScoringBox";
import { ColumnIdBox } from "./ColumnIdBox";
import { ColumnLaterScoringBox } from "./ColumnLaterScoringBox";
import { MainGridBox } from "./MainGridBox";

export const MainGridColumn = ({
  column,
  centerLine
}: {
  column: ColumnData;
  centerLine?: boolean;
}) => {  
  return (
    <div className="column">
      <ColumnIdBox columnId={column.column} redText={centerLine} marginAdjust="bottom" />
      {column.boxesData.map((box) => (
        <MainGridBox key={box.index} box={box} centerLine={centerLine} />
      ))}
      <ColumnFirstScoringBox
        columnId={column.column}
        redText={centerLine} 
        score={column.pointsFirstBonus + column.pointsBase}
        marginAdjust="top"
        index={column.column + "1st"}
      />
      <ColumnLaterScoringBox
        columnId={column.column}
        redText={centerLine} 
        score={column.pointsBase}
        index={column.column + "2nd"}
      />
    </div>
  );
};
