import classNames from "classnames";
import React from "react";
import { CiCircleInfo } from "react-icons/ci";
// Define the type for each option
interface Option {
  name: string;
  label: string;
  value: string | number;
}

// Define props type for ChoiceChip
interface TabProps {
  options?: Option[];
}

const Tab: React.FC<TabProps> = ({}) => {
  const options = [
    { title: "5", count: 1500, subtitle: "14.52%" },
    { title: "5", count: 1500, subtitle: "14.52%" },
    { title: "5", count: 1500, subtitle: "14.52%" },
    { title: "5", count: 1500, subtitle: "14.52%" },
    { title: "5", count: 1500, subtitle: "14.52%" },
    { title: "5", count: 1500, subtitle: "14.52%" },
    { title: "5", count: 1500, subtitle: "14.52%" },
  ];

  return (
    <div className="tab-container">
      {options.map((option, index) => (
        <div
          key={index}
          className={classNames("tab", {
            // active: formValue === option.name,
          })}
        >
          <div className="tab-title">{option.title}</div>

          <div className="tab-item">
            {" "}
            <CiCircleInfo size="1.5rem" className="tab-icon-info" />
            <div className="typography">{option.count}</div>
            {option.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tab;
