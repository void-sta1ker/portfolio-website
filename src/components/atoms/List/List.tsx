import * as React from "react";
import clsx from "clsx";
import classes from "./List.module.scss";

interface ListProps {
  className?: string;
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  // ref?: React.Ref<HTMLDivElement>;
}

// type ULProps = React.HTMLProps<HTMLUListElement>

const List = React.forwardRef<HTMLUListElement, ListProps>(
  (props: ListProps, ref) => {
    const { className, children, direction } = props;

    return (
      <ul
        ref={ref}
        className={clsx(
          classes.list,
          direction === "vertical" ? classes.vertical : classes.horizontal,
          className
        )}
      >
        {children}
      </ul>
    );
  }
);

List.defaultProps = {
  className: "",
  direction: "horizontal",
  // ref: null,
};

export default List;
