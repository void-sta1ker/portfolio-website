import * as React from "react";
import { useSprings, config } from "@react-spring/web";
import { randomize } from "src/functions/randomizers";

export default function useRandomColorizer() {
  const [springs, api] = useSprings(50, (index) => {
    const initialColor = randomize();

    return {
      fill: initialColor,
      config: { ...config.molasses, duration: 1000 },
    };
  });

  React.useEffect(() => {
    api.start((i) => {
      const nextColor = randomize();
      return { fill: nextColor };
    });

    const interval = setInterval(() => {
      api.start((i) => {
        const nextColor = randomize();
        return { fill: nextColor };
      });
    }, 3000);

    return () => {
      api.stop();
      clearInterval(interval);
    };
  }, [springs, api]);

  return springs;
}
