import { css } from "@emotion/css";
import classNames from "classnames";
import { model } from "../store/constants";

const interpolateColor = (percentage: number) => {
  const LIGHT_HEX = `#ffffff`;
  const DARK_HEX = `#0d0d0d`;
  const [r1, g1, b1] = hexToRgb(LIGHT_HEX);
  const [r2, g2, b2] = hexToRgb(DARK_HEX);

  const r = Math.round(r1 + (r2 - r1) * percentage);
  const g = Math.round(g1 + (g2 - g1) * percentage);
  const b = Math.round(b1 + (b2 - b1) * percentage);

  return `rgb(${r}, ${g}, ${b})`;
};

// Helper function to convert HEX to RGB
const hexToRgb = (hex: string) => {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return [r, g, b];
};

const ConfusionMatrix: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({}) => {
  return (
    <div className="confusion-matrix-container">
      <div className="tl">tl</div>
      <div
        className={classNames(
          "true-label-container",
          css({
            position: "relative",
          })
        )}
      >
        {model.confusionMatrix.classes.map((label, index) => (
          <div key={index} className="label">
            {/* <Title
            className={css({
              fontSize: "1.5rem",
            })}
          > */}
            {label}
            {/* </Title> */}
          </div>
        ))}
      </div>
      <div className="matrix">
        {model.confusionMatrix.data.map((predictedColumn, columnIndex) => (
          <div key={columnIndex} className="column-item">
            {/* {model.confusionMatrix.classes[columnIndex]} */}
            {predictedColumn.map((trueRow, rowIndex) => (
              <div
                key={rowIndex}
                className={classNames(
                  "row-item",
                  css({
                    backgroundColor: interpolateColor(
                      trueRow / model.confusionMatrix.support[columnIndex]
                    ),
                  })
                )}
              >
                {trueRow}
              </div>
            ))}
          </div>
        ))}
      </div>{" "}
      <div className="predicted-label-container">
        {model.confusionMatrix.classes.map((label, index) => (
          <div key={index} className="label">
            {/* <Title
            className={css({
              fontSize: "1.5rem",
            })}
          > */}
            {label}
            {/* </Title> */}
          </div>
        ))}
      </div>
      <div className="pl">pl</div>
    </div>
  );
};

export default ConfusionMatrix;
