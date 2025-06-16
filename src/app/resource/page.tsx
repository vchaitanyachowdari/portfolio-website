import { Column, Heading } from "@/once-ui/components";
import { Resources } from "@/components/resource/Resources";
import { baseURL } from "@/app/resources";
import { resources, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: resources.title,
    description: resources.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(resources.title)}`,
    path: resources.path,
  });
}

export default function ResourcePage() {
  return (
    <Column maxWidth="s">
      <Schema
        as="blog"
        baseURL={baseURL}
        title={resources.title}
        description={resources.description}
        path={resources.path}
        image={`${baseURL}/og?title=${encodeURIComponent(resources.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/resource`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {resources.title}
      </Heading>
      <Column fillWidth flex={1}>
        <Resources range={[1, 1]} columns="1" />
        <Resources range={[2, 3]} columns="2" />
        <Resources range={[4, 4]} columns="2" />
      </Column>
    </Column>
  );
} 
