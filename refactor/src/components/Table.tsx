import { css } from "@emotion/css";
import classNames from "classnames";
import Title from "./Title";
import { useRef, useState } from "react";
import { model } from "../store/constants";

const Table: React.FC<{ children: React.ReactNode }> = ({
  children,
  className,
}) => {
  const columns = model.result.table.columns;
  const data = model.result.table.data;
  return (
    <div className="table-container">
      <div className="table-heading">
        {columns.map((heading, index) => (
          <div key={heading.key} className="heading-cell">
            {heading.label}
          </div>
        ))}
      </div>
      {data.map((tableRow, index) => {
        return (
          <div key={index} className="table-row">
            {columns.map((col, index) => {
              // need to map each data to display among cells

              return (
                <div key={col.key} className="data-cell">
                  {tableRow[col.key]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Table;
