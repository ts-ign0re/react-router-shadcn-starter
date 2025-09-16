# Starter Kit

A modern full-stack starter kit built with React Router, TurboRepo, and TypeScript.

## Project Structure

This is a monorepo managed by TurboRepo containing:

- **apps/client** - React Router application with modern UI components
- **packages/typescript-config** - Shared TypeScript configurations & lib example

## Prerequisites

- **Node.js** >= 18
- **pnpm** 9.0.0 or higher

## Getting Started

### Clone the Repository

```bash
git clone git@github.com:ts-ign0re/react-router-shadcn-starter.git
cd react-router-shadcn-starter
```

### Install Dependencies

```bash
pnpm install
```

## Available Commands

### Development

Start the development server:

```bash
pnpm dev
```

### Build

Build all packages and applications:

```bash
pnpm build
```

### Type Checking

Run type checking across all packages:

```bash
pnpm check-types
```

### Linting

Run linting across all packages:

```bash
pnpm lint
```

### Formatting

Format code using Biome:

```bash
pnpm format
```

## Adding Dependencies

### Adding Dependencies to Specific Packages

Use the `--filter` flag to add dependencies to specific packages:

```bash
# Add a dependency to the client app
pnpm add --filter=client <dependency-name>

# Add a dev dependency to the client app
pnpm add --filter=client -D <dependency-name>

# Add a dependency to a specific package
pnpm add --filter=<package-name> <dependency-name>
```

### Examples

```bash
# Add React Query to the client app
pnpm add --filter=client @tanstack/react-query

# Add a dev dependency
pnpm add --filter=client -D @types/node

# Add a dependency to the root workspace
pnpm add <dependency-name>
```

## Technology Stack

- **Framework**: React Router v7
- **Build Tool**: TurboRepo
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn & Radix UI
- **Linting/Formatting**: Biome
- **Package Manager**: pnpm

## Project Configuration

- **Package Manager**: pnpm 9.0.0
- **Node Version**: >= 18
- **TypeScript**: 5.9.2
- **Turbo**: 2.5.6

## Development Workflow

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Start development with `pnpm dev`
4. Run type checking with `pnpm check-types`
5. Run linting with `pnpm lint`
6. Format code with `pnpm format`
7. Build for production with `pnpm build`

## Author

**Tronin Denis**
Email: me@tronin.dev
