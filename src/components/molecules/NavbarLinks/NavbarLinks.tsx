import * as React from "react";
import List from "@/components/atoms/List/List";
import Link from "@/components/atoms/Link/Link";
import classes from "./NavbarLinks.module.scss";

export default function NavbarLinks(): JSX.Element {
  return (
    <List className={classes.navbar__links}>
      <li>
        <Link href="#expertise" type="nav">
          Expertise
        </Link>
      </li>
      <li>
        <Link href="#stats" type="nav">
          Stats
        </Link>
      </li>
      <li>
        <Link href="#delivery" type="nav">
          Delivery
        </Link>
      </li>
      <li>
        <Link href="#clients" type="nav">
          Clients
        </Link>
      </li>
      <li>
        <Link href="#practices" type="nav">
          Practices
        </Link>
      </li>
    </List>
  );
}
