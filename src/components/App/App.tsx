import React, { useEffect, useState } from "react";
import "./App.css";

import {
  Container,
  TopContainer,
  Circle,
  CircleProps,
  Caliper,
  ButtonProps,
  Button,
  Glass,
} from "../index";

export type Liquid = {
  color: string;
  density: number;
  viscosity: number;
};

export const App: React.FC<{}> = () => {
  const [circleValues, setCircleValues] = useState<CircleProps>({
    color: "brown",
    density: 1,
    radius: 0,
  });

  const [glass, setGlass] = useState<Liquid>({
    color: "",
    density: 0,
    viscosity: 0,
  });

  const [start, setStart] = useState<boolean>(false);

  const circles: CircleProps[] = [
    { color: "brown", density: 8960, radius: 10, callback: setCircleValues },
    { color: "blue", density: 7874, radius: 10, callback: setCircleValues },
    { color: "gray", density: 850, radius: 10, callback: setCircleValues },
  ];

  const buttons: ButtonProps[] = [
    {
      data: { color: "blue", density: 997, viscosity: 1.793 },
      text: "вода",
      onClick: setGlass,
    },
    {
      data: { color: "yellow", density: 750, viscosity: 0.65 },
      text: "бензин",
      onClick: setGlass,
    },
    {
      data: { color: "black", density: 1030, viscosity: 1 },
      text: "нефть",
      onClick: setGlass,
    },
    {
      data: { color: "white", density: 2700, viscosity: 1.819 },
      text: "керосин",
      onClick: setGlass,
    },
  ];

  return (
    <div className="App">
      <Container vertical={false}>
        <Container
          vertical={true}
          justifyContent={"flex-start"}
          style={{
            height: "100vh",
            borderRight: "1px solid black",
          }}
        >
          <TopContainer>
            {circles.map((props) => (
              <Circle key={props.color} {...props} />
            ))}
          </TopContainer>
          <Container justifyContent="center">
            <Container vertical={true} style={{ maxWidth: "200px" }}>
              <Caliper>
                <Circle {...circleValues} />
              </Caliper>
              <Container style={{ marginTop: "50px" }} vertical={true}>
                <button
                  onClick={() => setStart(true)}
                  style={{ height: "40px" }}
                >
                  НАЧАТЬ
                </button>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container
          vertical={true}
          style={{ height: "100vh" }}
          justifyContent={"flex-start"}
        >
          <TopContainer>
            {buttons.map((btn) => (
              <Button key={btn.text} {...btn} />
            ))}
          </TopContainer>
          <Container>
            <Container vertical={true}>
              <Glass
                setStart={setStart}
                childrenProps={start ? circleValues : undefined}
                glassProps={glass}
              >
                {start && <Circle {...circleValues} />}
              </Glass>
            </Container>
          </Container>
        </Container>
      </Container>
    </div>
  );
};
