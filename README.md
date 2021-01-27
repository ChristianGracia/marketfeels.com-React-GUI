# Stock site

uses Java, Python, Machine Learning, Kubernetes, Docker, React, Redux, TypeScript, PostgreSQL db.

uses micro service architecture

## Installation

download Docker Desktop

set up your enviroment

create a file called .env with your config

required vars
FINN_API_KEY
JAVA_API_URL

build with `docker build -t stock-site .`

run with `docker run -d -p 3000:3000 stock-site`

## Google Cloud Kubernetes

open cloud shell in a cluster

clone this repo

cd into the repo

build container

docker build -t {bucket_name}/{container_name}:v{version_number}

ex

`docker build -t gcr.io/ceremonial-rush-301604/client:v3 .`

push container to google gcr

`docker push gcr.io/ceremonial-rush-301604/client:v3`
