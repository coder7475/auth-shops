# 🏪 Auth Shops - Frontend

A modern React frontend for the Auth Shops multi-tenant platform, providing secure authentication and shop management with subdomain-based routing.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)](https://www.cloudflare.com/)

## 🏗️ Architecture Overview

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives for accessibility
- **State Management**: Redux Toolkit with RTK Query
- **Routing**: React Router v7 with nested routes
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Cloudflare Pages with static assets

## ✨ Features

- 🔐 **Secure Authentication** – JWT-based auth with HTTP-only cookies
- 🏪 **Multi-Tenant Architecture** – Subdomain-based shop routing
- 🎨 **Modern UI/UX** – Responsive design with dark/light theme support
- ⚡ **Performance Optimized** – Code splitting and lazy loading
- 🛡️ **Type Safety** – Full TypeScript implementation
- 📱 **Mobile Responsive** – Optimized for all screen sizes
- 🎯 **Form Management** – Advanced form handling with validation
- 🔄 **Real-time State** – Efficient API state management
- 🌐 **PWA Ready** – Progressive Web App capabilities
- ♿ **Accessibility** – WCAG compliant components

## 🔐 Authentication Flow

[![](./Dashboard%20Access%20and%20Subdomain%20Redirection.png)]

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── ui/                 # Base UI components (Radix + Tailwind)
│   └── layout/            # Layout components (Navbar, Footer, etc.)
├── pages/                  # Route components
│   ├── Home.tsx           # Landing page
│   ├── Login.tsx          # Authentication page
│   ├── Register.tsx       # User registration
│   └── NotFound.tsx       # 404 error page
├── modules/               # Feature-specific modules
│   └── auth/             # Authentication forms
├── redux/                 # State management
│   ├── store.ts          # Redux store configuration
│   ├── baseApi.ts        # RTK Query base API
│   └── axiosBaseQuery.ts # Custom Axios query
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and configurations
│   ├── utils.ts          # Common utility functions
│   └── axios.ts          # Axios configuration
├── config/                # App configuration
├── providers/             # React context providers
├── router/                # Route definitions
└── assets/               # Static assets
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recommended package manager)
- **Backend API** running on specified port

### Installation

```bash
# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env

# Start development server
pnpm dev
```

### Environment Variables

Create a `.env` file with the following variables:

```bash
# API Configuration
VITE_BASE_URL="http://localhost:3000"

# Multi-tenant Configuration
VITE_SHOP_DOMAIN="localhost:5173"
VITE_PROTOCOL="http"
```

## 🛠️ Development Scripts

```bash
# Development
pnpm dev              # Start Vite dev server with HMR

# Building
pnpm build            # TypeScript compile + Vite build
pnpm preview          # Preview production build locally

# Deployment
pnpm deploy           # Build and deploy to Cloudflare Pages

# Quality Assurance
pnpm lint             # ESLint with TypeScript support
pnpm cf-typegen       # Generate Cloudflare Worker types
```

## 🎨 UI Component System

Built on **Radix UI** primitives with **Tailwind CSS** styling:

### Base Components

- `Button` - Various variants and sizes
- `Input` - Form inputs with validation states
- `Card` - Container component with header/content/footer
- `Dialog` - Modal dialogs and overlays
- `Form` - Form wrapper with validation
- `Navigation` - Navigation menus and breadcrumbs

### Advanced Components

- `Accordion` - Collapsible content sections
- `Dropdown` - Context menus and select dropdowns
- `Tabs` - Tab navigation interface
- `Progress` - Loading and progress indicators
- `Tooltip` - Hover information displays
- `Toast` - Notification system (Sonner)

### Layout Components

- `CommonLayout` - Base application layout
- `DashboardLayout` - Dashboard-specific layout
- `Navbar` - Navigation header
- `Footer` - Application footer
- `Sidebar` - Collapsible sidebar navigation

## 🔐 Authentication Flow

