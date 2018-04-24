# live-steam-vs

直播方案对比

## 运行

### 服务端

#### 环境

* 安装 srs，https://github.com/ossrs/srs/wiki/v3_CN_Home

#### 运行服务端

```
npm start
```

#### 服务

上行

* `jsmpeg`: https://heyai.me:8081/lsvsecret
* `srs`: rtmp://heyai.me/live/livestream

下行

* `jsmpeg`: wss://heyai.me/wsslive/jsmpeg
* `flv`: https://heyai.me/rtmplive/live/livestream.flv

### 直播端

如果使用 Node 直播需要安装环境

* 安装 FFmpeg，http://ffmpeg.org/download.html

## 对比

### jsmpeg

![jsmpeg](./assets/jsmpeg.git)

### http-flv

![httpflv](./assets/httpflv.git)
