import IconButtonGroup from "./IconButtonGroup";

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="sidebar-container">
      <IconButtonGroup
        options={[
          { label: "home", icon: "home" },
          {
            label: "search",
            icon: "search",
          },
          {
            label: "model",
            icon: "model",
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
