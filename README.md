# Stock site

uses Java, Python, Machine Learning, Kubernetes, Docker, React, Redux, TypeScript, PostgreSQL db.

uses micro service architecture

## Installation

download Docker Desktop

build with `docker build -t stock-site .`

run with `docker run -d -p 3000:3000 stock-site`

## Google Cloud Kubernetes

open cloud shell in a cluster

clone this repo

cd into the repo

build container

tag

`docker tag front-end us.gcr.io/marketfeels/front-end:latest`

push to google cloud registry

docker host/project-id/container name

`docker push us.gcr.io/marketfeels/front-end`



