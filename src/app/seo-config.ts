import { baseURL } from "@/app/resources";

export const seoConfig = {
  title: "V Chaitanya Chowdari | AI Generalist, Researcher, Builder & Founder",
  description: "Chaitanya Chowdari – AI Generalist, Researcher & Builder. Founder of VC AI Creator and Commonly Technologies. Explore work, blog, gallery, resources, services, and store. Hire for AI automation, LLM integration, web development, and consulting in India.",
  keywords: [
    // Cluster 1 – Identity / Brand
    "Chaitanya Chowdari",
    "V Chaitanya Chowdari",
    "vchaitanyachowdari",
    "chowdari.in",
    "VC AI Creator founder",
    "Commonly Technologies founder",
    "VC Groups chairman",

    // Cluster 2 – Role / Expertise
    "AI Generalist",
    "AI Researcher",
    "AI Generalist India",
    "AI researcher India",
    "AI automation expert",
    "AI automation expert India",
    "AI automation expert Davangere",
    "LLM trainer India",
    "LLM Retrainer",
    "AI agent builder India",
    "prompt engineer India",
    "GEO Expert",
    "GEO expert India",
    "n8n expert India",
    "make.com automation expert",
    "Zapier automation freelancer India",
    "AI influencer India",
    "AI Builder",
    "AI Expert",
    "AI Model Training",
    "AI Trainer",

    // Cluster 3 – Service / Hire
    "hire AI automation expert India",
    "AI integration services India",
    "web development services Davangere",
    "AI consulting services India",
    "SEO optimization with AI India",
    "AI agent development India",
    "LLM integration services",
    "no code automation expert",
    "AI workflow automation freelancer",
    "custom AI solutions India",
    "web developer India",
    "UI/UX designer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "frontend developer",
    "backend developer",
    "software engineer",
    "full-stack developer India",
    "Marketing Expert",
    "Meta Official Partner",
    "Influencer",

    // Cluster 4 – Questions / FAQ
    "what does Chaitanya Chowdari do",
    "who is VC AI Creator founder",
    "how to contact Chaitanya Chowdari",
    "Chaitanya Chowdari LinkedIn",
    "Chaitanya Chowdari portfolio",
    "what is VC AI Creator",
    "what is Commonly Technologies",
    "what services does chowdari.in offer",
    "Chaitanya Chowdari blog",
    "Chaitanya Chowdari GitHub",

    // Cluster 5 – Content / Resources
    "AI automation blog India",
    "AI generalist blog",
    "LLM news India",
    "AI tools resources 2025",
    "how to build AI agents",
    "prompt engineering tutorials",
    "n8n automation tutorials",
    "AI research India",
    "work blog",
    "gallery resources",
    "resources services",
    "services store",
    "work blog gallery",
    "blog gallery resources",
    "resources services store",
    "linkedin work",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseURL,
    siteName: "V Chaitanya Chowdari - Portfolio Website",
    title: "V Chaitanya Chowdari - Full Stack Developer & Designer",
    description: "Professional Portfolio showcasing AI Automation, AI Ad's Making, AI Model Training, AI Development, Researcher, full-stack development, UI/UX design, and innovative web solutions. Explore my projects, blog posts, and technical expertise.",
    images: [
      {
        url: `${baseURL}/images/og/home.jpg`,
        width: 1200,
        height: 630,
        alt: "Portfolio Homepage",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Full Stack Developer & Designer",
    description: "Professional portfolio showcasing full-stack development, UI/UX design, and innovative web solutions.",
    images: [`${baseURL}/images/og/home.jpg`],
    creator: "@vchaitanyacho",
  },

  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "V Chaitanya Chowdari",
    "jobTitle": "AI Generalist, AI Researcher & Builder",
    "description": "Chaitanya Chowdari is an AI Generalist, Researcher, and Builder from Davangere, Karnataka, India. Founder of VC AI Creator and Commonly Technologies. Expert in AI automation, LLM training, n8n, Make.com, Zapier, and full-stack web development.",
    "url": baseURL,
    "sameAs": [
      "https://github.com/vchaitanyachowdari",
      "https://www.linkedin.com/in/vchaitanyachowdari",
      "https://x.com/vchaitanyachai"
    ],
    "knowsAbout": [
      "AI Generalist",
      "AI Research",
      "AI Automation",
      "LLM Training",
      "AI Agent Development",
      "Prompt Engineering",
      "GEO (Generative Engine Optimization)",
      "n8n Automation",
      "Make.com Automation",
      "Zapier Automation",
      "Web Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "UI/UX Design",
      "Digital Marketing",
      "SEO Optimization",
      "AI Model Training",
      "Business Strategy"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "AI Generalist & Founder",
      "occupationLocation": {
        "@type": "Place",
        "name": "Davangere, Karnataka, India"
      }
    },
    "affiliation": [
      {
        "@type": "Organization",
        "name": "VC AI Creator",
        "url": "https://www.chowdari.in"
      },
      {
        "@type": "Organization",
        "name": "Commonly Technologies"
      }
    ]
  },

  faqStructuredData: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does Chaitanya Chowdari do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "V Chaitanya Chowdari is an AI Generalist, Researcher, and Builder based in Davangere, Karnataka, India. He helps businesses leverage AI automation, build AI agents, integrate LLMs, and develop web applications. He is the Founder and CEO of VC AI Creator and Commonly Technologies."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Chaitanya Chowdari offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chaitanya offers AI automation, AI agent development, LLM integration, web development, mobile app development, UI/UX design, SEO optimization, AI consulting, and digital marketing services through his portfolio at chowdari.in."
        }
      },
      {
        "@type": "Question",
        "name": "How can I hire Chaitanya Chowdari?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a discovery call at cal.com/vcaicreator/discovery-call, email at vchaitanya@chowdari.in, or connect on LinkedIn at linkedin.com/in/vchaitanyachowdari."
        }
      },
      {
        "@type": "Question",
        "name": "What is VC AI Creator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VC AI Creator is an AI-driven startup founded by Chaitanya Chowdari in 2025. It provides AI automation, AI agent development, digital marketing, GEO, and consultancy services to businesses. It grew from ₹2.5 Lakhs investment to ₹2.1 Crore valuation within its first phase."
        }
      },
      {
        "@type": "Question",
        "name": "What is GEO (Generative Engine Optimization)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GEO (Generative Engine Optimization) is the practice of optimizing content to rank in AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews. Chaitanya Chowdari is a GEO Expert helping businesses get found in AI-driven search results."
        }
      },
      {
        "@type": "Question",
        "name": "What automation tools does Chaitanya Chowdari use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chaitanya is proficient in n8n, Make.com (formerly Integromat), and Zapier for building no-code and low-code automation workflows. He also builds custom AI agents using LangChain and LLMs."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I read Chaitanya Chowdari's blog?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chaitanya writes about AI, automation, and digital strategies on his blog at chowdari.in/blog. Topics include AI research, prompt engineering, GEO, and business insights."
        }
      },
      {
        "@type": "Question",
        "name": "Is Chaitanya Chowdari available for freelance or consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Chaitanya Chowdari is available for freelance projects and consulting in AI automation, AI agent development, web development, digital marketing, and SEO/GEO optimization. Contact via chowdari.in/contact or book a call at cal.com/vcaicreator/discovery-call."
        }
      }
    ]
  },

  aiCrawlerMeta: {
    "ai-content-declaration": "This portfolio contains original work and projects by the developer",
    "content-type": "professional-portfolio",
    "content-category": "technology,web-development,design",
    "content-language": "en",
    "content-freshness": "regularly-updated",
    "crawl-priority": "high",
    "index-policy": "index,follow",
  },

  additionalMeta: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "msapplication-TileColor": "#000000",
  }
};

export function generateStructuredData(pageType: string = "website", additionalData: any = {}) {
  const baseStructuredData = {
    ...seoConfig.structuredData,
    ...additionalData
  };

  if (pageType === "article") {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      ...baseStructuredData,
      "author": {
        "@type": "Person",
        "name": seoConfig.structuredData.name
      },
      "publisher": {
        "@type": "Person",
        "name": seoConfig.structuredData.name
      }
    };
  }

  if (pageType === "portfolio") {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      ...baseStructuredData,
      "creator": {
        "@type": "Person",
        "name": seoConfig.structuredData.name
      }
    };
  }

  return baseStructuredData;
}
