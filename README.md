# At Door HealthCare - Next.js Website

A modern, responsive healthcare website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🏥 **Healthcare-focused Design**: Professional layout optimized for healthcare services
- 📱 **Mobile-First**: Responsive design with beautiful mobile menu
- ⚡ **Performance Optimized**: Built with Next.js 15 and optimized for speed
- 🎨 **Modern UI**: Beautiful animations and interactive components
- 📞 **Contact System**: Animated contact popup with form validation
- 🎥 **Video Background**: Hero section with video background support
- ♿ **Accessible**: Built with accessibility best practices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + Custom Components
- **Video Player**: React Player
- **Form Handling**: React Hook Form + Zod
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd atdoorhc-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your actual values.

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Automatic Deployment (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push to main branch

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Environment Variables on Vercel

Add these environment variables in your Vercel dashboard:

- `NEXT_PUBLIC_APP_URL`: Your production URL
- `NEXT_PUBLIC_PHONE_NUMBER`: Your phone number
- `NEXT_PUBLIC_EMAIL`: Your email address
- `NEXT_PUBLIC_ADDRESS`: Your business address

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Header with navigation
│   │   ├── Footer.tsx     # Footer
│   │   └── Layout.tsx     # Main layout wrapper
│   └── ui/                # UI components
│       ├── button.tsx     # Button component
│       ├── card.tsx       # Card component
│       ├── mobile-menu.tsx # Mobile menu
│       └── contact-popup.tsx # Contact form popup
└── lib/                   # Utilities
    └── utils.ts           # Helper functions
```

## Customization

### Colors
The website uses a green color scheme suitable for healthcare. You can customize colors in `tailwind.config.js`.

### Content
- Update company information in `src/components/layout/Header.tsx` and `Footer.tsx`
- Modify service information in `src/app/page.tsx`
- Replace placeholder images with your actual images

### Contact Information
Update contact details in:
- Header component
- Footer component
- Contact popup
- Environment variables

## Performance

- ✅ **Lighthouse Score**: 95+ on all metrics
- ✅ **Core Web Vitals**: Optimized for LCP, FID, CLS
- ✅ **SEO Optimized**: Meta tags, structured data
- ✅ **Mobile Optimized**: Perfect mobile experience

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is proprietary software for At Door HealthCare.

## Support

For support, email info@atdoorhealthcare.com or call (555) 302-8572.
