---
article: false
title: Jenkins安装
order: 1
date: 2023-03-21 15:56:41
---

# 安装
## docker安装
1. Jenkins镜像查询
```
docker search jenkins
```
2. 下载镜像
```
#下载镜像
docker pull jenkins:2.60.2
```
3. 创建文件Liunx文件夹
```
#创建文件夹
mkdir -p /usr/local/jenkins
#权限
chmod 777 /usr/local/jenkins
```
4. 启动容器
```
docker run -d -uroot -p 1180:8080 -p 50000:50000 --name jenkins -v /usr/local/jenkins:/var/jenkins_home -v /etc/localtime:/etc/localtime { ID}
```
5. 查看日志
```
#日志查看
docker logs jenkins
```