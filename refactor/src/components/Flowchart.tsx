import classNames from "classnames";

const Flowchart: React.FC<{ children: React.ReactNode }> = ({
  children,
  className,
}) => {
  const options = [
    {
      label: "start",
      shade: "shade-1",
    },
    {
      label: "dataset",
      shade: "shade-2",
    },
    {
      label: "organize",
      shade: "shade-2",
    },
    {
      label: "training",
      shade: "shade-3",
    },
    {
      label: "result",
      shade: "shade-4",
    },
  ];
  return (
    <div className={classNames("flowchart-container", className)}>
      {options.map((option, index) => (
        <div
          key={index}
          className={classNames("flowchart-item", option.shade, "typography")}
        >
          {option.label}
        </div>
      ))}
      {/* jjust the svg here */}
      <svg
        width="89"
        height="91"
        viewBox="0 0 89 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 90H72C80.8366 90 88 82.8366 88 74V0" stroke="#A5A5A5" />
      </svg>
    </div>
  );
};

export default Flowchart;
