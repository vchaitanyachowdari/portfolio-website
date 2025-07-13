"use client";

import React from 'react';
import { Column, Heading, Text } from '@/once-ui/components';
import { ProductCard } from '@/components/store/ProductCard';
import productsData from './products.json';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  externalLink: string;
  price: string;
}

const StorePage = () => {
  return (
    <Column maxWidth="l" gap="xl" horizontal="center">
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          <Heading variant="display-strong-l">Our Store</Heading>
          <Text variant="heading-default-xl" onBackground="neutral-weak">
            Explore our range of products and services designed to elevate your digital presence.
          </Text>
        </Column>
      </Column>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%' }}>
        {(productsData as Product[]).map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            imageUrl={product.imageUrl}
            externalLink={product.externalLink}
            price={product.price}
          />
        ))}
      </div>
    </Column>
  );
};

export default StorePage;
