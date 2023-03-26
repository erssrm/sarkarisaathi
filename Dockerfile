# stage1 as builder
FROM node:alpine as builder

# copy the package.json to install dependencies
COPY package.json pnpm-lock.yaml turbo.json ./

# install pnpm
RUN npm install -g pnpm && npm install -g turbo

# Install the dependencies and make the folder
RUN pnpm install && mkdir /nextjs-web && mv ./node_modules ./nextjs-web

WORKDIR /nextjs-web

# Copy all the  project file
COPY . .

# Build
RUN turbo run build


FROM nginx:alpine

#!/bin/sh

#COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stage 1
COPY --from=builder /nextjs-web/out /usr/share/nginx/html

EXPOSE 3000 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]