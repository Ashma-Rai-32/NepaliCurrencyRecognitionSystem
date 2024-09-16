import LogoFirstLetter from "@/src/assets/logo-first-letter";
import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardOverlapped from "@/src/components/CardOverlapped";
import Logo from "@/src/components/Logo";
import IconButtonGroup from "@/src/components/Sidebar";

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        left: "0",
        // height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "2rem",
          bottom: "3rem",
        }}
      >
        sidebar
        <IconButtonGroup
          options={[
            { label: "icon", icon: "icon" },
            {
              label: "label2",
              icon: "icon2",
            },
          ]}
        />
      </div>
      <div
        style={{
          display: "flex",

          flexDirection: "column",
          // /          height: "inherit",
          alignItems: "center",
          minHeight: "100vh",
          gap: "2rem",
        }}
      >
        <div
          style={{
            marginRight: "120px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* Header */}
          <Logo />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "960px",
            gap: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            <div
              style={{
                flexGrow: "1",
              }}
            >
              <CardOverlapped>content1</CardOverlapped>
            </div>
            <div
              style={{
                width: "330px",
              }}
            >
              <Card>
                <Logo />
              </Card>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "440px",
              }}
            >
              <Card>
                <Logo />
              </Card>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
            // style={{
            //   display: "flex",
            //   gap: "1rem",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   width: "fit-content",
            // }}
            >
              Button<div>icon</div>
            </Button>
          </div>
        </div>
        <div>footer</div>
      </div>
    </div>
  );
};

export default LandingPage;
