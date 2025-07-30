# Vite React TypeScript Docker Project

This project has been configured to run with Docker on port 1670.

## Running with Docker

### Option 1: Using Docker Compose (Recommended)
```bash
# Build and start the container
docker-compose up

# Stop the container
docker-compose down
```

### Option 2: Using Docker directly
```bash
# Build the image
docker build -t vite-react-app .

# Run the container
docker run -p 1670:1670 -v $(pwd):/app -v /app/node_modules vite-react-app
```

### Option 3: Using npm scripts
```bash
# Using docker-compose
npm run docker:up
npm run docker:down

# Using docker directly
npm run docker:build
npm run docker:run
```

## Accessing the Application

Once the container is running, you can access the application at:
- http://localhost:1670

## Development

The Docker setup includes volume mounting for live reloading during development. Any changes you make to the source code will be automatically reflected in the running application.

## Available Scripts

- `npm run docker:build` - Build the Docker image
- `npm run docker:run` - Run the Docker container
- `npm run docker:up` - Start with docker-compose
- `npm run docker:down` - Stop docker-compose services
- `npm run dev` - Run development server locally (without Docker)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
