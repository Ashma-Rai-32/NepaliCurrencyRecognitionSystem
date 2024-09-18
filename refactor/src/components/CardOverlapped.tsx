import CardOverlappedBackground from "../assets/card-overlapped-background";

const CardOverlapped: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      {" "}
      <div
        style={{
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <CardOverlappedBackground />
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
};

export default CardOverlapped;
