PATH=/etc/home/www/$1
cd $PATH
type=${PATH##*-}
git pull
cnpm install
if [ $type == "fontend" ]
then
  npm run build
fi
