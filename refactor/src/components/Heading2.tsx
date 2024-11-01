import classNames from "classnames";

const Heading2: React.FC<{ children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return <div className={classNames(className, "heading-2")}>{children}</div>;
};

export default Heading2;
