# Contributing to Procuva

## Branches

- `main`: stable, deployable code
- `develop`: integration branch for active work
- Feature branches: `feature/<short-name>`
- Fix branches: `fix/<short-name>`

## Local workflow

1. Copy `.env.example` to `.env`.
2. Start PostgreSQL with `docker compose up -d db`.
3. Install dependencies with `npm install`.
4. Run `npx prisma db push`.
5. Seed demo data with `npm run db:seed`.
6. Start development with `npm run dev`.

Before opening a pull request, run `npm run build` and confirm no credentials or secrets are included.
