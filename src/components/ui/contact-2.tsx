'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
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
  Clock,
  ChevronDown,
  Zap,
  Shield,
  MessageSquare,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

/* ─── Theme tokens (CSS vars with fallbacks) ─── */
const colors = {
  brand: 'var(--brand-background-strong, #06b6d4)',
  accent: 'var(--accent-background-strong, #ef4444)',
  textStrong: 'var(--neutral-on-background-strong, #f3f4f6)',
  textWeak: 'var(--neutral-on-background-weak, #9ca3af)',
  border: 'var(--neutral-border-medium, #374151)',
};

/* ─── Shared input className ─── */
const inputCls =
  'border-[var(--neutral-border-medium,#374151)] bg-transparent text-[var(--neutral-on-background-strong,#f3f4f6)] placeholder:text-[var(--neutral-on-background-weak,#9ca3af)] focus-visible:ring-1 focus-visible:ring-[var(--brand-background-strong,#06b6d4)] focus-visible:border-[var(--brand-background-strong,#06b6d4)] h-11';

const textareaCls =
  'border-[var(--neutral-border-medium,#374151)] bg-transparent text-[var(--neutral-on-background-strong,#f3f4f6)] placeholder:text-[var(--neutral-on-background-weak,#9ca3af)] focus-visible:ring-1 focus-visible:ring-[var(--brand-background-strong,#06b6d4)] focus-visible:border-[var(--brand-background-strong,#06b6d4)] min-h-[130px] resize-y';

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

