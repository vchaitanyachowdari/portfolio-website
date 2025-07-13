import { getPosts } from "@/app/utils/utils";
import { ResourceDisplayCard } from "@/components/resource/ResourceDisplayCard";

interface ResourcesDisplayProps {
  range?: [number, number?];
}

export function ResourcesDisplay({ range }: ResourcesDisplayProps) {
  let allResources = getPosts(["src", "app", "resource", "posts"]);

  const sortedResources = allResources.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedResources = range
    ? sortedResources.slice(range[0] - 1, range[1] ?? sortedResources.length)
    : sortedResources;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', width: '100%' }}>
      {displayedResources.map((resource, index) => (
        <ResourceDisplayCard
          priority={index < 2}
          key={resource.slug}
          href={`/resource/${resource.slug}`}
          images={resource.metadata.images || []}
          title={resource.metadata.title}
          description={resource.metadata.summary}
          content={resource.content}
          avatars={resource.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={resource.metadata.link || ""}
        />
      ))}
    </div>
  );
}
