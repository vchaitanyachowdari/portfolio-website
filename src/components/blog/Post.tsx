"use client";

import { Column, Flex, Heading, SmartImage, SmartLink, Tag, Text } from '@/once-ui/components';
import { motion } from 'framer-motion';
import styles from './Posts.module.scss';
import evStyles from '../EvervaultCard.module.scss';
import { formatDate } from '@/app/utils/formatDate';
import { useEvervault } from '@/hooks/useEvervault';

interface PostProps {
    post: any;
    thumbnail: boolean;
    direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
    const { randomString, maskImage, onMouseMove } = useEvervault();

    return (
        <SmartLink
            fillWidth
            unstyled
            style={{ borderRadius: 'var(--radius-l)' }}
            key={post.slug}
            href={`/blog/${post.slug}`}>
            <Flex
                position="relative"
                transition="micro-medium"
                direction={direction}
                radius="l"
                className={`${styles.hover} ${evStyles.evervaultWrapper}`}
                mobileDirection="column"
                fillWidth
                onMouseMove={onMouseMove as any}
                style={{ overflow: 'hidden' }}
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

                {post.metadata.image && thumbnail && (
                    <SmartImage
                        priority
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 640px"
                        border="neutral-alpha-weak"
                        cursor="interactive"
                        radius="l"
                        src={post.metadata.image}
                        alt={'Thumbnail of ' + post.metadata.title}
                        aspectRatio="16 / 9"
                    />
                )}
                <Column
                    position="relative"
                    fillWidth gap="4"
                    padding="24"
                    vertical="center"
                    style={{ zIndex: 4 }}
                >
                    <Heading
                        as="h2"
                        variant="heading-strong-l"
                        wrap="balance">
                        {post.metadata.title}
                    </Heading>
                    <Text
                        variant="label-default-s"
                        onBackground="neutral-weak">
                        {formatDate(post.metadata.publishedAt, false)}
                    </Text>
                    {post.metadata.tags && post.metadata.tags.length > 0 &&
                        <Tag
                            className="mt-12"
                            label={post.metadata.tags[0]}
                            variant="neutral" />
                    }
                </Column>
            </Flex>
        </SmartLink>
    );
}