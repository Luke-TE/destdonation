FROM node:12.16.3

COPY frontend/ /

ENV PORT 80
EXPOSE $PORT

RUN npm ci 
RUN npm run build
CMD [ "npx", "serve", "-s", "build" ]