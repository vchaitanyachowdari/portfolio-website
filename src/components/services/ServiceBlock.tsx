"use client";

import React, { useEffect, useRef } from 'react';
import { Column, Flex, Heading, Text, Button, SmartLink } from '@/once-ui/components'; // Assuming Button and SmartLink
import styles from './ServiceBlock.module.scss';

// Let's assume once-ui has a generic Icon component or we can use one
// For now, this is a placeholder type.
type IconName = 'checkCircle' | 'arrowRight' | string; // Example icon names

interface Deliverable {
  text: string;
  icon?: IconName; // Optional icon for each deliverable
}

interface CTAButton {
  text: string;
  link: string;
  type?: 'primary' | 'secondary'; // For styling with once-ui Button
}
export interface ServiceBlockProps {
  id: string;
  iconPlaceholder?: string; // For the main service icon, e.g., "WD" for Web Dev
  title: string;
  valueProposition: string;
  deliverables: Deliverable[];
  cta?: CTAButton;
  reverseLayout?: boolean; // To alternate icon/text position
}

export const ServiceBlock: React.FC<ServiceBlockProps> = ({
  id,
  iconPlaceholder = 'S',
  title,
  valueProposition,
  deliverables,
  cta,
  reverseLayout = false,
}) => {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            entry.target.classList.remove(styles.hidden);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (blockRef.current) {
      blockRef.current.classList.add(styles.hidden);
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  const content = (
    <Column className={styles.contentArea} gap="16" vertical="center" horizontal="start">
      <Heading as="h2" variant="heading-strong-l" style={{textAlign: 'inherit'}}> {/* Inherit text align from parent */}
        {title}
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-strong" style={{textAlign: 'inherit'}}> {/* CORRECTED VARIANT & ONBACKGROUND */}
        {valueProposition}
      </Text>
      <ul className={styles.deliverablesList}>
        {deliverables.map((item, index) => (
          <li key={index} className={styles.deliverableItem}>
            <Text as="span" className={styles.deliverableIcon} aria-hidden="true">
              {item.icon === 'checkCircle' ? '✓' : '•'}
            </Text>
            <Text as="span">{item.text}</Text>
          </li>
        ))}
      </ul>
      {cta && (
        <Flex paddingTop="12">
          {/* Use once-ui Button if available and appropriate, or SmartLink styled as button */}
          <SmartLink
            href={cta.link}
            variant={cta.type === 'primary' ? 'cta-primary' : 'cta-secondary'} // Assuming SmartLink has variants or Button component exists
            className="button-like-cta" // Add a class for potential global button styling from once-ui
            style={{textDecoration:'none'}} // Ensure no underline if SmartLink is used
          >
             {/* This is a guess, if once-ui has a Button component, it might be like this:
            <Button variant={cta.type || 'primary'} href={cta.link} label={cta.text} />
            For now, using SmartLink and assuming it can be styled like a button or we use a Button component */}
            <Text variant="label-strong-m" style={{
              padding: 'var(--static-space-12, 12px) var(--static-space-24, 24px)',
              background: 'var(--surface-brand-default, #007bff)',
              color: 'var(--text-on-brand-default, #fff)',
              borderRadius: 'var(--radius-m, 8px)',
              display: 'inline-block'
            }}>
              {cta.text}
            </Text>
          </SmartLink>
        </Flex>
      )}
    </Column>
  );

  const iconElement = (
    <Flex className={styles.iconArea} horizontal="center" vertical="center">
      {/* Placeholder for a more sophisticated icon/illustration component from once-ui if available */}
      <Text variant="display-default-m">{iconPlaceholder}</Text>
    </Flex>
  );

  return (
    <Flex
      ref={blockRef}
      className={`${styles.serviceBlock} ${reverseLayout ? styles.layoutRowReverse : styles.layoutRow}`}
      gap="32" // Default gap for mobile (column)
      // Desktop flex direction is now handled by SCSS based on layoutRow / layoutRowReverse classes
    >
      {/* Content order for mobile is always icon then text due to flex-direction: column in SCSS default.
          For desktop, the flex-direction (row or row-reverse) will determine visual order.
          If DOM order needs to change for accessibility on desktop based on visual order,
          that's a more complex adjustment usually handled by conditional rendering of order in JSX.
          For now, this primarily controls visual via CSS flex-direction.
       */}
      {iconElement}
      {content}
    </Flex>
  );
};
