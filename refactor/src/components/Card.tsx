import classNames from "classnames";

const Card: React.FC<{ children: React.ReactNode }> = ({
  children,
  className,
  outlined,
}) => {
  return (
    <div className={classNames("card", { outlined: outlined }, className)}>
      {children}
    </div>
  );
};

export default Card;
