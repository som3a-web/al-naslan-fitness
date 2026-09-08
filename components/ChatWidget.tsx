"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, Send, X, Zap } from "lucide-react";
import { BRAND } from "@/lib/data";
import { aiReply, WELCOME, type Msg } from "@/lib/ai";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const send = async (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || typing) return;

    // Chips that act as shortcuts rather than questions
    if (/^open trial form$/i.test(text)) {
      setOpen(false);
      document.getElementById("trial")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (/^(open whatsapp|whatsapp the team|talk on whatsapp|whatsapp directions|book on whatsapp|register a child|ask about the menu)$/i.test(text)) {
      window.open(BRAND.whatsappLink, "_blank", "noopener,noreferrer");
      return;
    }

    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setTyping(true);

    let reply: Msg;
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      reply = r.ok ? await r.json() : aiReply(text);
    } catch {
      reply = aiReply(text);
    }

    setTyping(false);
    setMessages((m) => [...m, reply]);
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close NFC assistant" : "Open NFC assistant"}
        aria-expanded={open}
        className="fixed bottom-6 right-4 z-[70] grid h-14 w-14 place-items-center rounded-full bg-flame-gradient text-white shadow-flame-lg transition hover:scale-105 max-md:bottom-24 sm:right-6"
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="NFC assistant chat"
          className="fixed bottom-24 right-4 z-[70] flex h-[min(34rem,calc(100dvh-8rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-flame-500/25 glass-strong shadow-flame-lg max-md:bottom-40 sm:right-6"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-flame-gradient px-4 py-3.5 text-white">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
              <Zap size={18} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold">{BRAND.short} Assistant</p>
              <p className="text-[11px] font-medium text-white/80">Pricing · timings · training · kids</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-md bg-flame-gradient text-white shadow-flame"
                      : "rounded-bl-md border border-white/10 bg-white/[0.06] glass"
                  }`}
                >
                  {m.text}
                  {m.role === "bot" && m.chips && m.chips.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {m.chips.map((chip) => (
                        <button
                          key={chip}
                          onClick={() => send(chip)}
                          className="rounded-full border border-flame-500/35 bg-flame-500/10 px-3 py-1.5 text-xs font-bold text-flame-400 transition hover:bg-flame-500/20"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-4 py-3">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-flame-400"
                      style={{ animationDelay: `${d * 160}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t border-white/10 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about pricing, timings, kids…"
              aria-label="Type your question"
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none transition focus:border-flame-500/60"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flame-gradient text-white shadow-flame transition disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
