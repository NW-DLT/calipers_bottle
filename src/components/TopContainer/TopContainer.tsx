import React, { ReactNode } from "react";
import "./TopContainer.css";

import { Container } from "../Container/Container";

type Props = {
  children?: ReactNode;
};

export const TopContainer: React.FC<Props> = ({ children }) => {
  return <Container className={"topContainer"}>{children}</Container>;
};
