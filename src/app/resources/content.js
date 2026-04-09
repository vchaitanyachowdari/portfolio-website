import { Logo } from "@/once-ui/components";

const person = {
  firstName: "V Chaitanya",
  lastName: "Chowdari",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Enterprise AI Automation Specialist · India's Youngest AI Systems Builder",
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
      I write about enterprise AI automation, intelligent systems architecture, and
      how AI is reshaping the way businesses operate at scale. Join 500+ founders,
      operators, and engineers who read my insights.
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
  title: `V Chaitanya Chowdari | Enterprise AI Automation Specialist & India's Youngest AI Systems Builder`,
  description: `V Chaitanya Chowdari – Enterprise AI Automation Specialist & India's Youngest AI Systems Builder. I design and deploy intelligent AI systems, multi-agent architectures, and end-to-end automation pipelines that help businesses scale 10x faster.`,
  headline: <>India&apos;s Youngest AI Systems Builder. Building Intelligent Machines That Work While You Sleep.</>,
  featured: {
    display: true,
    title: <>&ldquo;India&apos;s Youngest AI Systems Builder&rdquo; — <strong className="ml-4">Founder, VC AI Creator</strong></>,
    href: "https://chowdari.in",
  },
  subline: (
    <>
      I&apos;m V Chaitanya Chowdari — an <strong>Enterprise AI Automation Specialist</strong> and
      the founder of VC AI Creator &amp; Commonly Technologies. I architect production-grade AI systems,
      multi-agent pipelines, and intelligent automation workflows that eliminate manual bottlenecks and
      unlock 10x operational efficiency for businesses across India and beyond.
    </>
  ),
  faq: [
    {
      question: "Who is V Chaitanya Chowdari?",
      answer: "V Chaitanya Chowdari is India's Youngest AI Systems Builder and an Enterprise AI Automation Specialist. He architects production-grade multi-agent AI systems, autonomous pipelines, and LLM-powered automation for businesses. He is also the Founder & CEO of VC AI Creator and Commonly Technologies.",
    },
    {
      question: "What does 'Enterprise AI Automation Specialist' mean?",
      answer: "An Enterprise AI Automation Specialist designs, builds, and deploys end-to-end AI-powered systems that automate complex business operations. Chaitanya specializes in multi-agent architectures, LLM integration, intelligent workflow automation using n8n, Make.com, and custom-built AI agents — all at enterprise scale.",
    },
    {
      question: "Why is Chaitanya called 'India's Youngest AI Systems Builder'?",
      answer: "Chaitanya began building production-grade AI systems, autonomous agents, and enterprise automation pipelines at a very young age. He founded VC AI Creator in 2025, scaled it to ₹2.1 Crore valuation, partnered with 30+ businesses, and delivered real-world AI systems — making him arguably India's youngest builder operating at this scale.",
    },
    {
      question: "What AI systems has Chaitanya built?",
      answer: "Chaitanya has built deep research agents, SEO audit automation systems, social media content pipelines, email intelligence agents, lead qualification bots, customer support AI, and multi-agent orchestration frameworks — all running in production for real businesses.",
    },
    {
      question: "What services does Chaitanya Chowdari offer?",
      answer: "Chaitanya offers enterprise AI automation, multi-agent system design, LLM integration, intelligent workflow automation (n8n, Make.com, Zapier), AI strategy consulting, GEO (Generative Engine Optimization), and full-stack AI application development.",
    },
    {
      question: "How can I hire or contact Chaitanya Chowdari?",
      answer: "You can book a discovery call at cal.com/vcaicreator/discovery-call, email vchaitanya@chowdari.in, or connect on LinkedIn. Visit the Contact page for all options.",
    },
    {
      question: "What is VC AI Creator?",
      answer: "VC AI Creator is an AI-driven startup founded by Chaitanya Chowdari in 2025. We deliver enterprise AI automation, intelligent agent systems, digital marketing, GEO, and AI consultancy to businesses across India. We scaled from ₹2.5L investment to ₹2.1 Crore valuation in our first phase.",
    },
    {
      question: "What is GEO (Generative Engine Optimization)?",
      answer: "GEO is the practice of optimizing content to appear in AI-powered search results on platforms like ChatGPT, Perplexity, and Google AI Overviews. Chaitanya specializes in GEO strategies that help brands get discovered in the age of AI search.",
    },
  ],
};

