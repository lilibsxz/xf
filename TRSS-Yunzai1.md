# TRSS-Yunzai

# Linux推荐ubuntu22,debian12

# 懒得出图了，Linux非常简单跟着我的指令走就能完成，TRSS崽也一样
** **

## 更新软件和安装相关依赖
````md
apt update #更新软件
apt install -y wget #Linux文件下载工具
````

## 安装Git
````md
apt install git -y
````

## 安装redis
````md
apt install redis -y
````

## 安装Chrome
````md
apt install chromium-browser -y
````

## 安装中文字体
````md
apt install -y --force-yes --no-install-recommends fonts-wqy-microhei
````

## 安装nodejs
````md
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
````
````md
sudo apt update && sudo apt install -y nodejs
````
## 安装pnpm
````md
npm i -g pnpm
````

## 克隆T崽
````md
git clone --depth 1 https://gitee.com/TimeRainStarSky/Yunzai
cd Ynzai
````
## 安装依赖
````md
pnpm i
````
## 启动并登录
````md
node . // 前台运行
pnpm start //后台运行

````
## 常用指令
# 前台运行
| 操作    | 命令     |
| -----|:----------:|
| 启动  | node .      |
| 停止  | node . stop |

# 后台运行
| 操作    | 命令     |
| -----|:----------:|
| 启动  | pnpm start     |
| 停止  | pnpm stop |
| 日志  | pnpm log |

# 开机自启动
````md
pnpm start
pnpm pm2 save
pnpm pm2 startup
````


