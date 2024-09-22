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
import { RiCamera3Fill, RiSearchFill } from "react-icons/ri";
import classNames from "classnames";
import ImageThumbnail from "@/src/assets/image-thumbnail";
import { IoVolumeLow } from "react-icons/io5";
import StatisticsTile from "@/src/components/StatisticsTile";
import DropdownSimpleField from "@/src/components/DropdownSimpleField";
import { useRef, useState } from "react";
import CardInput from "@/src/components/CardInput";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading3 from "@/src/components/Heading3";

const Scan: React.FC = ({ theme }) => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState();

  console.log("👾 | file:", file);

  const imageUrl = file && URL.createObjectURL(file);

  const [result, setResult] = useState();
  const [showThumbnailOnly, setShowThumbnailOnly] = useState(false);

  const classify = async () => {
    //classify the picture
    //trigger model here

    try {
      const formData = new FormData();
      formData.append("imagefile", file);
      const result = await axios.post("http://localhost:5000/", formData);
      setResult(result.data);
      setShowThumbnailOnly(true);
    } catch (error) {
      console.log(error);
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 }, // Fully visible at original position
  };

  return (
    <>
      <div className="first-row">
        <CardInput
          className={classNames(
            "text-muted",
            css({
              flexGrow: 1,
              padding: !showThumbnailOnly && "0",
              overflow: "hidden",
              ...(!showThumbnailOnly && { minHeight: "50vh" }),
            }),
            showThumbnailOnly &&
              css({
                flexDirection: "row",
                justifyContent: "space-between",
              })
          )}
          file={file}
          setFile={setFile}
          type="input"
        >
          {file ? (
            <>
              {showThumbnailOnly && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Heading3>{file.name}</Heading3>
                  {file.size / 1024} MB
                </div>
              )}
              <img
                src={imageUrl}
                style={{
                  width: "auto",
                  height: "100%",
                  objectFit: "cover",
                  maxHeight: showThumbnailOnly ? "64px" : "450px",
                }}
              />
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Heading1
                className={css({
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                })}
              >
                {file ? (
                  file.name
                ) : (
                  <>
                    <RiCamera3Fill className="icon-button-svg" />
                    Click a picture
                  </>
                )}
              </Heading1>
              {file
                ? Math.floor(file.size / 1024) + "MB"
                : "Please submit a picture of Nepali bill you want to classify."}
            </div>
          )}
          <div
            style={{
              ...(!showThumbnailOnly && { padding: "0 2rem 2rem 2rem" }),
            }}
          >
            <Button
              onClick={(e) => {
                e.preventDefault();
                console.log("👾 | e:", e);

                e.stopPropagation();
                classify();
              }}
              disabled={!file}
              variant="outline"
              className={classNames(
                css({
                  display: "flex",
                  justifyContent: "flex-end",
                })
              )}
            >
              <div className="button-label">classify</div>
              <RiSearchFill className="icon-button-svg" />
            </Button>
          </div>
        </CardInput>
      </div>

      {result && (
        <motion.div
          className="second-row"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Card
            className={classNames(
              "first",
              css({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "416px",
                width: "auto",
                flexGrow: 1,
                padding: "0",
                overflow: "hidden",
              })
            )}
          >
            {result ? (
              <img
                src={imageUrl}
                style={{
                  width: "auto",
                  height: "100%",
                  objectFit: "cover",
                  maxHeight: "450px",
                }}
              />
            ) : (
              <ImageThumbnail width="4rem" height="4rem" />
            )}
          </Card>

          <div className="second">
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
                  <Title>NPR {result.prediction}/-</Title>
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
                      value: result.confidence,
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
        </motion.div>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Scan);
