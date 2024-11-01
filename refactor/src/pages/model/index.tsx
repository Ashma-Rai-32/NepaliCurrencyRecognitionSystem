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
import ConfusionMatrix from "@/src/components/ConfusionMatrix";
import Table from "@/src/components/Table";
import TypographicTitle from "@/src/components/TypographicTitle";
import TabGraphic from "@/src/components/TabGraphic";

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
      {/* result  */}
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
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
          result
        </div>
        <div
          className={css({
            display: "flex",
            gap: "2rem",
            direction: "row",
          })}
        >
          {/* // confusion matrix */}
          <ConfusionMatrix />
          <div
            className={css({
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
            })}
          >
            <div className="typography">confusion matrix</div>
            The confusion matrix for the final model revealed important insights
            into its performance across currency denominations. The model
            achieved high accuracy, especially with Rupees 50 and 1000,
            exceeding 95%. However, it struggled with denominations like Rupees
            10 and 20, which showed lower precision and recall due to their
            visual similarities. Analysis of the misclassifications indicated
            that Rupees 10 was often mistaken for Rupees 5. This pattern
            underscores the need to enhance the training dataset by
            incorporating more diverse images of lower-denomination notes.
          </div>
        </div>
      </div>
      {/* evaluatio metrics result  */}
      <div
        className={css({
          display: "flex",
          gap: "2rem",
          direction: "row",
        })}
      >
        <div
          className={css({
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
          })}
        >
          <TypographicTitle>evaluation metrics result</TypographicTitle>
          The table summarizes the precision, recall, F1-score, and support for
          each currency denomination, highlighting the model's effectiveness in
          classifying different notes.
        </div>
        <Table />
      </div>
      <div
        className={css({
          display: "flex",
          gap: "2rem",
          direction: "row",
        })}
      >
        <div
          className={css({
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
          })}
        >
          <TypographicTitle>metrics analysis summary</TypographicTitle>
          Averaged values of the evaluation metrics for each denomination
        </div>
        <TabGraphic />
      </div>
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        })}
      >
        {" "}
        <Card outlined>
          <Title>{model.journey.title}</Title>
          <Subtitle className="text-muted">{model.journey.content}</Subtitle>
        </Card>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "flex-end",
          })}
        >
          {" "}
          <Card>
            <Title>{model.report.title}</Title>
            <Subtitle className="text-muted">
              {model.report.introduction}
            </Subtitle>
            {/* <Card>
              <PdfViewer fileUrl="/report.pdf" />
            </Card> */}
          </Card>
          <Button onClick={() => {}}>{model.callToAction.title}</Button>
          <Button onClick={() => {}}>{model.callToAction.title}</Button>
        </div>{" "}
      </div>

      {model.contact.content}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Model);
