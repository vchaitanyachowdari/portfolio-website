"use client";

import React, { useEffect, useRef } from 'react';
import { Column, Flex, Text, Avatar } from '@/once-ui/components';
import styles from './TestimonialCard.module.scss';

export interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string; // Avatar src
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  company,
  image,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentCardNode = cardRef.current;
    const observerRef = { current: null as IntersectionObserver | null }; // Simplified for brevity here

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.visible);
              entry.target.classList.remove(styles.hidden);
              if (observerRef.current) {
                observerRef.current.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.1 }
      );
    }
    const observer = observerRef.current;
    if (currentCardNode) {
      currentCardNode.classList.add(styles.hidden);
      observer.observe(currentCardNode);
    }
    return () => {
      if (currentCardNode && observer) {
        observer.unobserve(currentCardNode);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.testimonialCard}>
      <Flex className={styles.authorInfo} align="center" gap="16"> {/* Increased gap */}
        <Avatar src={image} size="l" /> {/* Using size="l" (48px) - Removed alt prop */}
        <Column className={styles.authorDetails} gap="0"> {/* Reduced gap for tighter name/title */}
          <Text variant="heading-strong-s" as="p" style={{ margin: 0 }}>{name}</Text>
          <Text variant="body-default-s" onBackground="neutral-weak" as="p" style={{ margin: 0 }}>
            {title} at {company}
          </Text>
        </Column>
      </Flex>
      <Text as="blockquote" variant="body-default-m" className={styles.quoteText}>
        {quote}
      </Text>
    </div>
  );
};
