"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import { careerJourneyEntries } from "../data/careerJourney";
import { Award } from "lucide-react";

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
            {e.awards && (
              <div className="mt-5 border-t border-[var(--site-border)] pt-4">
                <h5 className="mb-3 flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[var(--site-accent)]">
                  <Award size={15} aria-hidden="true" />
                  Awards &amp; recognition
                </h5>
                <ul className="flex flex-wrap gap-2" aria-label={`${e.Company} awards`}>
                  {e.awards.map((award) => (
                    <li
                      key={`${award.title}-${award.date}`}
                      className="flex flex-wrap items-baseline gap-x-2 gap-y-1 rounded-lg border border-[var(--site-border)] bg-[var(--site-accent-soft)] px-3 py-2 text-xs leading-relaxed"
                    >
                      <span className="font-medium text-[var(--site-text)]">{award.title}</span>
                      <time dateTime={award.date} className="text-[var(--site-muted)]">
                        {award.dateLabel}
                      </time>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
