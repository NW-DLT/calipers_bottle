import React from "react";
import "./Circle.css";
import cn from "classnames";

export interface CircleProps {
  color: string;
  density: number;
  radius: number;
  text: string;
  callback?: React.Dispatch<React.SetStateAction<CircleProps>>;
}

export const Circle: React.FC<CircleProps> = (props) => {
  if (!props) {
    return <></>;
  }
  const { radius, color, density, text, callback } = props;
  return (
    <div>
      <text>{text}</text>
      <div
      onClick={() => {
        callback
          ? callback({ ...props, radius: getRandomArbitrary(5, 15), text: "" })
          : void (() => {})();
      }}
      className={cn("circle")}
      style={{
        width: `${radius * 2}mm`,
        height: `${radius * 2}mm`,
        backgroundColor: color,
      }}
    ></div>
    </div>
  );
};

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
