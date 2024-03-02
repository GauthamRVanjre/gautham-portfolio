import React from "react";
import Timeline from "./components/Timeline";

const WorkExperience = () => {
  return (
    <>
      <div className="relative">
        <h2 className="text-center font-bold text-sm text-white-600 uppercase tracking-wider mb-6">
          Work Experience and Education
        </h2>
        <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold">
          Where Have I worked Previously and graduated from{" "}
        </p>
        <Timeline />
      </div>
    </>
  );
};

export default WorkExperience;
