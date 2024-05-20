import * as React from "react";
import clsx from "clsx";
import classes from "./Link.module.scss";

interface LinkProps {
  children: string;
  href: string;
  icon?: React.ReactNode;
  target?: "_self" | "_blank";
  onClick?: () => void;
  downloadable?: boolean;
  type?: "default" | "nav";
}

export default function CustomLink(props: LinkProps) {
  const { href, target, downloadable, type, children, icon, onClick } = props;

  const clickHandler = (e: React.MouseEvent) => {
    if (type === "nav") {
      e.preventDefault();
      const targetEl = e.target as HTMLAnchorElement;
      const link = targetEl.getAttribute("href");

      const { offsetTop } = document.querySelector(link!) as HTMLDivElement;

      document.body.scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      download={downloadable}
      className={clsx(
        classes.link,
        type === "nav" ? classes.hover : classes.underline
      )}
      onClick={clickHandler}
    >
      {children}
      {icon}
    </a>
  );
}

CustomLink.defaultProps = {
  icon: null,
  target: "_self",
  onClick: () => {},
  downloadable: false,
  type: "default",
};
