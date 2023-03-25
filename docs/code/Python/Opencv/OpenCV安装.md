---
article: false
title: OpenCV安装
order: 1
date: 2023-03-23 17:41:48
---

# 安装
## windows安装
1. 官网地址：https://opencv.org/releases/
### Python + OpenCV 环境配置（Win10 + Python3.7(Anaconda3) + OpenCV）
#### 安装python
1.  1.下载Anaconda3
下载地址：https://www.anaconda.com/distribution/#download-section
2. 安装
双击一路安装到底，中途根据自己需求改安装位置。
3. 检查安装路径是否添加Path
> 安装过程中会询问是否把anaconda添加到系统路径中，如果此时不添加，安装完成后需要手动把anaconda的安装路径添加到PATH变量中。鼠标右键“此电脑”，打开“属性”，点击“高级系统设置”，点击“环境变量”，找到“Path”，把anaconda的安装路径添加上去就行了。
4. 验证Python是否已经被正确安装
#### 安装OpenCV
1. 下载地址：http://www.lfd.uci.edu/~gohlke/pythonlibs/
2. 选择对应的版本下载
3. 但这个网站上我没有下载成功，最后我在我尝试去找opencv的镜像文件的网站，在这个网站上下载成功了：https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple/opencv-python/
我下载的是对应版本的64位：opencv_python-4.2.0.32-cp37-cp37m-win_amd64.whl
将该文件保存到D:\Anaconda3\Lib\site-packages文件夹下
4. 加载OpenCV文件
- 按Win+R 输入cmd打开命令提示符窗口，进入到Anaconda3\Lib\site-packages文件夹下
- 执行命令pip install opencv_python-4.2.0.32-cp37-cp37m-win_amd64.whl
