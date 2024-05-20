import * as React from "react";
import useFloat from "src/hooks/useFloat";
import { SpringValue } from "@react-spring/web";
import classes from "./Float.module.scss";

type SpringValues = {
  [key: string]:
    | SpringValue<string>
    | SpringValue<number>
    | SpringValue<string[]>
    | SpringValue<number[]>;
};

export default function Float({
  children,
  specialStyles,
}: {
  children: JSX.Element | JSX.Element[];
  specialStyles?: SpringValues;
}) {
  const springs = useFloat(children);

  return (
    <div className={classes.container}>
      {springs.map((styles, index) => {
        const child = React.Children.toArray(children)[
          index
        ] as React.ReactElement;
        return React.cloneElement(child, {
          style: { ...styles, ...specialStyles },
        });
      })}
    </div>
  );
}

Float.defaultProps = {
  specialStyles: {},
};
