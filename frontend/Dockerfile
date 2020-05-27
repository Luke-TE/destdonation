FROM node:12.16.3

COPY . /

ENV PORT 8080
EXPOSE $PORT

RUN npm ci 
CMD [ "npm", "start" ]   