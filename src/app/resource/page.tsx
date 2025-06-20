import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
// 'resources' (plural) and 'person' are still needed for metadata and schema
import { resources, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { ResourcesDisplay } from "@/components/resource/ResourcesDisplay"; // Import the new display component

export async function generateMetadata() {
  // Metadata remains largely the same, describing the overall resource page
  return Meta.generate({
    title: resources.title, // From content.js: "Resources - V Chaitanya Chowdari"
    description: resources.description, // From content.js: "Useful resources and tools curated by V Chaitanya Chowdari"
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(resources.title)}`,
    path: resources.path, // From content.js: "/resource"
  });
}

export default function ResourcePage() {
  return (
    // Use Column with maxWidth="m" for consistency with Work/page.tsx
    <Column maxWidth="m">
      <Schema
        as="webPage" // Changed from "blog" to "webPage" or "CollectionPage" if more appropriate
                     // "webPage" is generic. "CollectionPage" might be suitable.
                     // For now, sticking to "webPage" as Work/page.tsx uses this.
        baseURL={baseURL}
        path={resources.path}
        title={resources.title}
        description={resources.description}
        image={`${baseURL}/og?title=${encodeURIComponent(resources.title)}`}
        author={{ // Author of the collection page itself
          name: person.name,
          url: `${baseURL}/about`, // Link to about page, consistent with Work/page.tsx
          image: `${baseURL}${person.avatar}`,
        }}
        // If we consider this a list of articles, additional schema for items could be added
        // by ResourcesDisplay or ResourceDisplayCard if they were to output ItemList schema.
        // For now, the page-level schema is similar to Work/page.tsx.
      />
      {/*
        The old hero section displaying `resourcePages` from content.js is removed.
        The old multiple <Resources /> calls with ranges are removed.
      */}
      <ResourcesDisplay /> {/* Render all resources using the new component */}
    </Column>
  );
}
