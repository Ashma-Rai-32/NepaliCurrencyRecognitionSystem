import classNames from "classnames";

const TypographicTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const words = typeof children === "string" ? children.split(" ") : [];

  return (
    <div className={classNames("typographic-title", className)}>
      {words.map((word, index) => (
        <div key={index}>{word}</div>
      ))}
    </div>
  );
};

export default TypographicTitle;
