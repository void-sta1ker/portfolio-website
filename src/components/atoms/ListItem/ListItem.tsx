import clsx from "clsx";
import * as React from "react";
import classes from "./ListItem.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ListItem(props: Props) {
  const { children, className, style } = props;

  return (
    <li className={clsx(classes.listItem, className)} style={style}>
      {children}
    </li>
  );
}

ListItem.defaultProps = {
  className: "",
  style: {},
};
