import Card from "@/src/components/Card";

import Subtitle from "@/src/components/Subtitle";
import Title from "@/src/components/Title";

import { connect } from "react-redux";
import { model } from "@/src/store/constants";

import TypographicList from "@/src/components/TypographicList";
import Button from "@/src/components/Button";

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
import { css } from "@emotion/css";
import { RootState } from "@/src/store/store";

const Model = () => {
  return (
    <div className="model-page">
      <div className="section-1">
        <div className="grid-wrapper">
          <Card className="cell-1">
            <Logo size="80" />
          </Card>
          <Card className="cell-2">
            <Title>{model.title}</Title>
            <Subtitle className="text-muted">{model.subtitle.p1}</Subtitle>
          </Card>

          <div className="cell-3">Inside Our model</div>
          <Flowchart className="cell-4" />
        </div>
        <Subtitle>
          The NCR model leverages a Convolutional Neural Network (CNN), ideal
          for currency recognition as it excels at extracting features for image
          classification. Convolutional layers first detect edges, textures, and
          patterns unique to each denomination. ReLU activation enhances
          computational efficiency, while softmax outputs probabilities to
          identify the most likely denomination accurately.
        </Subtitle>{" "}
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
            flexDirection: "row",
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
          flexDirection: "row",
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
          each currency denomination, highlighting the model&apos;s
          effectiveness in classifying different notes.
        </div>
        <Table />
      </div>
      <div
        className={css({
          display: "flex",
          gap: "2rem",
          flexDirection: "row",
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
          <Button onClick={() => window.open("/report.pdf", "_blank")}>
            NCR Report
          </Button>
        </div>{" "}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Model);
