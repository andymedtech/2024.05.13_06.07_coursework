FROM node:20.12.2-alpine3.18 as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.25.5

COPY --from=build ./app/dist ./usr/share/nginx/html