# Cushion Works

Turborepo monorepo for the Edirisinghe Cushion Works public website, staff dashboard, and Next.js API service.

## Applications

- `apps/website` — public customer website on port 3000
- `apps/admin` — protected staff dashboard on port 3001
- `apps/api` — Next.js API service on port 3002

## Shared packages

- `packages/ui` — reusable UI primitives
- `packages/types` — shared TypeScript data contracts
- `packages/validation` — shared Zod request schemas
- `packages/api-client` — shared browser-safe API client
- `packages/eslint-config` — shared lint configuration
- `packages/typescript-config` — shared TypeScript configuration

## Development

```powershell
npm install --legacy-peer-deps
npm run dev
```

Copy `apps/api/.env.example` to `apps/api/.env.local` and add the real database and authentication values when backend features are needed.
