// import { css } from "@emotion/css";
// import classNames from "classnames";

import classNames from "classnames";
import Link from "next/link";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  disabled,
  href = "",
  children,
  variant,
}) => {
  return (
    <Link href={href} className={className}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          "button",
          { outline: variant === "outline" },
          { disabled: disabled }
        )}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
