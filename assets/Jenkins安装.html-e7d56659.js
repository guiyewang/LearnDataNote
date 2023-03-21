import{_ as e,Y as i,Z as n,a2 as a}from"./framework-d651fda7.js";const l={},s=a(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> docker安装</h2><ol><li>Jenkins镜像查询</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>下载镜像</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#下载镜像
docker pull jenkins:2.60.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建文件Liunx文件夹</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#创建文件夹
mkdir -p /usr/local/jenkins
#权限
chmod 777 /usr/local/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>启动容器</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -uroot -p 1180:8080 -p 50000:50000 --name jenkins -v /usr/local/jenkins:/var/jenkins_home -v /etc/localtime:/etc/localtime { ID}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>查看日志</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#日志查看
docker logs jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[s];function t(r,c){return i(),n("div",null,d)}const u=e(l,[["render",t],["__file","Jenkins安装.html.vue"]]);export{u as default};
