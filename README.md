# Suvajit Sahoo — Developer Portfolio

A premium, responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and responsive CSS data visualizations.

The project includes the resume and the 44-page HisNet final-year project report supplied in this conversation.

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer (npm 9 may also work)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Included routes

- `/` — Home
- `/about` — About
- `/skills` — Technical skills with category filtering
- `/experience` — Professional experience
- `/projects` — Project showcase
- `/projects/hisnet` — HisNet case study, interactive architecture, dataset and results, report viewer
- `/projects/medpulse` — MedPulse details
- `/projects/task-management` — Internal Engineering Task Management System details
- `/projects/poy-calculator` — POY Utility Calculators details
- `/contact` — Contact form with a mailto fallback

## Live demo

- https://suvajitportfolioo.netlify.app/

## Deploy

The project can be deployed to Vercel or another Node.js hosting provider. For Netlify, use the Next.js runtime/plugin supported by your chosen Netlify setup and run `npm run build`.
