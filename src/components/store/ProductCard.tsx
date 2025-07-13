"use client";

import React from 'react';
import { Column, Flex, Heading, Text, Button } from '@/once-ui/components';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  externalLink: string;
  price: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  imageUrl,
  externalLink,
  price,
}) => {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Column gap="m">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '1rem',
            }}
          />
        )}
        <Heading as="h3" variant="heading-strong-l">
          {name}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {description}
        </Text>
        <Text variant="heading-strong-m" onBackground="neutral-medium">
          Price: {price}
        </Text>
      </Column>
      <Flex paddingTop="l">
        <Button
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="m"
          suffixIcon="arrowUpRightFromSquare"
        >
          Learn More
        </Button>
      </Flex>
    </div>
  );
};
