import * as React from "react";
import { useMediaQuery } from "react-responsive";

interface ScreenSize {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isBigScreen: boolean;
  isTabletOrMobile: boolean;
  isPortrait: boolean;
  isRetina: boolean;
  isLandscape: boolean;
  isTouch: boolean;
  isDesktopOrLaptop: boolean;
}

type Props = {
  children: React.ReactNode;
};

const ScreenSizeContext = React.createContext<ScreenSize>({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isBigScreen: false,
  isTabletOrMobile: false,
  isPortrait: false,
  isRetina: false,
  isLandscape: false,
  isTouch: false,
  isDesktopOrLaptop: false,
});

ScreenSizeContext.displayName = "ScreenSizeContext";

const ScreenSizeContextConsumer = ScreenSizeContext.Consumer;

export default function ScreenSizeProvider(props: Props) {
  const { children } = props;

  const isMobile = useMediaQuery({ maxWidth: "767px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1023px" });
  const isDesktop = useMediaQuery({ minWidth: "1024px" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const isLandscape = useMediaQuery({ query: "(orientation: landscape)" });
  const isTouch = useMediaQuery({ query: "(hover: none)" });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  const screenSize = React.useMemo(
    () => ({
      isMobile,
      isTablet,
      isDesktop,
      isBigScreen,
      isTabletOrMobile,
      isPortrait,
      isRetina,
      isLandscape,
      isTouch,
      isDesktopOrLaptop,
    }),
    [
      isMobile,
      isTablet,
      isDesktop,
      isBigScreen,
      isTabletOrMobile,
      isPortrait,
      isRetina,
      isLandscape,
      isTouch,
      isDesktopOrLaptop,
    ]
  );

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

export {
  ScreenSizeContextConsumer as ScreenSizeConsumer,
  ScreenSizeContext,
  useScreenSizeContext,
};

function useScreenSizeContext() {
  return React.useContext(ScreenSizeContext);
}
