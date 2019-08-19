#! /bin/bash
DIR_PATH=/home/www/$1
type=${DIR_PATH##*-}

echo $DIR_PATH $type
# cd $PATH
# ls
# git pull
# cnpm install
# if [ $type == "fontend" ]
# then
#   npm run build
# fi

cd /home/www/test-frontend
git pull
