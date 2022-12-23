import React, { ReactNode } from "react";
import "./Caliper.css";
import { Container, Yardstick } from "../";

type Props = {
  children: ReactNode;
};

export const Caliper: React.FC<Props> = ({ children }) => {
  return (
    <Container vertical={false} justifyContent={"center"}>
      <Container vertical={true} justifyContent={"flex-start"}>
        <div className={"topTriangle"} />
        {children}
        <div className={"bottomTriangle"} />
      </Container>
      <Container vertical={true}>
        <Yardstick height={10}/>
      </Container>
    </Container>
  );
};
