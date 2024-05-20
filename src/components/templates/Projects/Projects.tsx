import * as React from "react";
import type { Project as ProjectType } from "@/types/project";
import Project from "@/components/organisms/Project/Project";
import Image from "next/image";
import classes from "./Projects.module.scss";

interface Props {
  projects: ProjectType[];
}

export default function Projects(props: Props) {
  const { projects } = props;

  return (
    <div className={classes.projects__list}>
      {projects.map((project, i) => (
        <Project
          key={project.id}
          name={project.name}
          reverseOrder={i % 2 !== 0}
          image={{ src: project.image.src, alt: project.image.alt }}
          title={
            typeof project.title === "string" ? (
              project.title
            ) : (
              <Image
                src={project.title.src}
                width={250}
                height={55}
                alt={project.title.alt}
              />
            )
          }
          description={project.description}
          services={project.services}
          tags={project.tags}
        />
      ))}
    </div>
  );
}
