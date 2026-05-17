"use client";

import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { whatsappUrl } from "@/lib/site";

const services = [
  "Website",
  "POS System",
  "Dashboard",
  "Mobile App",
  "Branding",
  "Social Media",
  "Software Solution",
];

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [note, setNote] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Website",
    message: "",
  });

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function saveLead() {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 2500);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });
      const result = (await response.json().catch(() => null)) as {
        saved?: boolean;
      } | null;

      if (result?.saved) {
        setNote("Saved in admin panel and opening WhatsApp.");
      } else {
        setNote("Opening WhatsApp. Admin database can be connected later.");
      }
    } catch {
      setNote("Opening WhatsApp. Please send the message there.");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setSending(true);

    const message = [
      "Assalamualaikum ByteBlitz Technologies,",
      `Name: ${form.name || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service Needed: ${form.service}`,
      `Message: ${form.message || "I want to discuss my project."}`,
    ].join("\n");

    await saveLead();
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSending(false);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-[#071B3A]/10 bg-white p-5 shadow-2xl shadow-[#071B3A]/10 sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#071B3A]">
          Name
          <input
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Your name"
            className="focus-ring rounded-lg border border-[#071B3A]/15 bg-[#F5F7FB] px-4 py-3 font-semibold text-[#071B3A] placeholder:text-[#071B3A]/40"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#071B3A]">
          Phone
          <input
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="03xx xxxxxxx"
            className="focus-ring rounded-lg border border-[#071B3A]/15 bg-[#F5F7FB] px-4 py-3 font-semibold text-[#071B3A] placeholder:text-[#071B3A]/40"
            required
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-bold text-[#071B3A]">
        Service Needed
        <select
          value={form.service}
          onChange={(event) => update("service", event.target.value)}
          className="focus-ring rounded-lg border border-[#071B3A]/15 bg-[#F5F7FB] px-4 py-3 font-semibold text-[#071B3A]"
        >
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>

      <label className="mt-5 grid gap-2 text-sm font-bold text-[#071B3A]">
        Message
        <textarea
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Tell us about your project"
          rows={5}
          className="focus-ring resize-none rounded-lg border border-[#071B3A]/15 bg-[#F5F7FB] px-4 py-3 font-semibold text-[#071B3A] placeholder:text-[#071B3A]/40"
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6A00] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#FF6A00]/25 transition hover:-translate-y-0.5 hover:bg-[#e95f00] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {sending ? "Opening WhatsApp..." : "Send on WhatsApp"}
      </button>
      {note ? (
        <p className="mt-4 text-sm font-semibold text-[#071B3A]/65">{note}</p>
      ) : null}
    </form>
  );
}
