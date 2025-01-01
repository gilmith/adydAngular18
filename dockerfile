FROM nginx:latest
WORKDIR /app
COPY dist/adyd-angular18/browser /app
COPY adyd.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

