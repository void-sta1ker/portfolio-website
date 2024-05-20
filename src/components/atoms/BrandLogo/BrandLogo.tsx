import clsx from "clsx";
import * as React from "react";
import classes from "./BrandLogo.module.scss";

interface BrandLogoProps {
  className?: string;
  href: string;
}

export default function BrandLogo({ href, className }: BrandLogoProps) {
  return (
    <span className={clsx(classes.brandLogo, className)}>
      <a href={href}>DILSHOD</a>
    </span>
  );
}

BrandLogo.defaultProps = {
  className: "",
};
