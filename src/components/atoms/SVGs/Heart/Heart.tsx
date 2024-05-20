import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import classes from "./Heart.module.scss";

export default function Heart({ isVisible }: { isVisible: boolean }) {
  const [spring, api] = useSpring(() => ({
    from: { transform: "scale(1) translateZ(1px)" },
    config: { ...config.wobbly, duration: 500 },
  }));

  React.useEffect(() => {
    if (isVisible) {
      api.start({
        transform: "scale(1.2) translateZ(1px)",
        loop: { reverse: true },
      });
    }

    return () => {
      api.stop();
    };
  }, [isVisible, api]);

  return (
    <animated.svg
      className={classes.heart}
      style={spring}
      version="1.1"
      id="heart"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 595.3 841.9"
      xmlSpace="preserve"
    >
      <path
        id="path96"
        fill="#E52521"
        d="M387.9,213.7c-24.4,2.7-47.2,13.8-64.9,31.5c-8.8,8.9-14.8,16.6-22,28.6c-3.5,5.8-3.5,5.8-6,2
	c-9.7-15.2-13-19.6-20.4-27.5c-18-19.1-39.8-30.2-67.2-34.3c-19.8-3-45.9-0.5-64.9,6.3c-11.4,4.1-24.5,11.6-34.1,19.5
	c-14,11.5-26.7,29.1-33.3,46c-0.8,2.1-1.8,4.4-2,5c-1.4,3.3-4.8,16.1-6,22.5c-2,11.4-2.3,36.1-0.5,46.5c2.2,12.3,7.2,29.3,12,40.2
	c13.1,29.9,33.1,59.9,63,93.9c18.8,21.5,57.4,58.7,88.9,86c27.3,23.5,58.4,48.8,67.6,49.2c10.2-0.1,61.1-43.2,92.3-71.3
	c21.3-19.1,51.6-50,67.6-68.9c29.9-35.2,50.7-69.2,61.7-100.4c10.2-29.3,12.6-56,7.1-81.3c-3.6-16.4-11.7-34.1-21-46.1
	c-4-5.1-12.8-14.1-18.9-19.3c-12.5-10.5-32-19.8-50.9-24.4c-11.8-2.8-17.6-3.5-31.1-3.8C397.8,213.5,390.1,213.5,387.9,213.7z"
      />
    </animated.svg>
  );
}
