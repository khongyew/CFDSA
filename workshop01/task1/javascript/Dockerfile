FROM node:18-alpine

LABEL “name”=“cfdsa-workshop01-task1”

# create workdir and cd into it
WORKDIR /app

# add files to WORKDIR
ADD main.js .
ADD package.json .
ADD package-lock.json .
ADD public public
ADD views views

# install dependencies
RUN npm ci

# set default environment variables
ENV PORT=3000
ENV INSTANCE_NAME=""
ENV INSTANCE_HASH=""

# set app execution
ENTRYPOINT [ "node", "main.js" ]