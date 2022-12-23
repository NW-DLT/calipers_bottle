import React from "react";
import "./Yardstick.css";
import { Container } from "../";

type Props = {
  height: number;
};

const innerScale: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const Yardstick: React.FC<Props> = ({ height }) => {
  const scale: number[] = [];
  for (let i = 0; i < height; i++) {
    scale.push(i);
  }

  return (
    <Container
      vertical={false}
      justifyContent={"flex-start"}
      style={{ maxWidth: "50px", backgroundColor: "gray" }}
    >
      <Container vertical={true} style={{ marginTop: "50px" }}>
        {scale.map((value, i) => (
          <div
            key={value}
            className={"scaleElement"}
            style={{
              borderTop: i === 0 ? "1px solid white" : "",
              borderBottom: i === scale.length - 1 ? "none" : "auto",
            }}
          >
            <span className={"scaleElementDash"}>{value}</span>
            <div>
              {innerScale.map((element, idx) => (
                <div
                  key={element}
                  className={"innerScaleElement"}
                  style={{
                    borderBottom: idx === 8 ? "none" : "auto",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
};
