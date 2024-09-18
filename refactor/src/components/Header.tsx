import IconButtonGroup from "./IconButtonGroup";
import Logo from "./Logo";

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="header-container">
      <Logo />
    </div>
  );
};

export default Header;
