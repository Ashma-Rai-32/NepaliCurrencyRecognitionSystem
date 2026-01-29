// import { css } from "@emotion/css";
// import classNames from "classnames";

import { css } from "@emotion/css";
import classNames from "classnames";

type PercentageBarProps = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  value?: number;
};

const PercentageBar: React.FC<PercentageBarProps> = ({ value }) => {
  return (
    <div className="percentage-bar">
      <div className="background-bar"></div>
      <div
        className={classNames(
          css({
            width: `${value}%`,
          }),
          "progress-bar"
        )}
      >
        <div className="progress-bar-indicator"></div>
      </div>
    </div>
  );
};

export default PercentageBar;
