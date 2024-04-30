import { z } from "zod";

export const contactFormValidation = z.object({
  name: z.string().nonempty("name is required"),
  email: z.string().email("invalid email address"),
  message: z.string().min(1),
});
