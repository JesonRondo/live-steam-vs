// http 客户端静态 server
var exec = require('child_process').execSync;
exec([
  'http-server',
  './../client/end/audience',
  '-p 1666',
  // '-S -C ./ssl/cert.pem -K ./ssl/key.pem'
].join(' '), { stdio: [0, 1, 2]});
