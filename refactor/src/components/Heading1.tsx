import classNames from "classnames";

const Heading1: React.FC<{ children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return <div className={classNames(className, "heading-1")}>{children}</div>;
};

export default Heading1;
