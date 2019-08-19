PATH=/home/www/$1
type=${PATH##*-}

cd $PATH
git pull
# cnpm install
# if [ $type == "fontend" ]
# then
#   npm run build
# fi
