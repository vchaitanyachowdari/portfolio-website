"use client";

import React, { useState } from "react";
import { Mail, Phone, Globe, MapPin, Send, Loader2, CheckCircle2, XCircle, ArrowUpRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  location?: string;
  web?: { label: string; url: string };
  calLink?: string;
}

export const Contact2 = ({
  title = "Get in Touch",
  description = "Have a project in mind? Need AI automation, agent development, or consulting? Let's talk and bring your ideas to life.",
  phone = "+91 XXX XXX XXXX",
  email = "vchaitanya@chowdari.in",
  location = "Davangere, Karnataka, India",
  web = { label: "chowdari.in", url: "https://chowdari.in" },
  calLink = "https://cal.com/vcaicreator/discovery-call",
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ firstname: "", lastname: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-16">
          {/* ─── Left: Info Column ─── */}
          <div className="flex max-w-md flex-col gap-10 lg:sticky lg:top-24 lg:self-start">
            {/* Header */}
            <div>
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: "var(--brand-background-strong, #06b6d4)15",
                  color: "var(--brand-background-strong, #06b6d4)",
                  border: "1px solid var(--brand-background-strong, #06b6d4)30",
                }}
              >
                <Sparkles className="size-3" />
                Available for projects
              </div>
              <h1
                className="mb-3 text-4xl font-bold tracking-tight lg:text-5xl"
                style={{ color: "var(--neutral-on-background-strong, #f3f4f6)" }}
              >
                {title}
              </h1>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}
              >
                {description}
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              <h3
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--brand-background-strong, #06b6d4)" }}
              >
                Contact Details
              </h3>

              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200"
                style={{ border: "1px solid var(--neutral-border-medium, #374151)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-background-strong, #06b6d4)";
                  e.currentTarget.style.background = "var(--brand-background-strong, #06b6d4)08";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--neutral-border-medium, #374151)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  className="flex size-9 items-center justify-center rounded-lg"
                  style={{ background: "var(--brand-background-strong, #06b6d4)15", color: "var(--brand-background-strong, #06b6d4)" }}
                >
                  <Mail className="size-4" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>Email</p>
                  <p className="text-sm font-medium" style={{ color: "var(--neutral-on-background-strong, #f3f4f6)" }}>{email}</p>
                </div>
              </a>

              <a
                href={`tel:${phone}`}
                className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200"
                style={{ border: "1px solid var(--neutral-border-medium, #374151)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-background-strong, #06b6d4)";
                  e.currentTarget.style.background = "var(--brand-background-strong, #06b6d4)08";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--neutral-border-medium, #374151)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  className="flex size-9 items-center justify-center rounded-lg"
                  style={{ background: "var(--brand-background-strong, #06b6d4)15", color: "var(--brand-background-strong, #06b6d4)" }}
                >
                  <Phone className="size-4" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>Phone</p>
                  <p className="text-sm font-medium" style={{ color: "var(--neutral-on-background-strong, #f3f4f6)" }}>{phone}</p>
                </div>
              </a>

              <a
                href={web.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200"
                style={{ border: "1px solid var(--neutral-border-medium, #374151)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-background-strong, #06b6d4)";
                  e.currentTarget.style.background = "var(--brand-background-strong, #06b6d4)08";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--neutral-border-medium, #374151)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  className="flex size-9 items-center justify-center rounded-lg"
                  style={{ background: "var(--brand-background-strong, #06b6d4)15", color: "var(--brand-background-strong, #06b6d4)" }}
                >
                  <Globe className="size-4" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>Website</p>
                  <p className="text-sm font-medium" style={{ color: "var(--neutral-on-background-strong, #f3f4f6)" }}>{web.label}</p>
                </div>
              </a>

              <div
                className="flex items-center gap-3 rounded-xl p-3"
                style={{ border: "1px solid var(--neutral-border-medium, #374151)" }}
              >
                <div
                  className="flex size-9 items-center justify-center rounded-lg"
                  style={{ background: "var(--brand-background-strong, #06b6d4)15", color: "var(--brand-background-strong, #06b6d4)" }}
                >
                  <MapPin className="size-4" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>Location</p>
                  <p className="text-sm font-medium" style={{ color: "var(--neutral-on-background-strong, #f3f4f6)" }}>{location}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, var(--brand-background-strong, #06b6d4), var(--accent-background-strong, #ef4444))",
              }}
            >
              Book a Discovery Call
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          {/* ─── Right: Form ─── */}
          <div className="flex-1 max-w-xl">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-2xl p-6 sm:p-8"
              style={{
                border: "1px solid var(--neutral-border-medium, #374151)",
                background: "var(--surface-background, transparent)",
              }}
            >
              <div>
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "var(--neutral-on-background-strong, #f3f4f6)" }}
                >
                  Send a Message
                </h2>
                <p className="mt-1 text-sm" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>
                  Fill in the form below and I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>
                    First Name
                  </Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    className="border-[var(--neutral-border-medium,#374151)] bg-transparent text-[var(--neutral-on-background-strong,#f3f4f6)] placeholder:text-[var(--neutral-on-background-weak,#9ca3af)]/50 focus-visible:ring-[var(--brand-background-strong,#06b6d4)]"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>
                    Last Name
                  </Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="border-[var(--neutral-border-medium,#374151)] bg-transparent text-[var(--neutral-on-background-strong,#f3f4f6)] placeholder:text-[var(--neutral-on-background-weak,#9ca3af)]/50 focus-visible:ring-[var(--brand-background-strong,#06b6d4)]"
                  />
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-[var(--neutral-border-medium,#374151)] bg-transparent text-[var(--neutral-on-background-strong,#f3f4f6)] placeholder:text-[var(--neutral-on-background-weak,#9ca3af)]/50 focus-visible:ring-[var(--brand-background-strong,#06b6d4)]"
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-[var(--neutral-border-medium,#374151)] bg-transparent text-[var(--neutral-on-background-strong,#f3f4f6)] placeholder:text-[var(--neutral-on-background-weak,#9ca3af)]/50 focus-visible:ring-[var(--brand-background-strong,#06b6d4)]"
                />
              </div>

              <div className="grid w-full gap-1.5">
                <Label htmlFor="message" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, goals, and how I can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-[var(--neutral-border-medium,#374151)] bg-transparent text-[var(--neutral-on-background-strong,#f3f4f6)] placeholder:text-[var(--neutral-on-background-weak,#9ca3af)]/50 focus-visible:ring-[var(--brand-background-strong,#06b6d4)]"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full gap-2 rounded-xl py-5 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.01]"
                style={{
                  background:
                    status === "success"
                      ? "#22c55e"
                      : status === "error"
                        ? "#ef4444"
                        : "linear-gradient(135deg, var(--brand-background-strong, #06b6d4), var(--accent-background-strong, #ef4444))",
                }}
              >
                {status === "loading" && <Loader2 className="size-4 animate-spin" />}
                {status === "success" && <CheckCircle2 className="size-4" />}
                {status === "error" && <XCircle className="size-4" />}
                {status === "idle" && <Send className="size-4" />}
                {status === "idle" && "Send Message"}
                {status === "loading" && "Sending..."}
                {status === "success" && "Message Sent!"}
                {status === "error" && "Failed — Try Again"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
