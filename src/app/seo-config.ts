import { baseURL } from "@/app/resources";

export const seoConfig = {
  title: "V Chaitanya Chowdari - AI Generilist, Web Developer, Fullstack Developer, Generative AI Expert",
  description: "Professional Portfolio showcasing AI Automation, AI Ad's Making, AI Model Training, AI Development, Researcher, full-stack development, UI/UX design, and innovative web solutions. Explore my projects, blog posts, and technical expertise.",
  keywords: [
    "AI Generilist",
    "AI Automation Expert",
    "web developer",
    "UI/UX designer", 
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "portfolio",
    "web design",
    "frontend developer",
    "backend developer",
    "software engineer",
    "JavaScript developer",
    "modern web development",
    "responsive design",
    "user experience",
    "web applications",
    "ai model train",
    "AI Trainer",
    "Marketing Expert",
    "Meta Official Partner",
    "Marketing Expert",
    "Influnencer",
    "GEO Expert",
    "LLM Reainer",
    "AI Expert"
  ],
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseURL,
    siteName: "V Chaitanya Chowsari - Portfolio Website",
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
    "jobTitle": "Full Stack Developer & Designer",
    "description": "Professional full-stack developer and designer specializing in modern web technologies and user experience design.",
    "url": baseURL,
    "sameAs": [
      "https://github.com/vchaitanyachowdari",
      "https://linkedin.com/in/vchaitanyachowdari",
      "https://twitter.com/vchaitanyacho"
    ],
    "knowsAbout": [
      "Web Development",
      "Full Stack Development", 
      "React",
      "AI Generilist",
      "AI Automation Expert",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "API Development",
      "Responsive Design",
      "User Experience",
      "Software Engineering",
      "ai model train",
      "AI Trainer",
      "Marketing Expert",
      "Meta Official Partner",
      "Marketing Expert",
      "Influnencer",
      "GEO Expert",
      "LLM Reainer",
      "AI Expert"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "Place",
        "name": "Davangere, Karnataka, India"
      }
    }
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
