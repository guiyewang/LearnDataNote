import{_ as a,Y as l,Z as i,$ as e,a1 as d,a3 as n,a2 as s,D as r,a0 as o}from"./framework-d651fda7.js";const c={},u={class:"table-of-contents"},b=s(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> docker安装</h2><ol><li>设置路径</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export GITLAB_HOME=/srv/gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>GitLab 容器使用主机装载的卷来存储持久性数据：</li></ol><table><thead><tr><th>本地位置</th><th>集装箱位置</th><th>用法</th></tr></thead><tbody><tr><td>$GITLAB_HOME/data</td><td>/var/opt/gitlab</td><td>用于存储应用程序数据。</td></tr><tr><td>$GITLAB_HOME/logs</td><td>/var/log/gitlab</td><td>用于存储日志。</td></tr><tr><td>$GITLAB_HOME/config</td><td>/etc/gitlab</td><td>用于存储 GitLab 配置文件。</td></tr></tbody></table><ol start="3"><li>使用 Docker 引擎安装 GitLab 您可以微调这些目录以满足您的要求。 设置变量后，可以运行映像：GITLAB_HOME</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo docker run --detach \\
  --hostname gitlab.example.com \\
  --publish 10443:443 --publish 10080:80 --publish 10022:22 \\
  --name gitlab \\
  --restart always \\
  --volume $GITLAB_HOME/config:/etc/gitlab \\
  --volume $GITLAB_HOME/logs:/var/log/gitlab \\
  --volume $GITLAB_HOME/data:/var/opt/gitlab \\
  --shm-size 256m \\
  gitlab/gitlab-ee:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这将下载并启动 GitLab 容器并发布所需的端口 访问SSH，HTTP和HTTPS。所有 GitLab 数据都将存储为 的子目录。容器将在系统重新启动后自动运行。$GITLAB_HOME restart</p></blockquote>`,9);function v(h,m){const t=r("router-link");return l(),i("div",null,[e("nav",u,[e("ul",null,[e("li",null,[d(t,{to:"#docker安装"},{default:n(()=>[o("docker安装")]),_:1})])])]),b])}const g=a(c,[["render",v],["__file","安装.html.vue"]]);export{g as default};
