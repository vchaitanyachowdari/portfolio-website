"use client";

import React, { useEffect, useRef } from 'react';
import { Column, Flex, Heading, Text, Button, Icon } from '@/once-ui/components';
import { IconName } from '@/once-ui/icons';
import styles from './ServiceBlock.module.scss';

interface Deliverable {
  text: string;
  icon?: IconName;
}

interface CTAButton {
  text: string;
  link: string;
  type?: 'primary' | 'secondary' | 'tertiary' | 'danger'; // Matching Button component's variant prop
  suffixIcon?: IconName;
}
export interface ServiceBlockProps {
  id: string;
  iconName?: IconName;
  title: string;
  valueProposition: string;
  deliverables: Deliverable[];
  cta?: CTAButton;
  reverseLayout?: boolean;
}

export const ServiceBlock: React.FC<ServiceBlockProps> = ({
  id,
  iconName = 'grid', // Default main icon
  title,
  valueProposition,
  deliverables,
  cta,
  reverseLayout = false,
}) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentBlockNode = blockRef.current;
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
    if (currentBlockNode) {
      currentBlockNode.classList.add(styles.hidden);
      observer.observe(currentBlockNode);
    }
    return () => {
      if (currentBlockNode && observer) {
        observer.unobserve(currentBlockNode);
      }
    };
  }, []);

  const content = (
    <Column className={styles.contentArea} gap="16" vertical="center" horizontal="start">
      <Heading as="h2" variant="heading-strong-l" style={{textAlign: 'inherit'}}>
        {title}
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-strong" style={{textAlign: 'inherit'}}>
        {valueProposition}
      </Text>
      <ul className={styles.deliverablesList}>
        {deliverables.map((item, index) => (
          <li key={index} className={styles.deliverableItem}>
            <Icon
              name={item.icon || 'checkCircle'} // Default to checkCircle for deliverables
              size="s"
              className={styles.deliverableIcon}
              onBackground="brand-strong" // Example color, adjust as needed
              decorative={true}
            />
            <Text as="span">{item.text}</Text>
          </li>
        ))}
      </ul>
      {cta && (
        <Flex paddingTop="12">
          <Button
            href={cta.link}
            label={cta.text}
            variant={cta.type || 'primary'}
            size="m"
            suffixIcon={cta.suffixIcon || undefined} // Use cta.suffixIcon if provided
          />
        </Flex>
      )}
    </Column>
  );

  const iconElement = (
    <Flex className={styles.iconArea} horizontal="center" vertical="center">
      <Icon name={iconName} size="xl" onBackground="brand-strong" decorative={true} />
    </Flex>
  );

  return (
    <Flex
      ref={blockRef}
      className={`${styles.serviceBlock} ${reverseLayout ? styles.layoutRowReverse : styles.layoutRow}`}
      gap="32"
    >
      {iconElement}
      {content}
    </Flex>
  );
};
