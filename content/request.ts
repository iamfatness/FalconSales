import { site } from "./site.ts";

export type RequestFields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  need: string;
  message: string;
};

export function validateRequest(
  fields: RequestFields,
): Partial<Record<"name" | "email" | "need", string>> {
  const errors: Partial<Record<"name" | "email" | "need", string>> = {};
  if (fields.name.trim() === "") errors.name = "Name is required.";
  if (fields.email.trim() === "") errors.email = "Email is required.";
  if (fields.need.trim() === "") errors.need = "Tell us what you need.";
  return errors;
}

export function requestMailto(fields: RequestFields): string | null {
  if (Object.keys(validateRequest(fields)).length > 0) return null;
  const body = [
    `Name: ${fields.name}`,
    `Company: ${fields.company}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email}`,
    `Need: ${fields.need}`,
    `Message: ${fields.message}`,
  ].join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent("Storage layout request")}&body=${encodeURIComponent(body)}`;
}

export const requestConfirmation =
  "Your email program should open with this request addressed to matt.falconsales@hotmail.com. If it does not, send the same details to that address.";
