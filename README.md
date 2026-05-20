# Miigii Site

Official website for Miigii, featuring discography releases, artist details, and character pages.

## Live Site

https://miigii.netlify.app

## Overview

This project is a React + TypeScript single-page site built with Vite. It includes:

- Homepage with artist profile and featured content
- Discography grouped by Albums, EPs, and Singles
- Character gallery with dedicated character detail pages
- Release detail pages with streaming and media links
- In-page anchor navigation and scroll-to-top behavior between routes

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS + daisyUI
- ESLint

## Project Structure

- `src/pages` - Main route pages (`Home`, `ReleaseDetail`, `CharacterDetail`)
- `src/components` - Reusable UI components (cards, navbar)
- `src/data.ts` - Main release, character, and artist metadata
- `public/` - Static content and assets (albums, characters, markdown files)

## Development

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview production build locally:

```bash
pnpm preview
```

Run linting:

```bash
pnpm lint
```

## Content Updates

- Add or edit releases/characters in `src/data.ts`
- Add matching images and static files under `public/`
- Release and character details are resolved via route params (`/release/:id`, `/character/:id`)
