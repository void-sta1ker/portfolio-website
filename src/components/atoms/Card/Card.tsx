import * as React from "react";
import clsx from "clsx";
import { animated, SpringValue } from "@react-spring/web";
import classes from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: {
    transform: SpringValue<string>;
    opacity: SpringValue<number>;
  };
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Card(props: CardProps) {
  const { children, className, style, onMouseEnter, onMouseLeave } = props;

  return (
    <animated.div
      className={clsx(classes.container, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      {children}
    </animated.div>
  );
}

Card.defaultProps = {
  className: "",
  style: {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};
