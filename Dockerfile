FROM nginx:1.17.4-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY fontend/dist /home/cms
COPY weblearn/dist /home/weblearn
#COPY nginx.conf /etc/nginx/conf.d
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/weblearn.nginx.conf /etc/nginx/weblearn.nginx.conf