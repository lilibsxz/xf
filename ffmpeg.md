# FFmpeg安装

## win安装

### ffmpeg的官方网站是：[http://ffmpeg.org/](http://ffmpeg.org/)
**1点击下载**

**2解压在任意位置**

**3环境配置**


点击系统属性窗口中的环境变量按钮。在“用户变量”区域选择Path变量，点击编辑按钮，在其原始内容后输入ffmpeg的bin路径，例如我的就是“D:\ffmpeg-4.2.2-win64-static\bin”

**配置完成就可以使用了**

## Linux安装

###  使用APT安装

**更新缓存**
````md
sudo apt update
````
**安装FFmpeg**
````md
sudo apt install ffmpeg
````

### 安装完成就可以使用了
****

## 版本查看
````md
ffmpeg -v
````
