import * as React from "react";
import clsx from "clsx";
import classes from "./Loader.module.sass";

export default function Loader() {
  return (
    <div className={classes.backdrop}>
      <div className={classes.loadingWindow}>
        <div className={classes.car}>
          <div className={classes.strike} />
          <div className={clsx(classes.strike, classes.strike2)} />
          <div className={clsx(classes.strike, classes.strike3)} />
          <div className={clsx(classes.strike, classes.strike4)} />
          <div className={clsx(classes.strike, classes.strike5)} />
          <div className={clsx(classes.carDetail, classes.spoiler)} />
          <div className={clsx(classes.carDetail, classes.back)} />
          <div className={clsx(classes.carDetail, classes.center)} />
          <div className={clsx(classes.carDetail, classes.center1)} />
          <div className={clsx(classes.carDetail, classes.front)} />
          <div className={clsx(classes.carDetail, classes.wheel)} />
          <div
            className={clsx(classes.carDetail, classes.wheel, classes.wheel2)}
          />
        </div>

        <div className={classes.text}>
          <span>Loading</span>
          <span className={classes.dots}>...</span>
        </div>
      </div>
    </div>
  );
}
