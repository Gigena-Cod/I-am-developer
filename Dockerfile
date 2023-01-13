FROM node:19-alpine as base

RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app
COPY  package.json pnpm-lock.yaml ./
RUN pnpm install 


FROM base AS build

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm run build

FROM base AS deploy

WORKDIR /app
COPY --from=build /app/dist/ ./dist/
COPY --from=dependencies /app/node_modules ./node_modules
EXPOSE 3000
CMD [ "vite" ]