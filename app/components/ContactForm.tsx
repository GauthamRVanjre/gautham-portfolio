"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { socials } from "../data/data";

const projectScopes = [
  "Immediate (< 2 wks)",
  "Next Quarter",
  "Long-term Hire",
  "Just Exploring",
];

type SubmissionStatus = "idle" | "success" | "error";

export default function ContactForm() {
  const [selectedScope, setSelectedScope] = useState(projectScopes[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmissionStatus("idle");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          inquiry_type: formData.get("inquiry_type"),
          scope: selectedScope,
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      form.reset();
      setSelectedScope(projectScopes[0]);
      setSubmissionStatus("success");
    } catch {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

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

      <form className="contact-form" onSubmit={handleSubmit}>
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

        <label className="contact-field" htmlFor="contact-inquiry-type">
          <span>Inquiry Type *</span>
          <select
            defaultValue=""
            id="contact-inquiry-type"
            name="inquiry_type"
            required
          >
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

        <div
          aria-hidden="true"
          style={{
            height: 0,
            left: "-9999px",
            overflow: "hidden",
            position: "absolute",
            width: 0,
          }}
        >
          <label htmlFor="contact-website">Website</label>
          <input
            autoComplete="off"
            id="contact-website"
            name="website"
            tabIndex={-1}
            type="text"
          />
        </div>

        <div className="contact-submit-row">
          <button
            className="contact-submit"
            disabled={isSubmitting}
            type="submit"
          >
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            <Send aria-hidden="true" size={16} />
          </button>
          <span className="contact-local-note">
            {submissionStatus === "success"
              ? "Message sent successfully."
              : submissionStatus === "error"
                ? "Message could not be sent. Please try again."
                : "Your message will be sent securely."}
          </span>
        </div>

        {submissionStatus === "success" && (
          <p className="contact-form-status" role="status">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>
        )}
        {submissionStatus === "error" && (
          <p className="contact-form-status" role="alert">
            Something went wrong while sending your message. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
