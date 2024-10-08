import classNames from "classnames";
import { useRef, useState } from "react";

const CardInput: React.FC<{ children: React.ReactNode }> = ({
  children,
  className,
  onClick,
  type,
  file,
  setFile,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Trigger the hidden input when the Card is clicked
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file input change (when the user selects a file)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();

    const file = event.target.files?.[0];

    // console.log("👾 | event.target.files:", event.target.files);

    // console.log("👾 | file:", file);

    if (file) {
      setFile(file);
      // Process the selected file (e.g., upload or display a preview)
    }
  };
  return (
    <>
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <div
        className={classNames("card", { input: type === "input" }, className)}
        onClick={(e) => {
          // e.stopPropagation();
          console.log("DIV CLCIKED");
          handleClick();
        }}
      >
        {children}
      </div>
    </>
  );
};

export default CardInput;
