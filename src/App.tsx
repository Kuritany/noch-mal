import { useEffect } from "react";
import JokerPane from "./components/JokerPane/JokerPane";
import { MainGridColumn } from "./components/MainGrid/MainGridColumn";
import ScorePane from "./components/ScorePane/ScorePane";
import {
  columnAdata,
  columnBdata,
  columnCdata,
  columnDdata,
  columnEdata,
  columnFdata,
  columnGdata,
  columnHdata,
  columnIdata,
  columnJdata,
  columnKdata,
  columnLdata,
  columnMdata,
  columnNdata,
  columnOdata,
} from "./constants/mainGridBoxes";
import { ScoreProvider } from "./hooks/checkboxContext";
import "./mainStyles.css";

/*
Auto borad rules:
every column and row has every color
every line has every color
for each color, there are 6 regimes, each with a different number of boxes.
there is never more than one regime of the same color in the same column
*/

export default function App() {
  const setDimmentions = () => {
    const element = document.getElementById("root");

    if (!element) return;

    const baseHeight = 418;
    const baseWidth = 695;
    const baseRatio = baseHeight / baseWidth;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const windowRatio = windowHeight / windowWidth;
    if (windowRatio > baseRatio) {
      element.style.transformOrigin = "0px 0px";
      element.style.transform = `scale(${windowWidth / baseWidth})`;
      element.style.width = `${
        window.innerWidth / (windowWidth / baseWidth)
      }px`;
    } else {
      element.style.transformOrigin = "0px 0px";
      element.style.transform = `scale(${windowHeight / baseHeight})`;
      element.style.width = `${
        window.innerWidth / (windowHeight / baseHeight)
      }px`;
    }
  };

  useEffect(() => {
    setDimmentions();
    window.addEventListener("resize", setDimmentions);
    // window.addEventListener("orientationchange", setDimmentions);
    // console.log('widnow', window);
    // console.log('agent', window.navigator.userAgent);
    // console.log('document', document);
    // if (document.location.hash === '#ri') {
		//   window.history.replaceState('', window.document.title, document.location.pathname);
    // } else {
    //   window.history.replaceState('', window.document.title, document.location.pathname + '#ri');
    // }
    // console.log('hash', document.location.hash);
  }, []);

  return (
    <ScoreProvider>
      <div id="base" className="row base">
        <div>
          <div className="row">
            <MainGridColumn column={columnAdata} />
            <MainGridColumn column={columnBdata} />
            <MainGridColumn column={columnCdata} />
            <MainGridColumn column={columnDdata} />
            <MainGridColumn column={columnEdata} />
            <MainGridColumn column={columnFdata} />
            <MainGridColumn column={columnGdata} />
            <MainGridColumn column={columnHdata} centerLine />
            <MainGridColumn column={columnIdata} />
            <MainGridColumn column={columnJdata} />
            <MainGridColumn column={columnKdata} />
            <MainGridColumn column={columnLdata} />
            <MainGridColumn column={columnMdata} />
            <MainGridColumn column={columnNdata} />
            <MainGridColumn column={columnOdata} />
          </div>
          <JokerPane />
        </div>
        <ScorePane />
      </div>
    </ScoreProvider>
  );
}
