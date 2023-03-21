---
article: false
title: Mysql安装
order: 1
date: 2023-03-21 16:41:30
---

# 安装
## docker安装
1. 下载镜像

|命令	|描述|
|---|---|
|docker pull mysql	|下载最新版Mysql镜像 (其实此命令就等同于 : docker pull mysql:latest )|
|docker pull mysql:xxx	|下载指定版本的Mysql镜像 (xxx指具体版本号)|

2. 获取镜像名
```
docker images
```

3. 创建容器
```
docker run -p 3306:3306 --name mysql -v /usr/local/docker/Mysql/conf:/etc/mysql/conf.d -v /usr/local/docker/Mysql/logs:/var/log/mysql -v //usr/local/docker/Mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=159357 -d mysql
```

> error   
> Can‘t read dir of ‘/etc/mysql/conf.d/‘ (OS errno 2 - No such file or directory   
> sudo mkdir /etc/mysql/conf.d 创建文件

4. 进入容器中mysql
```
docker exec -it mysql bash
```

> error 链接出错  
> • 2003 - Can't connect to MySQL server on 192.168.2.210 (10061 "Unknown error")  
```
mysql -uroot -proot
use mysql;   
-- 这条命令执行完可能会报错，但不用管它
//允许root从任何主机连接到mysql服务器,并使用你设置的密码连接
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '159357' WITH GRANT OPTION;

//立即执行授权命令
flush privileges;

//查看  
SELECT DISTINCT CONCAT('User: ''',user,'''@''',host,''';') AS query FROM mysql.user;

```

```
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

1. 进入Mysql
2. mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

```

