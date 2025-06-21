"use client"; // Ensure this is at the top, only once

import React from 'react';
import styles from './Services.module.scss';
import { ServiceBlock, ServiceBlockProps } from '@/components/services/ServiceBlock';
import { Column } from '@/once-ui/components';
import { IconName } from '@/once-ui/icons'; // Import IconName

// Sample Data for Services - updated for ServiceBlockProps
const servicesData: ServiceBlockProps[] = [
  {
    id: 'web-dev',
    iconName: 'grid', // Example icon from once-ui/icons, replace with actual relevant ones
    title: 'Web Development',
    valueProposition: 'Crafting responsive, high-performance websites and web applications tailored to your business needs.',
    deliverables: [
      { text: 'Custom Website Design & Development', icon: 'checkCircle' },
      { text: 'Full-Stack Development (Frontend & Backend)', icon: 'checkCircle' },
      { text: 'Responsive Web Design for all devices', icon: 'checkCircle' },
      { text: 'Ongoing Website Maintenance & Support', icon: 'checkCircle' },
    ],
    cta: { text: 'Discuss Your Project', link: '#contact', type: 'primary', suffixIcon: 'arrowRight' },
  },
  {
    id: 'mobile-dev',
    iconName: 'document', // Placeholder, find a better one like 'mobile' if it exists
    title: 'Mobile App Development',
    valueProposition: 'Building intuitive and engaging mobile experiences for iOS and Android platforms.',
    deliverables: [
      { text: 'Native iOS App Development', icon: 'checkCircle' },
      { text: 'Native Android App Development', icon: 'checkCircle' },
      { text: 'Cross-Platform Development', icon: 'checkCircle' },
      { text: 'App Store Submission & Support', icon: 'checkCircle' },
    ],
    cta: { text: 'Get a Mobile Quote', link: '#contact', type: 'secondary', suffixIcon: 'arrowRight' },
  },
  {
    id: 'ui-ux',
    iconName: 'gallery', // Placeholder, find a better one like 'brush' or 'design'
    title: 'UI/UX Design',
    valueProposition: 'Designing user-centric interfaces that are both beautiful and easy to use, enhancing user satisfaction.',
    deliverables: [
      { text: 'User Interface (UI) Design', icon: 'checkCircle' },
      { text: 'User Experience (UX) Research & Strategy', icon: 'checkCircle' },
      { text: 'Wireframing & Interactive Prototyping', icon: 'checkCircle' },
      { text: 'Usability Testing & Feedback Iteration', icon: 'checkCircle' },
    ],
    cta: { text: 'Explore Design Process', link: '#contact', type: 'primary', suffixIcon: 'arrowRight' },
  },
  {
    id: 'consulting',
    iconName: 'book', // Placeholder
    title: 'Consulting & Strategy',
    valueProposition: 'Providing expert technical guidance and strategic planning to help you achieve your digital goals.',
    deliverables: [
      { text: 'Technical Consultation & Feasibility Studies', icon: 'checkCircle' },
      { text: 'Project Planning, Scoping & Roadmapping', icon: 'checkCircle' },
      { text: 'Digital Transformation Strategy Development', icon: 'checkCircle' },
      { text: 'Technology Stack Advisory', icon: 'checkCircle' },
    ],
    // No CTA for this one
  }
];

const ServicesPage = () => {
  return (
    // Use once-ui Column for consistent page layout and max-width
    <Column maxWidth="m" gap="48" paddingY="48" className={styles.pageWrapper} align="center">
      <header className={styles.header}>
        <h1>Our Services</h1>
        <p>
          We offer a comprehensive range of services designed to meet your project needs,
          specializing in various aspects of software development and digital solutions.
        </p>
      </header>

      {/* Removed styles.serviceBlocksContainer, Column will handle layout */}
      <Column fillWidth gap="0"> {/* ServiceBlock has border-bottom, so no extra gap here */}
        {servicesData.map((service, index) => (
          <ServiceBlock
            key={service.id}
            id={service.id}
            iconName={service.iconName}
            title={service.title}
            valueProposition={service.valueProposition}
            deliverables={service.deliverables}
            cta={service.cta}
            reverseLayout={index % 2 !== 0}
          />
        ))}
      </Column>

      {/* Footer sections like "Booking & Engagement" can be added here as new <Column> or <Flex> sections */}
    </Column>
  );
};

export default ServicesPage;
