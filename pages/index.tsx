import * as React from "react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Loader from "@/components/templates/Loader/Loader";
import Hero from "@/components/templates/Hero/Hero";
import Footer from "@/components/templates/Footer/Footer";
import Header from "@/components/templates/Header/Header";
import Content from "@/components/atoms/Content/Content";
import Expertise from "@/components/templates/Expertise/Expertise";
import Divider from "@/components/atoms/Divider/Divider";
import Statistics from "@/components/templates/Statistics/Statistics";
import Clients from "@/components/templates/Clients/Clients";
import Practices from "@/components/templates/Practices/Practices";
import Projects from "@/components/templates/Projects/Projects";

// const Head = dynamic(() => import("next/head"), { suspense: true });
// const Hero = dynamic(() => import("@/components/templates/Hero/Hero"), {
//   suspense: true,
// });
// const Footer = dynamic(() => import("@/components/templates/Footer/Footer"), {
//   suspense: true,
// });
// const Header = dynamic(() => import("@/components/templates/Header/Header"), {
//   suspense: true,
// });
// const Content = dynamic(() => import("@/components/atoms/Content/Content"), {
//   suspense: true,
// });
// const Expertise = dynamic(
//   () => import("@/components/templates/Expertise/Expertise"),
//   {
//     suspense: true,
//   }
// );
// const Divider = dynamic(() => import("@/components/atoms/Divider/Divider"), {
//   suspense: true,
// });
// const Statistics = dynamic(
//   () => import("@/components/templates/Statistics/Statistics"),
//   {
//     suspense: true,
//   }
// );
// const Clients = dynamic(
//   () => import("@/components/templates/Clients/Clients"),
//   {
//     suspense: true,
//   }
// );
// const Practices = dynamic(
//   () => import("@/components/templates/Practices/Practices"),
//   {
//     suspense: true,
//   }
// );
// const Projects = dynamic(
//   () => import("@/components/templates/Projects/Projects"),
//   {
//     suspense: true,
//   }
// );

const Delivery = dynamic(
  () => import("@/components/templates/Delivery/Delivery"),
  {
    ssr: false,
  }
);

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { technologies, stats, clients, projects } = props;

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
      <Header />
      <Content>
        <Hero />
        <Divider />
        <Expertise technologies={technologies} />
        <Divider />
        <Statistics stats={stats} />
        <Divider />
        <Delivery />
        <Divider />
        <Clients clients={clients} />
        <Projects projects={projects} />
        <Divider />
        <Practices />
      </Content>
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  // const projects = await import("@/data/projects.json");
  // const projects = await fetch("@/data/projects.json");

  // WARNING: fetch api behavior changed in recent node versions

  // const [technologies, stats, clients, projects] = await Promise.all([
  //   fetch(process.env.TECHNOLOGIES_URL),
  //   fetch(process.env.STATS_URL),
  //   fetch(process.env.CLIENTS_URL),
  //   fetch(process.env.PROJECTS_URL),
  // ]);

  const [technologies, stats, clients, projects] = await Promise.all([
    import("@/db/stack.json"),
    import("@/db/stats.json"),
    import("@/db/clients.json"),
    import("@/db/projects.json"),
  ]);

  // const [technologiesData, statsData, clientsData, projectsData] =
  //   await Promise.all([
  //     technologies.json(),
  //     stats.json(),
  //     clients.json(),
  //     projects.json(),
  //   ]);

  return {
    props: {
      technologies: technologies.default,
      stats: stats.default,
      clients: clients.default,
      projects: projects.default,
    },
  };
};
