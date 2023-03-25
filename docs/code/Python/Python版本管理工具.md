---
article: false
title: Python版本管理工具
order: 1
date: 2023-03-23 13:52:39
---
# pyenv
## 说明
1. github地址
https://github.com/pyenv/pyenv   
windows: https://github.com/pyenv-win/pyenv-win
2. 概述
​ pyenv是python版本管理器，是解释器层面。类似于node版本管理器nvm，go版本管理器gvm。
## windows安装
1.  git下载
2.  添加以下下系统环境变量
3.  注意：这里路径换成你自己的安装路径
![环境路径]( https://pcsdata.baidu.com/thumbnail/adf6584fbl17354e73b7affd35d36c82?fid=2519193222-16051585-942996900303621&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-bp0303TNYXaAxJLNba0tAE52Rac%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8810452330232924744&dp-callid=0&time=1679551200&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video )

4. path变量中
 ```
%PYENV%\bin
%PYENV%\shims
```
5. 检测是否成功
打开cmd，输入pyenv --version进行测试。



## 注意
1. 安装 Python 过程非常慢 ,有时候超过1小时，并非卡死。

2. 所有的 Python,只能通过 pyenv 安装。（系统安装的与它不冲出，但 pyenv 无法使用）

3. 更新完数据库后，需要重新替换下载源。

4. 在一台电脑安装完可以整个压缩拖到别的电脑使用（只需要配置环境变量）

5. 注意：Python3.9 及以后版本将不再支持win7，已安装的在win7会提示缺少文件安装上也会报错。

6. Python 3.10 版本及以后在Pycharm 中，能用但不支持
## 常用命令
```
commands  -------------列出所有可用的pyenv命令
duplicate   -------------创建一个重复的python环境
local        --------------设置或显示特定于本地应用程序的Python版本
global     --------------设置或显示全局Python版本
shell        --------------设置或显示特定于shell的Python版本
install      --------------Python构建安装Python版本
uninstall    -------------卸载特定的Python版本
update      -------------更新缓存的版本数据库
rehash      -------------重新安装pyenv垫片（安装可执行文件后运行此操作）
vname       -------------显示当前的Python版本
version      -------------显示当前Python版本及其来源
version-name ----------------显示当前的Python版本
versions    -----------------列出pyenv可用的所有Python版本
exec        -----------------通过首先准备路径来运行可执行文件，以便选定的Python
which       -------------- 显示可执行文件的完整路径
whence     ---------------------列出包含给定可执行文件的所有Python版本



     pyenv versions：列出当前系统中所有安装的python。
     pyenv version：显示出当前使用的python。
     pyenv global <python_version>：设置使用哪一个python。
     pyenv install <python_version>：安装特定版本的python。
     pyenv uninstall <python_version>：移除特定版本的python。
     pyenv install -l：查看可安装的python。
```


## 下载过慢
1. 国内镜像网站下载
https://registry.npmmirror.com/binary.html?path=python/3.9.8/
2. 放入./pyenv-win\install_cache目录下在进行安装可以跳过下载