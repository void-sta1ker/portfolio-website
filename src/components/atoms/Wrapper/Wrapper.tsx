import * as React from "react";
import clsx from "clsx";
import classes from "./Wrapper.module.scss";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper(props: WrapperProps): JSX.Element {
  const { children, className } = props;

  return <div className={clsx(classes.wrapper, className)}>{children}</div>;
}

Wrapper.defaultProps = {
  className: "",
};
