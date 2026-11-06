import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="grid min-h-0 grid-cols-1 items-center gap-10 py-8 pb-16 md:min-h-[34rem] md:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] md:gap-[clamp(2rem,7vw,6rem)]"
      id="hero"
    >
      <div className="min-w-0">
        <p className="mb-3 flex items-center gap-2 font-mono text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.1em] text-[var(--site-accent)]">
          <span
            className="h-2 w-2 rounded-full bg-[var(--site-green)] shadow-[0_0_0.75rem_var(--site-green)]"
            aria-hidden="true"
          />
          FULL STACK DEVELOPER <span aria-hidden="true">/</span> INDIA
        </p>
        <h1 className="m-0 text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.06em] text-[var(--site-text)]">
          Hi, I&apos;m{" "}
          <span className="text-[var(--site-accent-strong)]">Gautham.</span>
        </h1>
        <p className="mt-3 text-xl font-semibold text-[var(--site-accent)]">
          Full Stack AI Engineer.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-[1.8] text-[var(--site-muted)]">
          I am a Full Stack AI Engineer based in India, I{" "}
          <span aria-label="love">💛</span> building AI-Powered Web Applications. (sounds
          Interesting?)
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--site-accent-strong)] px-5 py-3 text-sm font-semibold text-[var(--site-accent-contrast)] transition hover:-translate-y-px hover:bg-[var(--site-accent)]"
            href="#projects"
          >
            Explore my work <span aria-hidden="true">↗</span>
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--site-border)] bg-[var(--site-surface)] px-5 py-3 text-sm font-semibold text-[var(--site-text)] transition hover:border-[var(--site-accent)] hover:bg-[var(--site-surface-high)]"
            href="/contactMe"
          >
            Get in touch
          </Link>
        </div>
        <div className="mt-8 flex gap-3 font-mono text-xs text-[var(--site-subtle)]">
          <span>Based in India</span>
          <span aria-hidden="true">·</span>
          <span>Building web apps</span>
        </div>
      </div>
      <div
        className="relative mx-auto aspect-[4/5] w-[min(72%,18rem)] rounded-t-[48%] rounded-b-3xl border border-[var(--site-border)] bg-[url('/profile.jpeg')] bg-[color:var(--site-surface-raised)] bg-cover bg-center md:mx-0 md:w-full md:max-w-[22rem] md:justify-self-end"
        role="img"
        aria-label="Portrait of Gautham"
      >
        <span
          className="pointer-events-none absolute inset-3 rounded-[inherit] border border-white/35"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;
