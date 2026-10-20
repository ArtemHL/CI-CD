FROM node:20-alpine
WORKDIR /apps/pingpong
COPY ./package.json ./
RUN npm install
COPY ./server.js ./
EXPOSE 8080
CMD ["npm", "start"]