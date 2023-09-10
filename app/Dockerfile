FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install -g nodemon
RUN npm install

COPY . .

ENV PORT=80
ENV MODE="dev"

EXPOSE 80

CMD ["npm", "run", "start"]