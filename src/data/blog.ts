export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  isoDate: string;
  readTime: string;
  category: string;
  categorySlug: "development" | "design" | "tech-travel" | "career" | "tools";
  badgeText?: string;
  slug: string;
  views: number;
  tags: string[];
}

export interface BlogCategory {
  slug: "all" | "development" | "design" | "tech-travel" | "career" | "tools";
  label: string;
  count: number;
  iconName: "Code2" | "Palette" | "Plane" | "Briefcase" | "Wrench";
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "development",
    label: "Development",
    count: 3,
    iconName: "Code2",
  },
  {
    slug: "design",
    label: "Design",
    count: 1,
    iconName: "Palette",
  },
  {
    slug: "tech-travel",
    label: "Tech & Travel",
    count: 1,
    iconName: "Plane",
  },
  {
    slug: "career",
    label: "Career",
    count: 1,
    iconName: "Briefcase",
  },
  {
    slug: "tools",
    label: "Tools",
    count: 1,
    iconName: "Wrench",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-react",
    title: "Getting Started with React: A Beginner's Guide",
    excerpt:
      "React is a powerful library for building modern user interfaces. In this post, I'll walk you through the basics of React and how to set up your first...",
    content: `React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

### Why Learn React in 2025?
React remains the industry standard for frontend development with an unmatched ecosystem, robust community, and seamless integration with TypeScript and Tailwind CSS.

### Key Concepts to Master:
1. **JSX**: Writing HTML-like syntax within JavaScript.
2. **Components & Props**: Reusable UI blocks passing data downwards.
3. **State & Hooks**: Managing dynamic state with \`useState\` and lifecycle events with \`useEffect\`.
4. **Virtual DOM**: Efficient rendering and reconciliation engine.

Start simple by building interactive widgets like counters, todo lists, or theme switchers before diving into fullstack frameworks like Next.js.`,
    image: "/images/blog/react-guide.jpg",
    date: "Aug 10, 2025",
    isoDate: "2025-08-10",
    readTime: "5 min read",
    category: "Development",
    categorySlug: "development",
    badgeText: "Development",
    slug: "getting-started-react-beginners-guide",
    views: 1420,
    tags: ["React", "JavaScript", "Frontend", "Web Development"],
  },
  {
    id: "tech-changing-travel",
    title: "How Technology is Changing the Travel Industry",
    excerpt:
      "From online booking systems to AI travel assistants, technology is making travel easier, smarter, and more personalized. In this article, I explore...",
    content: `The travel industry is undergoing a digital renaissance. Innovations in mobile computing, cloud databases, and machine learning are revolutionizing how explorers discover, book, and experience destinations worldwide.

### The Rise of Digital Booking Platforms
Platforms like Kambata Travel demonstrate how regional tourism can be amplified through seamless digital interfaces, instant Telebirr & Chapa payment gateways, and geolocation-based guide services.

### Key Technological Drivers:
- **AI-Powered Itinerary Planners**: Personalized trip recommendations in seconds.
- **Real-Time Booking APIs**: Instant reservations for boutique hotels and eco-lodges.
- **Offline Maps & Navigation**: Empowering travelers in remote natural preserves.
- **Digital Payments**: Frictionless local and cross-border currency transfers.

As emerging regions adopt these digital platforms, authentic cultural and eco-tourism opportunities become globally accessible.`,
    image: "/images/blog/travel-tech.jpg",
    date: "Aug 5, 2025",
    isoDate: "2025-08-05",
    readTime: "4 min read",
    category: "Tech & Travel",
    categorySlug: "tech-travel",
    badgeText: "Tech & Travel",
    slug: "how-technology-is-changing-travel-industry",
    views: 980,
    tags: ["Travel Tech", "Tourism", "Mobile Apps", "Fintech"],
  },
  {
    id: "ui-ux-principles",
    title: "UI/UX Design Principles for Better User Experiences",
    excerpt:
      "Good design is not just about how it looks, but how it feels. In this post, I share key UI/UX design principles that help create simple and effective...",
    content: `Aesthetics capture attention, but thoughtful usability earns user loyalty. As developers, mastering fundamental design principles allows us to craft software that is intuitive, accessible, and delightful.

### Core Principles for Every Developer:
1. **Visual Hierarchy**: Guide the user's eye naturally through size, contrast, and spatial grouping.
2. **Consistency & Familiarity**: Standardize navigation patterns, button styles, and micro-interactions.
3. **Speed as a Feature**: Smooth animations and snappy feedback states create psychological satisfaction.
4. **Accessibility First (WCAG)**: High contrast ratios, accessible focus states, and keyboard navigable controls.

When design and code blend seamlessly, the product feels effortless to use.`,
    image: "/images/blog/ui-ux-design.jpg",
    date: "Jul 28, 2025",
    isoDate: "2025-07-28",
    readTime: "6 min read",
    category: "Design",
    categorySlug: "design",
    badgeText: "Design",
    slug: "ui-ux-design-principles-better-experiences",
    views: 1850,
    tags: ["UI/UX", "Figma", "Design Systems", "Product Design"],
  },
  {
    id: "nodejs-express-api",
    title: "Node.js and Express: Building a RESTful API",
    excerpt:
      "In this tutorial, I'll show you how to build a simple RESTful API using Node.js and Express. We'll cover routes, controllers, and connect it to a database...",
    content: `Node.js paired with Express provides a lightweight, non-blocking asynchronous environment ideally suited for high-throughput REST APIs and microservices.

### Architectural Best Practices:
- **Clean Folder Hierarchy**: Decouple routes, controllers, middleware, and database models.
- **Input Validation**: Use Zod or Joi to validate and sanitize incoming payloads.
- **JWT Authentication**: Protect endpoints with bearer token verification.
- **Centralized Error Handling**: Express custom error middlewares prevent unhandled rejections and maintain consistent error responses.

With proper indexing and connection pooling in MongoDB or PostgreSQL, your Node backend will easily handle thousands of requests per second.`,
    image: "/images/blog/nodejs-api.svg",
    date: "Jul 20, 2025",
    isoDate: "2025-07-20",
    readTime: "8 min read",
    category: "Development",
    categorySlug: "development",
    badgeText: "Backend",
    slug: "building-restful-apis-nodejs",
    views: 2100,
    tags: ["Node.js", "Express", "REST API", "Backend", "MongoDB"],
  },
  {
    id: "developer-journey-tips",
    title: "Tips for a Successful Developer Journey",
    excerpt:
      "Becoming a great developer is not just about coding. It's about consistency, curiosity, and the right mindset. Here are some tips that have...",
    content: `Learning software engineering can feel overwhelming with the constant flood of new frameworks and tooling. However, the most successful engineers cultivate enduring habits rather than chasing every fleeting trend.

### Principles That Move the Needle:
1. **Build Real Projects**: Theory is forgettable until you battle real runtime bugs and build working software.
2. **Read Source Code**: Inspect open-source libraries and inspect how seasoned developers architect solutions.
3. **Embrace Problem Solving**: View errors and failed tests as clues rather than roadblocks.
4. **Communicate Clearly**: Documenting decisions and explaining code clearly is as vital as writing it.

Remember, growth in software engineering is compounding—small daily improvements yield extraordinary long-term expertise.`,
    image: "/images/blog/dev-journey.svg",
    date: "Jul 12, 2025",
    isoDate: "2025-07-12",
    readTime: "5 min read",
    category: "Career",
    categorySlug: "career",
    badgeText: "Career",
    slug: "tips-successful-developer-journey",
    views: 1670,
    tags: ["Career", "Mindset", "Productivity", "Learning"],
  },
  {
    id: "useful-developer-tools",
    title: "Useful Tools Every Developer Should Know",
    excerpt:
      "The right tools can make your development faster, easier, and more enjoyable. In this post, I share some of the tools I use and recommend...",
    content: `A developer's productivity multiplies when equipped with the right arsenal of developer tools, CLI utilities, and debugging extensions.

### Essential Picks in My Daily Stack:
- **VS Code + Extensions**: Error Lens, GitLens, Tailwind CSS IntelliSense, Prettier.
- **API Testing**: Postman / Bruno for fast endpoint validation and automated test collections.
- **Database GUI**: MongoDB Compass & TablePlus for visual schema and query inspection.
- **Terminal Utilities**: Oh My Posh / Starship prompt with zsh-autosuggestions.
- **Design Hand-off**: Figma for inspecting design tokens and exporting SVG assets.

Invest time to configure your development environment—it pays dividends every single day.`,
    image: "/images/blog/dev-tools.svg",
    date: "Jun 30, 2025",
    isoDate: "2025-06-30",
    readTime: "7 min read",
    category: "Tools",
    categorySlug: "tools",
    badgeText: "Tools",
    slug: "useful-tools-every-developer-should-know",
    views: 1320,
    tags: ["Developer Tools", "VS Code", "Productivity", "Setup"],
  },
  {
    id: "fullstack-architecture-nextjs",
    title: "Fullstack Architecture with Next.js and Tailwind CSS",
    excerpt:
      "Explore how server-side rendering, edge caching, and atomic CSS design systems combine to create ultra-fast web applications.",
    content: `Modern web development demands lightning-fast initial page loads paired with rich interactive clients. Next.js App Router provides the hybrid architecture necessary for enterprise-grade applications.`,
    image: "/images/blog/react-guide.jpg",
    date: "Jun 15, 2025",
    isoDate: "2025-06-15",
    readTime: "6 min read",
    category: "Development",
    categorySlug: "development",
    badgeText: "Development",
    slug: "fullstack-architecture-nextjs",
    views: 890,
    tags: ["Next.js", "Architecture", "Tailwind CSS", "Fullstack"],
  },
];

export const recentPosts = blogPosts.slice(0, 5);
