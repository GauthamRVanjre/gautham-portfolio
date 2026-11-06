import GithubStats from "./GithubStats";
import { aboutContent } from "./data/about";

const About = () => {
  return (
    <section id="about" className="portfolio-section about-section">
      <div className="flex-col items-center">
        <h2 className="section-kicker">{aboutContent.kicker}</h2>
        <p className="section-title">{aboutContent.title}</p>
      </div>
      <p className="opacity-85 dark:text-zinc-400">
        {aboutContent.bio.map((segment, index) =>
          segment.emphasized ? (
            <span className="font-bold" key={index}>
              {segment.text}
            </span>
          ) : (
            <span key={index}>{segment.text}</span>
          ),
        )}
      </p>
      <div className="mt-8 text-center">
        <GithubStats />
      </div>
    </section>
  );
};

export default About;
