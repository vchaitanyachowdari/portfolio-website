"use client";

import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";

interface ResourceDisplayCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content?: string;
  description: string;
  avatars?: { src: string }[];
  link?: string;
}

export const ResourceDisplayCard: React.FC<ResourceDisplayCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars = [],
  link,
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
    }}>
      <div style={{ flex: 1 }}>
        <Heading as="h2" variant="heading-strong-l" style={{ marginBottom: '1rem' }}>
          {title}
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" style={{ marginBottom: '1.5rem' }}>
          {description}
        </Text>
      </div>
      <Flex direction="column" gap="m">
        {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
        <Flex gap="l" wrap>
          {content?.trim() && (
            <SmartLink
              suffixIcon="arrowRight"
              href={href}
            >
              <Text variant="body-default-s">Read more</Text>
            </SmartLink>
          )}
          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text variant="body-default-s">Visit link</Text>
            </SmartLink>
          )}
        </Flex>
      </Flex>
    </div>
  );
};
