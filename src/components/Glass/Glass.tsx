import React, { ReactNode, useEffect, useState } from "react";
import "./Glass.css";
import { Container } from "../Container";
import { Yardstick } from "../Yardstick";
import { CircleProps } from "../Circle";
import { Liquid } from "../App";

type Props = {
  children?: ReactNode;
  childrenProps?: CircleProps;
  glassProps: Liquid;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Glass: React.FC<Props> = ({
  children,
  childrenProps,
  glassProps,
  setStart,
}) => {
  const speed = childrenProps
    ? (2 *
        (childrenProps?.density - glassProps.density) *
        childrenProps?.radius *
        childrenProps?.radius *
        9.8) /
      (9 * glassProps.viscosity)
    : 0;

  const time = childrenProps ? (200 - childrenProps?.radius * 2) / speed : 0;

  const mmInFrame = 1;

  const delay = childrenProps
    ? (time * mmInFrame) / (200 - childrenProps?.radius * 2)
    : 0;

  const rrc = childrenProps
    ? (200 - childrenProps?.radius * 2) / mmInFrame -
      (((200 - childrenProps?.radius * 2) / mmInFrame) % 1)
    : 0;

  const [height, setHeight] = useState<number>(0);
  const [rerenderCount, setRerenderCount] = useState<number>(rrc);
  useEffect(() => {
    if (rerenderCount >= 0) {
      setTimeout(() => {
        setHeight((prev) => prev + mmInFrame);
        setRerenderCount((prev) => prev - 1);
      }, delay * 1000);
    }
  }, [height, rerenderCount]);
  console.log(height, delay, time, mmInFrame, speed, rerenderCount);
  return (
    <Container vertical={false}>
      <Container vertical={true} justifyContent={"flex-end"}>
        <Container
          style={{
            height: "20cm",
            border: "3px solid black",
            borderTop: "none",
            marginLeft: "10px",
            backgroundColor: glassProps.color,
          }}
          vertical={true}
        >
          <Container
            style={{
              borderBottom: "2px red solid",
              height: childrenProps ? `${2 * childrenProps?.radius}mm` : "5cm",
            }}
            vertical={false}
            justifyContent={"center"}
          >
            <div style={{ position: "relative", top: `${height}mm` }}>
              {children}
            </div>
          </Container>
          <Container style={{ height: "3cm", borderTop: "2px red solid" }} />
        </Container>
      </Container>
      <Container style={{ marginLeft: "20px" }}>
        <Yardstick height={20} />
      </Container>
      <Container
        vertical={true}
        style={{ width: "200px" }}
        justifyContent={"flex-start"}
      >
        <Stopwatch
          rrc={rrc}
          setHeight={setHeight}
          setRerenderCount={setRerenderCount}
          setStart={setStart}
        />
      </Container>
    </Container>
  );
};

const Stopwatch: React.FC<{
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  setRerenderCount: React.Dispatch<React.SetStateAction<number>>;
  rrc: number;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setHeight, setRerenderCount, rrc, setStart }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            setRunning(true);
            setHeight(0);
            setRerenderCount(rrc);
          }}
        >
          СТАРТ
        </button>
        <button onClick={() => setRunning(false)}>СТОП</button>
        <button
          onClick={() => { window.location.reload()
            setTime(0);
            setStart(false);
            setRunning(false);
          }}
        >
          СБРОСИТЬ
        </button>
      </div>
    </div>
  );
};
