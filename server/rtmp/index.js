/** 
 * 上行推流：通过 RTMP 协议把视频流推送到 rtmp://localhost/live/livestream，例如使用 ffmpeg -re -i demo.flv -c copy -f flv rtmp://localhost/live/livestream 推送；
 * 下行播放：支持以下三种播放协议，播放地址如下：
 *    RTMP: rtmp://localhost/live/livestream
 *    FLV: http://localhost:8081/live/livestream.flv
 */ 
var exec = require('child_process').execSync;
exec([
  '/root/srs/trunk/objs/srs -c conf/http.flv.live.conf'
].join(' '), { stdio: [0, 1, 2]});
