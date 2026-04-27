# SamarkandRent

A comprehensive rental housing platform for Samarkand, Uzbekistan, built with Next.js 14, TypeScript, and modern web technologies.

## 🚀 Features

- **Multi-language Support**: Russian, English, and Uzbek with URL-based routing
- **Property Listings**: Apartments, houses, rooms, and guesthouses in Samarkand
- **User Authentication**: NextAuth.js with Google OAuth and email/password
- **Real-time Messaging**: Chat system for guest-host communication
- **Booking System**: Complete reservation flow with payment integration
- **Host Dashboard**: Property management and analytics
- **Search & Filters**: Advanced filtering by location, price, amenities
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Server-side rendering and meta tags

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - App Router with SSR/SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **React Query** - Data fetching and caching
- **Zustand** - Client state management
- **Framer Motion** - Animations

### Backend & Database
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Primary database
- **NextAuth.js** - Authentication
- **API Routes** - RESTful endpoints

### Integrations
- **Google Maps** - Location services
- **Stripe** - Payment processing
- **Cloudinary** - Image management
- **Resend** - Email service
- **Pusher** - Real-time features

## 📁 Project Structure

```
app/
├── [locale]/                    # Internationalized routes
│   ├── (public)/               # Public pages
│   │   ├── page.tsx            # Home page
│   │   ├── search/             # Search results
│   │   ├── property/[id]/      # Property details
│   │   └── map/                # Map view
│   ├── (auth)/                 # Authentication
│   │   ├── login/
│   │   └── register/
│   └── (dashboard)/            # Protected user area
│       ├── dashboard/
│       ├── bookings/
│       ├── messages/
│       └── host/               # Host-specific pages
├── api/                        # API routes
└── globals.css                 # Global styles

components/
├── ui/                         # Reusable UI components
├── layout/                     # Layout components
├── listing/                    # Property-related components
├── booking/                    # Booking flow components
├── chat/                       # Messaging components
└── shared/                     # Shared utilities

lib/
├── prisma.ts                   # Database client
├── auth.ts                     # Authentication config
└── i18n.ts                     # Internationalization

messages/                       # Translation files
├── ru.json
├── en.json
└── uz.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/samarkandrent.git
   cd samarkandrent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Configure the following variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/samarkandrent"

   # NextAuth
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"

   # Google OAuth
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"

   # Stripe
   STRIPE_PUBLIC_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."

   # Cloudinary
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"

   # Resend
   RESEND_API_KEY="your-resend-key"

   # Pusher
   PUSHER_APP_ID="your-app-id"
   PUSHER_KEY="your-key"
   PUSHER_SECRET="your-secret"
   PUSHER_CLUSTER="your-cluster"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌍 Internationalization

The app supports three languages with URL-based routing:

- `/ru` - Russian (default)
- `/en` - English
- `/uz` - Uzbek

Language switching updates the URL and stores preference in cookies.

## 🎨 Design System

### Colors
- **Primary**: Warm gold (#C8963E) - Samarkand architecture inspired
- **Secondary**: Deep teal (#1B6B5A)
- **Background**: Off-white (#FAF8F4)
- **Text**: Dark gray (#2D2D2D)

### Typography
- **Font Family**: Inter (Latin + Cyrillic)
- **Sizes**: Responsive scale from 12px to 48px

### Components
Built with shadcn/ui and Radix UI primitives for accessibility and consistency.

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoint system**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interactions
- **Optimized images** with Next.js Image component

## 🔒 Security

- **Server-side authentication** with NextAuth.js
- **API route protection** with middleware
- **Input validation** with Zod schemas
- **SQL injection prevention** with Prisma
- **XSS protection** with React's built-in sanitization

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Set up PostgreSQL** (Neon, Supabase, or PlanetScale)
4. **Deploy**

### Manual Deployment

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **shadcn** for the beautiful component library
- **Prisma team** for the excellent ORM
- **Vercel** for hosting and deployment platform

## 📞 Support

For support, email support@samarkandrent.com or join our Discord community.

---

Built with ❤️ for the beautiful city of Samarkand, Uzbekistan.
