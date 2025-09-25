# Client Portal Hub

A comprehensive SaaS platform that enables freelancers and consultants to create branded client portals for sharing invoices, files, and communicating with clients. The platform provides white-label solutions with customizable branding, automated workflows, and professional client management tools.

🌐 **Live at**: [clientportalhub.com](https://clientportalhub.com)

## 🚀 Features

### Core Functionality

- **Multi-tenant Architecture** - Support for freelancers and their clients
- **Portal Builder** - Drag-and-drop interface with custom branding
- **Invoice Management** - Create, send, and track invoices with PDF generation
- **File Management** - Secure file sharing with access controls
- **Real-time Messaging** - Communication between freelancers and clients
- **Project Management** - Task tracking and milestone management
- **Analytics & Reporting** - Business intelligence and usage metrics

### Key Capabilities

- ✅ Custom branding (logos, colors, fonts, domains)
- ✅ Role-based access control (Admin, Client, Viewer)
- ✅ Secure file uploads with virus scanning
- ✅ Automated invoice generation and payment tracking
- ✅ Real-time notifications and messaging
- ✅ Mobile-responsive design
- ✅ GDPR compliance and data security

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **UI Components**: shadcn/ui + custom components

### Backend & Database

- **Authentication**: Better Auth
- **Database**: PostgreSQL (via Supabase)
- **ORM**: Prisma
- **File Storage**: Supabase Storage
- **Email Service**: Nodemailer + SendGrid SMTP

### Infrastructure

- **Hosting**: Vercel (frontend) + Supabase (backend)
- **CDN**: Vercel Edge Network
- **Monitoring**: Vercel Analytics + Sentry
- **Payments**: Dodo Payments

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+
- npm, yarn, pnpm, or bun
- PostgreSQL database (or Supabase account)
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/client-portal-hub.git
cd client-portal-hub
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/client_portal"
DIRECT_URL="postgresql://username:password@localhost:5432/client_portal"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"

# Better Auth
BETTER_AUTH_SECRET="your-auth-secret"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Email
SENDGRID_API_KEY="your-sendgrid-api-key"
FROM_EMAIL="noreply@yourdomain.com"

# Payments
DODO_PAYMENTS_API_KEY="your-dodo-payments-api-key"
DODO_PAYMENTS_WEBHOOK_SECRET="your-webhook-secret"

# App
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXT_PUBLIC_APP_URL="https://clientportalhub.com"
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Seed the database (optional)
npx prisma db seed
```

### 5. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
client-portal-hub/
├── src/                   # Source code directory
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   │   └── auth/     # Authentication API routes
│   │   ├── (auth)/       # Authentication pages
│   │   ├── dashboard/    # Dashboard pages
│   │   ├── portals/      # Portal management
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── auth/        # Authentication components
│   │   ├── portal/      # Portal-specific components
│   │   └── shared/      # Shared components
│   ├── lib/             # Utility libraries
│   │   ├── auth.ts      # Better Auth server config
│   │   ├── auth-client.ts # Better Auth client config
│   │   ├── prisma.ts    # Prisma client
│   │   ├── utils.ts     # Utility functions
│   │   └── schemas/     # Zod validation schemas
│   └── generated/       # Generated files
│       └── prisma/      # Prisma generated client
├── prisma/              # Database schema and migrations
│   ├── schema.prisma    # Prisma schema
│   └── migrations/      # Database migrations
├── public/              # Static assets
├── .cursor/             # Cursor AI rules
│   └── rules/           # Development guidelines
└── components.json      # shadcn/ui configuration
```

## 🏗️ Development Phases

### Phase 1: Foundation (Weeks 1-4)

- [x] Next.js project setup with TypeScript
- [x] Tailwind CSS + shadcn/ui integration
- [x] Database schema design and Prisma setup
- [x] Better Auth integration
- [x] Basic authentication flows

### Phase 2: Core Features (Weeks 5-10)

- [ ] Portal builder interface
- [ ] File management system
- [ ] Invoice creation and management
- [ ] Basic customization options

### Phase 3: Communication & Advanced (Weeks 11-16)

- [ ] Real-time messaging system
- [ ] Project management features
- [ ] Advanced branding options
- [ ] Mobile optimization

### Phase 4: Analytics & Polish (Weeks 17-20)

- [ ] Analytics and reporting
- [ ] Performance optimization
- [ ] Testing and documentation
- [ ] Production deployment

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e

# Run all tests
npm run test:all
```

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Database Deployment

```bash
# Deploy database changes
npx prisma db push

# Generate Prisma client
npx prisma generate
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:seed` - Seed database with sample data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the [docs](docs/) folder
- **Issues**: [GitHub Issues](https://github.com/yourusername/client-portal-hub/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/client-portal-hub/discussions)

## 🗺️ Roadmap

- [ ] **Q1 2024**: Core portal functionality
- [ ] **Q2 2024**: Advanced customization and integrations
- [ ] **Q3 2024**: Mobile app and API access
- [ ] **Q4 2024**: Enterprise features and white-label options

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Better Auth](https://www.better-auth.com/) - Modern authentication
- [Prisma](https://www.prisma.io/) - Database ORM
- [Supabase](https://supabase.com/) - Backend as a Service

---

**Built with ❤️ for freelancers and consultants worldwide**

---

**Client Portal Hub** - _Empowering professionals to build better client relationships_
