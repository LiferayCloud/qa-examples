FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json server.js ./
RUN npm ci --only=production
EXPOSE 80
ENTRYPOINT ["node", "server.js"]
