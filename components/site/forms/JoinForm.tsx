"use client";

import { useMemo, useState } from "react";
import type { Emirate } from "@/lib/gymnation-data";
import { emirates, locations, locationsByEmirate, memberships, trainingGoals } from "@/lib/gymnation-data";
import { Button } from "../Button";
import { FormField, SelectField } from "./FormField";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(\+?\d[\d\s-]{7,})$/;

export function JoinForm({ initialPlan = "" }: { initialPlan?: string }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    city: "" as Emirate | "",
    gym: "",
    plan: memberships.some((tier) => tier.name === initialPlan) ? initialPlan : "",
    goal: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [reference, setReference] = useState("");

  const gyms = useMemo(() => (values.city ? locationsByEmirate(values.city) : locations), [values.city]);

  function update<T extends keyof typeof values>(field: T, value: (typeof values)[T]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (values.name.trim().length < 2) nextErrors.name = "Enter your full name.";
    if (!emailPattern.test(values.email)) nextErrors.email = "Enter a valid email.";
    if (!phonePattern.test(values.phone)) nextErrors.phone = "Enter a valid phone number.";
    if (!values.city) nextErrors.city = "Choose a city.";
    if (!values.gym) nextErrors.gym = "Choose a gym.";
    if (!values.plan) nextErrors.plan = "Choose a plan.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setReference(`GN-${Math.random().toString(36).slice(2, 8).toUpperCase()}`);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="border border-lime bg-lime p-6 text-carbon">
        <p className="text-2xl font-black uppercase">Free trial confirmed</p>
        <p className="mt-2 text-sm font-semibold">
          Reference {reference}. {values.name}, your {values.plan} plan enquiry is reserved at {values.gym}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          label="Name"
          id="join-name"
          value={values.name}
          error={errors.name}
          onChange={(event) => update("name", event.target.value)}
          placeholder="Full name"
        />
        <FormField
          label="Phone"
          id="join-phone"
          value={values.phone}
          error={errors.phone}
          onChange={(event) => update("phone", event.target.value)}
          placeholder="+971 50 000 0000"
        />
      </div>
      <FormField
        label="Email"
        id="join-email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={(event) => update("email", event.target.value)}
        placeholder="you@example.com"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="City"
          id="join-city"
          value={values.city}
          error={errors.city}
          onChange={(event) => {
            update("city", event.target.value as Emirate);
            update("gym", "");
          }}
        >
          <option value="">Select city</option>
          {emirates.map((emirate) => (
            <option key={emirate} value={emirate}>
              {emirate}
            </option>
          ))}
        </SelectField>
        <SelectField label="Gym" id="join-gym" value={values.gym} error={errors.gym} onChange={(event) => update("gym", event.target.value)}>
          <option value="">Select gym</option>
          {gyms.map((location) => (
            <option key={location.slug} value={location.name}>
              {location.name}
            </option>
          ))}
        </SelectField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Plan"
          id="join-plan"
          value={values.plan}
          error={errors.plan}
          onChange={(event) => update("plan", event.target.value)}
        >
          <option value="">Select plan</option>
          {memberships.map((tier) => (
            <option key={tier.name} value={tier.name}>
              {tier.name} AED {tier.monthlyPrice}/mo
            </option>
          ))}
        </SelectField>
        <SelectField label="Goal" id="join-goal" value={values.goal} onChange={(event) => update("goal", event.target.value)}>
          <option value="">Select goal</option>
          {trainingGoals.map((goal) => (
            <option key={goal}>{goal}</option>
          ))}
        </SelectField>
      </div>
      <Button type="submit" className="w-full sm:w-auto" showArrow>
        Start Free Trial
      </Button>
    </form>
  );
}
