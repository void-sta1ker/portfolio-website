import * as React from "react";
import useRandomColorizer from "src/hooks/useRandomColorizer";

export default function RandomColorizer({
  children,
}: {
  children: React.ReactNode;
}) {
  const springs = useRandomColorizer();

  return (
    <>
      {springs.map((styles, index) => {
        const child = React.Children.toArray(children)[
          index
        ] as React.ReactElement;
        return React.cloneElement(child, { style: styles });
      })}
    </>
  );
}
