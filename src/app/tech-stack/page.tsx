"use client"; // Add this directive

"use client"; // Ensure this is at the top, only once

import React, { useState, useMemo } from 'react';
import techStackData from './tech-stack-data.json';
import styles from './TechStack.module.scss';
import { TechCard } from '@/components/tech-stack/TechCard';
import { Column, Button as OnceUIButton } from '@/once-ui/components'; // Import Column and Button

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
    <Column maxWidth="l" gap="32" paddingY="32" className={styles.pageWrapper} align="center"> {/* Using Column for page layout */}
      <header className={styles.header}>
        <h1>Tech Stack</h1>
        <p>Our technology stack is carefully chosen to ensure robust, scalable, and efficient solutions. We categorize our tools and platforms for better understanding:</p>
      </header>

      {/* The .coreCategories section might need its own Column if it has a different background or needs specific centering not handled by parent */}
      <Column as="section" fillWidth className={styles.coreCategories} paddingX="20" align="center"> {/* Example: Constrain width of this text section */}
        {/* Applying fillWidth to make its background span, but content constrained by parent Column's maxWidth or its own if set */}
        <Column maxWidth="m" gap="16"> {/* Inner column to control text width if needed */}
          <h2>A. Core Categories & Usage:</h2>
          <ul>
            <li>
              <strong>Free/Open Source:</strong> Tools and platforms available without licensing costs, often with strong community support.
              <br />
              <em>Example Sub-categories: Development Tools, Libraries, Frameworks, Hosting Platforms (e.g., Linux, Apache, MySQL, PHP/Python/Node.js, Git, VS Code).</em>
            </li>
            <li>
              <strong>Subscription-Based:</strong> Services requiring ongoing payments, often offering managed solutions, enhanced features, and dedicated support.
              <br />
              <em>Example Sub-categories: Cloud Platforms (e.g., AWS, Google Cloud, Azure), SaaS Applications (e.g., project management, CRM, email marketing), Development Environments (e.g., JetBrains IDEs).</em>
            </li>
          </ul>
        </Column>
      </Column>

      <Column as="section" fillWidth className={styles.applicationDeepDive} align="center" gap="20">
        <h2>B. Application Deep Dive:</h2>

        <div className={styles.filterContainer}>
          {categories.map(category => (
            <OnceUIButton
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "primary" : "secondary"} // Use primary for active, secondary for inactive
              size="m" // Example size, can be "s" or "m"
              // The custom .active class might not be needed if variant="primary" suffices for active state
              // Or, if more specific styling is needed for active state beyond primary variant:
              // className={selectedCategory === category ? styles.activeFilterButton : ""}
              aria-pressed={selectedCategory === category}
            />
          ))}
        </div>

        <div className={styles.grid}>
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
