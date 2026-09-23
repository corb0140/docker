# Every application need a runtime environment
# Base Image
FROM node:22

# WORKDIR is work directory.
# Here we set the working directory for the rest of the dockerfile
WORKDIR /app

# List of instructions 
## Copy the package.json and package-lock.json
### Include * to include both package and package-lock
### . for current directory which is /app
COPY package*.json .

## Install all the dependencies
### npm ci mean clean install. It's a lightweight version of npm install. It runs faster and also installs dependencies in a more predictable way.
RUN npm ci

## Copy the source code of our app
### This is not copied to src directory. It will be /app/index.js
# COPY src/index.js index.js

## This is to ensure all your application's source code is included
### The first . refers to the source path on your host machine
### the second . refers to the destination path inside the container's WORKDIR.
COPY . .

## Environment Variable
## This ENV will be available at runtime for the container
ENV PORT=5000
ENV APP_NAME="My Awesome Application"

## OPTIONAL: Expose the application port
### You can expose primarily gor metadata and documentation to declare which ports the containerized application listens on at runtime.
### It does not publish or open port to the host machine or the outside world.
### When using the -P flag, Docker automatically maps all ports listed in the EXPOSE instructions to random high-order ports on the host machine.
EXPOSE 5000

## Start application
CMD ["node", "src/index.js" ]