# TRSS-Yunzai

## 环境准备

 ## 1.安装nodejs 
点击[https://nodejs.org/](https://nodejs.org/) 下载
一路next即可

按 Win+R 进入 cmd 查看是否安装成功，出现版本号，即为安装成功

````md
node -v #查看nodejs版本
npm -v #查看npm版本
````

**再装一下pnpm**

win+R打开cmd
````md
npm install pnpm -g
````
````md
pnpm -v
````
查看一下是否安装成功

 ## 2.安装redis 
 点击[https://github.com/tporadowski/redis/releases](https://github.com/tporadowski/redis/releases) 下载
 **还是一路next**

 ## 3.安装Git
 点击[https://git-scm.com/download/win](https://git-scm.com/download/win)一路next

## 环境配置完成，开启装崽

任意位置鼠标右键或者cmd，克隆喵崽

使用github
````md
git clone --depth 1 https://github.com/TimeRainStarSky/Yunzai
````
使用gitee
````md
git clone --depth 1 https://gitee.com/TimeRainStarSky/Yunzai
````

# 进入目录（根据实际情况，进入云崽根目录）
````md
cd Yunzai
````

安装依赖
````md
pnpm i
````

## 前台运行
| 操作    | 命令     |
| -----|:----------:|
| 启动  | node .      |
| 停止  | node . stop |

## 后台运行
| 操作    | 命令     |
| -----|:----------:|
| 启动  | pnpm start     |
| 停止  | pnpm stop |
| 日志  | pnpm log |

## 开机自启动
````md
pnpm start
pnpm pm2 save
pnpm pm2 startup
````

**启动之后可以通过安装支持的协议插件登陆**
**这里列举ICQQ**

控制台输入并执行
````md
#安装ICQQ-Plugin
````
````md
#QQ签名（您的签名）
````
推荐[Qsign](https://qsign.icu/)
````md
#QQ设置114514:0:2
````
QQ号:密码(为0为扫码):登陆协议

## 登陆成功了吧（应该是吧，你不会没登上吧？