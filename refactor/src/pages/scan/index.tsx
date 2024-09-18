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
import { RiSearchFill } from "react-icons/ri";
import classNames from "classnames";
import ImageThumbnail from "@/src/assets/image-thumbnail";
import { IoVolumeLow } from "react-icons/io5";
import StatisticsTile from "@/src/components/StatisticsTile";
import DropdownSimpleField from "@/src/components/DropdownSimpleField";

const Scan: React.FC = ({ theme }) => {
  console.log("👾 | theme:", theme);

  return (
    <div
      style={{
        width: "100vw",
        position: "absolute",
        left: "0",
        top: "0",
      }}
    >
      <div
        style={{
          position: "fixed",
          left: "2rem",
          bottom: "3rem",
          zIndex: 1,
        }}
      >
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
      <div
        style={{
          display: "flex",

          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          gap: "1rem",
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
              alignItems: "center",
            }}
          >
            <Card
              className={classNames(
                "text-muted",
                css({
                  flexGrow: 1,
                })
              )}
            >
              <Heading1>Click a picture</Heading1>
              {/* <Subtitle> */}
              Please submit a picture of Nepali bill you want to classify.
              {/* </Subtitle> */}
            </Card>
            <Button href="/">
              classify
              <RiSearchFill className="icon-button-svg" />
            </Button>
          </div>

          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            })}
          >
            <Card
              className={css({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "416px",
                width: "416px",
              })}
            >
              <ImageThumbnail width="4rem" height="4rem" />
            </Card>

            <div>
              <div
                style={{
                  position: "relative",
                  height: "1rem",
                  top: "-2rem",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                className="text-muted"
              >
                1/2
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  position: "relative",
                  top: "-1rem",
                }}
              >
                <Card
                  className={css({
                    display: "flex",
                    flexDirection: "row",

                    alignItems: "center",
                    justifyContent: "space-between",
                  })}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2rem",
                    }}
                  >
                    <Title>NPR 1000/-</Title>
                    <Subtitle className="text-muted">
                      One thousand rupees
                    </Subtitle>
                  </div>
                  <IoVolumeLow className="icon-button-svg" size="4rem" />
                </Card>
                <div>
                  <StatisticsTile
                    options={[
                      {
                        label: "confidence",
                        type: "percentage-bar",
                        value: 10,
                      },
                      { label: "Accuracy", type: "percentage-bar", value: 20 },
                      { label: "Time elapsed", type: "text", value: "100ms" },
                    ]}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <DropdownSimpleField
                    options={[
                      { label: "USD", value: "USD" },
                      { label: "NPR", value: "NPR" },
                    ]}
                    label="Convert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Scan);
