import Card from "@/src/components/Card";

import Subtitle from "@/src/components/Subtitle";
import Title from "@/src/components/Title";

import { RootState } from "@reduxjs/toolkit/query";
import { connect } from "react-redux";
import { useRef, useState } from "react";
import axios from "axios";
import { model } from "@/src/store/constants";

// import "@react-pdf-viewer/core/lib/styles/index.css";
import PdfViewer from "@/src/components/PDFViewer";
import TypographicList from "@/src/components/TypographicList";
import Button from "@/src/components/Button";
import { css } from "@emotion/css";
import Logo from "@/src/components/Logo";
import classNames from "classnames";
import Flowchart from "@/src/components/Flowchart";
import PercentageBar from "@/src/components/PercentageBar";
import ChoiceChip from "@/src/components/ChoiceChip";
import Tab from "@/src/components/Tab";
import ModelCarousel from "@/src/components/ModelCarousel";

const Model: React.FC = ({ theme }) => {
  const [file, setFile] = useState();
  const imageUrl = file && URL.createObjectURL(file);

  const [result, setResult] = useState();

  const classify = async () => {
    //classify the picture
    //trigger model here

    try {
      const formData = new FormData();
      formData.append("imagefile", file);
      const result = await axios.post("http://localhost:5000/", formData);
      setResult(result.data);
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
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "2rem",
        })}
      >
        <Logo />
        <Card>
          <Title>{model.title}</Title>
          <Subtitle className="text-muted">{model.subtitle.p1}</Subtitle>
          <Subtitle className="text-muted">{model.subtitle.p2}</Subtitle>
        </Card>
      </div>
      <div
        className={classNames(
          "typography",
          "text-muted",
          css({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          })
        )}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "flex-end",
            textAlign: "end",
            fontSize: "5rem",
          })}
        >
          Inside Our model
        </div>
        <Flowchart />
      </div>
      <Subtitle className="text-muted">
        The NCR model leverages a Convolutional Neural Network (CNN), ideal for
        currency recognition as it excels at extracting features for image
        classification. Convolutional layers first detect edges, textures, and
        patterns unique to each denomination. ReLU activation enhances
        computational efficiency, while softmax outputs probabilities to
        identify the most likely denomination accurately.
      </Subtitle>

      <div
        className={css({
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        })}
      >
        <Card>
          <Title> {model.vision.title}</Title>
          <Subtitle className="text-muted">{model.vision.content}</Subtitle>
        </Card>
        <TypographicList
          listArray={model.keyFeatures.features}
          className={css({
            flexGrow: 1,
          })}
        />
      </div>
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          })}
        >
          <div
            className={classNames(
              "typography",
              css({
                fontSize: "4rem",
              })
            )}
          >
            Dataset
          </div>
          {/* vertical percentage bar */}
          <PercentageBar />
        </div>
        {model.dataset.body}
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
          })}
        >
          <div className="typography">class distribution</div>{" "}
          <div>{model.classDistribution.caption}</div>
        </div>
        <div>
          {" "}
          {/* needs to be the info tab tile here */}
          <Tab />
          <ChoiceChip options={model.evaluationModes} />
        </div>{" "}
      </div>

      {/* trainings */}
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        })}
      >
        <div
          className={classNames(
            "typography",
            css({
              fontSize: "4rem",
            })
          )}
        >
          trainings
        </div>
        <ModelCarousel />
      </div>
      <Card>
        <Title> {model.description.title}</Title>
        {model.description.content}
      </Card>
      <Card>
        <Title>{model.keyFeatures.title}</Title>
      </Card>
      <Title>{model.importance.title}</Title>
      <Subtitle>{model.importance.content}</Subtitle>
      <Card>
        <Title>{model.journey.title}</Title>
        <Subtitle>{model.journey.content}</Subtitle>
      </Card>
      <Card>
        <Title>{model.report.title}</Title>
        {model.report.introduction}
        <Card>
          <PdfViewer fileUrl="/report.pdf" />
        </Card>
      </Card>
      <Button onClick={() => {}}>{model.callToAction.title}</Button>
      {model.contact.content}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Model);
