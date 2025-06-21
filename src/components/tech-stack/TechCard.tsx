"use client";

import React, { useEffect, useRef } from 'react';
import { Column, Heading, Text, Flex } from '@/once-ui/components'; // Assuming Flex is available
import styles from './TechCard.module.scss';

interface TechCardProps {
  appName: string;
  description: string;
  category?: string; // For potential future use in styling or filtering
  // Add other relevant props from tech-stack-data.json if needed for display
}

export const TechCard: React.FC<TechCardProps> = ({
  appName,
  description,
  category,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Basic scroll animation observer
  useEffect(() => {
    const currentCardNode = cardRef.current; // Capture the DOM node

    // Ensure observer is created only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.visible);
              entry.target.classList.remove(styles.hidden);
              // Unobserve the specific entry after animation
              if (observerRef.current) { // Check if observer still exists
                observerRef.current.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.1 }
      );
    }

    const observer = observerRef.current; // Use the observer from ref

    if (currentCardNode) {
      currentCardNode.classList.add(styles.hidden);
      observer.observe(currentCardNode);
    }

    return () => {
      // Cleanup: unobserve the node if it was observed by this specific observer instance
      if (currentCardNode && observer) {
        observer.unobserve(currentCardNode);
      }
    };
  }, []); // Empty dependency array: runs on mount/unmount.
          // cardRef and observerRef are stable. currentCardNode is captured.

  // Create a simple placeholder icon (e.g., first letter of appName)
  const placeholderIcon = appName?.charAt(0).toUpperCase() || '?';

  return (
    <div ref={cardRef} className={styles.techCard}>
      <Flex horizontal="start" vertical="center" style={{ minHeight: '48px' }}> {/* Ensure icon area has consistent height */}
        <div className={styles.iconPlaceholder}>
          {placeholderIcon}
        </div>
      </Flex>
      <Column fillWidth gap="4"> {/* Using gap from once-ui's Column */}
        <Heading as="h3" variant="heading-strong-m" style={{ marginBottom: 'var(--static-space-4, 4px)' }}>
          {/* Added small bottom margin to heading */}
          {appName}
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {description}
        </Text>
        {/* Optionally display category or other info here */}
        {/* {category && (
          <Text variant="caption-default-s" onBackground="neutral-disabled" style={{ marginTop: 'var(--static-space-8, 8px)'}}>
            Category: {category}
          </Text>
        )} */}
      </Column>
    </div>
  );
};
