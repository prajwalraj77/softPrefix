# SOFTPREFIX Website

Premium animated software company website built with Next.js + React + TypeScript + Tailwind CSS + Framer Motion.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Central configuration

Business information lives in:

- `src/config/company.ts`
- `src/config/contact.ts`
- `src/config/social.ts`
- `src/config/branding.ts`
- `src/config/seo.ts`
- `src/config/navigation.ts`

Change the values there instead of editing individual components.

## Contact form

The current demo validates Name + Phone and opens a prefilled WhatsApp message to the configured business WhatsApp number. For production, connect the form to a secure server-side lead API and WhatsApp Cloud API/email provider so notifications happen automatically without exposing secrets in the browser.
