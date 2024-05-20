import * as React from "react";
import AnimatedAstronautIcon from "@/components/organisms/AnimatedAstronautIcon/AnimatedAstronautIcon";
import Fallback404Message from "@/components/organisms/Fallback404Message/Fallback404Message";

export default function Fallback404() {
  return (
    <>
      <AnimatedAstronautIcon />
      <Fallback404Message />
    </>
  );
}
