"use client";

import React from 'react';
import { ServiceBlock, ServiceBlockProps } from '@/components/services/ServiceBlock';
import { Column, Heading, Text } from '@/once-ui/components';

const servicesData: ServiceBlockProps[] = [
  {
    id: 'web-dev',
    iconName: 'grid',
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
    iconName: 'document',
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
    iconName: 'gallery',
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
    iconName: 'book',
    title: 'Consulting & Strategy',
    valueProposition: 'Providing expert technical guidance and strategic planning to help you achieve your digital goals.',
    deliverables: [
      { text: 'Technical Consultation & Feasibility Studies', icon: 'checkCircle' },
      { text: 'Project Planning, Scoping & Roadmapping', icon: 'checkCircle' },
      { text: 'Digital Transformation Strategy Development', icon: 'checkCircle' },
      { text: 'Technology Stack Advisory', icon: 'checkCircle' },
    ],
    cta: { text: 'Explore Design Process', link: '#contact', type: 'primary', suffixIcon: 'arrowRight' },
  },
  {
    id: 'seo',
    iconName: 'book',
    title: 'SEO Optimization',
    valueProposition: 'Boost website rankings with on/off page SEO, technical audits, and AI driven keyword insights.',
    deliverables: [
      { text: 'Technical Consultation & Feasibility Studies', icon: 'checkCircle' },
      { text: 'Project Planning, Scoping & Roadmapping', icon: 'checkCircle' },
      { text: 'Digital Transformation Strategy Development', icon: 'checkCircle' },
      { text: 'Technology Stack Advisory', icon: 'checkCircle' },
    ],
    cta: { text: 'Explore Design Process', link: '#contact', type: 'primary', suffixIcon: 'arrowRight' },
  },
  {
    id: 'aiautomation',
    iconName: 'book',
    title: 'AI Automation',
    valueProposition: 'Use AI to automate repetitive workflows across marketing, customer support, and operations for increased efficiency.',
    deliverables: [
      { text: 'Technical Consultation & Feasibility Studies', icon: 'checkCircle' },
      { text: 'Project Planning, Scoping & Roadmapping', icon: 'checkCircle' },
      { text: 'Digital Transformation Strategy Development', icon: 'checkCircle' },
      { text: 'Technology Stack Advisory', icon: 'checkCircle' },
    ],
    cta: { text: 'Explore Design Process', link: '#contact', type: 'primary', suffixIcon: 'arrowRight' },
  },
  {
    id: 'aisolution',
    iconName: 'book',
    title: 'AI Solutions or AI Integration',
    valueProposition: 'Integrate AI across your business for smart decision-making, lead generation, customer experience, and growth.',
    deliverables: [
      { text: 'Technical Consultation & Feasibility Studies', icon: 'checkCircle' },
      { text: 'Project Planning, Scoping & Roadmapping', icon: 'checkCircle' },
      { text: 'Digital Transformation Strategy Development', icon: 'checkCircle' },
      { text: 'Technology Stack Advisory', icon: 'checkCircle' },
    ],
    cta: { text: 'Explore Design Process', link: '#contact', type: 'primary', suffixIcon: 'arrowRight' },
  },
  {
    id: 'presentation',
    iconName: 'book',
    title: 'Presentation',
    valueProposition: 'Use AI to automate repetitive workflows across marketing, customer support, and operations for increased efficiency.',
    deliverables: [
      { text: 'Technical Consultation & Feasibility Studies', icon: 'checkCircle' },
      { text: 'Project Planning, Scoping & Roadmapping', icon: 'checkCircle' },
      { text: 'Digital Transformation Strategy Development', icon: 'checkCircle' },
      { text: 'Technology Stack Advisory', icon: 'checkCircle' },
    ],
    cta: { text: 'Explore Design Process', link: '#contact', type: 'primary', suffixIcon: 'arrowRight' },
  },
];

const ServicesPage = () => {
  return (
    <Column maxWidth="l" gap="xl" horizontal="center">
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          <Heading variant="display-strong-l">Our Services</Heading>
          <Text variant="heading-default-xl" onBackground="neutral-weak">
            We offer a comprehensive range of services designed to meet your project needs, specializing in various aspects of software development and digital solutions.
          </Text>
        </Column>
      </Column>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', width: '100%' }}>
        {servicesData.map((service) => (
          <ServiceBlock
            key={service.id}
            id={service.id}
            iconName={service.iconName}
            title={service.title}
            valueProposition={service.valueProposition}
            deliverables={service.deliverables}
            cta={service.cta}
          />
        ))}
      </div>
    </Column>
  );
};

export default ServicesPage;
