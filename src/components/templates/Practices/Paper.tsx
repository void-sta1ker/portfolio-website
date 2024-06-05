import * as React from "react";
import { useSprings, animated, config } from "@react-spring/web";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import practices from "./practices-data";
import classes from "./Paper.module.scss";

export default function Paper() {
  const ref = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 1,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  const [springs, api] = useSprings(practices.length, (index) => ({
    transform: "rotate(0deg) translate(0em, 100em)",
    config: config.slow,
  }));

  React.useEffect(() => {
    if (isVisible) {
      api.start((i) => {
        const { rotation, x, y } = practices[i];
        return {
          transform: `rotate(${rotation}deg) translate(${x}em, ${y}em)`,
        };
      });
    }
    return () => {
      api.stop();
    };
  }, [springs, api, isVisible]);

  return (
    <div ref={ref} className={classes.paper}>
      {practices.map((practice, index) => (
        <animated.span key={practice.name} style={springs[index]}>
          {practice.name}
        </animated.span>
      ))}
    </div>
  );
}
