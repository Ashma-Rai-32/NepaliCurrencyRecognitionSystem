// import { css } from "@emotion/css";
// import classNames from "classnames";

import Link from "next/link";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  href,
  children,
}) => {
  return (
    <Link href={href}>
      <button onClick={onClick} className="button">
        {children}
      </button>
    </Link>
  );
};

export default Button;
