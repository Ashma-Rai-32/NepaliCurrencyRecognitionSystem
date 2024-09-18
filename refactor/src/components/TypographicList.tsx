import classNames from "classnames";
import Button from "./Button";

const TypographicList: React.FC<{
  listArray: Array<object>;
}> = ({ listArray, className }) => {
  return (
    <div className={classNames("typographic-list", className)}>
      {listArray.map((listItem, index) => {
        return (
          <div key={index} className="typographic-list-listitem">
            <div className="listitem-icon"></div>
            {listItem?.label}
          </div>
        );
      })}
    </div>
  );
};

export default TypographicList;
