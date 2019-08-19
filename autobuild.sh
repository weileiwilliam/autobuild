#! /bin/bash
PATH=/home/www/$1
type=${PATH##*-}

echo $PATH $type
cd $PATH
git pull
cnpm install
if [ $type == "fontend" ]
then
  npm run build
fi
