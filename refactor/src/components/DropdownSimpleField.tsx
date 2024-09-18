// import { css } from "@emotion/css";
// import classNames from "classnames";

import Link from "next/link";
import { RiArrowDownSLine, RiArrowDownWideLine } from "react-icons/ri";
import IconButton from "./IconButton";
import { act, useState } from "react";
import classNames from "classnames";
import { css } from "@emotion/css";

type DropdownSimpleFieldProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

const DropdownSimpleField: React.FC<DropdownSimpleFieldProps> = ({
  className,
  onClick,
  href,
  label,
  options,
  children,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [value, setValue] = useState(null);

  const renderOptions = () => {
    return (
      <div className="dropdown-field-options">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={classNames("dropdown-field-option-item", {
                active: value === option.value,
              })}
              onClick={() => {
                setValue(option.value);
                const handler = setTimeout(() => {
                  setDropdownOpen(false);
                }, 100);
                return () => clearTimeout(handler);
              }}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="dropdown-field-simple-wrapper">
      <div
        className="dropdown-field-simple"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        {label}
        <RiArrowDownSLine />
      </div>
      {dropdownOpen && renderOptions()}
    </div>
  );
};

export default DropdownSimpleField;
