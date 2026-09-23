## Define the first stage / build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm ci

# Transpile TypeScript Code
COPY src src
COPY tsconfig.json tsconfig.json

RUN npm run build

## Define the second stage / dependencies stage
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json .
RUN npm ci --only=production

## Define the third stage / final stage
FROM gcr.io/distroless/nodejs22
WORKDIR /app

COPY --from=deps /app/node_modules node_modules
COPY --from=build /app/dist dist
ENV PORT=3000

CMD ["dist/index.js"]