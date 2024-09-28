FROM node:22.4.0 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.0 as prod
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/angular-docker/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
