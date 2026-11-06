/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Marquee from "react-fast-marquee";

import styles from "./skills.module.css";

const InfiniteMarquee = () => {
  return (
    <Marquee>
      <p className={` ${styles.strokedTextDark} font-bold opacity-80 text-5xl md:text-6xl`}>
        {`◦ WEB DEVELOPMENT ◦ BACKEND  ◦ FRONTEND ◦ WEB DEVELOPMENT  ◦ FRONTEND ◦ BACKEND`}
      </p>
    </Marquee>
  );
};

export default InfiniteMarquee;
