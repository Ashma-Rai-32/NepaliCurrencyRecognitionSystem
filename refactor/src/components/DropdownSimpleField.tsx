import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import classNames from "classnames";

type DropdownSimpleFieldProps = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  label?: string;
  options: Array<{ value: string; label: string }>;
};

const DropdownSimpleField: React.FC<DropdownSimpleFieldProps> = ({
  label,
  options,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);

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
