#!/bin/bash
set -e

if which yarn ; then
  yarn install
else
  npm install
fi

docker build -f docker/Dockerfile .
