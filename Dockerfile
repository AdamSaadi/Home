# Stage 0 - Build Frontend Assets
FROM node:12.16.3-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Serve Frontend Assets
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"] 





# Stage 0 - Build Frontend Assets
#FROM node:alpine

# Create app directory
#RUN mkdir -p /the/src/app
#WORKDIR /the/src/app

# Install app dependencies
#COPY package.json /the/src/app/
#RUN npm install

# Bundle app source
#COPY . /the/src/app

#EXPOSE 8080
#CMD [ "npm", "start" ]






# Stage 0 - Build Frontend Assets
#FROM node:alpine
#COPY . /app
#WORKDIR /app
#CMD node app.js


# Stage 1 - Serve Frontend Assets
#FROM fholzer/nginx-brotli:v1.12.2

#WORKDIR /etc/nginx
#ADD nginx.conf /etc/nginx/nginx.conf

#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 443
#CMD ["nginx", "-g", "daemon off;"] 

# Stage 0 - Build Frontend Assets
#FROM node:12.16.3-alpine as build

#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build

# Stage 1 - Serve Frontend Assets
#FROM fholzer/nginx-brotli:v1.12.2

#WORKDIR /etc/nginx
#ADD nginx.conf /etc/nginx/nginx.conf

#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 443
#CMD ["nginx", "-g", "daemon off;"] 