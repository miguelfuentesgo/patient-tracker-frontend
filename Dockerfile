FROM node:22-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar y instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "start"]