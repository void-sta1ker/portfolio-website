import * as React from "react";
import Image from "next/image";
import Card from "@/components/atoms/Card/Card";
import clsx from "clsx";
import { useSpring, animated, config, SpringValue } from "@react-spring/web";
import classes from "./WelcomeMsg.module.scss";

const AnimatedCard = animated(Card);

interface Props {
  style: {
    transform: SpringValue<string>;
    opacity: SpringValue<number>;
  };
}

export default function WelcomeMsg(props: Props) {
  const { style } = props;

  const [showCode, setShowCode] = React.useState(true);
  const [showSwitch, setShowSwitch] = React.useState(false);

  const [{ opacity }, switchApi] = useSpring(() => ({
    from: { opacity: 0 },
    config: config.stiff,
  }));

  const [spring, springApi] = useSpring(() => ({
    transform: "translateX(0%)",
    config: config.wobbly,
  }));

  const [{ opacity: codeOpacity }, codeApi] = useSpring(() => ({
    from: { opacity: 0 },
    config: config.stiff,
  }));

  const [{ opacity: viewOpacity }, viewApi] = useSpring(() => ({
    from: { opacity: 0 },
    config: config.stiff,
  }));

  React.useEffect(() => {
    switchApi.start({ opacity: showSwitch ? 1 : 0 });

    return () => {
      switchApi.stop();
    };
  }, [showSwitch, switchApi]);

  React.useEffect(() => {
    springApi.start({
      transform: showCode ? "translateX(0%)" : "translateX(-53.5%)",
    });

    return () => {
      springApi.stop();
    };
  }, [showCode, springApi]);

  React.useEffect(() => {
    codeApi.start({ opacity: showCode ? 1 : 0 });

    return () => {
      codeApi.stop();
    };
  }, [showCode, codeApi]);

  React.useEffect(() => {
    viewApi.start({ opacity: !showCode ? 1 : 0 });

    return () => {
      viewApi.stop();
    };
  }, [showCode, viewApi]);

  return (
    <AnimatedCard
      className={classes.content}
      onMouseEnter={() => {
        setShowSwitch(true);
      }}
      onMouseLeave={() => {
        setShowSwitch(false);
      }}
      style={style}
    >
      <button
        className={classes.toggleBtn}
        type="button"
        onClick={() => {
          setShowCode((prev) => !prev);
        }}
      >
        Toggle
      </button>
      <animated.span
        className={classes.switch}
        style={{
          opacity,
          transform: opacity.to(
            (x) => `translate(${-(x * 45 - 45)}px, ${x * 45 - 45}px)`
          ),
        }}
      >
        <span className={classes.tooltip}>
          {showCode ? "Hide" : "Show"} code
        </span>
        <input
          type="checkbox"
          id="switch"
          onChange={() => {
            setShowCode((prev) => !prev);
          }}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="switch">Toggle</label>
      </animated.span>

      <animated.div
        style={spring}
        className={clsx(classes.window, showCode ? classes.code : classes.view)}
      >
        <animated.div style={{ opacity: codeOpacity }}>
          <h1>&lt;Hello /&gt;</h1>
          <br />
          <code>
            <span className={classes.arrow}>&lt;</span>
            <span className={classes.keyword}>p</span>
            <span className={classes.arrow}>&gt; </span>I make websites that
            people <span className={classes.unicode}>U+1F929 </span>
            <span className={classes.arrow}>&lt;</span>
            <span className={classes.keyword}>p</span>
            <span className={classes.arrow}>/&gt;</span>
          </code>
          <br className={classes.mobile_br} />
          <br />
          <code>
            <span className={classes.arrow}>&lt;</span>
            <span className={classes.keyword}>p</span>
            <span className={classes.arrow}>&gt; </span>
            My aim is to make the{" "}
            <span className={classes.unicode}>U+1F578</span> a better place{" "}
            <span className={classes.unicode}>U+1F6E0 </span>
            <span className={classes.arrow}>&lt;</span>
            <span className={classes.keyword}>p</span>
            <span className={classes.arrow}>/&gt;</span>
          </code>
        </animated.div>
        <animated.div style={{ opacity: viewOpacity }}>
          <h1>Hello</h1>
          <p>
            I make websites that people{" "}
            <Image
              src="/icons/star-struck.svg"
              alt="star struck face"
              width={29}
              height={29}
            />
          </p>
          <br />
          <p>
            My aim is to make the{" "}
            <Image
              // priority
              src="/icons/spider-web.webp"
              alt="spider web"
              width={29}
              height={29}
            />{" "}
            a better place{" "}
            <Image
              // priority
              src="/icons/hammer-and-wrench.webp"
              alt="hammer and wrench"
              width={29}
              height={29}
            />
          </p>
        </animated.div>
      </animated.div>
    </AnimatedCard>
  );
}
