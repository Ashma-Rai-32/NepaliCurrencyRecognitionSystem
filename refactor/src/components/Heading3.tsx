import classNames from "classnames";

const Heading3: React.FC<{ children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return <div className={classNames(className, "heading-3")}>{children}</div>;
};

export default Heading3;
