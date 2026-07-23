"use client";

import { useMemo, useState } from "react";
import type { Emirate } from "@/lib/gymnation-data";
import { emirates, locations, locationsByEmirate } from "@/lib/gymnation-data";
import { Button } from "../Button";
import { FormField, SelectField } from "./FormField";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DayPassForm() {
  const [city, setCity] = useState<Emirate | "">("");
  const [gym, setGym] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const gyms = useMemo(() => (city ? locationsByEmirate(city) : locations), [city]);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!city) nextErrors.city = "Choose a city.";
    if (!gym) nextErrors.gym = "Choose a gym.";
    if (!emailPattern.test(email)) nextErrors.email = "Enter a valid email.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="border border-lime bg-lime p-5 text-carbon">
        <p className="text-lg font-black uppercase">Day pass reserved</p>
        <p className="mt-1 text-sm font-semibold">
          Check {email} for your free pass to {gym}. We will hold it for the next 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-4 lg:grid-cols-[1fr_1.2fr_1.4fr_auto] lg:items-end">
      <SelectField
        label="City"
        id="day-pass-city"
        value={city}
        error={errors.city}
        onChange={(event) => {
          setCity(event.target.value as Emirate);
          setGym("");
        }}
      >
        <option value="">Select city</option>
        {emirates.map((emirate) => (
          <option key={emirate} value={emirate}>
            {emirate}
          </option>
        ))}
      </SelectField>
      <SelectField label="Gym" id="day-pass-gym" value={gym} error={errors.gym} onChange={(event) => setGym(event.target.value)}>
        <option value="">Select gym</option>
        {gyms.map((location) => (
          <option key={location.slug} value={location.name}>
            {location.name}
          </option>
        ))}
      </SelectField>
      <FormField
        label="Email"
        id="day-pass-email"
        type="email"
        placeholder="you@example.com"
        value={email}
        error={errors.email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button type="submit" className="h-[46px] w-full lg:w-auto" showArrow>
        Claim Pass
      </Button>
    </form>
  );
}