const about = {
  path: "/about",
  label: "About",
  title: `V Chaitanya Chowdari – Enterprise AI Automation Specialist & India's Youngest AI Systems Builder`,
  description: `Meet V Chaitanya Chowdari – Enterprise AI Automation Specialist, India's Youngest AI Systems Builder, and Founder of VC AI Creator and Commonly Technologies. Based in Davangere, Karnataka, India. Expert in multi-agent AI systems, n8n, Make.com, LLM orchestration, and production AI pipelines.`,
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
        I&apos;m V Chaitanya Chowdari — Enterprise AI Automation Specialist and India&apos;s Youngest
        AI Systems Builder. I design and deploy production-grade AI systems, multi-agent architectures,
        and intelligent automation pipelines that help businesses eliminate manual work and scale faster.
        <br /><br />
        At 20, I founded VC AI Creator and Commonly Technologies — scaling from ₹2.5L investment to
        ₹2.1 Crore valuation in our first phase. I have partnered with 30+ companies and delivered
        real-world AI systems that run autonomously, make decisions, and generate measurable business results.
        <br /><br />
        My technical stack spans Python, LangChain, n8n, Make.com, Zapier, OpenAI APIs, Gemini, and full-stack
        web development. I don&apos;t just consult on AI — I build it, ship it, and make it work in production.
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
        role: "Founder & CEO",
        achievements: [
          <>
            Architected and deployed enterprise-grade AI automation systems for 10+ strategic partner companies.
          </>,
          <>
            Built a product studio that ships AI-powered SaaS tools, intelligent agents, and automation frameworks for the Indian market.
          </>,
          <>
            Established Commonly Technologies as a leader in AI-native product development and enterprise digital transformation.
          </>,
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
        role: "Founder & CEO — Enterprise AI Automation Specialist",
        achievements: [
          <>
            Scaled from ₹2.5 Lakhs seed investment to ₹2.1 Crore valuation within the first operating phase — one of India&apos;s fastest AI startup trajectories at this age.
          </>,
          <>
            Designed and delivered 15+ production AI automation systems including deep research agents, lead qualification pipelines, social media automation, email intelligence bots, and customer support AI.
          </>,
          <>
            Partnered with 30+ companies — from early-stage startups to SMBs — delivering enterprise-grade AI systems that eliminated manual bottlenecks and drove measurable ROI.
          </>,
          <>
            Built and led a cross-functional team of AI engineers, developers, and marketers. Maintained 100% client retention rate in Year 1 with repeat engagements from multiple partners.
          </>,
          <>
            Expanded into GEO (Generative Engine Optimization), helping brands appear in ChatGPT, Perplexity, and Google AI Overviews — a first-mover advantage in AI-native search.
          </>,
          <>
            Recognized as an emerging force in India&apos;s enterprise AI ecosystem, gaining visibility among industry leaders, investors, and AI practitioners.
          </>,
        ],
        images: [
          {
            src: "/images/company/vcaicreator/vcaicreator-01.png",
            alt: "VC AI Creator — Enterprise AI Automation",
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
            Overseeing the strategic direction and growth of the VC Groups umbrella — a portfolio of AI-first businesses driving automation and digital transformation across India.
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
            Led development of responsive web and mobile applications using React.js and React Native, improving platform engagement for thousands of students.
          </>,
          <>
            Collaborated cross-functionally with product, design, and engineering teams to deliver high-quality digital learning products.
          </>,
          <>
            Implemented responsive design principles ensuring seamless cross-browser and cross-device user experiences.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Certifications",
    institutions: [
      {
        name: "Indian Institute of Technology, Indore",
        description: <>Professional Certificate Program in Artificial Intelligence & Data Science</>,
      },
      {
        name: "100x Engineering",
        description: <>Advanced Generative AI Engineering — building and deploying production LLM systems</>,
      },
      {
        name: "Bapuji Institute of Engineering and Technology",
        description: <>B.E. in Computer Science & Engineering (Pursuing)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills & AI Stack",
    skills: [
      {
        title: "n8n — AI Workflow Orchestration",
        description: <>Expert-level proficiency in building end-to-end AI automation pipelines in n8n — integrating LLMs, APIs, webhooks, RAG systems, and multi-agent logic flows at enterprise scale.</>,
        images: [
          {
            src: "/images/skills/n8n/n8n-01.png",
            alt: "Deep Research Agent",
            width: 16,
            height: 9,
          },
          {
            src: "/images/skills/n8n/n8n-02.png",
            alt: "SEO Audit Report Generator",
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
            alt: "Email Intelligence Agent",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI Agent Development & Multi-Agent Systems",
        description: <>Skilled in designing autonomous AI agents and multi-agent orchestration frameworks using LangChain, OpenAI, Gemini, and custom tool-use architectures. Specialized in agents for research, data extraction, lead qualification, and content generation.</>,
        images: [],
      },
      {
        title: "LLM Integration & Prompt Engineering",
        description: <>Deep expertise in integrating OpenAI GPT, Google Gemini, Claude, and open-source LLMs into production applications. Advanced prompt engineering — crafting system prompts, chain-of-thought flows, and structured outputs for reliable enterprise-grade AI outputs.</>,
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
        title: "Make.com (Integromat)",
        description: <>Proficient in building complex, multi-step automation scenarios on Make.com — connecting CRMs, ERPs, marketing tools, databases, and AI APIs for zero-touch business operations.</>,
        images: [
          {
            src: "/images/skills/make/make-01.png",
            alt: "Sync Notion Databases to Google Calendar",
            width: 16,
            height: 9,
          },
          {
            src: "/images/skills/make/make-02.png",
            alt: "Email Automation Pipeline",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Zapier Automation",
        description: <>Expert in designing Zapier workflows that automate multi-step business processes — integrating Google Workspace, CRMs, marketing platforms, and lead generation systems for high-volume, low-touch operations.</>,
        images: [
          {
            src: "/images/skills/zapier/zapier-01.png",
            alt: "Email Automation Workflow",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Python",
        description: <>Advanced Python for AI/ML pipelines, data processing, API development, custom automation scripts, and LLM-powered application backends.</>,
        images: [],
      },
      {
        title: "GEO — Generative Engine Optimization",
        description: <>Pioneer in GEO — optimizing content and digital presence to appear in AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews. First-mover expertise in helping brands capture the AI search revolution.</>,
        images: [],
      },
      {
        title: "Full-Stack Development (Next.js / React)",
        description: <>Production-grade Next.js and React applications with TypeScript, Tailwind CSS, and modern architecture patterns. Specialized in building AI-native web applications that integrate directly with LLM backends.</>,
        images: [],
      },
      {
        title: "C++ & Data Structures",
        description: <>Proficient in optimized, object-oriented C++ for system-level programming, algorithm design, and competitive problem-solving. Strong foundation in DSA that underpins efficient AI system design.</>,
        images: [],
      },
      {
        title: "MySQL & Database Design",
        description: <>Skilled in designing and managing relational databases using MySQL — including complex query optimization, schema design, and integration with AI data pipelines.</>,
        images: [],
      },
      {
        title: "v0 & Lovable (AI-Powered UI)",
        description: <>Proficient in using Vercel&apos;s v0 and Lovable for rapid AI-powered frontend prototyping — dramatically compressing design-to-production timelines.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Chaitanya Chowdari's Blog – Enterprise AI Automation, Systems Architecture & AI Strategy",
  description: `Deep dives into enterprise AI automation, multi-agent systems, LLM engineering, GEO, and AI business strategy by ${person.name} — India's Youngest AI Systems Builder.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const services = {
  path: "/services",
  label: "Services",
  title: `Enterprise AI Automation Services – ${person.name}`,
  description: `Enterprise AI automation, multi-agent systems, LLM integration, intelligent workflow design, GEO, and AI strategy consulting by ${person.name} — India's Youngest AI Systems Builder.`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `AI Systems & Automation Projects – ${person.name}`,
  description: `Production AI systems, autonomous agents, and enterprise automation pipelines built by ${person.name} — India's Youngest AI Systems Builder.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A visual collection by ${person.name}`,
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
  title: `AI Automation Resources – ${person.name}`,
  description: `Curated AI automation tools, frameworks, templates, and resources by ${person.name} — India's Youngest AI Systems Builder.`,
};


const tools = {
  path: "/tools",
  label: "Tools",
  title: `AI Tools – ${person.name}`,
  description: `Custom-built AI tools and automation utilities by ${person.name}`,
};

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
      "Working with Chaitanya was impressive — his depth of knowledge in AI automation is beyond his years. He built intelligent systems that our team couldn't have imagined implementing ourselves. A genuine AI systems builder.",
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
  tools,
  testimonials,
};
