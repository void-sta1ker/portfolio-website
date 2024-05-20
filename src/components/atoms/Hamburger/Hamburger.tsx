import * as React from "react";
import { useHamburgerContext } from "src/contexts/HamburgerContext";
import clsx from "clsx";
import classes from "./Hamburger.module.scss";

export default function Hamburger() {
  const { isOpen, setIsOpen } = useHamburgerContext();

  return (
    <>
      <div className={clsx(classes.container)} />
      <button
        type="button"
        className={clsx(classes.hamburger, isOpen ? classes.open : "")}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </button>
    </>
  );
}
