"use client";

import { useState } from "react";
import { Button } from "../Button";
import { FormField, SelectField, TextareaField } from "./FormField";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", topic: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function update(field: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (values.name.trim().length < 2) nextErrors.name = "Enter your name.";
    if (!emailPattern.test(values.email)) nextErrors.email = "Enter a valid email.";
    if (!values.topic) nextErrors.topic = "Choose a topic.";
    if (values.message.trim().length < 10) nextErrors.message = "Tell us a little more.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="border border-lime bg-lime p-6 text-carbon">
        <p className="text-2xl font-black uppercase">Message sent</p>
        <p className="mt-2 text-sm font-semibold">Thanks {values.name}. The team will reply to {values.email} shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <FormField
        label="Name"
        id="contact-name"
        value={values.name}
        error={errors.name}
        onChange={(event) => update("name", event.target.value)}
        placeholder="Full name"
      />
      <FormField
        label="Email"
        id="contact-email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={(event) => update("email", event.target.value)}
        placeholder="you@example.com"
      />
      <SelectField
        label="Topic"
        id="contact-topic"
        value={values.topic}
        error={errors.topic}
        onChange={(event) => update("topic", event.target.value)}
      >
        <option value="">Select topic</option>
        <option>Memberships</option>
        <option>Locations</option>
        <option>Classes</option>
        <option>Personal training</option>
        <option>Corporate wellness</option>
      </SelectField>
      <TextareaField
        label="Message"
        id="contact-message"
        value={values.message}
        error={errors.message}
        onChange={(event) => update("message", event.target.value)}
        placeholder="How can we help?"
      />
      <Button type="submit" className="w-full sm:w-auto" showArrow>
        Send Message
      </Button>
    </form>
  );
}

