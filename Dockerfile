FROM node:10.24-alpine3.11 

WORKDIR /home/node

COPY build /home/node/build
COPY package.json /home/node

RUN npm install 
RUN npm install -g serve

EXPOSE 3000/tcp

ENTRYPOINT ["serve", "-l", "3000", "-s", "build"]
