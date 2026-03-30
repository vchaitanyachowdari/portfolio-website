"use client";

import {
  Grid2X2Plus,
} from 'lucide-react';
import Link from 'next/link';

/* Inline brand SVGs — lucide-react no longer ships social/brand icons */
const FacebookSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const GithubSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const InstagramSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.5"/>
  </svg>
);

const LinkedinSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
  </svg>
);

const TwitterSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  const companyLinks = [
    {
      title: 'About Us',
      href: '/about',
    },
    {
      title: 'Careers',
      href: '#',
    },
    {
      title: 'Privacy Policy',
      href: '/privacy',
    },
    {
      title: 'Terms of Service',
      href: '/terms',
    },
    {
      title: 'Refund & Cancellation',
      href: '/refund',
    },
  ];

  const resourceLinks = [
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Resources',
      href: '/resource',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
    {
      title: 'Services',
      href: '/services',
    },
  ];

  const socialLinks = [
    {
      icon: <FacebookSvg className="size-4" />,
      link: 'https://www.facebook.com/vchaitanyachowdari',
    },
    {
      icon: <GithubSvg className="size-4" />,
      link: 'https://github.com/vchaitanyachowdari',
    },
    {
      icon: <InstagramSvg className="size-4" />,
      link: 'https://www.instagram.com/vchaitanyachowdari',
    },
    {
      icon: <LinkedinSvg className="size-4" />,
      link: 'https://www.linkedin.com/in/vchaitanyachowdari',
    },
    {
      icon: <TwitterSvg className="size-4" />,
      link: 'https://twitter.com/vchaitanyac',
    },
    {
      icon: <YoutubeSvg className="size-4" />,
      link: 'https://www.youtube.com/@vchaitanyachowdari',
    },
  ];
  return (
    <footer className="relative">
      <div className="bg-[radial-gradient(35%_80%_at_30%_0%,--theme(--color-foreground/.1),transparent)] mx-auto max-w-4xl    md:border-x">
        <div className="bg-border absolute inset-x-0 h-px w-full" />
        <div className="grid max-w-4xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <Link href="/" className="w-max opacity-25">
              <Grid2X2Plus className="size-8" />
            </Link>
            <p className="text-muted-foreground max-w-sm font-mono text-sm text-balance">
              A comprehensive financial technology platform.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="hover:bg-accent rounded-md border p-1.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs">
              Resources
            </span>
            <div className="flex flex-col gap-1">
              {resourceLinks.map(({ href, title }, i) => (
                <Link
                  key={i}
                  className={`w-max py-1 text-sm duration-200 hover:underline`}
                  href={href}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs">Company</span>
            <div className="flex flex-col gap-1">
              {companyLinks.map(({ href, title }, i) => (
                <Link
                  key={i}
                  className={`w-max py-1 text-sm duration-200 hover:underline`}
                  href={href}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-border absolute inset-x-0 h-px w-full" />
        <div className="flex max-w-4xl flex-col justify-between gap-2 pt-2 pb-5">
          <p className="text-muted-foreground text-center font-thin">
            © {year} V Chaitanya Chowdari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}