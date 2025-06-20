"use client"; // Required because ServiceBlock uses useEffect for animations

"use client"; // Add this directive

import React from 'react';
import styles from './Services.module.scss';
import { ServiceBlock, ServiceBlockProps } from '@/components/services/ServiceBlock';
import { Column } from '@/once-ui/components'; // Using Column for overall page structure

// Sample Data for Services - this would ideally come from a CMS or a dedicated data file
const servicesData: ServiceBlockProps[] = [
  {
    id: 'web-dev',
    iconPlaceholder: 'WD',
    title: 'Web Development',
    valueProposition: 'Crafting responsive, high-performance websites and web applications tailored to your business needs.',
    deliverables: [
      { text: 'Custom Website Design & Development' },
      { text: 'Full-Stack Development (Frontend & Backend)' },
      { text: 'Responsive Web Design for all devices' },
      { text: 'Ongoing Website Maintenance & Support' },
    ],
    cta: { text: 'Discuss Your Project', link: '#contact' }, // Example link
    reverseLayout: false,
  },
  {
    id: 'mobile-dev',
    iconPlaceholder: 'MD',
    title: 'Mobile App Development',
    valueProposition: 'Building intuitive and engaging mobile experiences for iOS and Android platforms.',
    deliverables: [
      { text: 'Native iOS App Development (Swift/Objective-C)' },
      { text: 'Native Android App Development (Kotlin/Java)' },
      { text: 'Cross-Platform Development (React Native, Flutter)' },
      { text: 'App Store Submission & Support' },
    ],
    cta: { text: 'Get a Mobile Quote', link: '#contact' },
    reverseLayout: true,
  },
  {
    id: 'ui-ux',
    iconPlaceholder: 'UX',
    title: 'UI/UX Design',
    valueProposition: 'Designing user-centric interfaces that are both beautiful and easy to use, enhancing user satisfaction.',
    deliverables: [
      { text: 'User Interface (UI) Design' },
      { text: 'User Experience (UX) Research & Strategy' },
      { text: 'Wireframing & Interactive Prototyping' },
      { text: 'Usability Testing & Feedback Iteration' },
    ],
    cta: { text: 'Explore Design Process', link: '#contact' },
    reverseLayout: false,
  },
  {
    id: 'consulting',
    iconPlaceholder: 'CS',
    title: 'Consulting & Strategy',
    valueProposition: 'Providing expert technical guidance and strategic planning to help you achieve your digital goals.',
    deliverables: [
      { text: 'Technical Consultation & Feasibility Studies' },
      { text: 'Project Planning, Scoping & Roadmapping' },
      { text: 'Digital Transformation Strategy Development' },
      { text: 'Technology Stack Advisory' },
    ],
    // No CTA for this one as an example
    reverseLayout: true,
  }
];

const ServicesPage = () => {
  return (
    <Column className={styles.container} gap="32" align="center"> {/* Use once-ui Column for layout */}
      <header className={styles.header}>
        <h1>Our Services</h1>
        <p>
          We offer a comprehensive range of services designed to meet your project needs,
          specializing in various aspects of software development and digital solutions.
        </p>
      </header>

      <Column fillWidth className={styles.serviceBlocksContainer} gap="0"> {/* Container for blocks, gap handled by block borders/padding */}
        {servicesData.map((service, index) => (
          <ServiceBlock
            key={service.id}
            id={service.id}
            iconPlaceholder={service.iconPlaceholder}
            title={service.title}
            valueProposition={service.valueProposition}
            deliverables={service.deliverables}
            cta={service.cta}
            reverseLayout={index % 2 !== 0} // Alternate layout for visual rhythm
            // Alternatively, use service.reverseLayout if defined in data
          />
        ))}
      </Column>

      {/* Retain other sections if they need to be styled differently or are static */}
      {/* For example, the "Booking Slots & Engagement Process", "Engagement Models",
           "What to Expect" sections from the original prompt could be added here,
           styled as distinct sections or integrated into a different format.
           For now, focusing on the core service offerings redesign.
      */}
      {/*
      <section className={styles.additionalInfoSection}>
        <h2>Booking & Engagement</h2>
        <p>Details about booking, payment, etc. can go here, styled appropriately.</p>
      </section>
      */}
    </Column>
  );
};

export default ServicesPage;
