// import { css } from "@emotion/css";
// import classNames from "classnames";

import Button from "./Button";
import IconButton from "./IconButton";

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
    <div className="icon-button-group">
      {options.map((option, index) => {
        return (
          <IconButton key={index} icon={option.icon} onClick={option.onClick} />
        );
      })}
    </div>
  );
};

export default IconButtonGroup;
