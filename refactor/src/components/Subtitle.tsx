import classNames from "classnames";

const Subtitle: React.FC<{ children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return <div className={classNames("subtitle", className)}>{children}</div>;
};

export default Subtitle;
