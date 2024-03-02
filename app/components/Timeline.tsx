"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import AnimatedDiv from "./AnimatedDiv";

const Timeline = () => {
  const Education = [
    {
      Date: "February, 2024 - Present",
      title: "TezIndia BuilderCamp 2.0",
      Company: "Tezos",
      location: "Remote",
      description:
        "Learnt and got exposed to Tezos Blockchain and building Dapps and smart contracts on it",
      bg: "#F57D1F",
    },
    {
      Date: "September, 2023 - Present",
      title: "Jr. Full Stack Developer",
      Company: "Alphabi Solutions",
      location: "Remote",
      description:
        "Contributed to the development and maintenance of an inventory system for a construction company Implemented user authentication for authorized access to head and site offices ",
      bg: "#F11A7B",
    },
    {
      Date: "March, 2023 - August, 2023",
      title: "Software Engineering Intern",
      Company: "Alphabi Solutions",
      location: "Remote",
      description:
        "Collabrated and Contributed to cutting-edge applications for a leading Labsfranchisor. Spearheaded the Franchisor platform, enhancing operational efficiency by 20%.",
      bg: "#387ADF",
    },
    {
      Date: "2019 - 2023",
      title: "Bachelor of Engineering(B.E) - ISE",
      Company: "Dayanand Sagar College of Engineering",
      location: "Bengaluru, India",
      description: "Learnt core computer science subjects like DBMS,OS,Java",
      bg: "#F57D1F",
    },
  ];

  return (
    <AnimatedDiv ClassName="opacity-85">
      <VerticalTimeline animate={false} lineColor="#40679E">
        {Education.map((e, i) => (
          <VerticalTimelineElement
            key={i}
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: e.bg, color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid  ${e.bg}` }}
            date={e.Date}
            iconStyle={{ background: e.bg, color: "#fff" }}
            icon={""}
          >
            <h3 className="vertical-timeline-element-title">{e.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {e.Company} - {e.location}
            </h4>
            <p>{e.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </AnimatedDiv>
  );
};

export default Timeline;
