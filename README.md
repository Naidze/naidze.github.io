# naidze.github.io

A GitHub Pages site built with React, TypeScript, and Vite.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```
   Then visit `http://localhost:5173` in your browser.

3. Build for production:
   ```bash
   npm run build
   ```

## Customization

- Edit `src/pages/Home.tsx` to update the homepage
- Edit `src/pages/About.tsx` to update the about page
- Add more pages by creating new components in `src/pages/` and adding routes in `src/App.tsx`
- Customize the layout in `src/components/Layout.tsx`
- Modify styles in `src/index.less` and `src/components/Layout.less`

## Deployment

This site is automatically deployed to GitHub Pages when you push to the `main` branch using GitHub Actions.

The deployment workflow:
1. Builds the React app
2. Deploys the `dist` folder to GitHub Pages
3. Your site will be available at `https://naidzinavicius.dev`

## Project Structure

```
├── src/
│   ├── components/     # Reusable components (Layout)
│   ├── pages/         # Page components (Home, About)
│   ├── App.tsx        # Main app component with routing
│   ├── main.tsx       # Entry point
│   ├── vite-env.d.ts  # Vite TypeScript definitions
│   └── index.less     # Global styles
├── public/            # Static assets (favicon, etc.)
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
├── tsconfig.node.json # TypeScript config for Node.js files
└── package.json       # Dependencies and scripts
