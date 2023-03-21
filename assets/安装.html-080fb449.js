import{_ as e,Y as d,Z as i,a2 as a}from"./framework-d651fda7.js";const l={},n=a(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> centos</h2><ol><li>卸载旧的版本</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum remove docker \\
                  docker-client \\
                  docker-client-latest \\
                  docker-common \\
                  docker-latest \\
                  docker-latest-logrotate \\
                  docker-logrotate \\
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>需要安装包</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install -y yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>设置镜像仓库</li></ol><blockquote><p>官方镜像：（比较慢，不推荐）</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum-config-manager \\
    --add-repo \\
    https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>阿里镜像仓库 ：（推荐）</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum-config-manager \\
    --add-repo \\
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>安装 docker</li></ol><blockquote><p>安装前先更新yum软件包索引</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>安装docker-ce（社区版-免费的）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>如何判断是否成功安装docker 查看版本</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.启动docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="启动错误" tabindex="-1"><a class="header-anchor" href="#启动错误" aria-hidden="true">#</a> 启动错误</h1><blockquote><p>Linux系统Docker启动问题Job for docker.service failed because the control process exited with error code. See &quot;systemctl status docker.service&quot;</p></blockquote><h3 id="内核版本过低" tabindex="-1"><a class="header-anchor" href="#内核版本过低" aria-hidden="true">#</a> 内核版本过低</h3><ol><li>将以前下载好的Docker卸载干净，使用如下命令：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 yum remove docker-*
2 sudo yum remove docker \\ docker-client \\ docker-client-latest \\ docker-common \\ docker-latest \\ docker-latest-logrotate \\ docker-logrotate \\ docker-selinux \\ docker-engine-selinux \\ docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>更新改linux系统的内核版本</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>重新安装docker</li></ol>`,28),t=[n];function s(r,c){return d(),i("div",null,t)}const u=e(l,[["render",s],["__file","安装.html.vue"]]);export{u as default};
