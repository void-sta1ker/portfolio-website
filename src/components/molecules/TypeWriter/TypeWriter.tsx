import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { useScreenSizeContext } from "src/contexts/ScreenSizeContext";
import useTypeWriter from "src/hooks/useTypeWriter";
import type TitleType from "@/components/atoms/Title/Title";
import classes from "./TypeWriter.module.scss";

interface Props {
  text: string;
  words: string[];
  wait: number;
}

const Title = dynamic(
  () =>
    import("@/components/atoms/Title/Title").then((mod) => mod.default as any),
  {
    ssr: false,
  }
) as typeof TitleType;

export default function TypeWriter(props: Props) {
  const { text, words, wait } = props;

  const output = useTypeWriter({ words, wait });

  const { isMobile } = useScreenSizeContext();

  const [spring, api] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(50%)",
    config: { ...config.molasses, duration: 1000 },
  }));

  React.useEffect(() => {
    api.start({
      opacity: 1,
      transform: "translateY(0%)",
    });

    return () => {
      api.stop();
    };
  }, [api]);

  return (
    <animated.div className={classes.container} style={spring}>
      <Title
        align="left"
        animate={false}
        size={isMobile ? "" : "lg"}
        style={{ fontSize: isMobile ? "20px" : "" }}
      >
        {text} {output}
        <span className={clsx(classes.cursor, "xl")}>|</span>
      </Title>
    </animated.div>
  );
}
