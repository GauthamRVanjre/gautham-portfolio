import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="flex min-h-[31rem] flex-col items-start justify-center py-8 pb-16 max-[640px]:min-h-[28rem] max-[640px]:pb-12"
      id="hero"
    >
      <p className="mb-[0.85rem] flex items-center gap-[0.55rem] font-mono text-[0.7rem] font-semibold uppercase leading-[1.5] tracking-[0.1em] text-[var(--site-accent)]">
        <span
          className="h-[0.45rem] w-[0.45rem] rounded-full bg-[var(--site-green)] shadow-[0_0_0.75rem_color-mix(in_srgb,var(--site-green),transparent_35%)]"
          aria-hidden="true"
        />
        FULL STACK DEVELOPER <span aria-hidden="true">/</span> INDIA
      </p>
      <h1 className="m-0 text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.06em] text-[var(--site-text)]">
        Hi, I&apos;m <span className="text-[var(--site-accent-strong)]">Gautham.</span>
      </h1>
      <p className="mt-3 text-[1.2rem] font-semibold text-[var(--site-accent)]">
        Full Stack Web Developer.
      </p>
      <p className="mt-4 max-w-[42rem] text-[1rem] leading-[1.8] text-[var(--site-muted)] max-[640px]:text-[0.92rem]">
        I am a Full Stack Web Engineer based in India, I{" "}
        <span aria-label="love">💛</span> building Web Apps. (sounds Interesting?)
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-transparent bg-[var(--site-accent-strong)] px-[1.15rem] py-[0.7rem] text-[0.85rem] font-semibold text-[var(--site-accent-contrast)] transition-[background,border-color,transform] duration-[160ms] ease-[ease] hover:-translate-y-px hover:bg-[var(--site-accent)]"
          href="#projects"
        >
          Explore my work <span aria-hidden="true">↗</span>
        </Link>
        <Link
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--site-border)] bg-[var(--site-surface)] px-[1.15rem] py-[0.7rem] text-[0.85rem] font-semibold text-[var(--site-text)] transition-[background,border-color,transform] duration-[160ms] ease-[ease] hover:border-[color:color-mix(in_srgb,var(--site-accent),transparent_45%)] hover:bg-[var(--site-surface-high)]"
          href="/contactMe"
        >
          Get in touch
        </Link>
      </div>
      <div className="mt-8 flex gap-[0.65rem] font-mono text-[0.72rem] text-[var(--site-subtle)]">
        <span>Based in India</span>
        <span aria-hidden="true">·</span>
        <span>Building web apps</span>
      </div>
    </section>
  );
};

export default Hero;
