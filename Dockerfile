FROM node:13.1.0

WORKDIR /app
COPY package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli@8.3.18

COPY . /app

RUN ng serve