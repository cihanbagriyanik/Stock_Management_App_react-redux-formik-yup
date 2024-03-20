FROM node:alpine3.18

WORKDIR /frontend

COPY . . 

RUN npm install 

CMD npm start