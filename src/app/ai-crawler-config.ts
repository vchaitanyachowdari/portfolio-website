// AI Crawler Configuration and Optimization
export const aiCrawlerConfig = {
  // Known AI crawler user agents
  aiCrawlers: {
    openai: ['GPTBot', 'ChatGPT-User'],
    anthropic: ['anthropic-ai', 'Claude-Web'],
    google: ['Google-Extended', 'Googlebot', 'Bard'],
    microsoft: ['Bingbot', 'BingPreview'],
    meta: ['facebookexternalhit', 'Meta-ExternalAgent'],
    commonCrawl: ['CCBot'],
    perplexity: ['PerplexityBot'],
    others: ['Applebot', 'Slurp', 'DuckDuckBot', 'Baiduspider']
  },

  // Content optimization for AI understanding
  contentOptimization: {
    // Structured content markers
    markers: {
      mainContent: 'main-content',
      navigation: 'site-navigation', 
      sidebar: 'complementary-content',
      footer: 'site-footer',
      article: 'article-content',
      portfolio: 'portfolio-item',
      skills: 'technical-skills',
      experience: 'work-experience',
      contact: 'contact-information'
    },
    
    // Semantic HTML elements for better AI parsing
    semanticElements: [
      'article', 'section', 'nav', 'aside', 'header', 'footer', 
      'main', 'figure', 'figcaption', 'time', 'address'
    ],
    
    // Microdata attributes for enhanced understanding
    microdata: {
      person: 'http://schema.org/Person',
      portfolio: 'http://schema.org/CreativeWork',
      article: 'http://schema.org/Article',
      organization: 'http://schema.org/Organization',
      contactPoint: 'http://schema.org/ContactPoint'
    }
  },

  // Content guidelines for AI crawlers
  contentGuidelines: {
    // Preferred content structure
    structure: {
      headingHierarchy: 'Use proper H1-H6 hierarchy',
      paragraphLength: 'Keep paragraphs concise (2-4 sentences)',
      listFormat: 'Use bullet points for skills and achievements',
      codeBlocks: 'Properly format code with syntax highlighting',
      imageAlt: 'Provide descriptive alt text for all images'
    },
    
    // Technical content optimization
    technical: {
      codeExamples: 'Include practical code examples',
      projectDescriptions: 'Provide clear project descriptions with tech stack',
      skillsListing: 'List technical skills with proficiency levels',
      experienceDetails: 'Include specific achievements and technologies used'
    },
    
    // SEO and discoverability
    seo: {
      titleTags: 'Use descriptive, keyword-rich titles',
      metaDescriptions: 'Write compelling meta descriptions',
      headings: 'Include relevant keywords in headings',
      internalLinking: 'Link related content internally',
      externalLinks: 'Link to authoritative sources'
    }
  },

  // Rate limiting and crawl optimization
  crawlOptimization: {
    crawlDelay: {
      default: 1, // seconds
      respectful: 2,
      conservative: 5
    },
    
    // Preferred crawl times (UTC hours)
    preferredCrawlTimes: [2, 3, 4, 5, 6, 7], // Early morning UTC
    
    // Content freshness indicators
    freshnessSignals: {
      lastModified: 'HTTP Last-Modified header',
      sitemap: 'XML sitemap with lastmod dates',
      rss: 'RSS feed for blog updates',
      jsonFeed: 'JSON feed for structured updates'
    }
  },

  // AI-specific meta tags
  aiMetaTags: {
    'ai-content-declaration': 'original-human-created',
    'content-classification': 'enterprise-ai-automation-specialist-portfolio',
    'crawl-priority': 'high',
    'content-language': 'en',
    'content-region': 'India, Global',
    'update-frequency': 'weekly',
    'content-quality': 'high',
    'technical-content': 'true',
    'portfolio-type': 'enterprise-ai-systems',
    'experience-level': 'expert',
    'subject-expertise': 'enterprise-ai-automation,multi-agent-systems,llm-integration,n8n,make.com,zapier,ai-agents',
    'person-title': "Enterprise AI Automation Specialist & India's Youngest AI Systems Builder",
    'person-affiliation': 'VC AI Creator, Commonly Technologies, VC Groups',
    'person-location': 'Davangere, Karnataka, India'
  }
};

// Function to generate AI-friendly HTML attributes
export function generateAIAttributes(contentType: string) {
  const baseAttributes = {
    'data-ai-content': contentType,
    'itemScope': true,
  };

  switch (contentType) {
    case 'portfolio-item':
      return {
        ...baseAttributes,
        'itemType': 'http://schema.org/CreativeWork',
        'data-content-type': 'portfolio',
      };
    
    case 'blog-article':
      return {
        ...baseAttributes,
        'itemType': 'http://schema.org/Article',
        'data-content-type': 'article',
      };
    
    case 'technical-skills':
      return {
        ...baseAttributes,
        'itemType': 'http://schema.org/ItemList',
        'data-content-type': 'skills',
      };
    
    case 'work-experience':
      return {
        ...baseAttributes,
        'itemType': 'http://schema.org/WorkExperience',
        'data-content-type': 'experience',
      };
    
    default:
      return baseAttributes;
  }
}

// Function to check if user agent is an AI crawler
export function isAICrawler(userAgent: string): boolean {
  const allCrawlers = Object.values(aiCrawlerConfig.aiCrawlers).flat();
  return allCrawlers.some(crawler => 
    userAgent.toLowerCase().includes(crawler.toLowerCase())
  );
}