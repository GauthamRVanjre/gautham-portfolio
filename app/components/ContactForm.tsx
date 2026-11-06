"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { socials } from "../data/data";

const projectScopes = [
  "Immediate (< 2 wks)",
  "Next Quarter",
  "Long-term Hire",
  "Just Exploring",
];

export default function ContactForm() {
  const [selectedScope, setSelectedScope] = useState(projectScopes[0]);
  const [isDrafted, setIsDrafted] = useState(false);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-intro">
        <p className="section-kicker">LET&apos;S BUILD SOMETHING</p>
        <h2 className="contact-title">
          Ready to craft something extraordinary?
        </h2>
        <p className="contact-copy">
          Whether you are seeking a full-stack engineer for a production role,
          need a modern interface built, or have an innovative open-source idea,
          let&apos;s talk.
        </p>
        <div className="contact-details">
          <a href="mailto:vanjregautham@gmail.com">
            <Mail aria-hidden="true" size={17} />
            <span>vanjregautham@gmail.com</span>
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          {socials
            .filter((social) => social.name === "LinkedIn")
            .map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-detail-icon" aria-hidden="true">
                  in
                </span>
                <span>{social.name} Profile</span>
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            ))}
        </div>
        <p className="contact-response-note">
          <span aria-hidden="true" />
          Typically respond within 24–48 hours
        </p>
      </div>

      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          setIsDrafted(true);
        }}
      >
        <div className="contact-form-heading">
          <span className="section-kicker">PROJECT INQUIRY</span>
          <h3>Tell me a little about it</h3>
        </div>

        <div className="contact-field-grid">
          <label className="contact-field" htmlFor="contact-name">
            <span>Your Name *</span>
            <input
              autoComplete="name"
              id="contact-name"
              name="name"
              placeholder="Jane Smith"
              required
            />
          </label>
          <label className="contact-field" htmlFor="contact-email">
            <span>Email Address *</span>
            <input
              autoComplete="email"
              id="contact-email"
              name="email"
              placeholder="jane@company.com"
              required
              type="email"
            />
          </label>
        </div>

        <label className="contact-field" htmlFor="contact-topic">
          <span>Inquiry Type</span>
          <select defaultValue="" id="contact-topic" name="topic">
            <option disabled value="">
              Select an inquiry type
            </option>
            <option>Full-time Engineering Role</option>
            <option>Freelance / Contract Project</option>
            <option>Open Source Collaboration</option>
            <option>General Query &amp; Networking</option>
          </select>
        </label>

        <fieldset className="contact-scope">
          <legend>Project Timeline / Scope</legend>
          <div className="contact-scope-options">
            {projectScopes.map((scope) => (
              <button
                aria-pressed={selectedScope === scope}
                className={selectedScope === scope ? "is-selected" : ""}
                key={scope}
                onClick={() => setSelectedScope(scope)}
                type="button"
              >
                {scope}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="contact-field" htmlFor="contact-message">
          <span>Message *</span>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me about your product requirements, team, or ideas..."
            required
            rows={4}
          />
        </label>

        <div className="contact-submit-row">
          <button className="contact-submit" type="submit">
            <span>{isDrafted ? "Message ready" : "Send Message"}</span>
            <Send aria-hidden="true" size={16} />
          </button>
          <span className="contact-local-note">
            {isDrafted
              ? "Message delivery will be connected later."
              : "Form preview · sending is not connected yet"}
          </span>
        </div>
        {isDrafted && (
          <p className="contact-form-status" role="status">
            Your message is ready to send once contact integration is connected.
          </p>
        )}
      </form>
    </section>
  );
}
