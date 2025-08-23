# 🛡️ Auth Shops - Backend API

A secure NestJS backend service for the Auth Shops multi-tenant platform, providing JWT-based authentication and shop management with PostgreSQL integration.

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

## 🏗️ Architecture Overview

- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with HTTP-only cookies
- **Validation**: Class-validator with DTOs
- **CORS**: Configurable subdomain support
- **Deployment**: Vercel serverless functions

## 🗄️ Database Schema

![ER Diagram](./auth_shops_ER.png)

### Models

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

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- PostgreSQL database
- pnpm >= 8.0.0

### Installation

```bash
# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env

# Run database migrations
pnpm dlx prisma migrate dev

# Generate Prisma client
pnpm dlx prisma generate

# Start development server
pnpm dev
```

### Environment Variables

Create a `.env` file with the following variables:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/auth_shops"

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# Server Configuration
PORT=3000
PROTOCOL="http"
CORS_DOMAIN="localhost:5173"

# Node Environment
NODE_ENV="development"
```

## 🛠️ Development Scripts

```bash
# Development
pnpm dev              # Start with hot reload
pnpm start:debug      # Start with debug mode

# Building & Production
pnpm build            # Build the application
pnpm start            # Start production server
pnpm start:prod       # Start with NODE_ENV=production

# Database
pnpm dlx prisma migrate dev       # Run migrations
pnpm dlx prisma generate           # Generate Prisma client
pnpm dlx prisma studio            # Open Prisma Studio
pnpm dlx prisma db seed            # Run database seeds

# Quality Assurance
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier
pnpm test             # Run unit tests
pnpm test:e2e         # Run e2e tests
pnpm test:cov         # Run tests with coverage
```

## 📡 API Documentation

Base URL: `http://localhost:3000`

### Authentication Endpoints

#### 🔐 User Registration

**POST** `/auth/signup`

Registers a new user with username, password, and at least 3 unique shop names.

**Request Body:**

```json
{
  "user_name": "john_doe",
  "password": "SecurePass123!",
  "shopNames": ["electronics", "fashion", "books"]
}
```

**Validation Rules:**

- `user_name`: Required, must be unique
- `password`: Minimum 8 characters, must contain 1 number and 1 special character
- `shopNames`: Array of at least 3 unique strings, globally unique shop names

**Response (201 Created):**

```json
{
  "success": true,
  "message": "User created Successfully.",
  "data": {
    "user_id": "f21a4014-7d26-406d-80b0-c64d08c4d824",
    "user_name": "john_doe",
    "shops": [
      {
        "shop_id": "b977ce27-e439-4af5-b595-edc389d9fe4c",
        "shop_name": "electronics",
        "user_id": "f21a4014-7d26-406d-80b0-c64d08c4d824"
      }
      // ... more shops
    ],
    "createdAt": "2025-08-23T13:38:31.768Z"
  }
}
```

**Error Responses:**

- `400 Bad Request`: Validation errors
- `409 Conflict`: Username or shop name already exists

---

#### 🔑 User Login

**POST** `/auth/signin`

Authenticates user and sets JWT cookie.

**Request Body:**

```json
{
  "user_name": "john_doe",
  "password": "SecurePass123!",
  "rememberMe": false
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Login successful!",
  "data": {
    "user_name": "john_doe",
    "createdAt": "2025-08-22T15:19:52.254Z"
  }
}
```

**Cookie Set:**

- `Authentication`: HTTP-only JWT token
- `SameSite`: Configurable for subdomain support
- `Secure`: True in production

**Error Responses:**

- `404 Not Found`: User not found
- `401 Unauthorized`: Invalid credentials

---

#### 🚪 User Logout

**POST** `/auth/logout`

Clears authentication cookie and invalidates session.

**Headers Required:**

```
Cookie: Authentication=<jwt_token>
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Logged out successfully!",
  "data": null
}
```

---

#### ✅ Session Validation

**GET** `/auth/session`

