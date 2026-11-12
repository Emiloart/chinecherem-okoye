# Okoye Melody Chinecherem — Portfolio

A responsive professional portfolio for Okoye Melody Chinecherem, Medical Laboratory Technician.

## Stack

- Next.js App Router
- React
- TypeScript
- Custom CSS
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Content source

Professional details are based on the supplied CV. The site intentionally does not add qualifications, certifications, test competencies or employment claims that are not stated in that document.

## Profile photograph

The hero includes a reserved portrait frame. To add the approved profile photograph:

1. Add the image to `public/images/` (for example, `melody-profile.jpg`).
2. Replace the placeholder inside `src/app/page.tsx` with Next.js `Image`.
3. Use a properly licensed/approved image and provide meaningful alt text.

## Before publishing

- Confirm that the phone number and email address are intended for public display.
- Add the approved profile photograph.
- Replace the placeholder `metadataBase` URL in `src/app/layout.tsx` with the final production domain.
- Run `npm run build` and review the deployed site on mobile and desktop.
