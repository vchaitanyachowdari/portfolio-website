'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  Sparkles,
  Calendar,
} from 'lucide-react';

/* ─── Animated Container ─── */
function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 12, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Props ─── */
interface ContactFormProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  location?: string;
  web?: { label: string; url: string };
  calLink?: string;
}

export const Contact2 = ({
  title = 'Get in Touch',
  description = "Have a project in mind? Need AI automation, agent development, or consulting? Let's talk and bring your ideas to life.",
  phone = '+91 XXX XXX XXXX',
  email = 'vchaitanya@chowdari.in',
  location = 'Davangere, Karnataka, India',
  web = { label: 'chowdari.in', url: 'https://chowdari.in' },
  calLink = 'https://cal.com/vcaicreator/discovery-call',
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setFormData({ firstname: '', lastname: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  /* ─── Reusable inline styles using CSS vars with fallbacks ─── */
  const colors = {
    brand: 'var(--brand-background-strong, #06b6d4)',
    accent: 'var(--accent-background-strong, #ef4444)',
    textStrong: 'var(--neutral-on-background-strong, #f3f4f6)',
    textWeak: 'var(--neutral-on-background-weak, #9ca3af)',
    border: 'var(--neutral-border-medium, #374151)',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: '44px',
    padding: '0 14px',
    borderRadius: '10px',
    border: `1px solid ${colors.border}`,
    background: 'transparent',
    color: colors.textStrong,
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    height: 'auto',
    minHeight: '120px',
    padding: '12px 14px',
    resize: 'vertical' as const,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '13px',
    fontWeight: 500,
    color: colors.textWeak,
    marginBottom: '6px',
    display: 'block',
  };

  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-16">

          {/* ─── Left: Info Column ─── */}
          <div className="flex max-w-md flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
            {/* Header */}
            <AnimatedContainer delay={0.1}>
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium"
                style={{
                  background: `${colors.brand}15`,
                  color: colors.brand,
                  border: `1px solid ${colors.brand}30`,
                }}
              >
                <Sparkles className="size-3" />
                Available for projects
              </div>
              <h1
                className="mb-3 text-4xl font-bold tracking-tight lg:text-5xl"
                style={{ color: colors.textStrong }}
              >
                {title}
              </h1>
              <p className="text-base leading-relaxed" style={{ color: colors.textWeak }}>
                {description}
              </p>
            </AnimatedContainer>

            {/* Contact Detail Cards */}
            <AnimatedContainer delay={0.2} className="flex flex-col gap-3">
              <h3
                className="mb-1 text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: colors.brand }}
              >
                Contact Details
              </h3>

              {[
                { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
                { icon: Phone, label: 'Phone', value: phone, href: `tel:${phone}` },
                { icon: Globe, label: 'Website', value: web.label, href: web.url, external: true },
                { icon: MapPin, label: 'Location', value: location },
              ].map((item) => {
                const Tag = item.href ? 'a' : 'div';
                const linkProps = item.href
                  ? {
                      href: item.href,
                      ...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                    }
                  : {};

                return (
                  <Tag
                    key={item.label}
                    className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200"
                    style={{ border: `1px solid ${colors.border}` }}
                    onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                      (e.currentTarget as HTMLElement).style.borderColor = colors.brand;
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                      (e.currentTarget as HTMLElement).style.borderColor = colors.border;
                    }}
                    {...linkProps}
                  >
                    <div
                      className="flex size-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `${colors.brand}15`, color: colors.brand }}
                    >
                      <item.icon className="size-4" />
                    </div>
                    <div>
                      <p className="text-[11px]" style={{ color: colors.textWeak }}>{item.label}</p>
                      <p className="text-sm font-medium" style={{ color: colors.textStrong }}>{item.value}</p>
                    </div>
                  </Tag>
                );
              })}
            </AnimatedContainer>

            {/* Discovery Call CTA */}
            <AnimatedContainer delay={0.3}>
              <a
                href={calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${colors.brand}, ${colors.accent})`,
                }}
              >
                <Calendar className="size-4" />
                Book a Discovery Call
                <ArrowUpRight className="size-3.5" />
              </a>
            </AnimatedContainer>
          </div>

          {/* ─── Right: Form ─── */}
          <AnimatedContainer delay={0.2} className="flex-1 max-w-xl">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl p-6 sm:p-8"
              style={{
                border: `1px solid ${colors.border}`,
              }}
            >
              {/* Form header */}
              <div className="mb-1">
                <h2 className="text-xl font-semibold" style={{ color: colors.textStrong }}>
                  Send a Message
                </h2>
                <p className="mt-1 text-sm" style={{ color: colors.textWeak }}>
                  Fill in the form below and I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Name row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-firstname" style={labelStyle}>First Name *</label>
                  <input
                    id="contact-firstname"
                    name="firstname"
                    type="text"
                    placeholder="John"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = colors.brand; }}
                    onBlur={(e) => { e.target.style.borderColor = colors.border; }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-lastname" style={labelStyle}>Last Name</label>
                  <input
                    id="contact-lastname"
                    name="lastname"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastname}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = colors.brand; }}
                    onBlur={(e) => { e.target.style.borderColor = colors.border; }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" style={labelStyle}>Email *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = colors.brand; }}
                  onBlur={(e) => { e.target.style.borderColor = colors.border; }}
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" style={labelStyle}>Subject *</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = colors.brand; }}
                  onBlur={(e) => { e.target.style.borderColor = colors.border; }}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={labelStyle}>Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project, goals, and how I can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={textareaStyle}
                  onFocus={(e) => { e.target.style.borderColor = colors.brand; }}
                  onBlur={(e) => { e.target.style.borderColor = colors.border; }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background:
                    status === 'success'
                      ? '#22c55e'
                      : status === 'error'
                        ? '#ef4444'
                        : `linear-gradient(135deg, ${colors.brand}, ${colors.accent})`,
                }}
              >
                {status === 'idle' && <Send className="size-4" />}
                {status === 'loading' && <Loader2 className="size-4 animate-spin" />}
                {status === 'success' && <CheckCircle2 className="size-4" />}
                {status === 'error' && <XCircle className="size-4" />}
                {status === 'idle' && 'Send Message'}
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Message Sent Successfully!'}
                {status === 'error' && 'Failed to Send — Try Again'}
              </button>

              {/* Success message */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm"
                  style={{ color: '#22c55e' }}
                >
                  Thank you! You&apos;ll receive a confirmation email shortly.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm"
                  style={{ color: '#ef4444' }}
                >
                  Something went wrong. Please try again or email directly.
                </motion.p>
              )}
            </form>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
};
