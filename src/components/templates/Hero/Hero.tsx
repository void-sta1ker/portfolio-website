import * as React from "react";
import { useTrail, config } from "@react-spring/web";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import AnimatedDeveloper from "@/components/molecules/AnimatedDeveloperIcon/AnimatedDeveloperIcon";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Image from "next/image";
import TypeWriter from "@/components/molecules/TypeWriter/TypeWriter";
import WelcomeMsg from "@/components/organisms/WelcomeMsg/WelcomeMsg";
import classes from "./Hero.module.scss";

const words = [
  "Software Engineer",
  "Functional Programmer",
  "Linux Enthusiast",
];

export default function Hero() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.4,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  const [trail, trailApi] = useTrail(2, () => ({
    transform: "translateY(100px)",
    opacity: 0,
    config: config.slow,
  }));

  React.useEffect(() => {
    if (isVisible) {
      trailApi.start({
        transform: "translateY(0px)",
        opacity: 1,
      });
    }

    return () => {
      trailApi.stop();
    };
  }, [isVisible, trailApi]);

  return (
    <section className={classes.hero}>
      <Wrapper>
        <Image
          src="/images/man-in-dark.webp"
          alt="man in dark"
          width={1200}
          height={800}
          priority
          style={{
            // ...spring,
            userSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            // WebkitUserDrag: "none",
          }}
          draggable={false}
        />

        <TypeWriter text="I am - " words={words} wait={500} />

        <div className={classes.welcome} ref={ref}>
          <AnimatedDeveloper style={trail[0]} />
          <WelcomeMsg style={trail[1]} />
        </div>
      </Wrapper>
    </section>
  );
}
