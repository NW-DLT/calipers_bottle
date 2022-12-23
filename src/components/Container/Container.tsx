import React, { ReactNode } from "react";
import "./Container.css";
import cn from "classnames";

type Props = {
  children?: ReactNode;
  vertical?: boolean;
  className?: string;
  style?: React.CSSProperties;
  justifyContent?: string;
};

export const Container: React.FC<Props> = ({
  children,
  vertical,
  className,
  style,
  justifyContent,
}) => {
  return (
    <div
      className={cn(
        "container",
        vertical ? "vertical" : "horizontal",
        className
      )}
      style={{ ...style, justifyContent: justifyContent }}
    >
      {children && children}
    </div>
  );
};
