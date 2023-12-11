FROM node:16.14.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install 
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build
FROM nginx:stable
COPY --from=build /app/dist/incidents-management/ /usr/share/nginx/html
EXPOSE 8080