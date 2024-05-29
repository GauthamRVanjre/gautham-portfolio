"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./navbar.module.css";
import Link from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Tooltip } from "react-tooltip";
import { FiDownload } from "react-icons/fi";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div
      className={`${styles.navbar} flex justify-between my-3 md:my-6 px-[1rem] sm:px-[2rem] lg:px-[9rem]`}
    >
      <Link href={"/"} className="font-extrabold font-protest text-3xl">
        GV
      </Link>
      <div className="flex gap-2 relative">
        {pathName === "/" && (
          <div>
            <Button
              size={"sm"}
              className="bg-transparent border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
            >
              <Link href="#workExperience">Work Experience</Link>
            </Button>
            <Button
              size={"sm"}
              className="bg-transparent border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
            >
              <Link href="#projects">Projects</Link>
            </Button>
            <Button
              size={"sm"}
              className="bg-transparent border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
            >
              <Link href="#skills">Skills</Link>
            </Button>
            <Button
              size={"sm"}
              className="bg-transparent border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
            >
              <Link href="#blogs">Blogs</Link>
            </Button>
            <Button
              size={"sm"}
              className="bg-transparent border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
            >
              <Link href="#about">About Me</Link>
            </Button>
          </div>
        )}

        <Button
          size={"sm"}
          className="bg-transparent border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
        >
          {/* <Link href="/resume">Resume</Link> */}
          <a href={"../../gautham_Software_engineer.pdf"} target="_blank">
            <Button size={"sm"} variant={"outline"} className="my-3">
              <FiDownload className="mr-2" />
              Resume
            </Button>
          </a>
        </Button>

        <Button
          size={"sm"}
          className="bg-transparent border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
        >
          <Link href="/contactMe">Contact Me</Link>
        </Button>

        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
