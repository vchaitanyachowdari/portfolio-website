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
import { motion } from "framer-motion";
import evStyles from "./EvervaultCard.module.scss";
import { useEvervault } from "@/hooks/useEvervault";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const { randomString, maskImage, onMouseMove } = useEvervault();

  return (
    <Column
      fillWidth
      gap="m"
      className={evStyles.evervaultWrapper}
      onMouseMove={onMouseMove as any}
      style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-l)" }}
    >
      {/* Evervault gradient spotlight */}
      <motion.div
        className={evStyles.gradientOverlay}
        style={{ maskImage: maskImage as any, WebkitMaskImage: maskImage as any }}
      />
      {/* Evervault character overlay */}
      <motion.div
        className={evStyles.charOverlay}
        style={{ maskImage: maskImage as any, WebkitMaskImage: maskImage as any }}
      >
        <p className={evStyles.charText}>{randomString}</p>
      </motion.div>

      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
        style={{ position: "relative", zIndex: 4 }}
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
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
