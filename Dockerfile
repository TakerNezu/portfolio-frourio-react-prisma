FROM node:16
ENV NODE_ENV=develop

RUN mkdir /src
RUN mkdir /src/server

WORKDIR /src

COPY /server/package.json /server/yarn.lock ./server/
RUN yarn install --cwd ./server

COPY . .

EXPOSE 5000
CMD echo "im docker" && yarn && yarn migrate:dev && yarn generate:server && yarn build:server && yarn start:server