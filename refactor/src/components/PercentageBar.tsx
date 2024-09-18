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

const PercentageBar: React.FC<PercentageBarProps> = ({ className, value }) => {
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
