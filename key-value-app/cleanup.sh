source .env.network
source .env.volume
source .env.db

#1. Stop and remove mongodb containers
if [ "$(docker ps -aq -f name=$DB_CONTAINER_NAME)" ]; then
    echo "Removing DB container $DB_CONTAINER_NAME"
    docker kill $DB_CONTAINER_NAME  # && docker rm $DB_CONTAINER_NAME -- Add if not running --rm
else
    echo "A container with the name $DB_CONTAINER_NAME does not exist. Skipping container deletion."
fi

#2. Stop and remove app containers

#3. Remove volumes
if [ "$(docker volume ls -q -f name=$VOLUME_NAME)" ]; then 
    docker volume rm $VOLUME_NAME
else
    echo "Removing volume $VOLUME_NAME"
    echo "A volume with the name $VOLUME_NAME does not exist. skipping volume deletion."   
fi

#4. Remove networks
if [ "$(docker network ls -q -f name=$NETWORK_NAME)" ]; then 
    docker network rm $NETWORK_NAME
else
    echo "Removing network $NETWORK_NAME"
    echo "A network with the name $NETWORK_NAME already exists. skipping network creation."
fi