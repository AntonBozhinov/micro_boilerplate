FROM node:latest
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
EXPOSE 3000
CMD ${START_COMMAND}