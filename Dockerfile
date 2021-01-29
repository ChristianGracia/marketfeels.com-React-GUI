FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ARG REACT_APP_DEBUG
ENV REACT_APP_DEBUG=$REACT_APP_DEBUG

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]