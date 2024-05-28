FROM node:16.20.0-alpine3.18

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn install


RUN apk --no-cache add curl
RUN curl -f http://example.com

# Bundle app source
COPY . .
RUN yarn build

HEALTHCHECK --interval=5s --timeout=5s --retries=3 --start-period=10s CMD curl -f http://localhost:4173/ || kill $(pidof node)

EXPOSE 4173
CMD [ "yarn", "preview"]
