# FitUnified Website

A modern, responsive marketing website for FitUnified built with React, TypeScript, and Vite. This project showcases the FitUnified platform with an engaging landing page, product information, pricing details, team profiles, and customer testimonials.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)

## ✨ Features

- **Responsive Design**: Mobile-first, fully responsive UI built with Tailwind CSS
- **Modern UI Components**: Comprehensive component library from shadcn/ui
- **Multi-page Navigation**: React Router for seamless page transitions
- **Contact Forms**: React Hook Form integration for robust form handling
- **Smooth Animations**: Framer Motion for engaging page transitions and animations
- **Dark/Light Theme Support**: Theme switching with next-themes
- **Accessibility**: Built with accessibility best practices using Radix UI primitives
- **Type Safety**: Full TypeScript support for maintainability and developer experience
- **SEO Optimized**: Clean semantic HTML structure
- **Fast & Optimized**: Vite-powered fast builds and HMR

### Page Sections

- **Hero Section**: Eye-catching welcome screen with CTA
- **Problem Section**: Identifies market pain points
- **Solution Section**: Explains FitUnified's approach
- **Core Values Section**: Displays company values
- **Differentiation Section**: Key competitive advantages
- **Pricing Section**: Service tiers and pricing
- **Testimonials Section**: Customer success stories
- **Vision Section**: Long-term company vision
- **Founders Section**: Team profiles and backgrounds
- **FAQ Section**: Common questions and answers
- **Supported By Section**: Partner logos and investors
- **Footer**: Navigation and legal links

## 🛠️ Tech Stack

### Core Framework
- **React 18.3** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling
- **React Router 6** - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful SVG icons
- **Framer Motion** - Animation library

### Form & State Management
- **React Hook Form** - Performant, flexible forms
- **TanStack React Query** - Server state management
- **Zod** (via hookform/resolvers) - TypeScript-first schema validation

### Testing & Linting
- **Vitest** - Unit testing framework
- **ESLint** - Code quality and style
- **PostCSS** - CSS processing

