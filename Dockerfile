FROM node:alpine

ENV PORT 3000

# Navigate (cd) to the app folder in the docker container
WORKDIR /usr/src/app

# Copy all package.json / package-lock.json etc. to the root folder
# Executed on build: docker build .
COPY ./package*.json ./

RUN npm i

# copy entire project into docker container
COPY . .

# build front-end with react build scripts and store them in the build folder
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]