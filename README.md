# Agency Quote Intake Prototype

A full-stack prototype built to test and validate the core data pipeline for a freelance web development agency site—handling public quote requests and streaming them into an internal admin dashboard.

## Tech Stack
- **Framework:** Next.js 16 (App Router, Server Actions, `<Suspense>` streaming)
- **Database & ORM:** PostgreSQL + Prisma 8 (`@prisma/orm-postgres`)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Features Implemented
- **Public Quote Form (`/`):** Collects client contact details, project type, and project description via Next.js Server Actions.
- **Admin Dashboard (`/admin`):** Streams live quote submissions from PostgreSQL using `connection()` and `<Suspense>`, rendering interactive, expandable `QuoteCard` components.

## Local Setup

1. **Install dependencies:**
   ```bash
   npm install

2. **Configure Environment Variables**
    If there is no .env file in the root directory, create one
    
    Add the postgreSQL connection string:
        DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

3. **Run database setup & start the dev server:**
   ```bash
   # Start Postgres (if using Docker)
   docker compose up -d

   # Emit the Prisma contract client
   npx prisma contract emit

   # Apply database migrations to create the tables
   npx prisma migrate dev

   # Start Next.js
   npm run dev

## Prerequisites
- **Node.js** (v20+)
- **Docker** (or a local PostgreSQL instance)
