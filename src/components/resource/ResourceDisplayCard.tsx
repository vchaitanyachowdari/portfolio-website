"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";
import styles from './ResourceDisplayCard.module.scss'; // Even if empty, good practice to import

interface ResourceDisplayCardProps {
  href: string; // Link to the detail page (e.g., resource/[slug])
  priority?: boolean; // For image optimization
  images: string[]; // For Carousel
  title: string;
  content?: string; // MDX body content, used to show/hide "Read resource"
  description: string; // Used as summary text
  avatars?: { src: string }[]; // For AvatarGroup, derived from resource's team metadata
  link?: string; // External resource link
}

export const ResourceDisplayCard: React.FC<ResourceDisplayCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars = [], // Default to empty array
  link,
}) => {
  return (
    <Column fillWidth gap="m" className={styles.resourceCardWrapper}> {/* Added a wrapper class if needed */}
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px" // Consistent with ProjectCard
        images={images.map((image) => ({
          src: image,
          alt: title, // Use resource title for alt text
        }))}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && ( // Show link to detail page if there's MDX content
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read resource</Text> {/* MODIFIED TEXT */}
                </SmartLink>
              )}
              {link && ( // Show external link if provided
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                  target="_blank" // External links should open in new tab
                  rel="noopener noreferrer"
                >
                  <Text variant="body-default-s">Visit resource</Text> {/* MODIFIED TEXT */}
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
