FROM node:lts-alpine

WORKDIR /app/

COPY package.json package-lock.json /app/
RUN npm ci --only=production

COPY . /app/

CMD [ "npm", "start" ]
