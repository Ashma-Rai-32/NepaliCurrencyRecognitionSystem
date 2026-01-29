import { useRouter } from "next/router";
import IconButtonGroup from "./IconButtonGroup";

const Sidebar = () => {
  const router = useRouter();

  console.log("👾 | router:", router);

  const handleRouter = (route: string) => {
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
            onClick: () => {
              handleRouter("/landing-page");
            },
          },
          {
            label: "search",
            icon: "search",
            onClick: () => {
              handleRouter("/scan");
            },
          },
          {
            label: "model",
            icon: "model",
            onClick: () => {
              handleRouter("/model");
            },
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
