# Sathwin Reddy Julakanti - Portfolio

A modern, high-performance portfolio website showcasing full-stack engineering projects, cloud infrastructure experience, and AI/ML systems development.

## 🚀 Live Demo

**[View Portfolio →](https://sathwin-portfolio.vercel.app)**

## 💻 Tech Stack

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS v3 with custom design system
- **Animations:** Framer Motion for smooth transitions
- **Typography:** Geist Sans & Geist Mono fonts
- **Deployment:** Vercel with automatic CI/CD

## 🎯 Key Features

### Professional Presentation
- **Engineer Specification Design** - Technical, blueprint-inspired aesthetic
- **Animated Profile Section** - Professional image with hover effects
- **Real-time TypeWriter Effect** - Dynamic role transitions
- **Responsive Design** - Optimized for mobile, tablet, and desktop

### Project Showcase
- **6 Production Projects** - Full-stack, cloud, and AI/ML systems
- **Tech Stack Visualization** - Color-coded technology pillars
- **GitHub Integration** - Direct links to source code
- **Project Previews** - Custom SVG visualizations

### Experience & Credentials
- **Complete Timeline** - Internships, research, and teaching experience
- **Awards & Certifications** - AWS SAA, Azure AZ-204, academic honors
- **Operations Cards** - Infrastructure, CI/CD, observability highlights
- **Contact Integration** - Direct links to email, LinkedIn, GitHub

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/sathwin/sathwin-portfolio.git
cd sathwin-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view locally.

## 📁 Project Structure

```
portfolio/
├── app/                  # Next.js app router pages
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Hero.tsx        # Hero section with profile
│   ├── Projects.tsx    # Project showcase
│   ├── Operations.tsx  # DevOps & infrastructure
│   └── ...
├── lib/                # Data and utilities
│   └── data.ts        # Portfolio content (typed)
├── public/            # Static assets
│   ├── profile.jpg   # Profile image
│   └── projects/     # Project preview images
└── tailwind.config.ts # Design system configuration
```

## 🎨 Design System

### Color Palette
- **Background:** `#080E1A` (Navy)
- **Surface:** `#0F1825` (Card backgrounds)
- **Accent Blue:** `#5B8CFF` (Full-stack)
- **Accent Teal:** `#4ECBA0` (Cloud/DevOps)
- **Accent Amber:** `#EF9F27` (AI/ML)

### Typography
- **Headings:** Geist Sans (tracking-tighter for impact)
- **Code/Metrics:** Geist Mono (technical precision)
- **Body:** Geist Sans (clean readability)

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 2.5s
- **Bundle Size:** Optimized with Next.js code splitting

## 🔧 Customization

All portfolio content is centralized in `lib/data.ts` as typed constants:

```typescript
export const personalInfo = { ... }
export const projects: Project[] = [ ... ]
export const experience: Experience[] = [ ... ]
export const awards: Award[] = [ ... ]
```

Simply update the data file to reflect your own information.

## 📝 License

© 2026 Sathwin Reddy Julakanti. All rights reserved.

---

**Built with Next.js 14** | **Deployed on Vercel** | **Designed for Impact**
