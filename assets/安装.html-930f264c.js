import{_ as s,Y as r,Z as c,$ as e,a1 as i,a3 as v,a0 as t,a2 as a,D as l}from"./framework-d651fda7.js";const b={},o={class:"table-of-contents"},u=a(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> docker安装</h2><ol><li>Gitlab镜像</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>拉取Gitlab镜像</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 拉取Gitlab镜像
docker pull gitlab/gitlab-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>启动容器</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 启动容器
docker run \\
 -itd  \\
 -p 10080:80 \\
 -p 10022:22 \\
 -v /usr/local/docker/Gitlab/etc:/etc/gitlab  \\
 -v /usr/local/docker/Gitlab/log:/var/log/gitlab \\
 -v /usr/local/docker/Gitlab/opt:/var/opt/gitlab \\
 --restart always \\
 --privileged=true \\
 --name gitlab \\
 gitlab/gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>-i</td><td>以交互模式运行容器，通常与 -t 同时使用命令解释</td></tr><tr><td>-t</td><td>为容器重新分配一个伪输入终端，通常与 -i 同时使用</td></tr><tr><td>-d</td><td>后台运行容器，并返回容器ID</td></tr><tr><td>-p</td><td>9980:80 将容器内80端口映射至宿主机9980端口，这是访问gitlab的端口</td></tr><tr><td>-p</td><td>9922:22 将容器内22端口映射至宿主机9922端口，这是访问ssh的端口</td></tr><tr><td>-v</td><td>/home/gitlab/etc:/etc/gitlab 将容器/etc/gitlab目录挂载到宿主机/usr/local/gitlab-test/etc目录下，若宿主机内此目录不存在将会自动创建，其他两个挂载同这个一样</td></tr><tr><td>--restart always</td><td>容器自启动</td></tr><tr><td>--privileged=true</td><td>让容器获取宿主机root权限</td></tr><tr><td>--name gitlab</td><td>设置容器名称为gitlab</td></tr><tr><td>gitlab/gitlab-ce</td><td>镜像的名称，这里也可以写镜像ID</td></tr></tbody></table><ol start="4"><li>修改配置</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#进容器内部
docker exec -it gitlab /bin/bash
 
#修改gitlab.rb
vi /etc/gitlab/gitlab.rb
 
#加入如下
#gitlab访问地址，可以写域名。如果端口不写的话默认为80端口
external_url &#39;http://192.168.124.194&#39;
#ssh主机ip
gitlab_rails[&#39;gitlab_ssh_host&#39;] = &#39;192.168.124.194&#39;
#ssh连接端口
gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 9922
 
# 让配置生效
gitlab-ctl reconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),m={href:"http://192.168.124.194:9980",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 修改http和ssh配置
vi /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml
 
  gitlab:
    host: 192.168.124.194
    port: 9980 # 这里改为9980
    https: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#重启gitlab 
gitlab-ctl restart
#退出容器 
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(p,_){const d=l("router-link"),n=l("ExternalLinkIcon");return r(),c("div",null,[e("nav",o,[e("ul",null,[e("li",null,[i(d,{to:"#docker安装"},{default:v(()=>[t("docker安装")]),_:1})])])]),u,e("blockquote",null,[e("p",null,[t("注意不要重启，/etc/gitlab/gitlab.rb文件的配置会映射到gitlab.yml这个文件，由于咱们在docker中运行，在gitlab上生成的http地址应该是"),e("a",m,[t("http://192.168.124.194:9980"),i(n)]),t(",所以，要修改下面文件")])]),g])}const k=s(b,[["render",h],["__file","安装.html.vue"]]);export{k as default};
