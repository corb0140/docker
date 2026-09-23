# Responsible for creating volumes and networks.

source .env.network
source .env.volume

if [ "$(docker volume ls -q -f name=$VOLUME_NAME)" ]; then 
    echo "A volume with the name $VOLUME_NAME already exists. skipping volume creation."
else
    docker volume create $VOLUME_NAME
fi

if [ "$(docker network ls -q -f name=$NETWORK_NAME)" ]; then 
    echo "A network with the name $NETWORK_NAME already exists. skipping network creation."
else
    docker network create $NETWORK_NAME
fi