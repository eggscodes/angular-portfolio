#/bin/bash
#build app
ng build --prod --aot
#upload files
aws s3 cp ./dist s3://meggers.me --recursive --acl public-read
