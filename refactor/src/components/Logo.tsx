import LogoFirstLetter from "../assets/logo-first-letter";
import LogoSecondLetter from "../assets/logo-second-letter";
import LogoThirdLetter from "../assets/logo-third-letter";

const Logo: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        width: "10rem",
        height: "fit-content",
        padding: "1rem",
      }}
    >
      <LogoFirstLetter />
      <LogoSecondLetter />
      <LogoThirdLetter />
    </div>
  );
};

export default Logo;
