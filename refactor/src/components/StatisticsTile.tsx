import PercentageBar from "./PercentageBar";

type StatisticsTileProps = {
  options: Array<{ type: string; value: number | string; label: string }>;
};

const StatisticsTile: React.FC<StatisticsTileProps> = ({
  options,
}) => {
  const renderStatisticsItem = ({ option }: { option: { type: string; value: number | string; label: string } }) => {
    switch (option.type) {
      case "percentage-bar":
        return <PercentageBar value={typeof option.value === 'number' ? option.value : 0} />;
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
