FROM node:12-alpine as build

WORKDIR /usr/local/auth-svc

COPY dist package.json ./

RUN npm install

FROM node:12-alpine

WORKDIR /usr/local/auth-svc

COPY --from=build /usr/local/auth-svc .

EXPOSE 50051

CMD ["node", "main.js"]
