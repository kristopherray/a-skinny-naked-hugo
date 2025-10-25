# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site generator project. Hugo is a fast and flexible static site generator built with Go.

## Development Commands

### Starting the Development Server
```bash
hugo server
```
This starts the Hugo development server with live reload enabled. The site will typically be available at http://localhost:1313.

For development with drafts visible:
```bash
hugo server -D
```

### Building the Site
```bash
hugo
```
This generates the static site in the `public/` directory (which is the default output directory).

### Creating New Content
```bash
hugo new content/posts/my-post.md
```
This creates a new content file using the archetype template defined in `archetypes/default.md`.

## Project Structure

- `archetypes/` - Content templates for new pages/posts
- `assets/` - Files to be processed (SCSS, JS, images for processing)
- `content/` - Markdown content files that become pages
- `data/` - Configuration data files (JSON, YAML, TOML)
- `i18n/` - Translation files for multi-language support
- `layouts/` - HTML templates for rendering content
- `static/` - Static files copied directly to output (images, CSS, JS)
- `themes/` - Hugo themes (currently empty)
- `hugo.yaml` - Main configuration file
- `public/` - Generated output directory (created when building)

## Configuration

The main site configuration is in `hugo.yaml`:
- `baseURL` - The root URL for the site
- `languageCode` - Site language
- `title` - Site title

## Content Architecture

Content files use Hugo's front matter format (TOML by default, between `+++` delimiters):
- `date` - Publication date
- `draft` - Whether content is a draft (drafts not published by default)
- `title` - Page title

Content is written in Markdown below the front matter.

## Frontend Framework

This site uses Bootstrap 5.3.8 **vendored locally** for maximum stability and portability. The framework is compiled from SCSS with only essential components included to reduce bundle size.

### Bootstrap Setup (Vendored)
- **Version**: Bootstrap 5.3.8 (locked and vendored)
- **Location**: `assets/vendor/bootstrap/scss/` - Complete Bootstrap SCSS source
- **Custom Build**: `assets/sass/bootstrap-custom.scss` imports only needed components:
  - Grid system (containers, grid)
  - Essential components (navbar, cards, buttons, badges, pagination, breadcrumb, modals, forms, dropdowns)
  - Utilities and helpers
- **Styling**: Custom styles are in `assets/sass/custom.scss` which imports the custom Bootstrap build
- **JavaScript**: Bootstrap JS bundle is in `static/js/bootstrap.bundle.min.js`
- **No npm required**: The project builds without installing node_modules

### Why Vendored?
Bootstrap is copied locally instead of using npm dependencies to ensure:
- ✅ **Stability** - Version locked, won't break with updates
- ✅ **Portability** - No `npm install` required
- ✅ **Simplicity** - Clone and build immediately
- ✅ **Template-ready** - Perfect for reusable Hugo templates

### Adding More Bootstrap Components
To add additional Bootstrap components, uncomment the desired imports in `assets/sass/bootstrap-custom.scss`. Available components include:
- Button groups, tooltips, carousels, spinners, offcanvas, toasts, etc.

### Updating Bootstrap (Optional)
If you need to update Bootstrap in the future:
1. Install Bootstrap via npm: `npm install bootstrap@5.3.x`
2. Copy SCSS: `cp -r node_modules/bootstrap/scss assets/vendor/bootstrap/`
3. Copy JS: `cp node_modules/bootstrap/dist/js/bootstrap.bundle.min.js static/js/`
4. Test thoroughly before committing

### Hugo Build Commands
- `hugo server -D` - Start development server with drafts
- `hugo --gc --minify` - Build production site

## Special Content Collections

### Logo Carousel
The site includes an infinite scrolling logo carousel managed through a content collection:
- **Content**: Create logo entries in `/content/logos/` with front matter specifying the image path
- **Layouts**: Empty list and single templates in `/layouts/logos/` prevent these pages from rendering
- **Sitemap**: Logos are excluded from `sitemap.xml` via custom sitemap template
- **Styling**: Carousel styles are in `assets/sass/custom.scss`

Example logo entry:
```markdown
+++
title = 'Company Name'
date = 2024-01-01T00:00:00Z
draft = false
image = '/images/logos/logo.png'
weight = 1
+++
```

## Deployment

### Netlify Deployment

The site is configured for deployment on Netlify via `netlify.toml`:
- Build command: `hugo --gc --minify`
- Publish directory: `public/`
- Hugo version: 0.152.2 (extended)
- **No Node.js required** - Bootstrap is vendored locally

To deploy to Netlify:
1. Push the repository to GitHub/GitLab/Bitbucket
2. Connect the repository to Netlify
3. Netlify will automatically detect the `netlify.toml` and build settings
4. The site will build and deploy automatically on each push to the main branch

**Note**: The `node_modules/` directory is excluded via `.gitignore` and is not needed for deployment.

Before deploying, update `baseURL` in `hugo.yaml` to match your Netlify domain.
