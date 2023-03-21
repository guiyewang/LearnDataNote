import{_ as e,Y as i,Z as d,a2 as n}from"./framework-d651fda7.js";const s={},l=n(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> docker安装</h2><ol><li>拉取文件镜像</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建目录和配置文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 创建目录
mkdir -p /usr/local/docker/redis/conf
mkdir -p /usr/local/docker/redis/data
## 创建文件
touch /usr/local/docker/redis/conf/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建Redis容器并启动</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run \\
-d \\
--name redis \\
-p 6379:6379 \\
--restart unless-stopped \\
-v /usr/local/docker/redis/data:/data \\
-v /usr/local/docker/redis/conf/redis.conf:/etc/redis/redis.conf \\
redis:latest
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>进入redis</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>### 通过 Docker 命令进入 Redis 容器内部
docker exec -it redis /bin/bash
docker exec -it redis bash
### 进入 Redis 控制台
redis-cli
### 添加一个变量为 key 为 name , value 为 bella 的内容
&gt; set name bella
### 查看 key 为 name 的 value 值
&gt; get name
 
 
### 或者也可以直接通过Docker Redis 命令进入Redis控制台 (上面两个命令的结合)
docker exec -it redis redis-cli

## 修改密码
config set requirepass 你的密码

exit
\`\`


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),a=[l];function r(c,v){return i(),d("div",null,a)}const u=e(s,[["render",r],["__file","redis安装.html.vue"]]);export{u as default};
