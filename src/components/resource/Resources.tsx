import { Column, Flex, Heading, Text, SmartImage, SmartLink } from "@/once-ui/components";
import { getPosts, formatDate } from "@/app/utils/utils";

interface ResourcesProps {
  range?: [number, number];
  columns?: "1" | "2" | "3";
}

export const Resources = ({ range, columns = "1" }: ResourcesProps) => {
  const posts = getPosts(["src", "app", "resource", "posts"]);

  const filteredPosts = range
    ? posts.slice(range[0] - 1, range[1])
    : posts;

  return (
    <Flex
      fillWidth
      gap="32"
      mobileDirection="column"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "var(--static-space-32)",
      }}
    >
      {filteredPosts.map((post) => (
        <SmartLink
          key={post.slug}
          href={`/resource/${post.slug}`}
          className="resource-card-ui"
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #e0f7fa 100%)",
            borderRadius: 24,
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
            padding: "2.5rem 2rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            minHeight: 360,
            border: "1px solid #e0e7ef",
            textDecoration: "none",
            position: "relative",
            overflow: "hidden",
            transition: "box-shadow 0.2s, transform 0.2s",
            willChange: "transform, box-shadow",
          }}
          data-border="rounded"
        >
          {post.metadata.category && (
            <span
              style={{
                position: "absolute",
                top: 24,
                left: 24,
                background: "#b2f5ea",
                color: "#234e52",
                borderRadius: 999,
                padding: "4px 18px",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 0.5,
                zIndex: 2,
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.06)",
                textTransform: "capitalize",
              }}
            >
              {post.metadata.category}
            </span>
          )}
          {post.metadata.image && (
            <SmartImage
              src={post.metadata.image}
              alt={post.metadata.title}
              width={800}
              height={400}
              style={{
                borderRadius: 16,
                marginBottom: 28,
                objectFit: "cover",
                width: "100%",
                maxHeight: 200,
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.06)",
              }}
            />
          )}
          <Column fillWidth gap="8">
            <Heading variant="display-strong-xs" style={{ marginBottom: 6, fontWeight: 800, fontSize: 26, color: "#22292f" }}>{post.metadata.title}</Heading>
            <Text variant="body-default-s" style={{ marginBottom: 10, color: "#4a5568", fontSize: 17 }}>{post.metadata.summary}</Text>
            <Flex gap="8" vertical="center" style={{ marginBottom: 12, color: "#7b8794", fontSize: 15, fontWeight: 500 }}>
              <Text variant="body-default-s" style={{ color: "#7b8794" }}>
                {formatDate(post.metadata.publishedAt)}
              </Text>
              {post.metadata.tags && post.metadata.tags.length > 0 && (
                <span style={{ fontSize: 18, color: "#b0b7c3" }}>•</span>
              )}
              {post.metadata.tags && (
                <Text variant="body-default-s" style={{ color: "#7b8794" }}>
                  {post.metadata.tags.join(", ")}
                </Text>
              )}
            </Flex>
            {post.metadata.link && (
              <a
                href={post.metadata.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginTop: 8,
                  alignSelf: "flex-start",
                  background: "linear-gradient(90deg, #38b2ac 0%, #4299e1 100%)",
                  color: "#fff",
                  borderRadius: 999,
                  padding: "10px 22px",
                  fontWeight: 700,
                  fontSize: 16,
                  textDecoration: "none",
                  boxShadow: "0 2px 8px 0 rgba(56,178,172,0.10)",
                  transition: "background 0.2s, color 0.2s",
                  gap: 8,
                }}
              >
                Visit Resource
                <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 6 }}><path d="M7 11l5-5m0 0H8m4-0v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            )}
          </Column>
        </SmartLink>
      ))}
      <style>{`
        .resource-card-ui:hover {
          box-shadow: 0 16px 48px 0 rgba(56,178,172,0.18);
          transform: translateY(-4px) scale(1.025);
          border-color: #38b2ac;
        }
        @media (max-width: 700px) {
          .resource-card-ui {
            padding: 1.5rem 1rem 1.5rem 1rem;
            min-height: 220px;
          }
          /* Attempting a more general selector for the heading within the card */
          .resource-card-ui div[class*="Column"] > h1,
          .resource-card-ui div[class*="Column"] > h2,
          .resource-card-ui div[class*="Column"] > h3,
          .resource-card-ui div[class*="Column"] > h4,
          .resource-card-ui div[class*="Column"] > h5,
          .resource-card-ui div[class*="Column"] > h6 {
            font-size: 20px;
          }
        }
      `}</style>
    </Flex>
  );
}; 