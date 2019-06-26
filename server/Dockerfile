FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY src/* src/
COPY .babelrc ./
RUN npm run build
ENV PORT 8080
CMD npm run prod