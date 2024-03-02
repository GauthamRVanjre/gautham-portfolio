import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GithubStats from "./GithubStats";

const About = () => {
  return (
    <div>
      <div className=" flex-col items-center">
        <h2
          className={`text-center font-bold text-sm text-white-600 uppercase tracking-wider mb-6`}
        >
          About
        </h2>
        <p className="inline-block text-2xl sm:text-3xl mb-6 font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
          About Me
        </p>
        <span className="text-xs ml-2 opacity-40">{`(a bit formal intro)`}</span>
      </div>
      <p className="opacity-85 dark:text-zinc-400">
        A working professional with 1 year of Experience in shipping
        High-Quality and robust Web applications, I&apos;m adept at building
        projects from scratch. I specialize in implementing{" "}
        <span className="font-bold">Web solutions</span> for applications and
        have a passion for creating innovative and sleek{" "}
        <span className="font-bold">User Interfaces</span> using Modern and
        cutting-edge technology stacks. I&apos;m also open to collaborating on
        software projects.
      </p>
      <div className="mt-8 text-center">
        <GithubStats />
      </div>
    </div>
  );
};

export default About;
