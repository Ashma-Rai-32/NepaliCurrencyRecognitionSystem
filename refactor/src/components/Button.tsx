// import { css } from "@emotion/css";
// import classNames from "classnames";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "1rem",
        borderRadius: "2rem",
        textTransform: "uppercase",
        transition: "all 200ms ease-in-out",
        display: "flex",
        gap: "1rem",
        //   ":hover": {
        //     backgroundColor: "black",
        //     color: "white",
        //   },
      }}
    >
      {children}
    </button>
  );
};

export default Button;
