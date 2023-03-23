import{_ as a,Y as t,Z as s,$ as n,a0 as e,a1 as l,a2 as d,D as r}from"./framework-d651fda7.js";const o={},h=n("h1",{id:"pyenv",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pyenv","aria-hidden":"true"},"#"),e(" pyenv")],-1),c=n("h2",{id:"说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#说明","aria-hidden":"true"},"#"),e(" 说明")],-1),p={href:"https://github.com/pyenv/pyenv",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m={href:"https://github.com/pyenv-win/pyenv-win",target:"_blank",rel:"noopener noreferrer"},u=n("li",null,"概述 ​ pyenv是python版本管理器，是解释器层面。类似于node版本管理器nvm，go版本管理器gvm。",-1),y=d(`<h2 id="windows安装" tabindex="-1"><a class="header-anchor" href="#windows安装" aria-hidden="true">#</a> windows安装</h2><ol><li><p>git下载</p></li><li><p>添加以下下系统环境变量</p></li><li><p>注意：这里路径换成你自己的安装路径 <img src="https://pcsdata.baidu.com/thumbnail/adf6584fbl17354e73b7affd35d36c82?fid=2519193222-16051585-942996900303621&amp;rt=pr&amp;sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-bp0303TNYXaAxJLNba0tAE52Rac%3D&amp;expires=48h&amp;chkv=0&amp;chkbd=0&amp;chkpc=&amp;dp-logid=8810452330232924744&amp;dp-callid=0&amp;time=1679551200&amp;bus_no=26&amp;size=c1600_u1600&amp;quality=100&amp;vuk=-&amp;ft=video" alt="环境路径" loading="lazy"></p></li><li><p>path变量中</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%PYENV%\\bin
%PYENV%\\shims
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>检测是否成功 打开cmd，输入pyenv --version进行测试。</li></ol><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><ol><li><p>安装 Python 过程非常慢 ,有时候超过1小时，并非卡死。</p></li><li><p>所有的 Python,只能通过 pyenv 安装。（系统安装的与它不冲出，但 pyenv 无法使用）</p></li><li><p>更新完数据库后，需要重新替换下载源。</p></li><li><p>在一台电脑安装完可以整个压缩拖到别的电脑使用（只需要配置环境变量）</p></li><li><p>注意：Python3.9 及以后版本将不再支持win7，已安装的在win7会提示缺少文件安装上也会报错。</p></li><li><p>Python 3.10 版本及以后在Pycharm 中，能用但不支持</p></li></ol><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>commands  -------------列出所有可用的pyenv命令
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
     pyenv global &lt;python_version&gt;：设置使用哪一个python。
     pyenv install &lt;python_version&gt;：安装特定版本的python。
     pyenv uninstall &lt;python_version&gt;：移除特定版本的python。
     pyenv install -l：查看可安装的python。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载过慢" tabindex="-1"><a class="header-anchor" href="#下载过慢" aria-hidden="true">#</a> 下载过慢</h2>`,9),b={href:"https://registry.npmmirror.com/binary.html?path=python/3.9.8/",target:"_blank",rel:"noopener noreferrer"},_=n("li",null,"放入./pyenv-win\\install_cache目录下在进行安装可以跳过下载",-1);function g(f,x){const i=r("ExternalLinkIcon");return t(),s("div",null,[h,c,n("ol",null,[n("li",null,[e("github地址 "),n("a",p,[e("https://github.com/pyenv/pyenv"),l(i)]),v,e(" windows: "),n("a",m,[e("https://github.com/pyenv-win/pyenv-win"),l(i)])]),u]),y,n("ol",null,[n("li",null,[e("国内镜像网站下载 "),n("a",b,[e("https://registry.npmmirror.com/binary.html?path=python/3.9.8/"),l(i)])]),_])])}const w=a(o,[["render",g],["__file","Python版本管理工具.html.vue"]]);export{w as default};
