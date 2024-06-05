"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./navbar.module.css";
import Link from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { FiDownload } from "react-icons/fi";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <div
      className={`${styles.navbar} flex justify-between my-2 md:my-6 px-2 sm:px-[2rem] lg:px-[9rem]`}
    >
      <Link href={"/"} className="font-extrabold font-protest text-3xl">
        GV
      </Link>
      <div className="relative groupNav">
        <div className={`md:flex md:gap-2  flex flex-row`}>
          {pathName === "/" && (
            <>
              <div className="relative group mt-1">
                <div className=" cursor-pointer">Services</div>
                <div className="hidden group-hover:block absolute bg-white dark:bg-gray-800 mt-2 p-2 rounded shadow-lg">
                  <Button
                    size={"sm"}
                    className="bg-transparent w-full border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
                  >
                    <Link href="#workExperience">Work Experience</Link>
                  </Button>
                  <Button
                    size={"sm"}
                    className="bg-transparent border w-full text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
                  >
                    <Link href="#projects">Projects</Link>
                  </Button>
                  <Button
                    size={"sm"}
                    className="bg-transparent w-full border text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
                  >
                    <Link href="#skills">Skills</Link>
                  </Button>
                  <Button
                    size={"sm"}
                    className="bg-transparent border w-full text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
                  >
                    <Link href="#blogs">Blogs</Link>
                  </Button>
                  <Button
                    size={"sm"}
                    className="bg-transparent border w-full text-black dark:text-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
                  >
                    <Link href="#about">About Me</Link>
                  </Button>
                </div>
              </div>
            </>
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
    </div>
  );
};

export default NavBar;
