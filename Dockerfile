FROM node:alpine

ENV PORT 3000

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
