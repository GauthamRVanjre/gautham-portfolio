"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import { careerJourneyEntries } from "../data/careerJourney";

const Timeline = () => {
  return (
    <AnimatedDiv ClassName="opacity-85">
      <VerticalTimeline animate={false} lineColor="#40679E">
        {careerJourneyEntries.map((e, i) => (
          <VerticalTimelineElement
            key={i}
            visible={true}
            className="vertical-timeline-element--work"
          >
            <div className="timeline-heading">
              <h3 className="vertical-timeline-element-title">{e.title}</h3>
              <span className="timeline-date">{e.Date}</span>
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              {e.Company} <span aria-hidden="true">·</span> {e.location}
            </h4>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.84rem] leading-[1.65] text-[color:var(--site-text)]">
              {e.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {e.skills && (
              <div className="timeline-skills" aria-label="Skills used">
                {e.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </AnimatedDiv>
  );
};

export default Timeline;
