import * as React from "react";
import { useSpring, animated, config, SpringValue } from "@react-spring/web";
import clsx from "clsx";
import classes from "./Button.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  style?: { opacity?: SpringValue<number>; transform?: SpringValue<string> };
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  // size?: "small" | "medium" | "large";
  isDisabled?: boolean;
  // isLoading?: boolean;
  // isOutlined?: boolean;
  // isRounded?: boolean;
  disableStyles?: boolean;
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Button(props: ButtonProps) {
  const [{ transform }, api] = useSpring(() => ({
    transform: "translateY(0px)",
    config: { ...config.stiff, duration: 1 },
  }));

  const {
    type,
    isDisabled,
    children,
    onClick,
    disableStyles,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    className,
    style,
  } = props;

  return (
    <animated.button
      onMouseEnter={(e) => {
        if (typeof onMouseEnter === "function") {
          onMouseEnter(e);
        }
      }}
      onMouseLeave={(e) => {
        if (typeof onMouseLeave === "function") {
          onMouseLeave(e);
        }
      }}
      onMouseDown={(e) => {
        if (typeof onMouseDown === "function") {
          onMouseDown(e);
        }
        api.start({ transform: "translateY(7px)" });
      }}
      onMouseUp={(e) => {
        if (typeof onMouseUp === "function") {
          onMouseUp(e);
        }
        api.start({ transform: "translateY(0px)" });
      }}
      style={{ transform, ...style }}
      type={type}
      disabled={isDisabled}
      className={clsx(disableStyles ? "" : classes.button, className)}
      onClick={onClick}
    >
      {children}
    </animated.button>
  );
}

Button.defaultProps = {
  type: "button",
  isDisabled: false,
  disableStyles: false,
  className: "",
  style: {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onMouseDown: () => {},
  onMouseUp: () => {},
};
