"use client";

import React, { useState, useMemo } from 'react';
import techStackData from './tech-stack-data.json';
import { TechCard } from '@/components/tech-stack/TechCard';
import { Column, Button, Heading, Text, Row } from '@/once-ui/components';

interface TechItem {
  appName: string;
  category: string;
  type: string;
  description: string;
  usage: string;
  documentationLinks: {
    official?: string;
    communityTutorials?: string;
  };
  installationSetup: string;
  selfHostedOption: string;
  integrationExamples?: string[];
  keyServicesUsed?: string[];
  costManagementStrategies?: string[];
  collaborationFeatures?: string[];
}

const TechStackPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const allCategories = techStackData.map(item => item.category);
    return ['All', ...new Set(allCategories)];
  }, []);

  const filteredTechStack = useMemo(() => {
    if (selectedCategory === 'All') {
      return techStackData;
    }
    return techStackData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Column maxWidth="l" gap="xl" horizontal="center">
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          <Heading variant="display-strong-l">Tech Stack</Heading>
          <Text variant="heading-default-xl" onBackground="neutral-weak">
            Our technology stack is carefully chosen to ensure robust, scalable, and efficient solutions.
          </Text>
        </Column>
      </Column>

      <Column as="section" fillWidth gap="l" horizontal="center">
        <Column maxWidth="m" gap="m">
          <Heading as="h2" variant="display-strong-xs">Core Categories & Usage</Heading>
          <Text>
            <strong>Free/Open Source:</strong> Tools and platforms available without licensing costs, often with strong community support.
          </Text>
          <Text>
            <strong>Subscription-Based:</strong> Services requiring ongoing payments, often offering managed solutions, enhanced features, and dedicated support.
          </Text>
        </Column>
      </Column>

      <Column as="section" fillWidth gap="l" horizontal="center">
        <Heading as="h2" variant="display-strong-xs">Application Deep Dive</Heading>

        <Row gap="s" horizontal="center" wrap>
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "primary" : "secondary"}
              size="m"
            >
              {category}
            </Button>
          ))}
        </Row>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', width: '100%' }}>
          {(filteredTechStack as TechItem[]).map((item) => (
            <TechCard
              key={item.appName}
              appName={item.appName}
              description={item.description}
              category={item.category}
            />
          ))}
        </div>
      </Column>
    </Column>
  );
};

export default TechStackPage;

