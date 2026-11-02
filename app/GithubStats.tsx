"use client";

import GitHubCalendar from "react-github-calendar";
import Link from "next/link";

const GithubStats = () => {
  return (
    <div className="github-activity">
      <div className="github-activity-header">
        <div>
          <p className="section-kicker">GITHUB ACTIVITY</p>
          <h3>Contribution history</h3>
        </div>
        <Link
          href="https://github.com/GauthamRVanjre"
          target="_blank"
          rel="noreferrer"
        >
          View profile <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="github-calendar">
        <GitHubCalendar
          colorScheme="dark"
          year={2024}
          hideColorLegend={true}
          username="GauthamRVanjre"
        />
      </div>
    </div>
  );
};

export default GithubStats;
