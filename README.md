# Auth Shops Monorepo

A full-stack authentication and shopping system built with modern web technologies, featuring multi-tenant architecture with subdomain-based shop management.

## 🏗️ Architecture Overview

- **Frontend**: React + TypeScript + Vite + Tailwind CSS + Radix UI
- **Backend**: NestJS + Prisma + PostgreSQL + JWT Authentication
- **Deployment**: Cloudflare Pages (frontend) + Vercel (backend)
- **Database**: PostgreSQL with Prisma ORM
- **Package Management**: pnpm workspaces

## 📁 Project Structure

```bash
auth-shops/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/            # Application pages/routes
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utilities (axios, utils)
│   │   └── config/           # App configuration
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.ts        # Vite build configuration
│   └── wrangler.jsonc        # Cloudflare Workers config
├── server/                    # Backend NestJS application
│   ├── src/
│   │   ├── auth/             # Authentication module
│   │   ├── database/         # Prisma service & module
│   │   └── main.ts           # Application entry point
│   ├── prisma/
│   │   └── schema.prisma     # Database schema
│   ├── package.json          # Backend dependencies
│   └── vercel.json           # Vercel deployment config
├── docker-compose.yml         # Local PostgreSQL setup
├── pnpm-workspace.yaml       # pnpm workspace configuration
└── package.json              # Root workspace scripts
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recommended package manager)
- **PostgreSQL** (local or remote)

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd auth-shops
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Configuration**

   ```bash
   # Client level
   cp client/.env.example client/.env.development

   # Server level
   cp server/.env.example server/.env
   ```

4. **Database Setup**

   ```bash
   # Start local PostgreSQL with Docker
   docker-compose up postgres -d

   # Run Prisma migrations
   cd server && pnpm dlx prisma migrate dev
   ```

5. **Start Development Servers**

   ```bash
   # Start both client and server
   pnpm dev

   # Or start individually:
   pnpm client:dev    # Frontend on http://localhost:5173
   pnpm server:dev     # Backend on http://localhost:3000
   ```

## 🛠️ Development Commands

### Root Level Commands

```bash
# Development
pnpm dev              # Start both client & server
pnpm client:dev       # Start frontend only
pnpm server:dev       # Start backend only

# Building
pnpm build            # Build all packages
pnpm client:build     # Build frontend only
pnpm server:build     # Build backend only

# Quality Assurance
pnpm lint             # Lint all packages
pnpm test             # Run all tests
pnpm clean            # Clean node_modules
```

### Client-Specific Commands

```bash
# From root directory using filters
pnpm client:dev       # Start Vite dev server
pnpm client:build     # Build for production
pnpm client:preview   # Preview production build
pnpm client:deploy    # Deploy to Cloudflare Pages

# Or from client directory
cd client
pnpm dev              # Start Vite dev server
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm deploy           # Deploy to Cloudflare Pages
pnpm lint             # ESLint check
```

### Server-Specific Commands

```bash
cd server
pnpm dev              # Start NestJS in watch mode
pnpm build            # Build for production
pnpm start:prod       # Start production server
pnpm lint             # ESLint check
pnpm test             # Run Jest tests
```

## 🗄️ Database Schema

The application uses PostgreSQL with the following core entities:

```prisma
model User {
  user_id    String   @id @default(uuid())
  user_name  String   @unique
  password   String
  shops      Shop[]
  createdAt  DateTime @default(now())
}

model Shop {
  shop_id   String @id @default(uuid())
  shop_name String @unique
  user_id   String
  user      User   @relation(fields: [user_id], references: [user_id])
}
```

## 🌐 Environment Variables

### Client `.env`

```bash
VITE_BASE_URL="http://localhost:3000"
VITE_SHOP_DOMAIN="localhost:5173"
VITE_PROTOCOL="http"
```

## 🚀 Deployment

### Frontend (Cloudflare Pages)

- **Automatic**: Deploys on push to main branch
- **Manual**: `cd client && pnpm deploy`
- **Config**: `client/wrangler.jsonc`

### Backend (Vercel)

- **Automatic**: Deploys on push to main branch
- **Config**: `server/vercel.json`
- **Database**: Use Prisma+Postgres Cloud

## 🔧 Technology Stack

### Frontend

- **React 19** with TypeScript
- **Vite** for fast development & building
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Axios** for API calls
- **React Hook Form** + **Zod** for form validation

### Backend

- **NestJS** framework with TypeScript
- **Prisma ORM** with PostgreSQL
- **JWT Authentication** with Passport
- **Bcrypt** for password hashing
- **Class Validator** for request validation
- **CORS** configured for cross-origin requests

### Development Tools

- **ESLint** & **Prettier** for code quality
- **Jest** for testing
- **Docker Compose** for local PostgreSQL
- **pnpm** workspaces for monorepo management

# Authentication API Endpoints

| Endpoint        | Method | Auth Required | Description                    | Request Body (JSON)                                                                          | Responses                                        |
| --------------- | ------ | ------------- | ------------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `/auth/signup`  | POST   | No            | Register a new user with shops | `{ "user_name": "string", "password": "string", "shopNames": ["string","string","string"] }` | `201 Created`, `400 Bad Request`, `409 Conflict` |
| `/auth/signin`  | POST   | No            | Login and receive JWT cookie   | `{ "user_name": "string", "password": "string", "rememberMe": false }`                       | `200 OK`, `401 Unauthorized`, `404 Not Found`    |
| `/auth/logout`  | POST   | Yes           | Clear JWT cookie (logout)      | None                                                                                         | `200 OK`                                         |
| `/auth/session` | GET    | Yes           | Get current user session info  | None                                                                                         | `200 OK`                                         |

## 🔐 Authentication Flow

1. **User Login**: User submits their username and password to login
2. **Credential Validation**: Backend verifies credentials. If valid, it generates an **Authentication** token (user rememberMe check or uncheck to validity to 7 days and 30mins)
3. **Set Token Cookie**: The token is set as an `HttpOnly` cookie with `SameSite=None` and `domain=.shops.example.com`, making it available across all subdomains.
4. **Accessing Protected Routes**:
   - The frontend sends API requests with in the header, or relies on the Authentication token cookie for server-side validation.
   - The backend checks the authentication token to authorize requests.
5. **Session Persistence Across Subdomains**:
   - Because the refresh token cookie is set for `.shops.example.com`, users remain logged in when opening any subdomain in a new tab.
6. **Logout Flow**:
   - The backend clears the token cookie
   - The frontend removes the token from local state and redirects the user to the login page.

## 🏪 Multi-Tenant Architecture

The system supports multiple shops per user with subdomain-based routing:

- Main domain: `localhost:5173` (authentication & shop management)
- Shop domains: `{shop-name}.localhost:5173` (shop-specific content)

## 📝 License

This project is private and not licensed for public use.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
