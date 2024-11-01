import { useEffect, useState } from "react";
import CardOverlappedBackground from "../assets/card-overlapped-background";
import Card from "./Card";

const CardOverlapped: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    const checkWindowSize = () => {
      if (typeof window !== "undefined") {
        setIsWideScreen(window.innerWidth > 1024);
      }
    };

    // Initial check
    checkWindowSize();

    // Add resize event listener
    window.addEventListener("resize", checkWindowSize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  if (isWideScreen)
    return (
      <div>
        {" "}
        <div
          style={{
            position: "absolute",
            zIndex: "-1",
          }}
        >
          <style>
            {`
            @media (max-width: 1024px) {
              .background {
                display: none; /* Hide overlapping background on small screens */
              }
            }
          `}
          </style>
          <div className="background">
            <CardOverlappedBackground />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem",
          }}
        >
          {children}
        </div>
      </div>
    );
  else
    return (
      <div>
        <Card>{children}</Card>
      </div>
    );
};

export default CardOverlapped;
