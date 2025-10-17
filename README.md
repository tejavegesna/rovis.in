# ROVIS Technologies Website

A modern, responsive static website built with Next.js and Tailwind CSS, optimized for deployment on Cloudflare Pages.

## Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🎨 **Tailwind CSS** for rapid styling and responsive design
- 📱 **Mobile-first** responsive design
- ♿ **WCAG 2.1 Level AA** accessibility compliance
- 🚀 **Optimized for Cloudflare Pages** deployment
- 📊 **SEO optimized** with proper meta tags and semantic HTML
- 🔧 **TypeScript** for type safety
- 🎯 **Performance optimized** for Core Web Vitals

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

## Deployment to Cloudflare Pages

### Method 1: Git Integration (Recommended)

1. Push this code to a GitHub repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project" and connect your GitHub repo
4. Use these build settings:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. Deploy!

### Method 2: Direct Upload

1. Build the site locally:
   ```bash
   npm run build
   ```

2. Upload the `out` folder to Cloudflare Pages via the dashboard

## Customization

### Content Updates

Edit the content directly in the component files:

- **Hero section**: `components/Hero.tsx`
- **Services**: `components/Services.tsx`
- **About**: `components/About.tsx`
- **Portfolio**: `components/Portfolio.tsx`
- **Contact info**: `components/Contact.tsx` and `components/Footer.tsx`

### Styling

Update colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#0052CC',
      secondary: '#333333',
      accent: '#00C853',
    }
  }
}
```

## License

© 2024 ROVIS Technologies Private Limited. All rights reserved.
