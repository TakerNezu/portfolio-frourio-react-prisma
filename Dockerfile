FROM node:16.10.1
ENV NODE_ENV=develop

RUN mkdir /src
RUN mkdir /src/server

WORKDIR /src

COPY /server/package.json /server/yarn.lock ./server/
RUN yarn install --cwd ./server

COPY . .

EXPOSE 8080
CMD yarn && yarn migrate:dev && yarn generate:server && yarn build:server && yarn start:server