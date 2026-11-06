/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { skills, skillsSectionContent } from "../data/skills";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section id="skills" className="portfolio-section">
      <h2 className="section-kicker">{skillsSectionContent.kicker}</h2>
      <p className="section-title">{skillsSectionContent.title}</p>
      <div className="portfolio-skills">
        {skills.map((s) => (
          <Skill key={s.url} skill={s} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
