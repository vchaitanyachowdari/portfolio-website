"use client";

import React from "react";
import Link from "next/link";
import { person, social } from "@/app/resources/content";
import { Column, Flex, Text, Heading, Icon, Button } from "@/once-ui/components";
import styles from "./Footer.module.scss";
import { IconName } from "@/once-ui/icons";

const Footer = () => {


  const products = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Resources", path: "/resource" },
    { name: "Services", path: "/services" },
    { name: "Store", path: "/store" },
    { name: "Open Source Contribution\'s", path: "https://pull-request.chowdari.in/" },
  ];
  const usefulLinks = [
    { name: "AI Automation", path: "/services" },
    { name: "AI Solutions", path: "/services" },
    { name: "AI Integration", path: "/services" },
    { name: "App Development", path: "/services" },
    { name: "Web Development", path: "/services" },
  ];
  const moreLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Refund & Cancellation", path: "/refund" },
    { name: "Contact", path: "/contact" },
  ];

  // Map social media names to icon names
  const getIconName = (socialName: string): IconName => {
    const iconMap: Record<string, IconName> = {
      "GitHub": "github",
      "LinkedIn": "linkedin",
      "X": "x",
      "Email": "email",
      "Twitter": "x",
      "Instagram": "instagram",
      "Facebook": "facebook",
      "YouTube": "youtube",
      "Discord": "discord"
    };
    return iconMap[socialName] || "globe";
  };


  return (
    <Column as="footer" className={`${styles.footer} ${styles.glassmorphism}`}>
      {/* Floating background elements */}
      <div className={styles["floating-element"]}></div>
      <div className={styles["floating-element"]}></div>
      <div className={styles["floating-element"]}></div>
      <div className={styles["floating-element"]}></div>

      {/* Top Bar: Social Media */}
      <Flex className={styles.topbar} horizontal="space-between" vertical="center" wrap>

        <Flex gap="8">
          <Flex className={styles.socials}>
            {social.map((item) => (
              <a key={item.name} href={item.link} aria-label={item.name} target="_blank" rel="noopener noreferrer">
                <Icon name={getIconName(item.name)} size="l" />
              </a>
            ))}
          </Flex>
        </Flex>
      </Flex>
      {/* Main Footer Content */}
      <Flex className={styles.main} wrap horizontal="space-between">
        {/* Company Info */}
        <Column className={styles.col}>
          <Text as="div" className={styles.logo}>{person.name}</Text>
          <Text as="p" className={styles.desc}>
            AI Generalist, Researcher, and Builder creating innovative solutions at the intersection of technology and creativity.
          </Text>
        </Column>
        {/* Products/Services */}
        <Column className={styles.col}>
          <Heading as="h6" className={styles.heading}>Navigation</Heading>
          <ul className={styles.list} style={{ listStyle: 'none', padding: 0 }}>
            {products.map((p) => (
              <li key={p.name}><a href={p.path}>{p.name}</a></li>
            ))}
          </ul>
        </Column>
        {/* Useful Links */}
        <Column className={styles.col}>
          <Heading as="h6" className={styles.heading}>Services</Heading>
          <ul className={styles.list} style={{ listStyle: 'none', padding: 0 }}>
            {usefulLinks.map((l) => (
              <li key={l.name}><a href={l.path}>{l.name}</a></li>
            ))}
          </ul>
        </Column>
        {/* More Links */}
        <Column className={styles.col}>
          <Heading as="h6" className={styles.heading}>Legal</Heading>
          <ul className={styles.list} style={{ listStyle: 'none', padding: 0 }}>
            {moreLinks.map((l) => (
              <li key={l.name}><a href={l.path}>{l.name}</a></li>
            ))}
          </ul>
        </Column>
        {/* Contact */}
        <Column className={styles.col}>
          <Heading as="h6" className={styles.heading}>Contact</Heading>
          <ul className={styles.contact} style={{ listStyle: 'none', padding: 0 }}>
            <li><Icon name="globe" size="s" /> Davangere, Karnataka, India</li>
            <li><Icon name="email" size="s" /> vchaitanya@chowdari.in</li>
            <li><Icon name="arrowUpRightFromSquare" size="s" /> +91 94826 87922</li>
          </ul>
        </Column>
      </Flex>
      {/* Copyright */}
      <Flex className={styles.bottom} horizontal="center">
        <Text>© {new Date().getFullYear()} {person.name}. All rights reserved.</Text>
      </Flex>
    </Column>
  );
};

export default Footer;
