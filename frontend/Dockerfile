# utilize alpine for a smaller node image and designate build stage
FROM node:19-alpine3.16 as builder

# specify and designate the working directory
WORKDIR /app

# add the .bin directory
ENV PATH /app/node_modules/.bin:$PATH

# copy package.json to install dependencies (layer cache)
COPY ./package.json /app/

# copy yarn.lock for dependencies (layer cache)
COPY ./yarn.lock /app/

RUN yarn

# copy source code 
COPY . /app

# generate build artifacts
RUN yarn build

# utilize alpine for a smaller node image and designate build stage
FROM nginx:1.23.3-alpine as production

# copy the executable for production
COPY --from=builder /app/build /usr/share/nginx/html

# remove the default nginx conf
RUN rm /etc/nginx/conf.d/default.conf

# copy local nginx conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# designate the expected port
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]