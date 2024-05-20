import * as React from "react";
import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ScreenSizeProvider from "src/contexts/ScreenSizeContext";
import HamburgerProvider from "src/contexts/HamburgerContext";
import ScrollTopArrow from "@/components/atoms/ScrollTopArrow/ScrollTopArrow";
import Backdrop from "@/components/atoms/Backdrop/Backdrop";
import Hamburger from "@/components/atoms/Hamburger/Hamburger";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="I am a software engineer" />
      </Head>
      <ScreenSizeProvider>
        <HamburgerProvider>
          <Hamburger />
          <Backdrop />
          <ScrollTopArrow />
          <Component {...pageProps} />
        </HamburgerProvider>
      </ScreenSizeProvider>
    </>
  );
}

export default MyApp;
