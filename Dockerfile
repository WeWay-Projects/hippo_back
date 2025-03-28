FROM node:20-alpine
# Устанавливаем curl
RUN apk add --no-cache curl

WORKDIR /src/app

COPY package* ./
COPY package.lock ./

RUN npm install
COPY . .

# RUN npm run build

# HEALTHCHECK --interval=5s --timeout=10s --retries=3 --start-period=10s CMD curl -sS http://127.0.0.1:3000/health || exit 1

ENTRYPOINT ["node", "index.js"]