/* ─── FAQ Accordion ─── */
const faqs = [
  {
    q: 'How quickly do you respond?',
    a: "I respond to all inquiries within 24 hours on business days. For urgent projects, feel free to book a discovery call directly.",
  },
  {
    q: 'What types of projects do you take on?',
    a: "I specialize in AI automation, LLM integrations, custom agent development, full-stack web apps, and consulting for AI strategy. If you have something unique in mind, let's chat.",
  },
  {
    q: 'Do you work with international clients?',
    a: 'Absolutely. I work with clients globally and am comfortable with async communication across time zones.',
  },
  {
    q: 'What does your typical engagement look like?',
    a: "Most projects start with a free 30-minute discovery call to scope the work, followed by a proposal. I offer both fixed-price and retainer-based engagements.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="overflow-hidden rounded-xl transition-colors duration-200"
      style={{ border: `1px solid ${open ? colors.brand + '50' : colors.border}` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium" style={{ color: colors.textStrong }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        >
          <ChevronDown className="size-4 shrink-0" style={{ color: colors.textWeak }} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeInOut' }}
          >
            <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: colors.textWeak }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Service chips ─── */
const serviceOptions = [
  'AI Automation',
  'Agent Development',
  'LLM Integration',
  'Web Development',
  'Consulting',
  'Other',
];

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
    service: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const MSG_LIMIT = 1000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MSG_LIMIT) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service: prev.service === service ? '' : service }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const payload = {
        ...formData,
        subject: formData.service
          ? `[${formData.service}] ${formData.subject}`
          : formData.subject,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setFormData({ firstname: '', lastname: '', email: '', subject: '', message: '', service: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  /* ─── "What to expect" steps ─── */
  const expectItems = [
    { icon: MessageSquare, title: 'Initial Response', desc: 'Within 24 hours' },
    { icon: Zap, title: 'Discovery Call', desc: 'Free 30-min session' },
    { icon: Shield, title: 'Custom Proposal', desc: 'Scoped to your needs' },
  ];

  /* ─── Submit button content ─── */
  const submitContent = {
    idle: { icon: <Send className="size-4" />, label: 'Send Message' },
    loading: { icon: <Loader2 className="size-4 animate-spin" />, label: 'Sending...' },
    success: { icon: <CheckCircle2 className="size-4" />, label: 'Message Sent!' },
    error: { icon: <XCircle className="size-4" />, label: 'Failed — Try Again' },
  }[status];

  const submitBg =
    status === 'success'
      ? '#22c55e'
      : status === 'error'
        ? '#ef4444'
        : `linear-gradient(135deg, ${colors.brand}, ${colors.accent})`;

  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-16">

          {/* ─── Left: Info column ─── */}
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

            {/* Response time badge */}
            <AnimatedContainer delay={0.15}>
              <div
                className="flex items-center gap-3 rounded-xl p-3"
                style={{ background: `${colors.brand}08`, border: `1px solid ${colors.brand}20` }}
              >
                <Clock className="size-4 shrink-0" style={{ color: colors.brand }} />
                <p className="text-sm" style={{ color: colors.textWeak }}>
                  Average response time:{' '}
                  <span style={{ color: colors.textStrong, fontWeight: 500 }}>under 12 hours</span>
                </p>
              </div>
            </AnimatedContainer>

            {/* Contact detail cards */}
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
                  ? { href: item.href, ...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
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

            {/* What to expect — 3-step timeline */}
            <AnimatedContainer delay={0.3} className="flex flex-col gap-3">
              <h3
                className="mb-1 text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: colors.brand }}
              >
                What to Expect
              </h3>
              <div className="relative flex flex-col gap-0">
                {expectItems.map((item, i) => (
                  <div key={item.title} className="relative flex gap-4 pb-4 last:pb-0">
                    {i < expectItems.length - 1 && (
                      <div
                        className="absolute left-4 top-9 h-full w-px"
                        style={{ background: `${colors.brand}25` }}
                      />
                    )}
                    <div
                      className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `${colors.brand}15`, color: colors.brand }}
                    >
                      <item.icon className="size-3.5" />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm font-medium" style={{ color: colors.textStrong }}>{item.title}</p>
                      <p className="text-xs" style={{ color: colors.textWeak }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedContainer>

            {/* Discovery call CTA */}
            <AnimatedContainer delay={0.35}>
              <a
                href={calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                style={{ background: `linear-gradient(135deg, ${colors.brand}, ${colors.accent})` }}
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
              style={{ border: `1px solid ${colors.border}` }}
            >
              {/* Form header */}
              <div className="mb-1">
                <h2 className="text-xl font-semibold" style={{ color: colors.textStrong }}>
                  Send a Message
                </h2>
                <p className="mt-1 text-sm" style={{ color: colors.textWeak }}>
                  Fill in the details below and I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Service type chips */}
              <div>
                <Label className="mb-2 block text-xs font-semibold uppercase tracking-widest" style={{ color: colors.textWeak }}>
                  What can I help you with?
                </Label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleServiceSelect(s)}
                      className="rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200"
                      style={
                        formData.service === s
                          ? { background: `${colors.brand}20`, border: `1px solid ${colors.brand}`, color: colors.brand }
                          : { background: 'transparent', border: `1px solid ${colors.border}`, color: colors.textWeak }
                      }
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="contact-firstname" style={{ color: colors.textWeak }}>First Name *</Label>
                  <Input
                    id="contact-firstname"
                    name="firstname"
                    type="text"
                    placeholder="John"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    className={inputCls}
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="contact-lastname" style={{ color: colors.textWeak }}>Last Name</Label>
                  <Input
                    id="contact-lastname"
                    name="lastname"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastname}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="grid gap-1.5">
                <Label htmlFor="contact-email" style={{ color: colors.textWeak }}>Email *</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </div>

              {/* Subject */}
              <div className="grid gap-1.5">
                <Label htmlFor="contact-subject" style={{ color: colors.textWeak }}>Subject *</Label>
                <Input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </div>

              {/* Message + character counter */}
              <div className="grid gap-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="contact-message" style={{ color: colors.textWeak }}>Message *</Label>
                  <span
                    className="text-xs"
                    style={{ color: formData.message.length > MSG_LIMIT * 0.9 ? '#ef4444' : colors.textWeak }}
                  >
                    {formData.message.length}/{MSG_LIMIT}
                  </span>
                </div>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project, goals, timeline, and how I can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={textareaCls}
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full gap-2 text-white hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200 disabled:opacity-70"
                style={{ background: submitBg }}
              >
                {submitContent.icon}
                {submitContent.label}
              </Button>

              {/* Status feedback */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="flex flex-col items-center gap-1 rounded-xl p-4 text-center"
                    style={{ background: '#22c55e12', border: '1px solid #22c55e30' }}
                  >
                    <CheckCircle2 className="size-5 text-green-500" />
                    <p className="text-sm font-medium text-green-500">Message sent!</p>
                    <p className="text-xs" style={{ color: colors.textWeak }}>
                      You&apos;ll receive a confirmation email shortly. I&apos;ll be in touch soon.
                    </p>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="flex flex-col items-center gap-1 rounded-xl p-4 text-center"
                    style={{ background: '#ef444412', border: '1px solid #ef444430' }}
                  >
                    <XCircle className="size-5 text-red-500" />
                    <p className="text-sm font-medium text-red-500">Something went wrong</p>
                    <p className="text-xs" style={{ color: colors.textWeak }}>
                      Please try again or email me at{' '}
                      <a href={`mailto:${email}`} className="underline">{email}</a>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </AnimatedContainer>
        </div>

        {/* ─── FAQ Section ─── */}
        <AnimatedContainer delay={0.3} className="mt-20">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <p
                className="mb-2 text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: colors.brand }}
              >
                FAQ
              </p>
              <h2 className="text-2xl font-bold" style={{ color: colors.textStrong }}>
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm" style={{ color: colors.textWeak }}>
                Can&apos;t find the answer? Feel free to reach out directly.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <AnimatedContainer key={i} delay={0.3 + i * 0.06}>
                  <FAQItem q={faq.q} a={faq.a} />
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};
