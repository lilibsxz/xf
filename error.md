# 常见报错(部分收集来源于网络)

## 45报错
 更换签名，或者是您的协议版本过低(237请使用扫码登陆)

 **可直接用寒暄的脚本**

````md
curl -L Gitee.com/haanxuan/QSign/raw/main/X | bash
````
云崽根目录执行

**协议版本低解决方法**
## 添加协议版本列表
````md
curl -sL Gitee.com/haanxuan/QSign/raw/main/ver | bash
````
寒暄的一键脚本，在云崽目录执行即可
****
### 手动修改
**路径node_modules/icqq/lib/core/device.js**

 Miao-Yunzai的ICQQ是在根目录

 TRSS-Yunzai在plugins/ICQQ-Plugin

 大概260行左右

 ::: code-group

```json [9.1.0]
    {
        name: "A9.1.0.2129b4e8",
        version: "9.1.0.19695",
        ver: "9.1.0",
        subid: 537244893,
        apad_subid: 537244932,
        qua: "V1_AND_SQ_9.1.0_7518_YYB_D",
        channel: "GuanWang",
        sdkver: "6.0.0.2564",
        buildtime: 0x66cd4b59,
        bitmap: 0x08f7ff7c,
        ssover: 0x16,
    },
```

```json [9.0.90]
    {
      name: "A9.0.90.38ae7504",
      version: "9.0.90.18945",
      ver: "9.0.90",
      subid: 537239255,
      apad_subid: 537239294,
      qua: "V1_AND_SQ_9.0.90_7218_YYB_D",
      channel: "GuanWang",
      sdkver: "6.0.0.2561",
      buildtime: 1718353600,
      bitmap: 150470524,
      ssover: 21,
    },
```

```json [9.0.85]
    {
      name: "A9.0.85.491c232e",
      version: "9.0.85.18570",
      ver: "9.0.85",
      subid: 537236316,
      apad_subid: 537236355,
      qua: "V1_AND_SQ_9.0.85_7068_YYB_D",
      channel: "GuanWang",
      sdkver: "6.0.0.2561",
      buildtime: 1718353600,
      bitmap: 150470524,
      ssover: 21,
    },
```

```json [9.0.81]
    {
      name: "A9.0.81.3daf0e38",
      version: "9.0.81.18205",
      ver: "9.0.81",
      subid: 537233527,
      apad_subid: 537233566,
      qua: "V1_AND_SQ_9.0.81_6922_YYB_D",
      channel: "GuanWang",
      sdkver: "6.0.0.2561",
      buildtime: 1718353600,
      bitmap: 150470524,
      ssover: 21,
    },
```

```json [9.0.80]
    {
      name: "A9.0.80.0d6f99ed",
      version: "9.0.80.18195",
      ver: "9.0.80",
      subid: 537233371,
      apad_subid: 537233410,
      qua: "V1_AND_SQ_9.0.80_6918_YYB_D",
      channel: "GuanWang",
      sdkver: "6.0.0.2561",
      buildtime: 1718353600,
      bitmap: 150470524,
      ssover: 21,
    },
```

```json [9.0.75]
    {
        name: "A9.0.75.c0dc0382",
        version: "9.0.75.17920",
        ver: "9.0.75",
        subid: 537230737,
        apad_subid: 537230776,
        qua: "V1_AND_SQ_9.0.75_6808_YYB_D",
        channel: "GuanWang",
        sdkver: "6.0.0.2561",
        buildtime: 0x666bfec0,
        bitmap: 0x08f7ff7c,
        ssover: 0x15,
    },
```

```json [9.0.71]
    {
        name: "A9.0.71.e2f45246",
        version: "9.0.71.17655",
        ver: "9.0.71",
        subid: 537228643,
        apad_subid: 537228682,
        qua: "V1_AND_SQ_9.0.71_6702_YYB_D",
        channel: "GuanWang",
        sdkver: "6.0.0.2561",
        buildtime: 0x666bfec0,
        bitmap: 0x08f7ff7c,
        ssover: 0x15,
    },
```

```json [9.0.70]
    {
        name: "A9.0.70.e4b76fcc",
        version: "9.0.70.17645",
        ver: "9.0.70",
        subid: 537228487,
        apad_subid: 537228526,
        qua: "V1_AND_SQ_9.0.70_6698_YYB_D",
        channel: "GuanWang",
        sdkver: "6.0.0.2561",
        buildtime: 0x666bfec0,
        bitmap: 0x08f7ff7c,
        ssover: 0x15,
    },
```

```json [9.0.65]
    {
        name: "A9.0.65.530ce28d",
        version: "9.0.65.17370",
        ver: "9.0.65",
        subid: 537225139,
        apad_subid: 537225178,
        qua: "V1_AND_SQ_9.0.65_6588_YYB_D",
        channel: "GuanWang",
        sdkver: "6.0.0.2560",
        buildtime: 0x6620c7e5,
        bitmap: 150470524,
        ssover: 21,
    },
```

```json [9.0.60]
    {
        name: "A9.0.60.c5f71993",
        version: "9.0.60.17095",
        ver: "9.0.60",
        subid: 537222797,
        apad_subid: 537222836,
        qua: "V1_AND_SQ_9.0.60_6478_YYB_D",
        channel: "GuanWang",
        sdkver: "6.0.0.2560",
        buildtime: 0x6620c7e5,
        bitmap: 150470524,
        ssover: 21,
    },
```

```json [9.0.56]
    {
        name: "A9.0.56.c25547f8",
        version: "9.0.56.16830",
        ver: "9.0.56",
        subid: 537220323,
        apad_subid: 537220362,
        qua: 'V1_AND_SQ_9.0.56_6372_YYB_D',
        sdkver: "6.0.0.2560",
        buildtime: 0x6620c7e5,
        bitmap: 150470524,
        ssover: 21,
    },
```

:::
  
## 获取到Token版本不符

````yaml
使用协议: aPad_9.0.17.15185
获取到token协议版本: 8.9.78
使用协议: aPad_8.9.78.12275
````
类似于这种
**删除 data/icqq 文件夹即可**

## 喵崽浏览器报错

**正常现象，如不是puppeteer Chromium一直启动失败或崩溃，请忽略这个日志**

````md
pacman -Syu
````
````md
pacman -Rns chromium
````
````md
pacman -S yay
````
````md
yay -S yarn
````
````md
yarn global add puppeteer
````
````md
pacman -S chromium
````
**如果不行，你最好装了浏览器😊**
****

## 视频，语音发送失败

**出现这个问题，你肯定没装ffmpeg工具**

火速去看教程合集
