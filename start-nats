#!/bin/bash

clear

echo "Cleaning up docker containers"
docker rm -f nats
echo "Starting nats" && \
docker run -d --name nats -p 4222:4222 nats && \
echo "nats started!"
