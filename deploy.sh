#!/bin/bash

npm run-script build

tar czf Tahereh.tar.gz .next components pages public .babelrc package.json postcss.config.js next.config.js util
scp Tahereh.tar.gz majid:~
rm Tahereh.tar.gz

ssh majid << 'ENDSSH'
pm2 delete Tahereh
rm -rf Tahereh
mkdir Tahereh
tar xf Tahereh.tar.gz -C Tahereh
rm Tahereh.tar.gz
cd Tahereh
npm i
pm2 start npm --name "Tahereh" -- start
ENDSSH
