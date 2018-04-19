# live-steam-vs

直播方案对比

## 运行

### 服务端搭建

#### 环境

* 安装 livego，https://github.com/gwuhaolin/livego/releases

#### 运行服务端

```
npm start
```

#### 服务

上行

* `jsmpeg`: 'https://heyai.me:8081/lsvsecret'
* `livego`: 'rtmp://heyai.me:1935/live/movie'

下行

* `jsmpeg`: 'wss://heyai.me:8082'
* `rtmp`: rtmp://heyai.me:1935/live/movie
* `flv`: http://heyai.me:7001/live/movie.flv
* `hls`: http://heyai.me:7002/live/movie.m3u8

### 直播端

如果使用 Node 直播需要安装环境

* 安装 FFmpeg，http://ffmpeg.org/download.html
