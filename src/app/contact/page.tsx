import { Contact2 } from "@/components/ui/contact-2";
import { Column } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { baseURL, person } from "@/app/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Contact – ${person.name}`,
    description: `Get in touch with ${person.name} for AI automation, consulting, and development projects.`,
    baseURL: baseURL,
    path: "/contact",
  });
}

export default function ContactPage() {
  return (
    <Column maxWidth="xl" horizontal="center" fillWidth>
      <Contact2
        title="Get in Touch"
        description="Have a project in mind? Need AI automation, agent development, or consulting? Let's talk and bring your ideas to life."
        phone="+91 XXX XXX XXXX"
        email="vchaitanya@chowdari.in"
        location="Davangere, Karnataka, India"
        web={{ label: "chowdari.in", url: "https://chowdari.in" }}
        calLink="https://cal.com/vcaicreator/discovery-call"
      />
    </Column>
  );
}
