import * as React from "react";
import downloadFile from "src/functions/downloadFile";
import List from "@/components/atoms/List/List";
import Button from "@/components/atoms/Button/Button";
import urls from "src/shared/urls";
import classes from "./NavbarActions.module.scss";

export default function NavbarActions() {
  return (
    <List className={classes.navbar__actions}>
      <li>
        <Button
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            downloadFile(urls.resume);
          }}
        >
          Download CV
        </Button>
      </li>
    </List>
  );
}
