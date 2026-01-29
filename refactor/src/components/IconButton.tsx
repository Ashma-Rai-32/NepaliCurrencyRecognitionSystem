// import { css } from "@emotion/css";
// import classNames from "classnames";

import { PiGraph } from "react-icons/pi";
import { RiHomeFill, RiSearchFill } from "react-icons/ri";

type ButtonProps = {
  onClick: () => void;
  icon?: string;
};

const IconButton: React.FC<ButtonProps> = ({
  onClick,
  icon,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "home":
        return <RiHomeFill className="icon-button-svg" />;
      case "search":
        return <RiSearchFill className="icon-button-svg" />;
      case "model":
        return <PiGraph className="icon-button-svg" />;
    }
  };

  return (
    <button onClick={onClick} className="icon-button">
      {renderIcon()}
    </button>
  );
};

export default IconButton;
