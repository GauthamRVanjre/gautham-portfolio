import About from "./About";
import Blogs from "./Blogs/Blogs";
import Footer from "./footer/Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./skills/SkillGrid";
import WorkExperience from "./WorkExperience";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="portfolio-main">
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
      <Blogs />
      <About />
      <ContactForm />
      <div className="portfolio-footer">
        <Footer />
      </div>
    </main>
  );
}
