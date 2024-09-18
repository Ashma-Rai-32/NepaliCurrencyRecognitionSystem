import classNames from "classnames";

const Card: React.FC<{ children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return <div className={classNames("card", className)}>{children}</div>;
};

export default Card;
