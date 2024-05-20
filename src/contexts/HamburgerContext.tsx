import * as React from "react";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

type Props = {
  children: React.ReactNode;
};

const HamburgerContext = React.createContext<HamburgerProps>({
  isOpen: false,
  setIsOpen: () => {},
});

HamburgerContext.displayName = "HamburgerContext";

const HamburgerContextConsumer = HamburgerContext.Consumer;

export default function HamburgerProvider(props: Props) {
  const { children } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const value = React.useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  return (
    <HamburgerContext.Provider value={value}>
      {children}
    </HamburgerContext.Provider>
  );
}

export {
  HamburgerContextConsumer as HamburgerConsumer,
  HamburgerContext,
  useHamburgerContext,
};

function useHamburgerContext() {
  return React.useContext(HamburgerContext);
}
