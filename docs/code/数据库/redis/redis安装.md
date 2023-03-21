---
article: false
title: redis安装
order: 1
date: 2023-03-21 17:35:56
---

# 安装
## docker安装
1. 拉取文件镜像
```
docker pull redis
```
2. 创建目录和配置文件
```
## 创建目录
mkdir -p /usr/local/docker/redis/conf
mkdir -p /usr/local/docker/redis/data
## 创建文件
touch /usr/local/docker/redis/conf/redis.conf
```

3. 创建Redis容器并启动
```
docker run \
-d \
--name redis \
-p 6379:6379 \
--restart unless-stopped \
-v /usr/local/docker/redis/data:/data \
-v /usr/local/docker/redis/conf/redis.conf:/etc/redis/redis.conf \
redis:latest
 
 ```

 4. 进入redis
```
### 通过 Docker 命令进入 Redis 容器内部
docker exec -it redis /bin/bash
docker exec -it redis bash
### 进入 Redis 控制台
redis-cli
### 添加一个变量为 key 为 name , value 为 bella 的内容
> set name bella
### 查看 key 为 name 的 value 值
> get name
 
 
### 或者也可以直接通过Docker Redis 命令进入Redis控制台 (上面两个命令的结合)
docker exec -it redis redis-cli

## 修改密码
config set requirepass 你的密码

exit
``


