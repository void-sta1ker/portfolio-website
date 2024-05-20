import * as React from "react";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";

export default function IntersectedCountUp(props: {
  countUpRef: React.RefObject<any>;
  start: () => void;
}) {
  const { countUpRef, start } = props;

  const entry = useIntersectionObserver(countUpRef, {
    threshold: 1,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  React.useEffect(() => {
    if (isVisible) {
      start();
    }
  }, [isVisible, start]);

  return <span ref={countUpRef} />;
}
