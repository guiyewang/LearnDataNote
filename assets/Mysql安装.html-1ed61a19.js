import{_ as e,Y as l,Z as s,a2 as d}from"./framework-d651fda7.js";const r={},i=d(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> docker安装</h2><ol><li>下载镜像</li></ol><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>docker pull mysql</td><td>下载最新版Mysql镜像 (其实此命令就等同于 : docker pull mysql:latest )</td></tr><tr><td>docker pull mysql:xxx</td><td>下载指定版本的Mysql镜像 (xxx指具体版本号)</td></tr></tbody></table><ol start="2"><li>获取镜像名</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>创建容器</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 3306:3306 --name mysql -v /usr/local/docker/Mysql/conf:/etc/mysql/conf.d -v /usr/local/docker/Mysql/logs:/var/log/mysql -v //usr/local/docker/Mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=159357 -d mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>error<br> Can‘t read dir of ‘/etc/mysql/conf.d/‘ (OS errno 2 - No such file or directory<br> sudo mkdir /etc/mysql/conf.d 创建文件</p></blockquote><ol start="4"><li>进入容器中mysql</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it mysql bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>error 链接出错<br> • 2003 - Can&#39;t connect to MySQL server on 192.168.2.210 (10061 &quot;Unknown error&quot;)</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql -uroot -proot
use mysql;   
-- 这条命令执行完可能会报错，但不用管它
//允许root从任何主机连接到mysql服务器,并使用你设置的密码连接
GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;%&#39; IDENTIFIED BY &#39;159357&#39; WITH GRANT OPTION;

//立即执行授权命令
flush privileges;

//查看  
SELECT DISTINCT CONCAT(&#39;User: &#39;&#39;&#39;,user,&#39;&#39;&#39;@&#39;&#39;&#39;,host,&#39;&#39;&#39;;&#39;) AS query FROM mysql.user;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

1. 进入Mysql
2. mysql&gt; ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),n=[i];function t(a,o){return l(),s("div",null,n)}const u=e(r,[["render",t],["__file","Mysql安装.html.vue"]]);export{u as default};
