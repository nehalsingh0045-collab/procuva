# Procuva

Procuva is a production-oriented B2B industrial procurement marketplace built with Next.js, PostgreSQL and Prisma. Buyers publish structured RFQs, verified suppliers submit comparable quotations, and administrators verify supplier companies.

## Working features

- Buyer and supplier registration with password hashing
- Signed HTTP-only session cookies and role-based access
- Supplier company profiles and verification states
- Supplier product catalogue creation and deletion
- Public verified-supplier directory
- Buyer RFQ creation, listing, closing, reopening and cancellation
- Open RFQ marketplace with search
- Verified-supplier quotation submission and updates
- Buyer quote comparison, shortlisting, rejection and acceptance
- Accepting a quotation rejects competing quotes and awards the RFQ
- Admin dashboard with supplier verification actions
- Responsive buyer, supplier and admin workspaces
- PostgreSQL, Prisma seed data, Docker, CI and health endpoint

## Demo accounts

After seeding, all demo accounts use password `Demo@123`:

- Admin: `admin@procuva.local`
- Buyer: `buyer@procuva.local`
- Supplier: `supplier@procuva.local`

## Fastest local setup with Docker

Requirements: Docker Desktop.

```bash
cp .env.example .env
docker compose up -d db
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

Open `http://localhost:3000`.

## One-command application container

First change `AUTH_SECRET` in `docker-compose.yml`, then run:

```bash
docker compose up --build
```

In a second terminal, initialize and seed the database:

```bash
docker compose exec app npx prisma db push
docker compose exec app npm run db:seed
```

## Environment variables

Copy `.env.example` to `.env`:

```env
DATABASE_URL="postgresql://procuva:procuva@localhost:5432/procuva?schema=public"
AUTH_SECRET="use-a-random-secret-of-at-least-32-characters"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

Never commit a real production secret.

## Production deployment

1. Provision managed PostgreSQL.
2. Set `DATABASE_URL`, `AUTH_SECRET`, and `NEXT_PUBLIC_APP_URL` in the host.
3. Run `npm ci`, `npx prisma generate`, `npx prisma migrate deploy`, and `npm run build`.
4. Start with `npm start` or deploy the included Docker image.
5. Check `/api/health` from the platform health monitor.

Before accepting real transactions, add verified email/phone flows, document verification, object storage, transactional email, rate limiting, audit-event storage, backups and professional security testing. The current app is a complete marketplace MVP, not a substitute for those operational controls.

## Important commands

```bash
npm run dev
npm run typecheck
npm run build
npm run db:push
npm run db:seed
```
