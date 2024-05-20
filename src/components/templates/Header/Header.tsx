import * as React from "react";
import Navbar from "@/components/organisms/Navbar/Navbar";
import classes from "./Header.module.scss";

export default function Header() {
  return (
    <header className={classes.header}>
      <Navbar />
    </header>
  );
}
