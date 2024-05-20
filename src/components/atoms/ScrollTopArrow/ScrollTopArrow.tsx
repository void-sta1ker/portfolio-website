import Image from "next/image";
import * as React from "react";
import classes from "./ScrollTopArrow.module.scss";

export default function ScrollArrow() {
  const [showScroll, setShowScroll] = React.useState(false);

  const checkScrollTop = React.useCallback(
    (e: Event) => {
      const target = e.target as HTMLElement;
      if (!showScroll && target.scrollTop > 400) {
        setShowScroll(true);
      } else if (showScroll && target.scrollTop <= 400) {
        setShowScroll(false);
      }
    },
    [showScroll]
  );

  const scrollTop = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    document.body.addEventListener("scroll", checkScrollTop);

    return () => {
      document.body.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  return (
    <button
      type="button"
      className={classes.scrollTop}
      style={{ display: showScroll ? "inline-block" : "none" }}
      onClick={scrollTop}
    >
      <Image
        src="/icons/slideup.webp"
        width={24}
        height={24}
        layout="responsive"
      />
    </button>
  );
}
