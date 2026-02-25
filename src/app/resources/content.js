import { Logo } from "@/once-ui/components";

const person = {
  firstName: "V Chaitanya",
  lastName: "Chowdari",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Generalist, AI Researcher, Builder",
  avatar: "/images/avatar.jpg",
  email: "vchaitanya@chowdari.in",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Kannada", "Hindi", "Telugu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
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
    link: "https://x.com/vchaitanyachai",
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
  title: `V Chaitanya Chowdari | AI Generalist, Researcher & Builder`,
  description: `Chaitanya Chowdari – AI Generalist, Researcher & Builder. Explore work, blog, gallery, resources, services, and store for cutting-edge AI solutions.`,
  headline: <>Building bridges between Technology and Innovation</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Portfolio Website</strong></>,
    href: "https://chowdari.in",
  },
  subline: (
    <>
      I&apos;m V Chaitanya Chowdari, an AI Generalist and Researcher at VC AI Creator.
      I help businesses leverage AI automation, build intelligent agents, and craft
      digital solutions. Browse my work portfolio, read the blog for AI insights,
      explore the gallery, discover curated resources, check out services, or visit
      the store. Connect with me on LinkedIn to collaborate.
    </>
  ),
  faq: [
    {
      question: "What does Chaitanya Chowdari do?",
      answer: "I'm an AI Generalist, Researcher, and Builder. I help businesses design and deploy AI automation, build AI agents, train LLMs, and develop web applications. I'm also the Founder of VC AI Creator and Commonly Technologies.",
    },
    {
      question: "What services does Chaitanya Chowdari offer?",
      answer: "I offer AI automation, AI agent development, LLM integration, web development, mobile app development, UI/UX design, SEO & GEO optimization, AI consulting, and digital marketing services.",
    },
    {
      question: "How can I hire or contact Chaitanya Chowdari?",
      answer: "You can book a discovery call, email me at vchaitanya@chowdari.in, or connect on LinkedIn. Visit the Contact page for all options.",
    },
    {
      question: "What is VC AI Creator?",
      answer: "VC AI Creator is an AI-driven startup I founded in 2025. We deliver AI automation, AI agents, digital marketing, GEO, and consultancy to businesses across India. We scaled from ₹2.5L investment to ₹2.1 Crore valuation in our first phase.",
    },
    {
      question: "What automation tools does Chaitanya use?",
      answer: "I'm proficient in n8n, Make.com, and Zapier for no-code/low-code workflows. I also build custom AI agents using LangChain, LLMs, and APIs for end-to-end intelligent automation pipelines.",
    },
    {
      question: "What is GEO (Generative Engine Optimization)?",
      answer: "GEO is the practice of optimizing content to appear in AI-powered search results on platforms like ChatGPT, Perplexity, and Google AI Overviews. I specialize in GEO strategies that help brands get discovered in the age of AI search.",
    },
    {
      question: "Where can I read Chaitanya's blog?",
      answer: "I write about AI research, automation, prompt engineering, GEO, and business strategy on my blog at chowdari.in/blog. New posts go up regularly — subscribe to stay updated.",
    },
    {
      question: "Is Chaitanya available for freelance projects?",
      answer: "Yes! I'm available for freelance and consulting engagements in AI automation, agent development, web development, digital marketing, SEO, and GEO. Book a discovery call to discuss your project.",
    },
  ],
};

