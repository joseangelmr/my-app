FROM mhart/alpine-node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

EXPOSE 7070

RUN yarn
RUN yarn build

RUN yarn global add serve

CMD serve -s build