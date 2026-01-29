import classNames from "classnames";
import Button from "./Button";

const Footer: React.FC<{
  listArray: Array<object>;
}> = ({ listArray, className }) => {
  return (
    <div className="footer">
      {`I made this for self entertainment purposes. If it crashes, please don’t come at me. <(￣︶￣)> hehhh!~`}
    </div>
  );
};

export default Footer;
