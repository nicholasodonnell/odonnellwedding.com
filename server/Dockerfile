FROM node:16-buster-slim as dev

ENV DOCKER=true

WORKDIR /app

ENV NODE_ENV=development

RUN apt-get update -qq \
    && apt-get upgrade -y \
    && apt-get install -y --no-install-recommends \
      build-essential python3 \
    && apt-get upgrade -y \
    && apt-get clean

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --frozen-lockfile && yarn cache clean

EXPOSE 8080

CMD [ "yarn", "start:dev" ]

FROM dev as prod

ENV NODE_ENV=production

COPY . .

CMD [ "yarn", "start" ]
