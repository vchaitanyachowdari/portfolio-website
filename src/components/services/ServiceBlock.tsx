"use client";

import React from 'react';
import { Column, Flex, Heading, Text, Button, Icon } from '@/once-ui/components';
import { IconName } from '@/once-ui/icons';

interface Deliverable {
  text: string;
  icon?: IconName;
}

interface CTAButton {
  text: string;
  link: string;
  type?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  suffixIcon?: IconName;
}
export interface ServiceBlockProps {
  id: string;
  iconName?: IconName;
  title: string;
  valueProposition: string;
  deliverables: Deliverable[];
  cta?: CTAButton;
}

export const ServiceBlock: React.FC<ServiceBlockProps> = ({
  iconName = 'grid',
  title,
  valueProposition,
  deliverables,
  cta,
}) => {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Flex horizontal="start" vertical="center" style={{ marginBottom: '1.5rem' }}>
        <Icon name={iconName} size="xl" onBackground="brand-strong" decorative={true} />
      </Flex>
      <Column flex={1} gap="m">
        <Heading as="h2" variant="heading-strong-l">
          {title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-strong">
          {valueProposition}
        </Text>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {deliverables.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <Icon
                name={item.icon || 'checkCircle'}
                size="s"
                style={{ marginRight: '0.5rem' }}
                onBackground="brand-strong"
                decorative={true}
              />
              <Text as="span">{item.text}</Text>
            </li>
          ))}
        </ul>
      </Column>
      {cta && (
        <Flex paddingTop="l">
          <Button
            href={cta.link}
            label={cta.text}
            variant={cta.type || 'primary'}
            size="m"
            suffixIcon={cta.suffixIcon || undefined}
          />
        </Flex>
      )}
    </div>
  );
};
