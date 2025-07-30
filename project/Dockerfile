# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port 1670
EXPOSE 1670

# Start the development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "1670"]
