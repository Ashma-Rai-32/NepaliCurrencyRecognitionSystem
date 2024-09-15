import CardOverlappedBackground from "../assets/card-overlapped-background";

const CardOverlapped: React.FC = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        width: "10rem",
        height: "fit-content",
        padding: "1rem",
      }}
    >
      {" "}
      <div
        style={{
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <CardOverlappedBackground />
      </div>
      {children}
    </div>
  );
};

export default CardOverlapped;
