import LogoFirstLetter from "@/src/assets/logo-first-letter";
import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardOverlapped from "@/src/components/CardOverlapped";
import Heading1 from "@/src/components/Heading1";
import Logo from "@/src/components/Logo";
import IconButtonGroup from "@/src/components/IconButtonGroup";
import Subtitle from "@/src/components/Subtitle";
import Title from "@/src/components/Title";
import TypographicList from "@/src/components/TypographicList";
import { css } from "@emotion/css";
import { RootState } from "@reduxjs/toolkit/query";
import { connect } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import Footer from "@/src/components/Footer";

const LandingPage: React.FC = ({ theme }) => {
  console.log("👾 | theme:", theme);

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "960px",
          gap: "2rem",
          marginBottom: "-2.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "600px auto",
          }}
        >
          <div
            style={{
              flexGrow: "1",
            }}
          >
            <CardOverlapped>
              <Title>Nepali Currency recognition system</Title>
              <Subtitle className="text-muted">
                Introducing our Nepalese Currency Recognition System: a handy
                tool that makes identifying and sorting Nepalese banknotes a
                breeze. Effortlessly recognize different denominations from
                images.
              </Subtitle>
              <Subtitle className="text-muted">
                Ideal for quick and accurate cash handling, this system
                simplifies your transactions and everyday financial tasks.
              </Subtitle>
            </CardOverlapped>
          </div>

          <Card
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "240px",
            })}
          >
            <Logo
              className={css({
                width: "260px",
                padding: "0",
              })}
            />
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            top: "-4rem",
          }}
        >
          <TypographicList
            listArray={[
              { label: "quick" },
              { label: "convenient" },
              { label: "effortless" },
            ]}
            className={css({
              position: "relative",
              top: "8rem",
              left: "2rem",
              zIndex: -1,
            })}
          />
          <div
            style={{
              width: "440px",
            }}
          >
            {" "}
            <Card>
              <Title>Don’t know how much cash you have? </Title>
              <Subtitle className="text-muted">
                Our Nepalese Currency Recognition System makes it easy!
              </Subtitle>
            </Card>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button href="/scan">
          get started!
          <BsPlusLg className="icon-button-svg" />
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(LandingPage);
