#!/usr/bin/env bash
readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
rm -rf dist

$(npm bin)/ng-packagr -p ./src/app/we7-router/package.json

# sh build.sh&& cd dist/ && npm publish && yarn git