# naidze.github.io

A GitHub Pages site built with Jekyll.

## Setup

1. Install dependencies:
   ```bash
   bundle install --path vendor/bundle
   ```

2. Build the site:
   ```bash
   bundle exec jekyll build
   ```

3. Serve locally (optional):
   ```bash
   bundle exec jekyll serve
   ```
   Then visit `http://localhost:4000` in your browser.

## Customization

- Edit `_config.yml` to change site settings
- Modify `index.md` to update the homepage
- Add more pages by creating new `.md` or `.html` files
- Customize the theme in `_config.yml` (currently using `minima`)

## Deployment

This site is automatically deployed to GitHub Pages when you push to the `main` branch.