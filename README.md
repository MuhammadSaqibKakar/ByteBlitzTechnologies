# ByteBlitz Technologies Website

Modern Next.js website for ByteBlitz Technologies, built with React, Tailwind CSS, Framer Motion, and Lucide icons.

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm install
npm run db:generate
npm run build
npm start
```

Full verification loop:

```bash
npm run verify
```

## Hostinger Node.js Deployment

This project is configured with `output: "standalone"` in `next.config.ts`, which is useful for Node.js hosting. It also uses MySQL through Prisma for admin access and saved contact requests.

### Database Setup

1. In Hostinger hPanel, create a MySQL database, database user, and password.
2. Add these environment variables to your Node.js app or `.env` file:

```bash
DATABASE_URL="mysql://DB_USER:DB_PASSWORD@DB_HOST:3306/DB_NAME"
ADMIN_ACCESS_CODE="CHANGE_THIS_PRIVATE_ADMIN_CODE"
```

3. Run the database setup:

```bash
npm run db:migrate
npm run db:seed
```

Set `ADMIN_ACCESS_CODE` privately on Hostinger, then run the seed command. The admin code is saved in the database as a secure hash. The site does not compare the admin code in frontend code.

### Hidden Admin Access

Open the website and press:

```bash
Ctrl + Shift + X
```

Enter the admin code after you have seeded it into the database. Contact form submissions are saved in MySQL when `DATABASE_URL` is connected.

Option A, upload full project:

1. Upload the project to Hostinger or connect a Git repository.
2. In Hostinger hPanel, create a Node.js app and choose Node.js 20 or newer.
3. Set the app root to this project folder.
4. Add `DATABASE_URL` and `ADMIN_ACCESS_CODE`.
5. Run `npm install`, `npm run db:migrate`, `npm run db:seed`, and `npm run build`.
6. Set the start command to `npm start`.

Option B, upload standalone build:

1. Run `npm install` and `npm run build` locally.
2. Copy `.next/static` into `.next/standalone/.next/static`.
3. Copy `public` into `.next/standalone/public`.
4. Upload the contents of `.next/standalone` to the Hostinger app folder.
5. Set the startup file or command to `node server.js`.

## Where To Edit Later

- Company name, phone, email, WhatsApp messages, services, portfolio, stats, and contact cards: `src/lib/site.ts`
- Database schema: `prisma/schema.prisma`
- Admin seed script: `prisma/seed.ts`
- Hidden admin panel: `src/components/AdminShortcut.tsx`
- Home page sections: `src/app/page.tsx`
- Services page: `src/app/services/page.tsx`
- POS page: `src/app/pos-systems/page.tsx`
- Portfolio page: `src/app/portfolio/page.tsx`
- About page: `src/app/about/page.tsx`
- Contact page and WhatsApp form: `src/app/contact/page.tsx` and `src/components/ContactForm.tsx`
- Global colors and background effects: `src/app/globals.css`
