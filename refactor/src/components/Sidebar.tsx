import { useRouter } from "next/router";
import IconButtonGroup from "./IconButtonGroup";

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  console.log("👾 | router:", router);

  const handleRouter = (route) => {
    console.log("👾 | route:", route);

    router.push(route);
  };

  return (
    <div className="sidebar-container">
      <IconButtonGroup
        options={[
          {
            label: "home",
            icon: "home",
            onClick: (e) => {
              handleRouter("/landing-page");
            },
          },
          {
            label: "search",
            icon: "search",
            onClick: (e) => {
              handleRouter("/scan");
            },
          },
          {
            label: "model",
            icon: "model",
            onClick: (e) => {
              handleRouter("/model");
            },
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
