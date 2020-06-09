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
    echo "api started"
fi

exec "$@"