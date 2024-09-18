import classNames from "classnames";
import Button from "./Button";

const Footer: React.FC<{
  listArray: Array<object>;
}> = ({ listArray, className }) => {
  return (
    <div className="footer">
      {`Our system is here for your convenience. If it crashes, please don’t bother us. <(￣︶￣)> hehhh!~`}
    </div>
  );
};

export default Footer;
