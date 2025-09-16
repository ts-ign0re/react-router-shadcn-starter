# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with a comprehensive styling setup:

- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://radix-ui.com/)** - Low-level UI primitives for accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library
- **[class-variance-authority](https://cva.style/)** - For creating type-safe component variants
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Utility for merging Tailwind classes
- **[Recharts](https://recharts.org/)** - Composable charting library for React

### UI Components

The project includes a comprehensive set of pre-built UI components located in the `ui` package, including:
- Buttons, Cards, Dialogs, Dropdowns
- Form components (Input, Select, Checkbox, etc.)
- Data visualization components (Charts, Tables)
- Layout components (Sidebar, Navigation)
- And many more accessible components

### Theme Configuration

Dark/light theme support is built-in and can be toggled throughout the application. The theme system integrates seamlessly with Tailwind CSS classes.

---

Built with ❤️ using React Router.
