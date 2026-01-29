import { css } from "@emotion/css";
import classNames from "classnames";
import Title from "./Title";
import { useRef, useState } from "react";
import { model } from "../store/constants";

const ModelCarousel: React.FC<{ className?: string }> = ({ className }) => {

  const modelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeModel, setActiveModel] = useState(0);
  const gridTemplateColumnsForModelCarousel = [
    "auto 4rem 320px",
    "4rem auto 320px",
    "4rem 4rem auto",
  ];

  const onModelHover = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    setActiveModel(index);
  };

  return (
    <div
      className={css({
        height: Math.sin((30 * Math.PI) / 180) * 320 + 480,
        position: "relative",
      })}
    >
      <div
        className={css({
          transform: "translateX(-250px) translateY(50px)",
          padding: "2rem",
          position: "relative",
          width: "480px",
          top: "6rem",
          left:
            activeModel === 0 ? "16rem" : activeModel === 1 ? "20rem" : "24rem",
          zIndex: "1",
          transition: "all 200ms ease-out",
        })}
      >
        <Title
          className={classNames(
            "typography",
            css({
              fontSize: "3rem",
            })
          )}
        >
          #{model.modelVariants[activeModel].label.toUpperCase()}
        </Title>
        {model.modelVariants[activeModel].description}
      </div>
      <div
        className={classNames(
          "model-carousel",
          className,
          css({
            gridTemplateColumns:
              gridTemplateColumnsForModelCarousel[activeModel],
          })
        )}
      >
        {model.modelVariants.map((variant, index) => (
          <div
            key={index}
            className={classNames(
              "carousel-background-polygon",
              variant.shade,
              css({
                position: "absolute",
              })
            )}
            onMouseEnter={(e) => onModelHover(e, index)}
            ref={(el: HTMLDivElement | null) => {
              modelRefs.current[index] = el;
            }}
          ></div>
        ))}
        {/* <div
          className={classNames(
            "carousel-background-polygon",
            "bg-background",
            css({
              transform:
                "skewY(-30deg) translate3d(-250px,-140px,1px) !important",
            })
          )}
        ></div>
        <div
          className={classNames(
            "carousel-background-polygon",
            "bg-background-light  "
            // css({
            //   transform:
            //     "skewY(-30deg) translate3d(-250px,-140px,1px) !important",
            // })
          )}
        ></div> */}
      </div>
    </div>
  );
};

export default ModelCarousel;
