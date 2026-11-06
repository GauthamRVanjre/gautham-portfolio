"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const NavBar = () => {
  const pathName = usePathname();
  const sectionHref = (section: string) =>
    pathName === "/" ? `#${section}` : `/#${section}`;

  return (
    <header className={styles.navbar}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand} aria-label="Gautham Vanjre home">
          GV
        </Link>

        <nav className={styles.navLinks} aria-label="Main navigation">
          <Link href={sectionHref("workExperience")}>Experience</Link>
          <Link href={sectionHref("projects")}>Projects</Link>
          <Link href={sectionHref("skills")}>Skills</Link>
          <Link href={sectionHref("blogs")}>Blogs</Link>
          <Link href={sectionHref("about")}>About</Link>
        </nav>

        <div className={styles.navActions}>
          <Link
            href={pathName === "/" ? "#contact" : "/contactMe"}
            className={styles.contactLink}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
