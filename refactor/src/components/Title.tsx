import classNames from "classnames";

const Title: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={classNames("title", className)}>{children}</div>;
};

export default Title;
