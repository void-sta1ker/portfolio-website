import * as React from "react";
import dynamic from "next/dynamic";
import { useSpring, animated, config } from "@react-spring/web";
import {
  randomizeRotationDegree,
  randomizeRotationDirection,
} from "src/functions/randomizers";

const Float = dynamic(() => import("src/containers/Float/Float"), {
  ssr: false,
});

export default function AnimatedAstronautIcon() {
  const [{ rotate }, api] = useSpring(() => ({
    rotate: `${randomizeRotationDirection() + randomizeRotationDegree()}deg`,
    config: { ...config.slow, duration: 60000 },
    loop: {
      reverse: true,
    },
  }));

  React.useEffect(() => {
    api.start({
      rotate: `${randomizeRotationDirection() + randomizeRotationDegree()}deg`,
    });

    const interval = setInterval(() => {
      api.start({
        rotate: `${
          randomizeRotationDirection() + randomizeRotationDegree()
        }deg`,
      });
    }, 60000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <Float specialStyles={{ rotate }}>
      <animated.img src="/icons/astronaut.webp" alt="astronaut" width={200} />
    </Float>
  );
}
