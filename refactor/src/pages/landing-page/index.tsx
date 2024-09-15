import LogoFirstLetter from "@/src/assets/logo-first-letter";
import Card from "@/src/components/Card";
import CardOverlapped from "@/src/components/CardOverlapped";
import Logo from "@/src/components/Logo";

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        left: "0",
        height: "100%",
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
      </div>
      <div
        style={{
          display: "flex",

          flexDirection: "column",
          height: "inherit",
          alignItems: "center",
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
            height: "100%",
            display: "flex",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12,1fr)",
            }}
          >
            <div
              style={{
                gridColumn: "3/8",
              }}
            >
              <CardOverlapped>content1</CardOverlapped>
            </div>
            <div
              style={{
                gridColumn: "8/11",
              }}
            >
              <Card>
                <Logo />
              </Card>
            </div>
          </div>
          <div className="masonry-grid">
            <div
              className="tile"
              style={{
                height: "200px",
              }}
            >
              Tile 1
            </div>
            <div className="tile" style={{ height: "500px" }}>
              Tile 2
            </div>
            <div
              className="tile"
              style={{
                height: "400px",
              }}
            >
              Tile 3
            </div>
            <div className="tile">Tile 4</div>
            <div className="tile">Tile 5</div>
            <div className="tile">Tile 6</div>
          </div>
        </div>
        <div>footer</div>
      </div>
    </div>
  );
};

export default LandingPage;
