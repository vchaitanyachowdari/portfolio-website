export const person = {
  name: "V Chaitanya Chowdari",
  avatar: "/images/team/vchaitanyachowdari.jpg",
};

export const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Learn more about ${person.name}`,
};

export const resources = {
  path: "/resource",
  label: "Resources",
  title: `Resources – ${person.name}`,
  description: `A collection of useful resources, tools, and guides by ${person.name}`,
  // Create new resource pages by adding a new .mdx file to app/resources/posts
  // All resources will be listed on the /resources route
}; 