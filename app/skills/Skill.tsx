/* eslint-disable @next/next/no-img-element */
"use client";
import { Tooltip } from "react-tooltip";
import styles from "./skills.module.css";

interface Props {
  skill: {
    url: string;
    name: string;
  };
}

const Skill = ({ skill: s }: Props) => {
  const imageUrl =
    s.name === "AWS"
      ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg"
      : s.url;

  return (
    <div>
      <div className="skill-chip">
        <div
          key={s.name}
          className={`skill-icon ${s.name}`}
        >
          <img
            className={`rounded-full ${
              s.name === "React" ? `${styles.rotateInfinite}` : ""
            }`}
            alt={s.name}
            src={imageUrl}
          />
        </div>
        <span>{s.name}</span>
      </div>

      <Tooltip className="z-[999]" anchorSelect={`.${s.name}`} place="bottom">
        {s.name}
      </Tooltip>
    </div>
  );
};

export default Skill;
