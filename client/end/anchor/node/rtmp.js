// node 摄像头推流
// for mac
var exec = require('child_process').execSync;

exec([
  'ffmpeg',
  '-f avfoundation -framerate 30 -video_size 640x480 -i "0" -vcodec libx264 -preset ultrafast -acodec libfaac',
  '-f flv',
  'rtmp://heyai.me/live/movie'
].join(' '), { stdio: [0, 1, 2] });
