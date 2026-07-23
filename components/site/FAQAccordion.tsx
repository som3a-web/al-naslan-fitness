"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQ = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-white/10 border border-white/10">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="bg-white/[0.035]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-black uppercase text-white">{item.question}</span>
              <ChevronDown
                aria-hidden="true"
                size={20}
                className={cn("shrink-0 text-lime transition", isOpen && "rotate-180")}
              />
            </button>
            <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-6 text-neutral-300">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

