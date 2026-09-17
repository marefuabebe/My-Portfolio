# Marefu Abebe — Portfolio

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, React Router, Lucide React, and Framer Motion.

## Features

- **8 pages:** Home, About, Projects, Skills, Experience, Services, Blog, Contact
- **Dark futuristic UI** with glassmorphism, blue glow effects, and smooth animations
- **Fully responsive** for mobile, tablet, and desktop
- **Reusable components:** Navbar, Footer, Button, ProjectCard, SkillCard, SectionTitle, Timeline, ContactForm, and more
- **SEO-friendly** meta tags and semantic HTML

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router v7
- Framer Motion
- Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── cards/       # ProjectCard, SkillCard, ServiceCard, BlogCard
│   ├── layout/      # Navbar, Footer, Layout, PageWrapper
│   ├── sections/    # Timeline, ContactForm
│   └── ui/          # Button, GlassCard, SectionTitle, SocialLinks
├── data/            # Personal info, projects, skills, experience, etc.
├── pages/           # All 8 page components
├── App.tsx          # Router configuration
└── index.css        # Tailwind + custom theme
```

## Customization

Edit content in `src/data/`:

- `personal.ts` — Name, bio, contact info, social links
- `projects.ts` — Project listings and categories
- `skills.ts` — Skill categories and proficiency levels
- `experience.ts` — Timeline entries
- `services.ts` — Service offerings
- `blog.ts` — Blog post listings

Replace the placeholder portrait URL in `Home.tsx` and `About.tsx` with your own photo.

## License

MIT
