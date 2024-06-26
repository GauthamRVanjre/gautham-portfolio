"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import ProjectCard from "./ProjectCard";
import { StaticImageData } from "next/image";

interface Props {
  projectList: Project[];
}

export interface Project {
  id: number;
  tag?: string;
  title: string;
  category: string;
  image: StaticImageData;
  description: string;
  tech: (string | StaticImageData)[];
  url?: string;
  github: string;
  detailedDescription: string;
  features: string[];
}

const ProjectGrid = ({ projectList }: Props) => {
  return (
    <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4 sm:gap-5">
      {projectList.map((p) => (
        <ProjectCard
          key={p.title}
          id={p.id}
          description={p.description}
          image={p.image}
          tech={p.tech}
          title={p.title}
          url={p.url}
          github={p.github}
        />
      ))}
    </AnimatedDiv>
  );
};

export default ProjectGrid;
