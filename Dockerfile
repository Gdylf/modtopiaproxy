# Użyj oficjalnego Node
FROM node:18

# Stwórz katalog na aplikację
WORKDIR /app

# Skopiuj package.json i zainstaluj paczki
COPY package.json ./
RUN npm install

# Skopiuj resztę plików
COPY . .

# Otwórz port
EXPOSE 3000

# Uruchom serwer
CMD ["npm", "start"]
