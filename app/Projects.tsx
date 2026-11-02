/* eslint-disable @next/next/no-img-element */

import React from "react";
import { projectList, projectSectionContent } from "./data/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectGrid from "./components/ProjectGrid";

const Projects = () => {
  const topProjects = projectList.filter((project) => project.tag === "top");

  return (
    <section id="projects" className="portfolio-section">
      <h2 className="section-kicker">{projectSectionContent.kicker}</h2>
      <p className="section-title">{projectSectionContent.title}</p>

      <div className="dark:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[300px] h-[50px] blur-3xl absolute z-[-999] right-[3rem] top-[8rem] opacity-80"></div>

      <ProjectGrid projectList={topProjects} />

      <Link href={"/projects"}>
        <Button className="mt-4" variant={"secondary"}>
          Show All
        </Button>
      </Link>
    </section>
  );
};

export default Projects;
