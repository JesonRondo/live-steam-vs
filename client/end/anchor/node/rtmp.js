// node 摄像头推流
var args = require('args');
var exec = require('child_process').execSync;

args
  .option('platform', 'The platform to on live. [mac, pi]', 'mac');

var flags = args.parse(process.argv);

// 直播端
switch(flags.platform) {
  // mac
  case 'mac':
    exec([
      'ffmpeg',
      '-f avfoundation -framerate 25 -video_size 640x480 -i "0" -vcodec libx264 -preset ultrafast -acodec libfaac',
      '-f flv',
      'rtmp://heyai.me/live/livestream'
    ].join(' '), { stdio: [0, 1, 2] });
    break;

  // 树莓派
  // ffmpeg -f v4l2 -framerate 25 -video_size 640x480 -i /dev/video0 -f flv -c:v h264_omx -s 640x480 -b:v 1000k -bf 0 rtmp://heyai.me/live/livestream
  case 'pi':
    exec([
      'ffmpeg',
      '-f v4l2 -framerate 25 -video_size 640x480 -i /dev/video0',
      '-f flv -c:v h264_omx -s 640x480 -b:v 1000k -bf 0',
      'rtmp://heyai.me/live/livestream'
    ].join(' '), { stdio: [0, 1, 2] });
    break;
}
