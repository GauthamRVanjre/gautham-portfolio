"use client";

import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  const { theme } = useTheme();

  return (
    <div className=" flex  justify-center">
      <GitHubCalendar
        colorScheme={`${theme === "light" ? "light" : "dark"}`}
        year={2024}
        hideColorLegend={true}
        username="GauthamRVanjre"
      />
    </div>
  );
};

export default GithubStats;
