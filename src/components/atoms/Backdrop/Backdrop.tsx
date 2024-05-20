import * as React from "react";
import { useHamburgerContext } from "src/contexts/HamburgerContext";
import {
  animated,
  config,
  useTransition,
  useSpringRef,
  useChain,
} from "@react-spring/web";
import MobileNav from "@/components/templates/MobileNav/MobileNav";
import links from "../../../shared/links";
import classes from "./Backdrop.module.scss";

export default function Backdrop() {
  const { isOpen, setIsOpen } = useHamburgerContext();
  const [zIndex, setZIndex] = React.useState<number | undefined>(-1);

  const backdropRef = useSpringRef();
  const [backdropTransitions, backdropTransApi] = useTransition(isOpen, () => ({
    ref: backdropRef,
    from: {
      backdropFilter: "blur(0px)",
      WebkitBackdropFilter: "blur(0px)",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    enter: {
      backdropFilter: isOpen ? "blur(8px)" : "blur(0px)",
      WebkitBackdropFilter: isOpen ? "blur(8px)" : "blur(0px)",
      backgroundColor: isOpen ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)",
    },
    leave: {
      backdropFilter: "blur(0px)",
      WebkitBackdropFilter: "blur(0px)",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  }));

  const transitionRef = useSpringRef();
  const [transitions, transApi] = useTransition(isOpen ? links : [], () => ({
    ref: transitionRef,
    trail: isOpen ? 100 : 50,
    from: { opacity: 0, transform: "translateX(-50%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-50%)" },
    // delay: 200,
    config: { ...config.slow, duration: isOpen ? 200 : 50 },
  }));

  useChain(
    isOpen ? [backdropRef, transitionRef] : [transitionRef, backdropRef],
    isOpen ? [0, 0.2] : [0, 0.5]
  );

  React.useEffect(() => {
    if (isOpen) {
      setZIndex(undefined);
    } else {
      const timer = setTimeout(() => {
        setZIndex(-1);
        clearTimeout(timer);
      }, 1000);
    }
  }, [isOpen]);

  // eslint error
  return backdropTransitions((styles, item) => (
    <animated.div
      className={classes.backdrop}
      onClick={(e) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        // if (target.localName !== "button" && target.localName !== "a") {
        setIsOpen(!isOpen);
        // }
      }}
      style={{ ...styles, zIndex }}
    >
      <MobileNav transitions={transitions} />
    </animated.div>
  ));
}
