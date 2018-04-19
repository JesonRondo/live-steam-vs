/**
 * 上行推流：通过 RTMP 协议把视频流推送到 rtmp://localhost:1935/live/movie，例如使用 ffmpeg -re -i demo.flv -c copy -f flv rtmp://localhost:1935/live/movie 推送；
 * 下行播放：支持以下三种播放协议，播放地址如下：
 *    RTMP:rtmp://localhost:1935/live/movie
 *    FLV:http://127.0.0.1:7001/live/movie.flv
 *    HLS:http://127.0.0.1:7002/live/movie.m3u8
 */
var exec = require('child_process').execSync;
exec([
  '/data/tools/livego'
].join(' '), { stdio: [0, 1, 2]});
