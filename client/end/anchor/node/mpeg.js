// node 摄像头推流
// for mac
var exec = require('child_process').execSync;

exec([
  'ffmpeg',
  '-f avfoundation -framerate 30 -video_size 640x480 -i "0" -vcodec libx264 -preset ultrafast -acodec libfaac',
  '-f mpegts -codec:v mpeg1video -s 640x480 -b:v 1000k -bf 0',
  'http://heyai.me:8081/lsvsecret'
].join(' '), { stdio: [0, 1, 2] });
