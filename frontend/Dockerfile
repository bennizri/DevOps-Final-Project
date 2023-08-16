# Use the official Node.js image as the base image
FROM node:14.21-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Command to start the application
CMD ["npm", "start"]