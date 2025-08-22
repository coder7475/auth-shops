# Auth Shops Monorepo

A full-stack authentication and shopping system built with modern technologies.

## Architecture

- **Client**: Vite + React + TypeScript (deployed on Cloudflare Pages)
- **Server**: NestJS + TypeORM + TypeScript (deployed on Vercel)
- **Package Manager**: pnpm workspaces

## Project Structure

```
auth-shops/
├── client/                 # Frontend application
│   ├── src/               # React source code
│   ├── package.json       # Client dependencies
│   └── vite.config.ts     # Vite configuration
├── server/                # Backend application
│   ├── src/               # NestJS source code
│   ├── package.json       # Server dependencies
│   └── vercel.json        # Vercel deployment config
├── docker-compose.yml     # Docker services
├── package.json           # Root workspace configuration
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install all dependencies
pnpm install

# Start development servers
pnpm dev
```

### Development

```bash
# Start both client and server
pnpm dev

# Start only client
pnpm client:dev

# Start only server
pnpm server:dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint all packages
pnpm lint
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your environment variables.

## Deployment

- **Client**: Automatically deployed to Cloudflare Pages on push to main
- **Server**: Automatically deployed to Vercel on push to main

## License

MIT
