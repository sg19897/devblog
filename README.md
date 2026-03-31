# DevBlog

A full-featured blog site built with Next.js 14 App Router.

## Features

- Home page with featured post and recent posts grid
- `/blog` listing page with category filter and search
- `/blog/[slug]` dynamic post pages with related posts
- `/about` page
- Static site generation with `generateStaticParams`
- SEO metadata with `generateMetadata`
- Sticky header with navigation
- 6 sample posts covering HTML, CSS, JavaScript, React, and Next.js

## Tech Stack

- Next.js 14 (App Router)
- React 18
- CSS-in-JS (inline styles)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.js        # Root layout with header/footer
│   ├── page.js          # Home page
│   ├── about/page.js    # About page
│   └── blog/
│       ├── page.js      # Blog listing
│       └── [slug]/
│           └── page.js  # Individual post
└── data/
    └── posts.js         # Blog post data
```