Validates current session and returns user data.

**Headers Required:**

```
Cookie: Authentication=<jwt_token>
```

**Response (200 OK):**

```json
{
  "user_id": "40d141bf-5bd3-4af1-b6c5-6e4455e4e664",
  "user_name": "john_doe",
  "shops": [
    {
      "shop_id": "931accf6-c27b-40af-8169-8db808b2ffed",
      "shop_name": "electronics",
      "user_id": "40d141bf-5bd3-4af1-b6c5-6e4455e4e664"
    }
    // ... more shops
  ]
}
```

**Error Responses:**

- `401 Unauthorized`: Invalid or expired token
- `403 Forbidden`: Token missing

## 🔒 Security Features

### JWT Authentication

- HTTP-only cookies prevent XSS attacks
- Configurable token expiration
- Secure flag in production
- SameSite policy for CSRF protection

### CORS Configuration

- Subdomain wildcard support: `*.example.com`
- Protocol-aware origin validation
- Credentials support for cookie authentication
- Configurable via environment variables

### Input Validation

- DTO classes with class-validator decorators
- Password strength requirements
- Unique constraint validation
- Array validation for shop names

### Database Security

- Parameterized queries via Prisma ORM
- UUID primary keys
- Indexed foreign keys
- Cascade delete protection

## 📁 Project Structure

```
src/
├── auth/                   # Authentication module
│   ├── dto/                # Data Transfer Objects
│   │   └── auth.dto.ts     # Signup/Signin DTOs
│   ├── interface/          # TypeScript interfaces
│   │   └── user.interface.ts
│   ├── auth.controller.ts  # Auth endpoints
│   ├── auth.service.ts     # Auth business logic
│   ├── auth.module.ts      # Auth module definition
│   ├── jwt.guard.ts        # JWT authentication guard
│   └── jwt.strategy.ts     # Passport JWT strategy
├── common/                 # Shared utilities
│   └── interfaces/         # Common interfaces
│       └── response.interface.ts
├── database/               # Database module
│   ├── prisma.module.ts    # Prisma module
│   └── prisma.service.ts   # Prisma service
├── app.controller.ts       # Root controller
├── app.module.ts           # Main application module
├── app.service.ts          # Root service
└── main.ts                 # Application entry point
```

## 🧪 Testing

```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Test coverage
pnpm test:cov

# Watch mode
pnpm test:watch
```

## 🚀 Deployment

### Vercel Deployment

The application is configured for Vercel serverless deployment:

```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/main.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/dist/main.js"
    }
  ]
}
```

### Environment Variables (Production)

```bash
DATABASE_URL="postgresql://..."
JWT_SECRET="production-secret-key"
JWT_EXPIRES_IN="7d"
PORT=3000
PROTOCOL="https"
CORS_DOMAIN="yourdomain.com"
NODE_ENV="production"
```

## 🔧 Technology Stack

- **NestJS**: Progressive Node.js framework
- **TypeScript**: Static type checking
- **Prisma**: Next-generation ORM
- **PostgreSQL**: Reliable SQL database
- **Passport JWT**: Authentication strategy
- **Class Validator**: Request validation
- **bcrypt**: Password hashing
- **Cookie Parser**: Cookie handling middleware
- **CORS**: Cross-origin resource sharing

## 📖 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Failed**

   ```bash
   # Check DATABASE_URL format
   DATABASE_URL="postgresql://username:password@host:port/database"
   ```

2. **CORS Errors**

   ```bash
   # Verify CORS_DOMAIN matches your frontend domain
   CORS_DOMAIN="localhost:5173"
   ```

3. **JWT Token Issues**

   ```bash
   # Ensure JWT_SECRET is set and consistent
   JWT_SECRET="your-super-secret-jwt-key"
   ```

4. **Prisma Client Not Generated**
   ```bash
   pnpm dlx prisma generate
   ```

## 📄 License

This project is private and not licensed for public use.
