var http = require('http');
var spawn = require('child_process').spawn;
var createHandler = require('github-webhook-handler');

// 下面填写的myscrect跟github webhooks配置一样，下一步会说；path是我们访问的路径
var handler = createHandler({ path: '/autobuild', secret: 'forautobuild' });

http.createServer(function (req, res) {
  // console.log(req, res)
  // handler(req, res, function (err) {
  //   res.statusCode = 404;
  //   res.end('no such location');
  // })
  runCommand('sh', ['./autobuild.sh', 'test-frontend']);
}).listen(3000);

handler.on('error', function (err) {
  console.error('Error:', err.message)
});

// 监听到push事件的时候执行我们的自动化脚本
handler.on('push', function (event) {
  const fileName = event.payload.repository.name
  console.log(fileName, 'fileName')
  runCommand('sh', ['./autobuild.sh', fileName]);
});

function runCommand(cmd, args){
  var child = spawn( cmd, args );
  child.stdout.on('data', data => { console.log(data) })
  child.stdout.on('error', function(err) { console.log(err || 'fail') });
}

