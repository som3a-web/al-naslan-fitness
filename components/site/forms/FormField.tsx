import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full border border-white/15 bg-carbon px-4 py-3 text-sm text-white placeholder:text-neutral-500 transition focus:border-lime";

type BaseProps = {
  label: string;
  id: string;
  error?: string;
  children?: ReactNode;
};

export function FieldShell({ label, id, error, children }: BaseProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-neutral-300">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs font-bold text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;

export function FormField({ label, id, error, className, ...props }: InputProps) {
  return (
    <FieldShell label={label} id={id} error={error}>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass, className)}
        {...props}
      />
    </FieldShell>
  );
}

type SelectProps = BaseProps & SelectHTMLAttributes<HTMLSelectElement>;

export function SelectField({ label, id, error, className, children, ...props }: SelectProps) {
  return (
    <FieldShell label={label} id={id} error={error}>
      <select
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass, "appearance-none", className)}
        {...props}
      >
        {children}
      </select>
    </FieldShell>
  );
}

type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextareaField({ label, id, error, className, ...props }: TextareaProps) {
  return (
    <FieldShell label={label} id={id} error={error}>
      <textarea
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass, "min-h-32 resize-y", className)}
        {...props}
      />
    </FieldShell>
  );
}

