import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <p className="hero-eyebrow">
        <span className="hero-eyebrow-dot" aria-hidden="true" />
        FULL STACK DEVELOPER <span aria-hidden="true">/</span> INDIA
      </p>
      <h1 className="hero-title">
        Hi, I&apos;m <span>Gautham.</span>
      </h1>
      <p className="hero-role">Full Stack Web Developer.</p>
      <p className="hero-copy">
        I am a Full Stack Web Engineer based in India, I{" "}
        <span aria-label="love">💛</span> building Web Apps. (sounds Interesting?)
      </p>
      <div className="hero-actions">
        <Link className="primary-link" href="#projects">
          Explore my work <span aria-hidden="true">↗</span>
        </Link>
        <Link className="secondary-link" href="/contactMe">
          Get in touch
        </Link>
      </div>
      <div className="hero-footnote">
        <span>Based in India</span>
        <span aria-hidden="true">·</span>
        <span>Building web apps</span>
      </div>
    </section>
  );
};

export default Hero;
