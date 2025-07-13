"use client";

import React from 'react';
import { Column, Heading, Text, Flex } from '@/once-ui/components';

interface TechCardProps {
  appName: string;
  description: string;
  category?: string;
}

export const TechCard: React.FC<TechCardProps> = ({
  appName,
  description,
}) => {
  const placeholderIcon = appName?.charAt(0).toUpperCase() || '?';

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      height: '100%',
    }}>
      <Flex horizontal="start" vertical="center" style={{ minHeight: '48px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'var(--text-on-surface-strong)',
          marginRight: '1rem'
        }}>
          {placeholderIcon}
        </div>
      </Flex>
      <Column fillWidth gap="4">
        <Heading as="h3" variant="heading-strong-m">
          {appName}
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {description}
        </Text>
      </Column>
    </div>
  );
};

