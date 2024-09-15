const Card: React.FC = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 1rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "2rem",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
