## Getting Started

# Project Setup with PNPM

Follow these steps to set up and run the project using PNPM.

## **1. Install PNPM Globally**

To install PNPM globally, run:

```bash
npm install -g pnpm
```

## **2. Install dependencies**

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and interact with the development server/ App - restar needed sometimes to see CSS changes

# Project Stack Documentation

## **Frameworks and Tools Overview**

### **Frontend & Fullstack Framework: Next.js**

-   **Reason:** Provides both frontend and backend capabilities in a single framework.
-   **Benefits:**
    -   Server-Side Rendering (SSR) and Static Site Generation (SSG)
    -   File-based routing
    -   Optimized performance for SEO and fast page loads
    -   API routes for backend operations
    <!-- - **Version:** //TODO: check version -->
-   **Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)

### **Database & ORM: Prisma**

-   **Reason:** Type-safe and developer-friendly interaction with the PostgreSQL database.
-   **Benefits:**
    -   Auto-generated type-safe client for database queries
    -   Database schema migrations
    -   Support for relational data
    <!-- - **Version:** //TODO: check version -->
-   **Documentation:** [https://www.prisma.io/docs](https://www.prisma.io/docs)

### **Styling: Tailwind CSS**

-   **Reason:** Utility-first CSS framework for rapid UI development.
-   **Benefits:**
    -   Consistent styling through utility classes
    -   Custom theming support
    -   Responsive and mobile-friendly design
    <!-- - **Version:** //TODO: check version -->
-   **Documentation:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

### **Testing: Jest**

-   **Reason:** Comprehensive testing framework for unit and integration tests.
-   **Benefits:**
    -   Snapshot testing
    -   Mocking capabilities
    -   Watch mode for continuous testing
    <!-- - **Version:** //TODO: check version -->
-   **Documentation:** [https://jestjs.io/docs](https://jestjs.io/docs)

## **Additional Tools**

-   **React Query:** Efficient data fetching and caching.
-   **PostgreSQL:** Reliable and scalable relational database.
-   **ESLint & Prettier:** Ensure code consistency and linting.

## **Project Structure**

```bash
src/
├── app/                      # Next.js app directory for routes
│   ├── api/                  # API routes for backend operations
│   └── pages/                # Static and dynamic pages
├── components/                # Reusable UI components
├── lib/                       # Shared utilities and database connection
├── prisma/                    # Prisma schema and migrations
├── services/                  # Business logic layer
├── styles/                    # Global and component-specific styles
├── utils/                     # Helper functions
└── tests/
```

This structure provides a scalable and maintainable codebase for your tennis court booking application.
