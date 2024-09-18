import classNames from "classnames";
import LogoFirstLetter from "../assets/logo-first-letter";
import LogoSecondLetter from "../assets/logo-second-letter";
import LogoThirdLetter from "../assets/logo-third-letter";

const Logo: React.FC = ({ className }) => {
  return (
    <div
      className={classNames(className, "logo")}
      // style={{
      //   display: "flex",
      //   gap: "1rem",
      //   width: "10rem",
      //   height: "fit-content",
      //   padding: "1rem",
      // }}
    >
      <LogoFirstLetter />
      <LogoSecondLetter />
      <LogoThirdLetter />
    </div>
  );
};

export default Logo;
