"use client"; // Add this directive

import React, { useState, useMemo } from 'react'; // Added useState and useMemo
import techStackData from './tech-stack-data.json';
import styles from './TechStack.module.scss';
import { TechCard } from '@/components/tech-stack/TechCard';

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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Tech Stack</h1>
        <p>Our technology stack is carefully chosen to ensure robust, scalable, and efficient solutions. We categorize our tools and platforms for better understanding:</p>
      </header>

      <section className={styles.coreCategories}>
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
      </section>

      <section className={styles.applicationDeepDive}>
        <h2>B. Application Deep Dive:</h2>

        <div className={styles.filterContainer}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {(filteredTechStack as TechItem[]).map((item) => (
            <TechCard
              key={item.appName} // Using appName as key, assuming it's unique
              appName={item.appName}
              description={item.description} // Using the main description for the card
              category={item.category}
              // Pass other relevant props from item to TechCard if needed
              // For example, if TechCard were to display item.type or item.usage directly
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStackPage;
