FROM node:12-alpine as build

WORKDIR /usr/local/gps-svc

COPY dist package.json ./

RUN npm install

FROM node:12-alpine

WORKDIR /usr/local/gps-svc

COPY --from=build /usr/local/gps-svc .

EXPOSE 50052

CMD ["node", "main.js"]