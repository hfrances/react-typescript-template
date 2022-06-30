FROM nginx:alpine AS build

WORKDIR /app
COPY ./build .

COPY ./nginx.conf /etc/nginx/conf.d/build.conf

#CMD tail -f /dev/null