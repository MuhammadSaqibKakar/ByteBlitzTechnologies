# ByteBlitz Technologies

Official web application for **ByteBlitz Technologies**, built as a modern, responsive business presence for software services, digital solutions, portfolio work, and customer enquiries.

## ✨ Highlights

- Responsive, production-oriented Next.js interface
- Service, portfolio, about, and contact experiences
- Motion and interaction design with Framer Motion
- Database-backed contact/enquiry workflow
- Administrative functionality protected by server-side access controls
- Standalone Node.js build support for production hosting

## 🛠️ Tech Stack

- **Next.js / React / TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**
- **Prisma ORM**
- **MySQL**
- **Node.js**

## 📁 Key Areas

```text
src/
├── app/                 # Application routes and pages
├── components/          # Shared UI and interactive components
└── lib/                 # Site configuration and shared logic

prisma/
└── schema.prisma        # Database schema
```

## ▶️ Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## ✅ Verification

The project includes a verification workflow for development checks:

```bash
npm run verify
```

## 📦 Production Build

```bash
npm install
npm run db:generate
npm run build
npm start
```

The application is configured for a standalone Next.js production build suitable for Node.js hosting environments.

## 🔐 Security & Configuration

Production database credentials, administrative access values, and other secrets are supplied through environment configuration and are intentionally not documented in this public README.

When deploying your own instance:

- keep `.env` files and credentials out of source control;
- use strong, unique production secrets;
- apply least-privilege database permissions;
- keep private administrative routes and operational procedures out of public documentation.

## 🌐 About ByteBlitz

ByteBlitz Technologies focuses on practical software solutions, web applications, business systems, and digital products with an emphasis on maintainability and real-world usability.

---

**Built and maintained by Muhammad Saqib Kakar.**
