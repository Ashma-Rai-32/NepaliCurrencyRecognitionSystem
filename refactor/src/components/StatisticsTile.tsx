import PercentageBar from "./PercentageBar";

const StatisticsTile: React.FC<{ children: React.ReactNode }> = ({
  children,
  options,
}) => {
  const renderStatisticsItem = ({ option }) => {
    switch (option.type) {
      case "percentage-bar":
        return <PercentageBar value={option.value} />;
      default:
        return null;
    }
  };

  return (
    <div className="statistics-tile">
      {options.map((option, index) => {
        return (
          <div key={index} className="statistics-tile-item">
            <div>{option.label}</div>
            <div>
              {option.type === "percentage-bar"
                ? option.value + " %"
                : option.value}
            </div>
            {renderStatisticsItem({ option })}
          </div>
        );
      })}
    </div>
  );
};

export default StatisticsTile;
