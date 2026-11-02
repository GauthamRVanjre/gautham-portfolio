import React from "react";
import Timeline from "./components/Timeline";
import { careerSectionContent } from "./data/careerJourney";

const WorkExperience = () => {
  return (
    <section className="portfolio-section" id="workExperience">
        <h2 className="section-kicker">{careerSectionContent.kicker}</h2>
        <p className="section-title">{careerSectionContent.title}</p>
        <Timeline />
    </section>
  );
};

export default WorkExperience;
