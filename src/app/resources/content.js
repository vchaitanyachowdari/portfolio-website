import { Logo } from "@/once-ui/components";

const person = {
  firstName: "V Chaitanya",
  lastName: "Chowdari",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Generlist",
  avatar: "/images/avatar.jpg",
  email: "vchaitanya@chowdari.in",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Kannada", "Hindi", "Telugu" ], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vchaitanyachowdari",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vchaitanyachowdari",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/vchaitanyachai?s=11",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between Technology and Innovation</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Portfolio Website</strong></>,
    href: "https://chowdari.in",
  },
  subline: (
    <>
      I'm V Chaitanya Chowdari, a AI Generalist at VC AI Creator, where I craft intuitive
      <br /> user needs. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://form.typeform.com/to/BaPLDCSt",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Selene is a Jakarta-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "VC AI Creator",
        timeframe: "2025 - Present",
        role: "Founder and CEO",
        achievements: [
          <>
            Defined the vision, strategy, and roadmap for Vc AI Creator driving innovation at the intersection of AI, automation, and product development.
          </>,
          <>
            Built and managed cross-functional teams, collaborating with designers, engineers, and product managers to deliver high impact solutions.
          </>,
          <>
            Represented the company in partnerships, pitches, and technical discussions, aligning business objectives with product execution.
          </>,
          <>
            Drove go-to-market strategies, positioning Vc AI Creator as a forward-thinking brand in AI automation, voice agents, and Web3.
          </>,
          <>
            Led architecture and systems design, implementing scalable, modular platforms using React.js, React Native, and AI integration pipelines.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/company/vcaicreator/vcaicreator-01.png",
            alt: "Pitch Disc Slides",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "EventureX",
        timeframe: "2025 - Present",
        role: "Founder",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
      {
        company: "Physics Mindboggler",
        timeframe: "Jan 2025 - Apr 2025",
        role: "Business Development Executive",
        achievements: [
          <>
            Spearheaded the development and maintenance of responsive web and mobile applications utilizing React.js and React Native, ensuring seamless user experiences across platforms.
          </>,
          <>
            Collaborated cross-functionally with designers, product managers, and fellow developers to deliver high-quality products that meet client needs and market demands.
          </>,
          <>
            Implemented responsive design principles and ensured cross-browser compatibility to enhance accessibility and user engagement.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
          name: "100x Engineering",
          description: <>Learing and Implimenting Generative AI</>,
      },
      {
        name: "Indian Institute of Technology, Indore",
        description: <>Professional Certificate Program in Artificial Intelligence and Data Science</>,
      },
      {
        name: "Bapuji Institute of Engineering and Technology",
        description: <>Studing Computer Science and Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
       {
        title: "C++",
        description: <>Proficient in writing optimized, object-oriented C++ code for system-level programming, algorithms, and competitive coding.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "Python",
        description: <>Skilled in using Python for data analysis, machine learning, automation, and building AI-powered applications.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "HTML 5",
        description: <>Experienced in crafting semantic, responsive HTML5 layouts for modern web applications with accessibility and SEO in mind.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "CSS",
        description: <>Expertise in styling UI using CSS3, Flexbox, Grid, and animations to create sleek, responsive designs across devices.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "Java",
        description: <>Familiar with Java for building robust backend systems, OOP design, and Android app development.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "My SQL",
        description: <>Skilled in designing and managing relational databases using MySQL, including complex queries, joins, and schema optimization.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "Git",
        description: <>Experienced in using Git for version control, collaborative development, and maintaining clean code history.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "GitHub",
        description: <>Proficient in leveraging GitHub for code hosting, project management, and CI/CD workflows.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "Prompt Engineerng",
        description: <>Skilled in designing, refining, and optimizing prompts for LLMs (e.g., GPT, Gemini) to deliver accurate, context-aware responses and automate tasks.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
            {
                src: "/images/skills/promptengineering/promptformula.png",
                alt: "Prompt Engineering Formula",
                width: 16,
                height: 9,
          },
        ],
      },
      {
        title: "Make.com",
        description: <>Proficient in using Make.com for building no-code/low-code automation workflows across apps.</>,
        // optional: leave the array empty if you don't want to display images
          images: [
                   {
                       src: "/images/skills/make/make-01.png",
                       alt: "Sync Notion Databases to Google Calendar",
                       width: 16,
                       height: 9,
                   },
                   {
                       src: "/images/skills/make/make-02.png",
                       alt: "Email Automation",
                       width: 16,
                       height: 9,
                   },
                 ],
      },
      {
        title: "n8n",
        description: <>Experienced in building end-to-end AI and automation pipelines using n8n, integrating APIs, webhooks, agents, and advanced logic flows.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
                 {
                     src: "/images/skills/n8n/n8n-01.png",
                     alt: "Deap Research Agent",
                     width: 16,
                     height: 9,
                 },
                 {
                     src: "/images/skills/n8n/n8n-02.png",
                     alt: "SEO Audit Report Generater",
                     width: 16,
                     height: 9,
                 },
                 {
                     src: "/images/skills/n8n/n8n-03.png",
                     alt: "Social Media Content Automation",
                     width: 16,
                     height: 9,
                 },
                 {
                     src: "/images/skills/n8n/n8n-04.png",
                     alt: "Email Summering Agent",
                     width: 16,
                     height: 9,
                 },
               ],
      },
      {
        title: "Zapier",
        description: <>Able to automate multi-step workflows using Zapier, integrating tools like Google Sheets, Gmail, Notion, and CRMs for lead gen and email tasks.</>,
        // optional: leave the array empty if you don't want to display images
          images: [
                   {
                       src: "/images/skills/zapier/zapier-01.png",
                       alt: "Email Automation",
                       width: 16,
                       height: 9,
                   },
                   {
                       src: "/images/skills/zapier/zapier-01.png",
                       alt: "Lead Generation",
                       width: 16,
                       height: 9,
                   },
                 ],
       },
      {
        title: "AI Agents",
        description: <>Skilled in designing and deploying AI agents for research, customer support, data extraction, and intelligent automation using LLMs and tools like LangChain.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "v0",
        description: <>Proficient in using Vercel's v0 to rapidly prototype frontend UIs using AI-powered generation and Tailwind CSS integration.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
      {
        title: "Lovable",
        description: <>Experience using Lovable for AI-powered content generation, idea validation, and business exploration tools..</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const techStack = {
  path: "/tech-stack",
  label: "Tech Stack",
  title: `Tech Stack – ${person.name}`,
  description: `Technologies and tools used by ${person.name}`,
};

const services = {
  path: "/services",
  label: "Services",
  title: `Services – ${person.name}`,
  description: `Services offered by ${person.name}`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-03.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-06.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-07.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-08.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-09.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-10.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-11.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-01.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-02.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-03.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-04.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-05.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const resources = {
  path: "/resource",
  label: "Resources",
  title: `Resources – ${person.name}`,
  description: `Useful resources and tools curated by ${person.name}`,
};

// const resourcePages = [ ... ]; // This array is no longer used by the Resource page.
// Content from here should be migrated to individual .mdx files in src/app/resource/posts/ if desired.

/**
 * @typedef {Object} Testimonial
 * @property {string} name
 * @property {string} title
 * @property {string} company
 * @property {string} image
 * @property {string} quote
 */

/** @type {Testimonial[]} */
const testimonials = [
  {
    name: "Kolaparthi Hazitha",
    title: "Senior Software Engineer",
    company: "Capgemini",
    image: "/images/avatar.jpg",
    quote:
      "I had the opportunity to work with Mahesh for two years. He is a talented and hardworking individual who is always eager to explore new technologies. His collaborative nature and knowledge-sharing attitude made him a valuable team member. I look forward to working with him again.",
  },
  // Add more testimonials here
];

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  techStack, // Added techStack
  services,  // Added services
  work,
  gallery,
  resources,
  // resourcePages, // No longer exporting as it's not used by the new Resource page design
  testimonials,
};
