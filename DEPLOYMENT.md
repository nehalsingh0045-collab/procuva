# Deployment guide

Recommended low-cost path:

1. Create a managed PostgreSQL database.
2. Set `DATABASE_URL`, `AUTH_SECRET`, and `NEXT_PUBLIC_APP_URL` in the hosting provider.
3. Run `npx prisma db push` once from a trusted deployment shell.
4. Run `npm run build` and `npm run start`, or deploy the included Docker image.
5. Put the app behind HTTPS.

Do not use the example database password or development secret in a public environment.
