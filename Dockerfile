FROM nginx:alpine

COPY dist/angular-10/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]