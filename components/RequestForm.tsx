"use client";

import { useState, type FormEvent } from "react";
import {
  requestConfirmation,
  requestMailto,
  validateRequest,
  type RequestFields,
} from "../content/request.ts";

const emptyFields: RequestFields = {
  name: "",
  company: "",
  phone: "",
  email: "",
  need: "",
  message: "",
};

export default function RequestForm() {
  const [fields, setFields] = useState<RequestFields>(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "need", string>>>({});
  const [confirmation, setConfirmation] = useState("");

  function update(key: keyof RequestFields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateRequest(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setConfirmation("");
      return;
    }
    const href = requestMailto(fields);
    if (!href) return;
    window.location.href = href;
    setConfirmation(requestConfirmation);
  }

  return (
    <form className="request-form" onSubmit={onSubmit} noValidate>
      <label htmlFor="request-name">
        Name
        <input
          id="request-name"
          name="name"
          type="text"
          autoComplete="name"
          value={fields.name}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "request-name-error" : undefined}
          onChange={(event) => update("name", event.target.value)}
        />
      </label>
      {errors.name ? (
        <p id="request-name-error" className="field-error">
          {errors.name}
        </p>
      ) : null}

      <label htmlFor="request-company">
        Company
        <input
          id="request-company"
          name="company"
          type="text"
          autoComplete="organization"
          value={fields.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </label>

      <label htmlFor="request-phone">
        Phone
        <input
          id="request-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={fields.phone}
          onChange={(event) => update("phone", event.target.value)}
        />
      </label>

      <label htmlFor="request-email">
        Email
        <input
          id="request-email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "request-email-error" : undefined}
          onChange={(event) => update("email", event.target.value)}
        />
      </label>
      {errors.email ? (
        <p id="request-email-error" className="field-error">
          {errors.email}
        </p>
      ) : null}

      <label htmlFor="request-need">
        What you need
        <input
          id="request-need"
          name="need"
          type="text"
          value={fields.need}
          aria-invalid={errors.need ? true : undefined}
          aria-describedby={errors.need ? "request-need-hint request-need-error" : "request-need-hint"}
          onChange={(event) => update("need", event.target.value)}
        />
      </label>
      <p id="request-need-hint" className="field-hint">
        New building, racking, shelving, partitions, layout, or a mix.
      </p>
      {errors.need ? (
        <p id="request-need-error" className="field-error">
          {errors.need}
        </p>
      ) : null}

      <label htmlFor="request-message">
        Message
        <textarea
          id="request-message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </label>

      <button className="button" type="submit">
        Send request
      </button>
      {confirmation ? <p className="request-confirmation">{confirmation}</p> : null}
    </form>
  );
}
