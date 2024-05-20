import * as React from "react";
import List from "@/components/atoms/List/List";
import Link from "@/components/atoms/Link/Link";
import Button from "@/components/atoms/Button/Button";
import downloadFile from "src/functions/downloadFile";
import { animated, TransitionFn } from "@react-spring/web";
import urls from "src/shared/urls";
import classes from "./MobileNav.module.scss";

interface Props {
  transitions: TransitionFn<
    {
      text: string;
      href: string;
    },
    {
      opacity: number;
      transform: string;
    }
  >;
}

export default function NavbarLinks(props: Props): JSX.Element {
  const { transitions } = props;

  return (
    <List className={classes.navbar__links}>
      {transitions((styles, item) => {
        if (item.href === "/")
          return (
            <Button
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                downloadFile(urls.resume);
              }}
              style={styles}
            >
              {item.text}
            </Button>
          );
        return (
          <animated.li style={styles}>
            <Link href={item.href} type="nav">
              {item.text}
            </Link>
          </animated.li>
        );
      })}
    </List>
  );
}
