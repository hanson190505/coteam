docker run -it --rm \
-v /letsencrypt/certbot/etc/letsencrypt:/etc/letsencrypt \
-v /letsencrypt/certbot/var/lib/letsencrypt:/var/lib/letsencrypt \
-v /letsencrypt/certbot/var/log/letsencrypt:/var/log/letsencrypt \
-v /coteam/fontend/dist:/data/letsencrypt\
certbot/certbot \
renew --webroot -w /data/letsencrypt --quiet && sudo cp -r letsencrypt/certbot/ vue-backfrontend/ \
&& docker-compose -f vue-backfrontend/docker-compose.prod.yml up --build