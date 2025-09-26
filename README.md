# V Chaitanya Chowdari Portfolio Website


## Table of Contents

1.  [Project Overview](#project-overview)
2.  [Key Features](#key-features)
3.  [Tech Stack](#tech-stack)
4.  [Folder Structure](#folder-structure)
5.  [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Environment Variables](#environment-variables)
6.  [Running the Project](#running-the-project)
7.  [Customizing Your Portfolio](#customizing-your-portfolio)
    *   [Editing Configuration](#editing-configuration)
    *   [Editing Content Definitions](#editing-content-definitions)
    *   [Creating Content (MDX)](#creating-content-mdx)
8.  [Code Quality: Linting and Formatting](#code-quality-linting-and-formatting)
9.  [Deployment](deployment.md)
10. [Demo & Screenshots](#demo--screenshots)
11. [Once UI Documentation](#once-ui-documentation)
12. [Contributing & Getting Involved](#contributing--getting-involved)
13. [Authors](#authors)
14. [License](#license)

---

## Project Overview

**Magic Portfolio** is a cutting-edge, feature-rich portfolio template designed for developers, designers, and creative professionals to showcase their work, skills, and services with elegance and modernity. Built with [Next.js](https://nextjs.org/) (App Router) and powered by the versatile [Once UI](https://once-ui.com) component system, this template offers a highly customizable and performant platform to create a stunning online presence.

Its core purpose is to provide a seamless and visually appealing experience for visitors, highlighting your projects, expertise, and unique offerings. With a focus on clean design, smooth interactions, and adaptability, Magic Portfolio ensures your work stands out. The template is designed to be easily configurable, allowing you to tailor the content and appearance to perfectly match your personal brand.

---

## Key Features

Magic Portfolio comes packed with features designed to make your personal website powerful, engaging, and easy to manage:

**Core Content Sections:**
*   **🏠 Homepage:** A welcoming introduction, designed to feature your key highlights, recent projects, or latest blog posts.
*   **👤 About Page:** Comprehensively tell your story with sections for introduction, detailed work experience, education/studies, and a showcase of your technical skills.
    *   **✨ Enhanced Testimonials Section:** Display client or peer feedback in beautifully styled, theme-adaptive cards to build trust and credibility.
*   **🛠️ Work Page:** Present your projects in detail using full-width cards, complete with image carousels, descriptions, team avatars (optional), and links to live versions or case studies.
*   **✍️ Blog Page:** Share your insights and articles through a clean, readable blog interface, with content authored in MDX.
*   **📚 Resource Page:** Curate and share valuable resources, articles, or tools with your audience, displayed in a polished, Work page-like layout with image carousels and detailed descriptions.
*   **💡 Tech Stack Page:** Dynamically showcase your technology expertise. Features a filterable grid of theme-adaptive cards, each representing a tool or technology with its description.
*   **🤝 Services Page:** Detail your professional offerings in modular, engaging blocks. Each service can highlight its value proposition, key deliverables (with icons), and include a call-to-action, all presented in a premium, theme-adaptive design.
*   **🖼️ Gallery Page:** A dedicated space to display a collection of images or visual work.

**UI/UX & Design:**
*   **🚀 Powered by Once UI:** Leverages the comprehensive [Once UI](https://once-ui.com) component library for a consistent and high-quality user interface.
*   **🎨 Adaptive Theming:** Full support for **light and dark modes**, with all custom components and sections designed to adapt seamlessly using CSS variables from the Once UI theming system.
*   **📱 Responsive Design:** Optimized for a flawless experience across all devices, from desktops to mobile phones.
*   **✨ Smooth Animations & Micro-interactions:** Subtle hover effects and scroll-reveal animations on cards and content blocks enhance user engagement without being distracting.
*   **🧼 Clean & Modern Aesthetic:** Focus on readability, ample white space, and a professional presentation.
*   **🎨 Themed Footer:** A fully customizable footer that seamlessly integrates with the overall website theme, including dynamic content columns.

**Content Management & Customization:**
*   **📝 MDX Powered:** Author rich content for your blog posts, project details, and resources using MDX, allowing for both Markdown simplicity and React component power.
*   **⚙️ Easy Configuration:** Centralized configuration for site metadata, navigation, and content display options in `src/app/resources/config.js` and `content.js`.
*   **🔄 Conditional Rendering:** Easily toggle the display of entire pages (Blog, Work, Gallery, About) or specific sections based on your configuration.
*   **🔗 Automatic Social Links:** Configure your social media profiles once, and they're displayed automatically.

**Performance & SEO:**
*   **⚡ Fast Performance:** Built with Next.js for optimal loading speeds and performance.
*   **🔍 SEO Optimized:**
    *   Automatic generation of Open Graph and X (Twitter) card images for shared links using `next/og`.
    *   Automatic generation of schema.org structured data and metadata for improved search engine visibility.
*   **🖼️ Image Optimization:** Utilizes `next/image` where appropriate (e.g., in `Logo.tsx`) for optimized image delivery.

**Developer Experience:**
*   **🔒 Password Protection:** Option to password-protect specific routes or pages (configured via `.env.local`, see `PAGE_ACCESS_PASSWORD` in `.env.example`).
*   **💅 Linting & Formatting:** Integrated with ESLint (using `next/core-web-vitals`) and Biome for code quality and consistent formatting.
*   **🌐 Localization Ready:** An alternative i18n branch is available for multilingual support using `next-intl` (as mentioned in the original README).

---

## Tech Stack

Magic Portfolio is built with a modern, performant, and developer-friendly technology stack:

*   **Framework:** [Next.js](https://nextjs.org/) (v15+ with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI System:** [Once UI](https://once-ui.com) (Custom React component library)
*   **Styling:**
    *   [SCSS Modules](https://sass-lang.com/)
    *   CSS Variables (for Once UI theming - light/dark modes)
*   **Content Authoring:**
    *   [MDX](https://mdxjs.com/) (`@next/mdx`, `@mdx-js/loader`)
    *   `gray-matter` (for MDX frontmatter)
*   **Core Frontend Libraries:**
    *   [React](https://react.dev/) (v19)
    *   `classnames`
*   **Image Handling:**
    *   `next/image`
    *   `next/og`
    *   `sharp`
*   **Utilities & Others:**
    *   `react-icons`
    *   `cookie`
    *   `@floating-ui/react-dom`
*   **Development & Build Tools:**
    *   Node.js (v18.17+ recommended)
    *   npm / yarn
    *   ESLint (`eslint-config-next`)
    *   [Biome](https://biomejs.dev/)
    *   PostCSS (`postcss-preset-env`, etc.)

---

## Folder Structure

The project follows a standard Next.js (App Router) structure:

```
magic-portfolio/ 
├── public/ # Static assets (images, fonts, etc.) 
│ ├── images/ 
│ └── fonts/ 
├── src/ 
│ ├── app/ # Next.js App Router: pages, layouts, API routes, MDX content 
│ │ ├── (main)/ # Main application routes group (actual name may vary) 
│ │ │ ├── about/ 
│ │ │ ├── blog/ 
│ │ │ │ └── posts/ # MDX files for blog posts 
│ │ │ ├── gallery/ 
│ │ │ ├── resource/ 
│ │ │ │ └── posts/ # MDX files for resources 
│ │ │ ├── services/ 
│ │ │ ├── tech-stack/ 
│ │ │ └── work/ 
│ │ │ └── projects/ # MDX files for work projects 
│ │ │ ├── layout.tsx # Root layout 
│ │ │ └── page.tsx # Homepage 
│ │ ├── api/ # API routes 
│ │ ├── og/ # OG image generation route 
│ │ └── resources/ # Global content definitions (content.js, config.js) 
│ ├── components/ # Shared React components specific to this portfolio 
│ │ ├── about/ 
│ │ ├── services/ 
│ │ ├── tech-stack/ 
│ │ └── work/ # (and others like blog, resource if they have specific components) 
│ ├── once-ui/ # The Once UI custom component library 
│ │ ├── components/ # Individual UI components 
│ │ ├── styles/ # Global styles, tokens, theming for Once UI 
│ │ ├── icons.ts # Icon library definitions 
│ │ └── ... 
│ └── styles/ # Additional global application styles (if any) 
├── .env.example # Example environment variables 
├── .eslintrc.json # ESLint configuration 
├── biome.json # Biome (formatter/linter) configuration 
├── next.config.mjs # Next.js configuration 
├── package.json # Project dependencies and scripts 
├── README.md # This file 
└── tsconfig.json # TypeScript configuration
```

*   **`public/`**: Static assets accessible directly via URL.
*   **`src/app/`**: The heart of the Next.js application using the App Router. MDX content for blog, work, and resources is typically within respective subdirectories like `posts/` or `projects/`.
*   **`src/app/resources/`**: Holds JavaScript files (`content.js`, `config.js`) for global site data and configuration.
*   **`src/components/`**: Application-specific React components.
*   **`src/once-ui/`**: Source code for the Once UI design system/component library.

---

## Getting Started

Follow these steps to get a local copy of Magic Portfolio up and running.

### Prerequisites

*   **Node.js:** Version 18.17 or higher is recommended ([nodejs.org](https://nodejs.org/)).
*   **npm** (included with Node.js).

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/once-ui-system/magic-portfolio.git
    cd magic-portfolio
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables (Optional):**
    For features like password-protected pages:
    *   Duplicate `.env.example` to `.env.local`:
        ```bash
        cp .env.example .env.local
        ```
    *   Modify `PAGE_ACCESS_PASSWORD` in `.env.local` as needed.

---

## Running the Project

*   **Development Mode:** (Hot reloading, error reporting)
    ```bash
    npm run dev
    ```
    View at [http://localhost:3000](http://localhost:3000).

*   **Build for Production:**
    ```bash
    npm run build
    ```

*   **Start Production Server:** (After a successful build)
    ```bash
    npm run start
    ```

*   **Static Export (If Needed):**
    For purely static hosting (with limitations):
    ```bash
    npm run export
    ```
    Refer to [Next.js static export documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) for details. Standard Next.js deployment is generally preferred.

---

## Customizing Your Portfolio

Tailor Magic Portfolio to your needs:

*   **Site Configuration (`src/app/resources/config.js`):**
    *   Modify site metadata, theme settings (colors, fonts, styles via Once UI data attributes), display toggles for pages/features, and other global settings.
*   **Content Definitions (`src/app/resources/content.js`):**
    *   Edit personal information, social media links, homepage content, about page sections (intro, work experience, studies, skills), testimonial data, etc.
*   **Creating Content (MDX):**
    *   **Blog Posts:** Add/edit `.mdx` files in `src/app/blog/posts/`.
    *   **Work Projects:** Add/edit `.mdx` files in `src/app/work/projects/`.
    *   **Resources:** Add/edit `.mdx` files in `src/app/resource/posts/`.
    *   Use Markdown for text and frontmatter for metadata (title, date, summary, images, etc.).

---

## Code Quality: Linting and Formatting

*   **Linting (ESLint):**
    Check for code errors and style issues:
    ```bash
    npm run lint
    ```
    Configured with `eslint-config-next` (includes `next/core-web-vitals`).
*   **Formatting & More (Biome):**
    The project uses [Biome](https://biomejs.dev/) (see `biome.json`) for code formatting and additional linting.
    *   To format: `npx @biomejs/biome format --write .`
    *   To check: `npx @biomejs/biome check .`
    Consider editor integration for Biome for real-time feedback.

---



## Demo & Screenshots

### Live Demo
*   **[View the Demo Here](https://chowdari.in/)**

### Deployment
```bash
# Run the production deployment script
npm run deploy

# Or build manually
npm run build
npm start
```

### Docker Deployment
```bash
# Build and run with Docker
npm run docker:build
npm run docker:run
```

### Environment Variables for Production
Make sure to set these in your hosting platform:
- `PAGE_ACCESS_PASSWORD` - Password for protected routes
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` - EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` - EmailJS template ID  
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` - EmailJS public key

### Production Features Added
- ✅ Security headers and HTTPS enforcement
- ✅ Image optimization and compression
- ✅ Performance optimizations
- ✅ Docker containerization support
- ✅ Automated deployment scripts
- ✅ Production environment configurations

---
