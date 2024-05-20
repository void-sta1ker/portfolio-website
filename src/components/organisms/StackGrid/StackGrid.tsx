import * as React from "react";
import type { Image as ImageType } from "@/types/image";
import { useTrail, animated, config } from "@react-spring/web";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import Image from "next/image";
import classes from "./StackGrid.module.scss";

interface Props {
  technologies: ImageType[];
}

export default function StackGrid(props: Props) {
  const { technologies } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.2,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  const [trail, api] = useTrail(technologies.length, () => ({
    opacity: 0,
    scale: 0,
    config: { ...config.wobbly, duration: 75 },
  }));

  React.useEffect(() => {
    if (isVisible) {
      api.start({ opacity: 1, scale: 1 });
    }

    return () => {
      api.stop();
    };
  }, [isVisible, api]);

  return (
    <div className={classes.grid} ref={ref}>
      {trail.map((style, i) => (
        <animated.span
          key={technologies[i].alt}
          style={style}
          title={technologies[i].alt}
        >
          <Image
            src={technologies[i].src}
            alt={technologies[i].alt}
            width={50}
            height={50}
            priority
          />
        </animated.span>
      ))}
    </div>
  );
}