1. **Registration**: User creates account with username/password + shop names
2. **Login**: Credentials validated, JWT token stored in HTTP-only cookie
3. **Session Management**: Automatic token refresh and validation
4. **Multi-tenant Access**: Subdomain-based shop routing
5. **Logout**: Token cleared and user redirected

```typescript
// Example: API call with authentication
const { data, error, isLoading } = useGetUserQuery();

// Example: Protected route component
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  return isAuthenticated ? children : <Navigate to="/login" />;
};
```

## 🌐 Multi-Tenant Architecture

The application supports subdomain-based multi-tenancy:

- **Main Domain**: `localhost:5173` - Authentication & shop management
- **Shop Subdomains**: `{shop-name}.localhost:5173` - Shop-specific content
- **Dynamic Routing**: Automatic subdomain detection and routing
- **Shared Authentication**: Cookies work across all subdomains

```typescript
// Subdomain detection utility
const getSubdomain = (): string | null => {
  const host = window.location.hostname;
  const parts = host.split(".");
  return parts.length > 2 ? parts[0] : null;
};
```

## 📡 API Integration

Using **RTK Query** for efficient API state management:

```typescript
// Base API configuration
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["User", "Shop"],
  endpoints: () => ({}),
});

// Feature-specific API slice
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        data: credentials,
      }),
    }),
  }),
});
```

## 🎯 Form Management

Advanced form handling with **React Hook Form** and **Zod** validation:

```typescript
// Form schema with validation
const loginSchema = z.object({
  user_name: z.string().min(1, "Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

// Form component with validation
const LoginForm = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Form submission with API integration
  const [login] = useLoginMutation();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data).unwrap();
      // Handle success
    } catch (error) {
      // Handle error
    }
  };
};
```

## 🚀 Deployment

### Cloudflare Pages

Configured for automatic deployment:

```bash
# Manual deployment
pnpm deploy

# Or build and upload
pnpm build
# Upload dist/ folder to Cloudflare Pages
```

### Wrangler Configuration

```json
{
  "name": "auth-shops-frontend",
  "compatibility_date": "2025-06-28",
  "assets": {
    "not_found_handling": "single-page-application"
  }
}
```

### Environment Variables (Production)

```bash
VITE_BASE_URL="https://api.yourdomain.com"
VITE_SHOP_DOMAIN="yourdomain.com"
VITE_PROTOCOL="https"
```

## 🔧 Technology Stack

### Core Technologies

- **React 19** - Latest React with concurrent features
- **TypeScript 5.8** - Static type checking
- **Vite 6.1** - Fast build tool with HMR
- **Tailwind CSS 4.1** - Utility-first CSS framework

### UI & Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Sonner** - Toast notification system
- **Next Themes** - Theme management
- **CVA** - Component variant API

### State & Data

- **Redux Toolkit** - Predictable state management
- **RTK Query** - Data fetching and caching
- **React Router 7** - Client-side routing
- **Axios** - HTTP client library

### Forms & Validation

- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation
- **Hookform Resolvers** - Form validation integration

### Development Tools

- **ESLint** - Code linting with TypeScript support
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin React SWC** - Fast React compilation
- **Cloudflare Vite Plugin** - Cloudflare integration

## 📖 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**

   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   pnpm install
   ```

2. **Environment Variables Not Loading**

   ```bash
   # Ensure .env file exists and variables start with VITE_
   VITE_BASE_URL="http://localhost:3000"
   ```

3. **CORS Issues**

   ```bash
   # Verify backend CORS configuration allows your domain
   # Check VITE_BASE_URL matches backend URL
   ```

4. **TypeScript Errors**

   ```bash
   # Run TypeScript check
   pnpm tsc --noEmit
   ```

5. **Subdomain Routing Issues**
   ```bash
   # For local development, add to /etc/hosts:
   127.0.0.1 localhost
   127.0.0.1 shop1.localhost
   127.0.0.1 shop2.localhost
   ```

## 📄 License

This project is private and not licensed for public use.
