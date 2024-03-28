FROM node:16.13.1-alpine as build
RUN npm install -g serve # A simple webserver
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD serve -s build -l 8080