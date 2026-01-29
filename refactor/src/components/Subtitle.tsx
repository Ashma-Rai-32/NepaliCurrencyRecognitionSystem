import classNames from "classnames";

const Subtitle: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <div className={classNames("subtitle", className)}>{children}</div>;
};

export default Subtitle;