### Other Libraries
- **React Day Picker** - Date picker component
- **Recharts** - React charting library
- **Embla Carousel** - Carousel/slider component
- **Next Themes** - Theme management

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **bun** (this project uses bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fitunified-website-final
   ```

2. **Install dependencies**

   Using bun (recommended):
   ```bash
   bun install
   ```

   Or using npm:
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (Vite default port)
   - Development server will auto-reload on file changes

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                          # shadcn/ui component library
│   │   ├── accordion.tsx
│   │   ├── alert.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   └── ...                      # 50+ UI components
│   ├── Navbar.tsx                   # Navigation component
│   ├── HeroSection.tsx              # Landing hero section
│   ├── ProblemSection.tsx           # Problem statement
│   ├── SolutionSection.tsx          # Solution overview
│   ├── CoreValuesSection.tsx        # Company values
│   ├── DifferentiationSection.tsx   # Key differentiators
│   ├── PricingSection.tsx           # Pricing tiers
│   ├── TestimonialsSection.tsx      # Customer testimonials
│   ├── VisionSection.tsx            # Company vision
│   ├── FoundersSection.tsx          # Team bios
│   ├── FAQSection.tsx               # FAQ content
│   ├── SupportedBySection.tsx       # Partner/investor logos
│   ├── CTASection.tsx               # Call-to-action
│   ├── BookDemoModal.tsx            # Demo booking modal
│   └── Footer.tsx                   # Footer
├── pages/
│   ├── Index.tsx                    # Landing page
│   ├── Product.tsx                  # Product details page
│   ├── Pricing.tsx                  # Pricing page
│   ├── About.tsx                    # About page
│   ├── Contact.tsx                  # Contact page
│   └── NotFound.tsx                 # 404 page
├── hooks/
│   ├── use-mobile.tsx               # Mobile responsiveness hook
│   └── use-toast.ts                 # Toast notification hook
├── lib/
│   └── utils.ts                     # Utility functions
├── assets/                          # Images and static assets
├── App.tsx                          # Main app component
├── main.tsx                         # Entry point
├── index.css                        # Global styles
└── vite-env.d.ts                    # Vite environment types

public/
├── robots.txt                       # SEO robots file
├── favicon.ico                      # Site favicon
└── ...                              # Other static files

Configuration Files:
├── vite.config.ts                   # Vite configuration
├── vitest.config.ts                 # Vitest configuration
├── tailwind.config.ts               # Tailwind CSS config
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.js                # PostCSS configuration
├── eslint.config.js                 # ESLint configuration
└── components.json                  # shadcn/ui configuration
```

## 📝 Available Scripts

```bash
# Development
bun dev              # Start development server with HMR

# Building
bun run build        # Build for production (optimized)
bun run build:dev    # Build with development settings

# Testing & Linting
bun run test         # Run tests once
bun run test:watch   # Run tests in watch mode

# Code Quality
bun run lint         # Run ESLint on all files

# Preview
bun run preview      # Preview production build locally
```

## 🔧 Development

### Code Style & Formatting

The project uses ESLint for code quality. Run the linter before committing:

```bash
bun run lint
```

### Component Development

When creating new components:
1. Use TypeScript for type safety
2. Follow the existing component structure in `src/components/`
3. Import UI components from `@/components/ui/`
4. Use Tailwind CSS utility classes for styling
5. Add proper prop typing and documentation

### Adding New Pages

1. Create a new file in `src/pages/`
2. Add the route in `src/App.tsx`:
   ```tsx
   <Route path="/your-path" element={<YourPage />} />
   ```
3. Add navigation link in `Navbar.tsx` if needed

### Environment Variables

Create a `.env.local` file in the root directory for local development secrets:

```env
VITE_API_URL=your_api_url_here
VITE_ENVIRONMENT=development
```

Note: All `VITE_` prefixed variables are exposed to the client-side code.

## 🏗️ Building for Production

### Production Build

```bash
bun run build
```

This creates an optimized production bundle in the `dist/` directory with:
- Minified JavaScript and CSS
- Code splitting for better caching
- Asset optimization
- Tree shaking to remove unused code

### Preview Production Build

Before deploying, preview the production build locally:

```bash
bun run preview
```

Then open `http://localhost:4173` in your browser.

### Deployment

The `dist/` directory contains static files ready for deployment to any static hosting:
- **Vercel**: Connect GitHub repo, auto-deploys on push
- **Netlify**: Drag and drop `dist/` or connect Git repository
- **AWS S3 + CloudFront**: Upload `dist/` to S3 bucket
- **GitHub Pages**: Push `dist/` to `gh-pages` branch
- **Traditional Hosting**: Upload `dist/` via FTP/SSH

## 🧪 Testing

The project uses **Vitest** for unit and integration testing.

### Running Tests

```bash
# Run tests once
bun run test

# Watch mode (re-run on file changes)
bun run test:watch
```

### Writing Tests

Test files are located in `src/test/` or colocated with components:
```typescript
// example.test.ts
import { describe, it, expect } from 'vitest';

describe('MyComponent', () => {
  it('should render correctly', () => {
    expect(true).toBe(true);
  });
});
```

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and write/update tests
3. Run linter: `bun run lint`
4. Run tests: `bun run test`
5. Commit with clear messages: `git commit -m "Add feature description"`
6. Push to the branch: `git push origin feature/your-feature`
7. Create a Pull Request with a description of changes

## 📦 Dependencies

### Key Dependencies
- `react` & `react-dom` - React framework
- `react-router-dom` - Client-side routing
- `clsx` & `class-variance-authority` - CSS class utilities
- `zod` - Schema validation
- `axios` - HTTP client (if API integration needed)

### Dev Dependencies
- `typescript` - Type checker
- `vite` - Build tool
- `tailwindcss` - CSS framework
- `eslint` - Linter
- `vitest` - Test runner
- `@types/react` - React type definitions

Full dependency list available in `package.json`.

## 📄 License

This project is proprietary and confidential.

## 👥 Support

For questions or issues:
- Open an issue on GitHub
- Contact the development team
- Check FAQ section on the website

## 🚀 Performance Tips

- Use React DevTools Profiler to identify slow renders
- Lazy load components with `React.lazy()` for large pages
- Use Vite's code splitting for better bundling
- Monitor bundle size with `npm run build` output
- Enable source maps in development for better debugging

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [React Router Docs](https://reactrouter.com)
- [Vitest Documentation](https://vitest.dev)
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
