'use client';

import React, { useState, useEffect } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Mail, MapPin, ArrowUpRight, Sparkles, ChevronUp, Send } from 'lucide-react';

/* ─── Inline Brand SVG Icons ─── */
const GithubSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);

const XSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

/* ─── Data ─── */
interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    label: 'Explore',
    links: [
      { title: 'Home', href: '/' },
      { title: 'About', href: '/about' },
      { title: 'Work', href: '/work' },
      { title: 'Blog', href: '/blog' },
      { title: 'Gallery', href: '/gallery' },
    ],
  },
  {
    label: 'Services',
    links: [
      { title: 'Services', href: '/services' },
      { title: 'Resources', href: '/resource' },
      { title: 'Contact', href: '/contact' },
      { title: 'Tools', href: '/tools' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Refund & Cancellation', href: '/refund' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { title: 'GitHub', href: 'https://github.com/vchaitanyachowdari', icon: GithubSvg, external: true },
      { title: 'LinkedIn', href: 'https://www.linkedin.com/in/vchaitanyachowdari', icon: LinkedinSvg, external: true },
      { title: 'X (Twitter)', href: 'https://x.com/vchaitanyachai', icon: XSvg, external: true },
      { title: 'Instagram', href: 'https://www.instagram.com/vchaitanyachowdari', icon: InstagramSvg, external: true },
      { title: 'YouTube', href: 'https://www.youtube.com/@vchaitanyachowdari', icon: YoutubeSvg, external: true },
    ],
  },
];

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '30+', label: 'Clients' },
  { value: '20+', label: 'AI Builds' },
  { value: '3+', label: 'Years' },
];

/* ─── Animated Container ─── */
type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Back to Top ─── */
function BackToTop() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          onClick={scrollTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex size-10 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, var(--brand-background-strong, #06b6d4), var(--accent-background-strong, #ef4444))',
          }}
        >
          <ChevronUp className="size-4 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ─── Newsletter ─── */
function NewsletterInput() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div>
      <p
        className="mb-2 text-[11px] font-semibold uppercase tracking-widest"
        style={{ color: 'var(--brand-background-strong, #06b6d4)' }}
      >
        Stay Updated
      </p>
      {submitted ? (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm"
          style={{ color: '#22c55e' }}
        >
          You&apos;re in! Thanks for subscribing.
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 rounded-lg px-3 py-2 text-xs outline-none transition-colors"
            style={{
              background: 'var(--neutral-background-medium, rgba(255,255,255,0.05))',
              border: '1px solid var(--neutral-border-medium, #374151)',
              color: 'var(--neutral-on-background-strong, #f3f4f6)',
            }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--brand-background-strong, #06b6d4)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--neutral-border-medium, #374151)'; }}
          />
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-white transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, var(--brand-background-strong, #06b6d4), var(--accent-background-strong, #ef4444))',
            }}
          >
            <Send className="size-3" />
          </button>
        </form>
      )}
    </div>
  );
}

