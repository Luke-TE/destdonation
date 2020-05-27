FROM docker-dind

COPY . /

RUN cd frontend
RUN docker build . -t drp-frontend
RUN cd ..
RUN cd backend
RUN docker build . -t drp-backend
RUN cd ..

EXPOSE 3001
EXPOSE 80

