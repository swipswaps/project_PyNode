FROM node:10.7-alpine
LABEL maintainer="rpavelleon@gmail.com"

ENV HOST 0.0.0.0
EXPOSE 5000

WORKDIR /user/src/app
COPY . ./

RUN npm install
RUN cd client && npm install && npm run build
RUN cd .. && npm cache clean --force

CMD ["npm", "start"]
