import React from "react";
import { Liquid } from "../App";
import "./Button.css";

export type ButtonProps = {
  onClick: React.Dispatch<React.SetStateAction<Liquid>>;
  text: string;
  data?: Liquid;
};

export const Button: React.FC<ButtonProps> = ({ onClick, text, data }) => {
  return (
    <button className={"button"} onClick={() => onClick(data!)}>
      {text}
    </button>
  );
};
