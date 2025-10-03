# Stage de développement
FROM node:18 AS development

WORKDIR /app

# Copier les fichiers package en premier pour cache optimization
COPY package*.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier le reste des fichiers
COPY . .

# Exposer le port
EXPOSE 3000

# Commande pour le développement avec hot reload
CMD ["npm", "start"]

# Stage de production
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:alpine AS production

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
