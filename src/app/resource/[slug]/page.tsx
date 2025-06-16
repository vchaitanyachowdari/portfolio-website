import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { Button, Column, Flex, Heading, Row, Text, SmartImage } from "@/once-ui/components";
import { getPosts, formatDate } from "@/app/utils/utils";
import { baseURL } from "@/app/resources";
import { resources, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateStaticParams() {
  const posts = getPosts(["src", "app", "resource", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = getPosts(["src", "app", "resource", "posts"]);
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return Meta.generate({
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
      baseURL: baseURL,
      path: "/404",
    });
  }

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image,
    path: `/resource/${post.slug}`,
  });
}

export default async function Resource({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = getPosts(["src", "app", "resource", "posts"]);
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Column maxWidth="s">
      <Schema
        as="article"
        baseURL={baseURL}
        title={post.metadata.title}
        description={post.metadata.summary}
        path={`/resource/${post.slug}`}
        image={post.metadata.image}
        author={{
          name: person.name,
          url: `${baseURL}/resource`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Button
        href="/resource"
        variant="secondary"
        size="s"
        prefixIcon="arrow-left"
        style={{ marginBottom: "var(--static-space-24)" }}
      >
        Back to Resources
      </Button>
      <Heading marginBottom="l" variant="display-strong-s">
        {post.metadata.title}
      </Heading>
      {post.metadata.image && (
        <SmartImage
          src={post.metadata.image}
          alt={post.metadata.title}
          width={1200}
          height={600}
          style={{ 
            borderRadius: "var(--radius-m)",
            marginBottom: "var(--static-space-24)"
          }}
        />
      )}
      <Column fillWidth gap="16">
        <Row gap="8" vertical="center">
          <Text variant="body-default-s" color="neutral-on-background-weak">
            {formatDate(post.metadata.publishedAt)}
          </Text>
          {post.metadata.tags && (
            <Text variant="body-default-s" color="neutral-on-background-weak">
              • {post.metadata.tags.join(", ")}
            </Text>
          )}
        </Row>
        <CustomMDX source={post.content} />
      </Column>
    </Column>
  );
} 