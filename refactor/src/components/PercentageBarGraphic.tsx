// import { css } from "@emotion/css";
// import classNames from "classnames";

import { css } from "@emotion/css";
import classNames from "classnames";
import Link from "next/link";

type PercentageBarProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

const roundOff = (value) => {
  return Math.round(value * 4) / 4;
};

const quarter1Svg = (
  <svg
    width="45"
    height="33"
    viewBox="0 0 45 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.24654 21.577C9.95671 19.2081 13.5471 19.4124 14.9775 21.96L17.8309 27.0416C19.328 29.708 17.401 33 14.3431 33H7.82114C4.55842 33 2.66819 29.3041 4.57796 26.6587L8.24654 21.577Z"
      fill="#D5D5D5"
    />
  </svg>
);

const quarter4Svg = (color) => {
  return (
    <svg
      width="39"
      height="33"
      viewBox="0 0 39 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6261 1.65867C20.3781 0.617049 21.5846 0 22.8693 0H34.1789C37.4416 0 39.3318 3.69594 37.422 6.34133L19.3739 31.3413C18.6219 32.3829 17.4154 33 16.1307 33H4.82114C1.55842 33 -0.331809 29.3041 1.57796 26.6587L19.6261 1.65867Z"
        fill={color || "#D5D5D5"}
      />
    </svg>
  );
};

const quarter2Svg = (
  <svg
    width="45"
    height="33"
    viewBox="0 0 45 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7143 18.1587C11.4663 17.1171 12.6728 16.5 13.9575 16.5H25.2671C28.5298 16.5 30.42 20.1959 28.5103 22.8413L22.3739 31.3413C21.6219 32.3829 20.4154 33 19.1307 33H7.82114C4.55842 33 2.66819 29.3041 4.57796 26.6587L10.7143 18.1587Z"
      fill="#D5D5D5"
    />
  </svg>
);

const quarter3Svg = (
  <svg
    width="45"
    height="33"
    viewBox="0 0 45 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.1583 5.07702C21.8685 2.70811 25.4588 2.91237 26.8893 5.45995L31.8372 14.272C32.6001 15.6306 32.5046 17.3085 31.5926 18.5717L22.3739 31.3413C21.6219 32.3829 20.4154 33 19.1307 33H7.82114C4.55842 33 2.66819 29.3041 4.57796 26.6587L11.9118 16.5L20.1583 5.07702Z"
      fill="#a5A5a5"
    />
  </svg>
);

const PercentageBarGraphic: React.FC<PercentageBarProps> = ({
  className,
  value,
}) => {
  console.log("👾 | value:", value);

  const processedValue = roundOff(value * 100);

  console.log("👾 | processedValue:", processedValue);

  const numberOfFullBars = Math.floor(processedValue / 10);

  console.log("👾 | numberOfFullBars:", numberOfFullBars);

  const quarterValue = Math.abs(Math.floor(processedValue) - processedValue);
  const numberOfQuarters = quarterValue / 0.25;

  console.log("👾 | quarterValue:", quarterValue);

  return (
    <div className="percentage-bar-graphic-container">
      <div
        className={classNames(
          css({
            position: "absolute",
            zIndex: -1,
          }),
          "percentage-bar-graphic"
        )}
      >
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="bar">
              {quarter4Svg("#d5d5d5")}
            </div>
          ))}
      </div>{" "}
      <div className="percentage-bar-graphic">
        {/* <div className="background-bar"></div>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={classNames(
              css({
                // width: `${value}%`,
              }),
              "progress-bar"
            )}
          ></div>
        ))} */}
        {Array(numberOfFullBars)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="bar">
              {quarter4Svg("#0d0d0d")}
            </div>
          ))}
        <div className="bar">
          {numberOfQuarters === 1
            ? quarter1Svg
            : numberOfQuarters === 2
            ? quarter2Svg
            : quarter3Svg}
        </div>
      </div>
    </div>
  );
};

export default PercentageBarGraphic;
