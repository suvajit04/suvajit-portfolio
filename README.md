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

## Documents

The PDF files are in `public/documents/`:

- `Suvajit_Sahoo_Resume.pdf`
- `HisNet_Final_Year_Project_Report.pdf`

The resume download and HisNet report viewer use these files directly.

## Personalization checklist

1. Verify all profile details before publishing.
2. Add a LinkedIn URL if you want it shown.
3. Add verified GitHub repository URLs for HisNet and MedPulse if those repositories are public.
4. If you want a server-backed contact form, connect a provider or API endpoint. The current contact form intentionally uses a `mailto:` fallback and clearly tells the visitor that they must send the email from their email app.
5. Set `NEXT_PUBLIC_SITE_URL` in your deployment environment if the deployed domain differs from the configured default.

## Accuracy notes

- HisNet model implementation details follow the uploaded project report, which describes the TensorFlow Functional API. PyTorch is retained in the separate resume skill list and is not represented as the implementation framework for HisNet.
- The research page reports training accuracy (90.41%), validation accuracy (86.96%), independent test accuracy (95.43%), and 500 training epochs as stated in the report.
- The portfolio does not fabricate per-epoch chart data, GitHub repository metrics, or clinical validation claims.
- MedPulse and the Task Management System are described only from the resume information supplied.

## Deploy

The project can be deployed to Vercel or another Node.js hosting provider. For Netlify, use the Next.js runtime/plugin supported by your chosen Netlify setup and run `npm run build`.
