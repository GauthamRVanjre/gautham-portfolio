"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  const sectionHref = (section: string) =>
    pathName === "/" ? `#${section}` : `/#${section}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-[var(--site-border)] bg-[var(--site-nav-bg)] px-6 backdrop-blur-[20px] max-[760px]:h-[4.25rem] max-[760px]:px-4">
      <div className="mx-auto flex h-full w-full max-w-[1160px] items-center justify-between gap-5 max-[760px]:gap-[0.6rem]">
        <Link
          href="/"
          className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-[var(--site-border)] bg-[var(--site-surface-high)] font-protest text-[1.15rem] text-[var(--site-accent)]"
          aria-label="Gautham Vanjre home"
        >
          GV
        </Link>

        <nav
          className="flex items-center gap-[0.2rem] rounded-full border border-[var(--site-border)] bg-[var(--site-surface)] p-[0.35rem] max-[760px]:hidden"
          aria-label="Main navigation"
        >
          <Link
            className="rounded-full px-[0.85rem] py-[0.55rem] text-[0.8rem] text-[var(--site-muted)] transition-colors duration-[160ms] hover:bg-[var(--site-surface-raised)] hover:text-[var(--site-accent)]"
            href={sectionHref("workExperience")}
          >
            Experience
          </Link>
          <Link
            className="rounded-full px-[0.85rem] py-[0.55rem] text-[0.8rem] text-[var(--site-muted)] transition-colors duration-[160ms] hover:bg-[var(--site-surface-raised)] hover:text-[var(--site-accent)]"
            href={sectionHref("projects")}
          >
            Projects
          </Link>
          <Link
            className="rounded-full px-[0.85rem] py-[0.55rem] text-[0.8rem] text-[var(--site-muted)] transition-colors duration-[160ms] hover:bg-[var(--site-surface-raised)] hover:text-[var(--site-accent)]"
            href={sectionHref("skills")}
          >
            Skills
          </Link>
          <Link
            className="rounded-full px-[0.85rem] py-[0.55rem] text-[0.8rem] text-[var(--site-muted)] transition-colors duration-[160ms] hover:bg-[var(--site-surface-raised)] hover:text-[var(--site-accent)]"
            href={sectionHref("blogs")}
          >
            Blogs
          </Link>
          <Link
            className="rounded-full px-[0.85rem] py-[0.55rem] text-[0.8rem] text-[var(--site-muted)] transition-colors duration-[160ms] hover:bg-[var(--site-surface-raised)] hover:text-[var(--site-accent)]"
            href={sectionHref("about")}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-[0.65rem] max-[760px]:gap-[0.4rem]">
          <Link
            href={pathName === "/" ? "#contact" : "/contactMe"}
            className="rounded-full border border-[color:color-mix(in_srgb,var(--site-accent),transparent_55%)] bg-[var(--site-accent-soft)] px-4 py-[0.6rem] text-[0.8rem] text-[var(--site-accent)] transition-colors duration-[160ms] hover:bg-[color:color-mix(in_srgb,var(--site-accent),transparent_85%)] max-[760px]:px-3 max-[760px]:py-2"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
