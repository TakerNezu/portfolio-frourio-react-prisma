FROM node:16
ENV NODE_ENV=develop

RUN mkdir /src
RUN mkdir /src/server

WORKDIR /src

COPY /server/package.json /server/yarn.lock ./server/
RUN yarn install --cwd ./server

COPY . .

EXPOSE 5000
EXPOSE 8080
EXPOSE 5432

CMD yarn && yarn dev:server