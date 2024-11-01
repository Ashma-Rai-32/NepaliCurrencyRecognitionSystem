import classNames from "classnames";
import React, { useEffect, useState, useCallback, useRef } from "react";

// Define the type for each option
interface Option {
  name: string;
  label: string;
  value: string | number;
}

// Define props type for ChoiceChip
interface ChoiceChipProps {
  options: Option[];
}

const ChoiceChip: React.FC<ChoiceChipProps> = ({ options }) => {
  // State to store the selected option's name
  const [formValue, setFormValue] = useState<string | null>(null);

  console.log("👾 | formValue:", formValue);

  // Refs for sliding background and option elements
  const slidingBackgroundRef = useRef<HTMLDivElement | null>(null);
  const baseRef = useRef<HTMLDivElement | null>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle option click
  const handleOptionClick = useCallback(
    (name: string, index: number) => {
      setFormValue((prevValue) => (prevValue === name ? null : name));
      // Reset all active states
      optionRefs.current.forEach((ref, i) => {
        if (ref) {
          ref.classList.toggle("active", i === index && formValue !== name);
        }
      });
    },
    [formValue]
  );

  useEffect(() => {
    const updateBackground = (element: HTMLDivElement | null) => {
      const slidingBackground = slidingBackgroundRef.current;
      const baseElement = baseRef.current;
      if (!element || !slidingBackground || !baseElement) {
        if (slidingBackground) slidingBackground.style.opacity = "0";
        return;
      }

      const rect = element.getBoundingClientRect();
      const baseRect = baseElement.getBoundingClientRect();
      const offsetLeft = rect.left - baseRect.left - 2;
      const width = rect.width;

      slidingBackground.style.opacity = "1";
      slidingBackground.style.transform = `translateX(${offsetLeft}px)`;
      slidingBackground.style.width = `${width}px`;
    };

    const activeIndex = options.findIndex(
      (option) => option.name === formValue
    );
    const activeOption = optionRefs.current[activeIndex] || null;
    updateBackground(activeOption);
  }, [formValue, options]);

  return (
    <div className="base" ref={baseRef}>
      <div className="container">
        <div className="sliding-background" ref={slidingBackgroundRef}></div>
        {options.map((option, index) => (
          <div
            key={index}
            className={classNames("option", {
              active: formValue === option.name,
            })}
            ref={(el) => (optionRefs.current[index] = el)}
            onClick={() => handleOptionClick(option.name, index)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoiceChip;
