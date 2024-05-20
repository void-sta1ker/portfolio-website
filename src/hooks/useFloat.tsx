import * as React from "react";
import { useSprings, config } from "@react-spring/web";
import {
  randomizeLocation,
  randomizeInitialLocation,
} from "src/functions/randomizers";
import useResizeDetector from "src/hooks/useResizeDetector";

export default function useFloat(children: JSX.Element | JSX.Element[]) {
  const { width: WIDTH, height: HEIGHT } = useResizeDetector();

  const [springs, api] = useSprings(React.Children.count(children), (index) => {
    const [initialX, initialY] = randomizeInitialLocation(WIDTH, HEIGHT);

    return {
      transform: `translate(${initialX}px, ${initialY}px)`,
      config: { ...config.molasses, duration: 60000 },
    };
  });

  React.useEffect(() => {
    const gen = randomizeLocation(WIDTH, HEIGHT);
    api.start((i) => {
      const { x, y } = gen.next().value!;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    });

    const interval = setInterval(() => {
      api.start((i) => {
        const { x, y } = gen.next().value!;
        return { transform: `translate(${x}px, ${y}px)` };
      });
    }, 60000);

    return () => {
      api.stop();
      clearInterval(interval);
    };
  }, [api, springs, WIDTH, HEIGHT]);

  return springs;
}
