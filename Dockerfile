FROM node:9.11.1-alpine as build
LABEL maintainer="Thomas Sauvajon <thomas.sauvajon.dev@gmail.com>"
WORKDIR /tmp/tlpfront
COPY . .
RUN yarn
RUN yarn build

# FROM nginx:1.13.12-alpine
# COPY --from=build /tmp/tlpfront/dist /usr/share/nginx/html

FROM gcr.io/thelittlepedestrians-206020/tlp-proxy:latest

RUN mkdir front
COPY --from=build /tmp/tlpfront/dist front

EXPOSE 80
