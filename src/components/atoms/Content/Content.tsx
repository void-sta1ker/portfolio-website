import * as React from "react";
import classes from "./Content.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Content(props: Props) {
  const { children } = props;

  return <div className={classes.content}>{children}</div>;
}
