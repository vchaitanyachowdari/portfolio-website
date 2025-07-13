"use client";

import React from 'react';
import { Column, Flex, Text, Avatar } from '@/once-ui/components';

export interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  company,
  image,
}) => {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      height: '100%',
    }}>
      <Flex direction="column" gap="l">
        <Text as="blockquote" variant="heading-default-m" style={{ fontStyle: 'italic', textAlign: 'center' }}>
          “{quote}”
        </Text>
        <Flex align="center" gap="m" justify="center">
          <Avatar src={image} size="l" />
          <Column gap="0">
            <Text variant="heading-strong-s" as="p">{name}</Text>
            <Text variant="body-default-s" onBackground="neutral-weak" as="p">
              {title} at {company}
            </Text>
          </Column>
        </Flex>
      </Flex>
    </div>
  );
};
