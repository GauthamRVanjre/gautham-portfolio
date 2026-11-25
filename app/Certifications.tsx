import { ArrowUpRight, Award } from "lucide-react";
import { certifications } from "./data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="mb-24 scroll-mt-28"
    >
      <p className="mb-[0.85rem] font-mono text-[0.7rem] font-semibold uppercase leading-normal tracking-[0.1em] text-[var(--site-accent)]">
        Continuous learning
      </p>
      <h2
        id="certifications-title"
        className="mb-6 text-[clamp(1.6rem,3.4vw,2rem)] font-semibold leading-tight tracking-[-0.04em] text-[var(--site-text)]"
      >
        Certifications
      </h2>
      <ul className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2">
        {certifications.map((certification) => (
          <li
            key={certification.id}
            className="flex min-w-0 flex-col rounded-[0.85rem] border border-[var(--site-border)] bg-[var(--site-surface)] p-5 transition-colors duration-200 hover:border-[var(--site-accent)] hover:bg-[var(--site-surface-raised)] sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--site-accent-soft)] text-[var(--site-accent)]">
                <Award size={20} aria-hidden="true" />
              </span>
              <p className="text-xs font-medium text-[var(--site-muted)]">
                {certification.issuer}
              </p>
            </div>
            <h3 className="mb-4 text-base font-semibold leading-relaxed tracking-tight text-[var(--site-text)]">
              {certification.name}
            </h3>
            <dl className="mb-5 flex flex-wrap gap-x-8 gap-y-3 text-xs leading-relaxed">
              <div>
                <dt className="mb-1 text-[var(--site-subtle)]">Issued</dt>
                <dd className="text-[var(--site-muted)]">
                  <time dateTime={certification.issued}>{certification.issuedLabel}</time>
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-[var(--site-subtle)]">Expires</dt>
                <dd className="text-[var(--site-muted)]">
                  <time dateTime={certification.expires}>{certification.expiresLabel}</time>
                </dd>
              </div>
            </dl>
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certification.name} on Credly (opens in a new tab)`}
              className="mt-auto inline-flex min-h-11 items-center justify-between gap-2 rounded-md border-t border-[var(--site-border)] pt-3 text-xs font-medium text-[var(--site-accent)] transition-colors hover:text-[var(--site-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--site-accent)]"
            >
              View on Credly
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
