// import { css } from "@emotion/css";
// import classNames from "classnames";

import Button from "./Button";

type IconButtonGroupProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

const IconButtonGroup: React.FC<IconButtonGroupProps> = ({
  className,
  onClick,
  options,
}) => {
  return (
    <div
      className="button-group-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {options.map((option, index) => {
        return (
          <Button key={index}>
            {option.label}
            {option.icon}
          </Button>
        );
      })}
    </div>
  );
};

export default IconButtonGroup;