/* ─── Footer Component ─── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <BackToTop />

      <footer className="relative mt-auto w-full">
        {/* ─── Gradient top line ─── */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, var(--brand-background-strong, #06b6d4) 30%, var(--accent-background-strong, #ef4444) 70%, transparent 100%)',
            opacity: 0.4,
          }}
        />

        {/* ─── Radial glow ─── */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-40 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background: 'var(--brand-background-strong, #06b6d4)',
            opacity: 0.05,
          }}
        />

        <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">

          {/* ─── Stats Strip ─── */}
          <AnimatedContainer delay={0.05}>
            <div
              className="mb-12 grid grid-cols-2 gap-4 rounded-2xl p-6 sm:grid-cols-4"
              style={{
                background: 'linear-gradient(135deg, var(--brand-background-strong, #06b6d4)08, var(--accent-background-strong, #ef4444)05)',
                border: '1px solid var(--neutral-border-medium, #374151)',
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + i * 0.08, duration: 0.5 }}
                  className="flex flex-col items-center gap-0.5 text-center"
                >
                  <span
                    className="text-2xl font-bold tracking-tight"
                    style={{
                      background: 'linear-gradient(135deg, var(--brand-background-strong, #06b6d4), var(--accent-background-strong, #ef4444))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--neutral-on-background-weak, #9ca3af)' }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedContainer>

          <div className="grid w-full gap-10 xl:grid-cols-3 xl:gap-12">
            {/* ─── Brand Column ─── */}
            <AnimatedContainer className="flex flex-col gap-5">
              <Link href="/" className="group inline-flex w-max items-center gap-3">
                <div
                  className="flex size-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--brand-background-strong, #06b6d4), var(--accent-background-strong, #ef4444))',
                  }}
                >
                  <Sparkles className="size-5 text-white" />
                </div>
                <span className="text-lg font-semibold tracking-tight transition-opacity group-hover:opacity-80">
                  V Chaitanya Chowdari
                </span>
              </Link>

              <p
                className="max-w-sm text-sm leading-relaxed"
                style={{ color: 'var(--neutral-on-background-weak, #9ca3af)' }}
              >
                AI Generalist, Researcher & Builder. Helping businesses leverage AI
                automation, build intelligent agents, and craft digital solutions
                that scale.
              </p>

              {/* Status badge */}
              <div className="inline-flex w-max items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium"
                style={{
                  background: '#22c55e12',
                  border: '1px solid #22c55e30',
                  color: '#22c55e',
                }}
              >
                <span className="size-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                Available for new projects
              </div>

              {/* Contact info */}
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:vchaitanya@chowdari.in"
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-80"
                  style={{ color: 'var(--neutral-on-background-weak, #9ca3af)' }}
                >
                  <Mail className="size-3.5" />
                  vchaitanya@chowdari.in
                </a>
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: 'var(--neutral-on-background-weak, #9ca3af)' }}
                >
                  <MapPin className="size-3.5" />
                  Davangere, Karnataka, India
                </span>
              </div>

              {/* Newsletter */}
              <NewsletterInput />
            </AnimatedContainer>

            {/* ─── Navigation Grid ─── */}
            <div className="mt-2 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
              {footerSections.map((section, index) => (
                <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                  <div className="mb-8 md:mb-0">
                    <h3
                      className="text-[11px] font-semibold uppercase tracking-widest"
                      style={{ color: 'var(--brand-background-strong, #06b6d4)' }}
                    >
                      {section.label}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {section.links.map((link) => {
                        const LinkComp = link.external ? 'a' : Link;
                        const extraProps = link.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {};

                        return (
                          <li key={link.title}>
                            <LinkComp
                              href={link.href}
                              className="group inline-flex items-center gap-1.5 text-sm transition-all duration-200"
                              style={{ color: 'var(--neutral-on-background-weak, #9ca3af)' }}
                              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                                (e.currentTarget as HTMLElement).style.color =
                                  'var(--neutral-on-background-strong, #f3f4f6)';
                              }}
                              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                                (e.currentTarget as HTMLElement).style.color =
                                  'var(--neutral-on-background-weak, #9ca3af)';
                              }}
                              {...extraProps}
                            >
                              {link.icon && <link.icon className="size-3.5" />}
                              {link.title}
                              {!link.icon && (
                                <ArrowUpRight className="size-3 opacity-0 -translate-y-0.5 transition-all duration-200 group-hover:opacity-60 group-hover:translate-y-0" />
                              )}
                            </LinkComp>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>

          {/* ─── CTA Banner ─── */}
          <AnimatedContainer delay={0.5}>
            <div
              className="relative mt-14 overflow-hidden rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{
                background:
                  'linear-gradient(135deg, var(--brand-background-strong, #06b6d4)12, var(--accent-background-strong, #ef4444)08)',
                border: '1px solid var(--neutral-border-medium, #374151)',
              }}
            >
              {/* Decorative blobs */}
              <div
                className="pointer-events-none absolute -top-8 -right-8 size-40 rounded-full blur-3xl"
                style={{ background: 'var(--brand-background-strong, #06b6d4)', opacity: 0.08 }}
              />
              <div
                className="pointer-events-none absolute -bottom-8 right-24 size-32 rounded-full blur-3xl"
                style={{ background: 'var(--accent-background-strong, #ef4444)', opacity: 0.06 }}
              />

              <div className="relative">
                <div className="mb-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    background: 'var(--brand-background-strong, #06b6d4)20',
                    color: 'var(--brand-background-strong, #06b6d4)',
                  }}
                >
                  <Sparkles className="size-2.5" />
                  Free Discovery Call
                </div>
                <p
                  className="text-base font-semibold"
                  style={{ color: 'var(--neutral-on-background-strong, #f3f4f6)' }}
                >
                  Ready to build something extraordinary?
                </p>
                <p
                  className="mt-1 text-sm"
                  style={{ color: 'var(--neutral-on-background-weak, #9ca3af)' }}
                >
                  Book a free 30-min call — let&apos;s turn your vision into reality.
                </p>
              </div>
              <a
                href="https://cal.com/vcaicreator/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/20"
                style={{
                  background:
                    'linear-gradient(135deg, var(--brand-background-strong, #06b6d4), var(--accent-background-strong, #ef4444))',
                }}
              >
                Book a Call
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </AnimatedContainer>

          {/* ─── Bottom bar ─── */}
          <AnimatedContainer delay={0.6}>
            <div
              className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
              style={{ borderColor: 'var(--neutral-border-medium, #374151)' }}
            >
              <p
                className="text-xs"
                style={{ color: 'var(--neutral-on-background-weak, #9ca3af)' }}
              >
                © {year} V Chaitanya Chowdari. All rights reserved.
              </p>

              {/* Quick nav links */}
              <nav className="hidden sm:flex items-center gap-4">
                {['Privacy', 'Terms', 'Refund'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().split(' ')[0]}`}
                    className="text-xs transition-opacity hover:opacity-80"
                    style={{ color: 'var(--neutral-on-background-weak, #9ca3af)' }}
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              <div
                className="flex items-center gap-1 text-xs"
                style={{ color: 'var(--neutral-on-background-weak, #9ca3af)' }}
              >
                <span>Crafted with</span>
                <span
                  className="inline-block animate-pulse"
                  style={{ color: 'var(--accent-background-strong, #ef4444)' }}
                >
                  ♥
                </span>
                <span>in India</span>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </footer>
    </>
  );
}
