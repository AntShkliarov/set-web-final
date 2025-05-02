# InFarming Frontend POC

A proof-of-concept web application for displaying and interacting with plant information using Lit web components.

## Features

- Interactive plant tiles with flip animation
- Two-sided plant cards:
  - Front: Plant image, name, and environment tags (indoor/outdoor)
  - Back: Description and growing instructions
- Responsive layout (2/3 plants, 1/3 chat area)
- TypeScript for type safety

## Tech Stack

- Lit (Web Components)
- TypeScript
- Vite (Development server & build tool)

## Project Structure

```
infarming-fe-poc/
├── src/
│   ├── components/     # Lit Web Components
│   ├── data/           # Mock data
│   ├── styles/         # CSS styles
│   ├── types/          # TypeScript interfaces
│   └── index.ts        # Main entry point
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd infarming-fe-poc

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

This will start the Vite development server and open the application in your default browser.

### Building for Production

```bash
# Build the application
npm run build
```

This will create a `dist` directory with the compiled application.

### Type Checking

```bash
# Run TypeScript type checking
npm run typecheck
```

## Future Enhancements

- Chat functionality
- User authentication
- Plant search and filtering
- Plant care reminders
- Community features