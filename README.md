# ZalesMachine Website

Landing page and marketing website for ZalesMachine, a B2B sales automation and AI-powered lead generation platform.

## Overview

This is a Next.js application built to showcase the ZalesMachine System, a proven framework that helps B2B companies implement AI and automation in their sales, marketing, and growth processes. The website highlights the platform's capabilities, pricing options, and success stories.

## Features

- Modern, responsive design with dark theme
- Interactive pricing section with three service tiers
- ROI calculator for potential clients
- Video demonstrations and testimonials
- FAQ section
- Multi-language support (English/Spanish)
- Smooth scrolling navigation
- Mobile-responsive layout

## Technology Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abrilmarangoni/inspo.git
cd inspo
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

Note: The `--legacy-peer-deps` flag is required due to peer dependency conflicts between React 19 and some packages.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
inspo/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main landing page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── home/             # Home page components
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature-specific components
├── contexts/              # React contexts
│   └── language-context.tsx  # Language translation context
├── lib/                   # Utility functions
├── public/               # Static assets
│   ├── logo.png          # Company logo
│   └── icon.svg          # Favicon
└── styles/               # Global styles
```

## Key Components

- **Hero Section**: Main landing area with value proposition
- **Features**: Overview of platform capabilities
- **Pricing Section**: Three pricing tiers (In-House, Agency, Custom)
- **ROI Calculator**: Interactive calculator for potential ROI
- **Testimonials**: Client success stories
- **FAQ**: Frequently asked questions
- **Video Section**: Product demonstrations

## Customization

### Updating Content

Most content can be updated by editing the component files in the `components/` directory. Pricing information is located in `components/pricing-section.tsx`.

### Styling

The project uses Tailwind CSS for styling. Global styles are defined in `app/globals.css` and `styles/globals.css`.

### Theme

The application uses a dark theme by default. Theme configuration can be modified in `app/layout.tsx`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The application can be deployed to Vercel, Netlify, or any platform that supports Next.js applications.

For Vercel deployment:
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the development team.

