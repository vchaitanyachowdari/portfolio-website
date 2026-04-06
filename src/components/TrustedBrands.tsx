"use client";

import React from "react";
import styles from "./TrustedBrands.module.scss";

/** A single brand entry shown in the marquee */
type Brand = {
    name: string;
    /** URL to a logo SVG/PNG, OR leave empty to render a styled text badge */
    logo?: string;
};

/**
 * Tools, platforms, and brands V Chaitanya Chowdari has worked with.
 * Mix of company logos (served from public/) and well-known tool/platform names.
 */
const brands: Brand[] = [
    // --- Platforms & tools with recognisable logos ---
    { name: "n8n", logo: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4" },
    { name: "Make.com", logo: "https://images.ctfassets.net/un655fb9wln6/1mJetwzS2RvpwNjJ0MR6bF/5e67d3eb16e2cfc1e0a2b63c7bb4c1c0/make-logo-symbol.svg" },
    { name: "Zapier", logo: "https://cdn.zapier.com/zapier/images/logos/zapier-logo.png" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" },
    { name: "GitHub", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
    { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Next.js", logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" },
    // --- Companies / partners (text badges) ---
    { name: "VC AI Creator" },
    { name: "Commonly Technologies" },
    { name: "VC Groups" },
    { name: "Physics Mindboggler" },
    { name: "Capgemini" },
    { name: "IIT Indore" },
    { name: "100x Engineering" },
];

type InfiniteSliderProps = {
    items: Brand[];
    reverse?: boolean;
    speed?: number; // seconds for one full loop
};

function InfiniteSlider({ items, reverse = false, speed = 30 }: InfiniteSliderProps) {
    // Duplicate items so the loop is truly seamless
    const doubled = [...items, ...items];

    return (
        <div className={styles.track} aria-hidden="true">
            <div
                className={`${styles.strip} ${reverse ? styles.reverse : ""}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {doubled.map((brand, i) => (
                    <div key={`${brand.name}-${i}`} className={styles.card}>
                        {brand.logo ? (
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className={styles.logo}
                                loading="lazy"
                                onError={(e) => {
                                    // Fallback to text badge if image fails
                                    (e.currentTarget as HTMLImageElement).style.display = "none";
                                    (e.currentTarget.nextSibling as HTMLElement | null)?.removeAttribute("data-hide");
                                }}
                            />
                        ) : null}
                        <span
                            className={styles.label}
                            data-hide={brand.logo ? "" : undefined}
                            style={brand.logo ? { display: "none" } : undefined}
                        >
                            {brand.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function TrustedBrands() {
    const half = Math.ceil(brands.length / 2);
    const row1 = brands.slice(0, half);
    const row2 = brands.slice(half);

    return (
        <section className={styles.section}>
            {/* Fade edges */}
            <div className={styles.fadeLeft} />
            <div className={styles.fadeRight} />

            <div className={styles.header}>
                <span className={styles.eyebrow}>Enterprise AI Stack &amp; Partners</span>
                <p className={styles.sub}>
                    The tools, platforms, and organisations powering 30+ enterprise AI systems I&rsquo;ve built and shipped.
                </p>
            </div>

            <div className={styles.rows}>
                <InfiniteSlider items={row1} speed={28} />
                <InfiniteSlider items={row2} reverse speed={22} />
            </div>
        </section>
    );
}
