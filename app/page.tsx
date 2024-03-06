import Hero from "./Hero";
import InfiniteMarquee from "./skills/InfiniteMarquee";
import Skills from "./skills/SkillGrid";
import Projects from "./Projects";
import Footer from "./footer/Footer";
import About from "./About";
import GithubStats from "./GithubStats";
import WorkExperience from "./WorkExperience";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="px-[1rem] xl:px-[9rem] mt-[6.5rem] md:mt-0 ">
        <Hero />
      </div>
      <div className="my-[3rem]">
        <InfiniteMarquee />
      </div>
      <div className="px-[1.5rem] lg:px-[9rem] my-[6rem] mt-[4rem]">
        <Skills />
      </div>
      <div className="dark:bg-zinc-900 relative  bg-[#f9fafb] px-[1.5rem] gap-y-11 py-[4.5rem] md:py-[4rem]  lg:px-[9rem] my-[6rem] flex flex-col gap-8">
        <WorkExperience />
      </div>
      <div className="px-[1.5rem] lg:px-[9rem] my-[6rem] ">
        <Projects />
      </div>
      <div className="dark:bg-zinc-900 relative  bg-[#f9fafb] px-[1.5rem] gap-y-11 py-[4.5rem] md:py-[4rem]  lg:px-[9rem] my-[6rem] flex flex-col gap-8">
        <Testimonials />
      </div>
      <div className="px-[1.5rem] lg:px-[9rem] my-[6rem] ">
        <About />
      </div>
      <div className="px-[1rem] md:px-[9rem] my-[6rem]  ">
        <Footer />
      </div>
    </>
  );
}
