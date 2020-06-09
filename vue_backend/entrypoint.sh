#!/bin/sh
if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
    sleep 1
#    gunicorn -c gunicorn_config.py vuebackend.wsgi:application
#    gunicorn vuebackend.wsgi:application --bind 127.0.0.1:8005
fi

exec "$@"