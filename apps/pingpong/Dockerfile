FROM node:20-alpine
WORKDIR /app
COPY apps/pingpong/package.json ./
RUN npm install
COPY apps/pingpong/server.js ./
EXPOSE 8080
CMD ["npm", "start"]