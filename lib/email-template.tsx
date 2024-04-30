import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <div>
      You got a new message from {name} with email address as {email}
    </div>
    <div>Message is: </div>
    <h3 className="mt-2">{message}</h3>
  </div>
);
