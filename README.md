# React + Vite Project

A modern React application built with Vite, featuring routing and component-based architecture.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd adrilla-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Running the Application

### Development Mode
Start the development server with hot module replacement:
```bash
npm run dev
```
or
```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### Build for Production
Create an optimized production build:
```bash
npm run build
```
or
```bash
yarn build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```
or
```bash
yarn preview
```

## Project Structure

```
src/
├── components/
│   ├── molecules/     # Reusable component combinations
│   └── organisms/     # Complex UI components
├── pages/            # Route components
├── App.jsx          # Main application component
└── main.jsx         # Application entry point
```

## Available Routes

- `/` - Home page
- `/about` - About Us page

## Technologies Used

- React 18
- Vite
- React Router DOM
- ESLint for code linting
