FROM node:12.16.3

COPY . /

ENV PORT 3001
EXPOSE $PORT

RUN npm ci 
CMD [ "npm", "run", "start:dev" ]   