import classNames from "classnames";
import React from "react";
import Heading2 from "./Heading2";
import { css } from "@emotion/css";
import PercentageBarGraphic from "./PercentageBarGraphic";

const TabGraphic: React.FC<{ className?: string }> = ({}) => {
  const data = [
    {
      title: "precision",
      type: "percentage-bar-graphic",
      value: 0.987,
    },
    {
      title: "recall",
      type: "percentage-bar-graphic",
      value: 0.95,
    },
    {
      title: "f1-score",
      type: "percentage-bar-graphic",
      value: 0.92,
    },
    {
      title: "score",
      type: "string",
      value: 515,
    },
  ];

  return (
    <div className="tab-graphic-container">
      <div className="tab-title">result</div>
      <div className="tab-content">
        {data.map((dataRow, index) => (
          <div key={index} className="tab-item">
            <Heading2>{dataRow.title}</Heading2>
            {dataRow.type === "percentage-bar-graphic" && (
              <PercentageBarGraphic value={dataRow.value} />
            )}
            <div
              className={classNames(
                css({
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "5rem",
                }),
                "typography"
              )}
            >
              {dataRow.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabGraphic;
