'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Column, Flex, Text, Input, Button, Heading } from '@/once-ui/components';
import styles from './contact.module.scss'; // Assuming you'll create this SCSS module

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Replace with your EmailJS Service ID, Template ID, and Public Key
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      setStatus('error');
      alert('EmailJS credentials are not set up. Please check the instructions in the code.');
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  return (
    <Column padding="l" horizontal="center" fillWidth>
      <Heading as="h1" size="xl" marginY="l">Contact Us</Heading>
      <Text size="l" marginBottom="l">We&apos;d love to hear from you!</Text>

      <Flex as="form" onSubmit={handleSubmit} direction="column" gap="m" className={styles.contactForm}>
        <Input
          id="name"
          label="Your Name"
          type="text"
          name="name"
          placeholder=""
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          id="email"
          label="Your Email"
          type="email"
          name="email"
          placeholder=""
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          id="subject"
          label="Subject"
          type="text"
          name="subject"
          placeholder=""
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <Column>
          <Text as="label" htmlFor="message">Your Message</Text>
          <textarea
            id="message"
            name="message"
            placeholder="Reason for the Contact"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={styles.textarea}
          ></textarea>
        </Column>

        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>

        {status === 'success' && (
          <Text color="success-on-background-strong" marginTop="m">Message sent successfully! Thank you!</Text>
        )}
        {status === 'error' && (
          <Text color="danger-on-background-strong" marginTop="m">Failed to send message. Please try again later.</Text>
        )}
      </Flex>
    </Column>
  );
};

export default ContactPage;
