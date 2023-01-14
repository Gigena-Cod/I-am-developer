#STEP 1 BUILD OF APP

FROM node:18-alpine 

WORKDIR /app

COPY . ./

ENV NODE_ENV=production

RUN npm i serve -g 

RUN npm install --production

EXPOSE 3000

CMD ['npm','run','serve']
