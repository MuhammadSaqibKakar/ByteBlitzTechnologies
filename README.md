# ByteBlitz Technologies

**ByteBlitz Technologies** is a Quetta-based software and digital solutions studio building production websites, project-monitoring systems, dashboards, business software, POS solutions, and custom web applications.

This repository contains the official ByteBlitz Technologies website. More importantly, the portfolio now highlights **real deployed work that can be opened and verified online**.

## 🚀 Selected Live Projects

| Project | What it does | Live |
| --- | --- | --- |
| **Khuzdar Airport Project Dashboard** | Project-monitoring system for the Khuzdar Airport Boundary Wall project with phase-wise progress, project controls, site photographs, reporting, and protected administration. | [khuzdarairport.site](https://khuzdarairport.site) |
| **Pasni Road Project Dashboard** | Infrastructure project-monitoring dashboard for presenting project information, progress, field updates, reporting material, and project-control data. | [pasniroad.com](https://pasniroad.com) |
| **BSDI Completed Projects Portal** | District-wise presentation and reporting portal for completed BSDI development projects with browser-based project browsing and slide-oriented reporting workflows. | [completedprojects.online](https://completedprojects.online) |
| **BSDI Programme Website** | Public-facing programme website presenting BSDI information, achievements, project data, district coverage, monitoring information, and development statistics. | [bsdi.pk](https://bsdi.pk) |

> Some operational project source repositories are intentionally private. The live deployments above are provided so visitors can evaluate the delivered work directly.

## 💼 What We Build

- Professional business and organization websites
- Project monitoring and reporting dashboards
- POS, billing, inventory, and business systems
- Admin dashboards and internal workflow tools
- Data-driven portals and reporting systems
- Custom web applications
- Mobile application solutions
- Branding and digital presence

## 🛠️ Website Tech Stack

The ByteBlitz Technologies website in this repository is built with:

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Prisma ORM**
- **MySQL / MariaDB**
- **Node.js**
- **Lucide React**

## 📁 Project Structure

```text
src/
├── app/                 # App Router pages and routes
├── components/          # Reusable UI components
└── lib/                 # Site configuration and portfolio data

prisma/
└── schema.prisma        # Database schema
```

## ▶️ Local Development

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## ✅ Verification

Run the complete project verification workflow:

```bash
npm run verify
```

This runs linting, TypeScript checks, and the production build.

## 📦 Production Build

```bash
npm install
npm run db:generate
npm run build
npm start
```

The application is configured for a standalone Next.js deployment suitable for Node.js hosting environments.

## 🔐 Security

Production credentials, database passwords, administrative passcodes, and deployment secrets are supplied through protected environment configuration and are never intended to be committed to this public repository.

For deployments:

- keep `.env` files and secrets out of source control;
- use unique production credentials;
- use least-privilege database accounts;
- keep operational/admin procedures private;
- review uploaded or generated files before committing them.

## 📍 About ByteBlitz

ByteBlitz Technologies is based in **Quetta, Balochistan, Pakistan** and focuses on practical software that solves real operational and business problems.

The portfolio is deliberately centered on deployed systems rather than concept-only designs.

---

**Built and maintained by Muhammad Saqib Kakar.**
