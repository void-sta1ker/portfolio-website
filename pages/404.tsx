import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Fallback404 from "@/components/templates/Fallback404/Fallback404";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dilshod | Frontend Developer</title>
        <meta
          name="description"
          content="Frontend Developer's Portfolio Website"
        />
        <link rel="icon" href="/icons/man.webp" />
      </Head>
      <Fallback404 />
    </>
  );
};

export default Custom404;
