import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { ResourceDisplayCard } from "@/components/resource/ResourceDisplayCard"; // Use the new card

interface ResourcesDisplayProps {
  range?: [number, number?]; // Prop to display a slice of resources, similar to Projects.tsx
}

export function ResourcesDisplay({ range }: ResourcesDisplayProps) {
  // Fetch posts from the resource directory
  let allResources = getPosts(["src", "app", "resource", "posts"]);

  // Sort resources by publication date (newest first)
  const sortedResources = allResources.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedResources = range
    ? sortedResources.slice(range[0] - 1, range[1] ?? sortedResources.length)
    : sortedResources;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l"> {/* Similar layout props to Projects.tsx */}
      {displayedResources.map((resource, index) => (
        <ResourceDisplayCard
          priority={index < 2} // Prioritize loading images for the first few items
          key={resource.slug}
          href={`/resource/${resource.slug}`} // Link to the detail page for the resource
          images={resource.metadata.images || []} // Ensure images is always an array
          title={resource.metadata.title}
          description={resource.metadata.summary}
          content={resource.content} // Pass MDX content
          avatars={resource.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={resource.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
