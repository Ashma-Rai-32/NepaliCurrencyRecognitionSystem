import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import Heading1 from "@/src/components/Heading1";
import Subtitle from "@/src/components/Subtitle";
import Title from "@/src/components/Title";
import { css } from "@emotion/css";
import { RootState } from "@reduxjs/toolkit/query";
import { connect } from "react-redux";
import { RiCamera3Fill, RiSearchFill } from "react-icons/ri";
import classNames from "classnames";
import ImageThumbnail from "@/src/assets/image-thumbnail";
import { IoVolumeLow } from "react-icons/io5";
import StatisticsTile from "@/src/components/StatisticsTile";
import DropdownSimpleField from "@/src/components/DropdownSimpleField";
import { useEffect, useRef, useState } from "react";
import CardInput from "@/src/components/CardInput";
import axios from "axios";
import { motion } from "framer-motion";
import Heading3 from "@/src/components/Heading3";
import { updateModelHistory } from "@/src/store/model-slice";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Scan: React.FC = ({ theme, modelHistory, updateModelHistory }) => {
  console.log("👾 | modelHistory:", modelHistory);

  const fileInputRef = useRef(null);

  const [file, setFile] = useState();

  console.log("👾 | file:", file);

  const [modelResult, setModelResult] = useState(null);
  const [showSubmitAnother, setShowSubmitAnother] = useState(false);

  const [scanPageIndex, setScanPageIndex] = useState(0); //0: initial, 1: show submit another pic
  const [modelHistoryIndex, setModelHistoryIndex] = useState(null); //0: initial, 1: show submit another pic

  console.log("👾 | modelHistoryIndex:", modelHistoryIndex);

  console.log(
    "👾 | Object.keys(modelHistory)?.length - 1:",
    Object.keys(modelHistory)?.length - 1
  );
  useEffect(() => {
    if (modelResult) setScanPageIndex(1);
  }, [modelResult]);

  const classify = async () => {
    //classify the picture
    //trigger model here
    try {
      console.log("👾 | file:", file);

      const formData = new FormData();
      formData.append("imagefile", file);
      const response = await axios.post("http://localhost:5000/", formData);

      console.log("👾 | response:", response);

      if (response?.status === 200) {
        const modelResult = {
          fileMetadata: {
            name: file.name,
            size: file.size,
            lastModified: file.lastModified,
          },
          fileImageUrl: URL.createObjectURL(file),
          result: response.data,
        };

        setModelResult(modelResult);
        updateModelHistory(modelResult);
        setModelHistoryIndex(Object.keys(modelHistory)?.length);
        setFile(null);
      } else {
        throw new Error("SERVER ERROR");
      }
      // debugger;
      // setShowSubmitAnother(true);
    } catch (error) {
      console.log(error);
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 }, // Fully visible at original position
  };

  return (
    <div
      className={classNames("wrapper", {
        "second-phase": scanPageIndex === 1,
      })}
    >
      <div className="first-row">
        <CardInput
          className={classNames("text-muted", "card-input", {
            "second-phase": scanPageIndex === 1,
          })}
          file={file}
          setFile={setFile}
          type="input"
        >
          {scanPageIndex === 0 ? (
            file ? (
              <img
                src={URL.createObjectURL(file)}
                style={{
                  width: "auto",
                  height: "100%",
                  objectFit: "cover",
                  maxHeight: scanPageIndex === 1 ? "64px" : "400px",
                }}
              />
            ) : (
              <div className="body-container">
                <Heading1>
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
            )
          ) : file ? (
            <div
              className={css({
                marginLeft: "2rem",
                gap: "1rem",
                display: "flex",
              })}
            >
              <Heading3>{file.name}</Heading3>(
              {Math.floor(file.size / 1024) + "MB"})
            </div>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  paddingLeft: "2rem",
                }}
              >
                Please submit the picture of the Nepali bill you want to
                classify.
              </div>
            </>
          )}
          <div
            style={{
              ...(scanPageIndex === 0 && { padding: "0 2rem 2rem 2rem" }),
            }}
          >
            <Button
              onClick={(e) => {
                e.preventDefault();

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

      {modelHistory &&
        Object.entries(modelHistory).map(([key, entry], index) => {
          console.log("👾 | index:", index);
          console.log("👾 | modelHistoryIndex:", modelHistoryIndex);
          // debugger;

          if (index === modelHistoryIndex)
            return (
              <motion.div
                key={key}
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
                  {entry ? (
                    <img
                      src={entry.fileImageUrl}
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
                  {Object.keys(modelHistory).length > 1 && (
                    <div
                      className={classNames(
                        css({
                          position: "relative",
                          height: "1rem",

                          top: "-2rem",
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: "1rem",
                          alignItems: "center",
                          "@media (max-width:746px)": {
                            display: "none",
                          },
                        }),
                        "text-muted"
                      )}
                    >
                      <MdOutlineKeyboardArrowLeft
                        className={
                          modelHistoryIndex <= 0 ? "disabled" : "active"
                        }
                        onClick={
                          modelHistoryIndex <= 0
                            ? undefined
                            : () => setModelHistoryIndex((prev) => prev - 1)
                        }
                      />
                      {modelHistoryIndex + 1}/{Object.keys(modelHistory).length}
                      <MdOutlineKeyboardArrowRight
                        className={
                          modelHistoryIndex + 1 >=
                          Object.keys(modelHistory).length
                            ? "disabled"
                            : "active"
                        }
                        onClick={
                          modelHistoryIndex + 1 >=
                          Object.keys(modelHistory).length
                            ? undefined
                            : () => setModelHistoryIndex((next) => next + 1)
                        }
                      />
                    </div>
                  )}
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
                        <Title>NPR {entry.result.prediction}/-</Title>
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
                            value: entry.result.confidence,
                          },
                          {
                            label: "Accuracy",
                            type: "percentage-bar",
                            value: 20,
                          },
                          {
                            label: "Time elapsed",
                            type: "text",
                            value: "100ms",
                          },
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
            );
        })}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.theme,
  modelHistory: state.model.modelHistory,
});

const mapDispatchToProps = {
  updateModelHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scan);
