FROM node:18.14.0 as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build


FROM nginx:stable-alpine

COPY --from=builder /app/dist /app

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
