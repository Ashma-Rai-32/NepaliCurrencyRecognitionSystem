import classNames from "classnames";
import LogoFirstLetter from "../assets/logo-first-letter";
import LogoSecondLetter from "../assets/logo-second-letter";
import LogoThirdLetter from "../assets/logo-third-letter";
import { css } from "@emotion/css";

const Logo: React.FC<{
  className?: string;
  size?: number;
}> = ({ className, size }) => {
  return (
    <div
      className={classNames(
        className,
        "logo",
        css({
          ...(size ? { width: "max-content" } : {}),
        })
      )}
      // style={{
      //   display: "flex",
      //   gap: "1rem",
      //   width: "10rem",
      //   height: "fit-content",
      //   padding: "1rem",
      // }}
    >
      <LogoFirstLetter width={size} />
      <LogoSecondLetter width={size} />
      <LogoThirdLetter width={size} />
    </div>
  );
};

export default Logo;
