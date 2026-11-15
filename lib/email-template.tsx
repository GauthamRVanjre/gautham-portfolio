import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  inquiry_type: string;
  scope: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  inquiry_type,
  scope,
  message,
}) => (
  <div>
    <p>
      You received a new portfolio inquiry from <strong>{name}</strong> (
      <a href={"mailto:" + email}>{email}</a>).
    </p>
    <ol>
      <li>
        <strong>Inquiry type:</strong> {inquiry_type}
      </li>
      <li>
        <strong>Scope:</strong> {scope}
      </li>
      <li>
        <strong>Message:</strong>
        <div style={{ marginTop: "8px", whiteSpace: "pre-wrap" }}>{message}</div>
      </li>
    </ol>
  </div>
);
