import Link from "next/link";
import { Mail, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

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

/* ─── MinimalFooter ─── */
export function MinimalFooter() {
  const year = new Date().getFullYear();

  const navigation = [
    {
      heading: "Explore",
      links: [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Work", href: "/work" },
        { title: "Blog", href: "/blog" },
        { title: "Gallery", href: "/gallery" },
      ],
    },
    {
      heading: "Services",
      links: [
        { title: "Services", href: "/services" },
        { title: "Resources", href: "/resource" },
        { title: "Contact", href: "/contact" },
        { title: "Tools", href: "/tools" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Refund & Cancellation", href: "/refund" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <GithubSvg className="size-4" />, link: "https://github.com/vchaitanyachowdari", label: "GitHub" },
    { icon: <LinkedinSvg className="size-4" />, link: "https://www.linkedin.com/in/vchaitanyachowdari", label: "LinkedIn" },
    { icon: <XSvg className="size-4" />, link: "https://x.com/vchaitanyachai", label: "X" },
    { icon: <InstagramSvg className="size-4" />, link: "https://www.instagram.com/vchaitanyachowdari", label: "Instagram" },
    { icon: <YoutubeSvg className="size-4" />, link: "https://www.youtube.com/@vchaitanyachowdari", label: "YouTube" },
  ];

  return (
    <footer className="relative mt-auto">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--brand-background-strong, #06b6d4) 50%, transparent)",
          opacity: 0.3,
        }}
      />

      <div className="mx-auto max-w-5xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="group inline-flex items-center gap-3 w-max">
              <div
                className="flex size-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, var(--brand-background-strong, #06b6d4), var(--accent-background-strong, #ef4444))" }}
              >
                <Sparkles className="size-5 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight transition-opacity group-hover:opacity-80">
                V Chaitanya Chowdari
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>
              AI Generalist, Researcher & Builder. Crafting intelligent automation and digital solutions.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:vchaitanya@chowdari.in"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}
              >
                <Mail className="size-3.5" />
                vchaitanya@chowdari.in
              </a>
              <span className="inline-flex items-center gap-2 text-sm" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>
                <MapPin className="size-3.5" />
                Davangere, Karnataka, India
              </span>
            </div>

            <div className="flex items-center gap-1.5 pt-1">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex size-9 items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105"
                  style={{ borderColor: "var(--neutral-border-medium, #374151)", color: "var(--neutral-on-background-weak, #9ca3af)" }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {navigation.map((section) => (
              <div key={section.heading} className="flex flex-col gap-4">
                <span
                  className="text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: "var(--brand-background-strong, #06b6d4)" }}
                >
                  {section.heading}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map(({ href, title }) => (
                    <li key={title}>
                      <a
                        href={href}
                        className="group inline-flex items-center gap-1 text-sm transition-all duration-200 hover:opacity-100"
                        style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}
                      >
                        {title}
                        <ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:opacity-60" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
          style={{ borderColor: "var(--neutral-border-medium, #374151)" }}
        >
          <p className="text-xs" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>
            © {year} V Chaitanya Chowdari. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs" style={{ color: "var(--neutral-on-background-weak, #9ca3af)" }}>
            <span>Crafted with</span>
            <span className="inline-block animate-pulse" style={{ color: "var(--accent-background-strong, #ef4444)" }}>♥</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
