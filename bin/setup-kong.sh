#!/bin/sh

while ! curl -sSf http://kong:8001 > /dev/null; do
    echo "Waiting for Kong Admin API to be available..."
    sleep 5
done

curl -i -X POST --url http://kong:8001/services/ --data 'name=shift-api' --data 'url=http://shift-api-app:4200'

curl -i -X POST --url http://kong:8001/services/shift-api/routes --data 'paths[]=/api/shifts' --data 'methods[]=GET' --data 'methods[]=POST'



curl -i -X POST --url http://kong:8001/services/ --data 'name=nurse-api' --data 'url=http://nurse-api-app:4201'

curl -i -X POST --url http://kong:8001/services/nurse-api/routes --data 'paths[]=/api/nurses' --data 'methods[]=GET'



curl -i -X POST --url http://kong:8001/services/ --data 'name=shift-front' --data 'url=http://shift-front-app:4242'

curl -i -X POST --url http://kong:8001/services/shift-front/routes --data 'paths[]=/' --data 'methods[]=GET' --data 'methods[]=POST'