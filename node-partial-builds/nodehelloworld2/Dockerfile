FROM node:lts-alpine
WORKDIR /usr/src/app
RUN npm ci --only=production
COPY missing ./missing
EXPOSE 80
ENTRYPOINT ["node", "server.js"]
