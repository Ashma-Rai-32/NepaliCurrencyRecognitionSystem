import IconButton from "./IconButton";

type IconButtonGroupProps = {
  options: Array<{ icon: string; onClick: () => void; label?: string }>;
};

const IconButtonGroup: React.FC<IconButtonGroupProps> = ({
  options,
}) => {
  return (
    <div className="icon-button-group">
      {options.map((option, index) => {
        return (
          <IconButton key={index} icon={option.icon} onClick={option.onClick} />
        );
      })}
    </div>
  );
};

export default IconButtonGroup;