const about = {
  path: "/about",
  label: "About",
  title: `V Chaitanya Chowdari – AI Generalist, Researcher & Builder`,
  description: `Meet V Chaitanya Chowdari – AI Generalist, AI Researcher, Builder, and Founder of VC AI Creator and Commonly Technologies. Based in Davangere, Karnataka, India. Expert in AI automation, n8n, Make.com, Zapier, LLM training, and web development.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/vcaicreator/discovery-call",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an AI and automation enthusiast with over 1 year of hands-on experience across domains
        like artificial intelligence, automation, web development, and digital marketing. My technical
        toolkit includes programming languages such as C, C++, Java, and Python, enabling me to
        build smart systems and scalable digital solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Commonly Technologies",
        timeframe: "Feb 2026 - Present",
        role: "Founder and CEO",
        achievements: [
          <>
            Partnered with 10+ companies, building and maintaining long-term strategic relationships.
          </>
        ],
        images: [
          {
            src: "/images/company/commonlytechnologies/01.png",
            alt: "Commonly Technologies",
            width: 16,
            height: 9,
          },
          {
            src: "/images/company/commonlytechnologies/02.png",
            alt: "Commonly Technologies",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "VC AI Creator",
        timeframe: "2025 - Present",
        role: "Founder and CEO",
        achievements: [
          <>
            Partnered with 30+ companies, building and maintaining long-term strategic relationships.
          </>,
          <>
            Scaled from ₹2.5 Lakhs investment to ₹2.1 Crore valuation within the first phase of operations (by Feb 2026).
          </>,
          <>
            Built a team of skilled professionals and fostered a strong culture of innovation and accountability.
          </>,
          <>
            Successfully delivered AI driven automation and digital solutions that solved critical business challenges for clients.
          </>,
          <>
            Expanded portfolio to include AI agents, web applications, digital marketing, GEO, and consultancy services broadening market reach.
          </>,
          <>
            Achieved 100% client retention rate in the first year, with repeat engagements from multiple partners.
          </>,
          <>
            Secured recognition as an emerging AI driven startup, gaining visibility among industry peers and professionals.
          </>,
        ],
        images: [
          {
            src: "/images/company/vcaicreator/vcaicreator-01.png",
            alt: "Pitch Disc Slides",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "VC Groups",
        timeframe: "Jul 2025 - Present",
        role: "Chairman",
        achievements: [
          <>

          </>
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
        images: [],
      },
      {
        title: "Python",
        description: <>Skilled in using Python for data analysis, machine learning, automation, and building AI-powered applications.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "HTML 5",
        description: <>Experienced in crafting semantic, responsive HTML5 layouts for modern web applications with accessibility and SEO in mind.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "CSS",
        description: <>Expertise in styling UI using CSS3, Flexbox, Grid, and animations to create sleek, responsive designs across devices.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Java",
        description: <>Familiar with Java for building robust backend systems, OOP design, and Android app development.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "My SQL",
        description: <>Skilled in designing and managing relational databases using MySQL, including complex queries, joins, and schema optimization.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Git",
        description: <>Experienced in using Git for version control, collaborative development, and maintaining clean code history.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "GitHub",
        description: <>Proficient in leveraging GitHub for code hosting, project management, and CI/CD workflows.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
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
        images: [],
      },
      {
        title: "v0",
        description: <>Proficient in using Vercel&apos;s v0 to rapidly prototype frontend UIs using AI-powered generation and Tailwind CSS integration.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Lovable",
        description: <>Experience using Lovable for AI-powered content generation, idea validation, and business exploration tools..</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Chaitanya Chowdari's Blog – AI, Automation & Digital Strategy",
  description: `AI research, automation tips, prompt engineering, GEO, and business insights by ${person.name}. Updated regularly.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
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
      featured: true,
    },
    {
      src: "/images/gallery/horizontal-02.jpg",
      alt: "image",
      orientation: "horizontal",
      featured: true,
    },
    {
      src: "/images/gallery/horizontal-03.jpg",
      alt: "image",
      orientation: "horizontal",
      featured: true,
    },
    {
      src: "/images/gallery/horizontal-04.jpg",
      alt: "image",
      orientation: "horizontal",
      featured: true,
    },
    {
      src: "/images/gallery/horizontal-05.jpg",
      alt: "image",
      orientation: "horizontal",
      featured: true,
    },
    {
      src: "/images/gallery/horizontal-06.jpeg",
      alt: "image",
      orientation: "horizontal",
      featured: true,
    },
    {
      src: "/images/gallery/horizontal-07.jpeg",
      alt: "image",
      orientation: "horizontal",
      featured: false,
    },
    {
      src: "/images/gallery/horizontal-08.png",
      alt: "image",
      orientation: "horizontal",
      featured: false,
    },
    {
      src: "/images/gallery/horizontal-09.jpeg",
      alt: "image",
      orientation: "horizontal",
      featured: true,
    },
    {
      src: "/images/gallery/horizontal-10.jpeg",
      alt: "image",
      orientation: "horizontal",
      featured: false,
    },
    {
      src: "/images/gallery/horizontal-11.jpeg",
      alt: "image",
      orientation: "horizontal",
      featured: false,
    },
    {
      src: "/images/gallery/vertical-01.png",
      alt: "image",
      orientation: "vertical",
      featured: true,
    },
    {
      src: "/images/gallery/vertical-02.jpeg",
      alt: "image",
      orientation: "vertical",
      featured: false,
    },
    {
      src: "/images/gallery/vertical-03.jpeg",
      alt: "image",
      orientation: "vertical",
      featured: false,
    },
    {
      src: "/images/gallery/vertical-04.jpeg",
      alt: "image",
      orientation: "vertical",
      featured: true,
    },
    {
      src: "/images/gallery/vertical-05.jpeg",
      alt: "image",
      orientation: "vertical",
      featured: true,
    },
  ],
};

const resources = {
  path: "/resource",
  label: "Resources",
  title: `Resources – ${person.name}`,
  description: `Useful resources and tools curated by ${person.name}`,
};

const store = {
  path: "/store",
  label: "Store",
  title: `Store – ${person.name}`,
  description: `Products and services offered by ${person.name}`,
};

const tools = {
  path: "/tools",
  label: "Tools",
  title: `Tools – ${person.name}`,
  description: `Custom-built tools by ${person.name}`,
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
  services,
  work,
  gallery,
  resources,
  store,
  tools,
  testimonials,
};
