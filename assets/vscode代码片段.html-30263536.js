import{_ as n,Y as s,Z as e,a2 as i}from"./framework-d651fda7.js";const a={},l=i(`<ol><li>【文件】 -&gt; 【首选项】-&gt; 【用户代码片段】</li><li>选择自己要设置的代码语言，如cpp</li><li>在XXX.json中编辑。（注意：要把自己的代码放进双引号中，prefix 后为触发模板的关键词）</li><li>内容</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;vh&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vh&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 触发的关键字 输入vh按下tab键</span>
	<span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>	<span class="token comment">//内容</span>
		<span class="token string">&quot;&lt;div id=\\&quot;app\\&quot;&gt;&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;&lt;script&gt;&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;  var vm = new Vue({&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;    el:&#39;#app&#39;,&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;    data:{},&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;    })&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token comment">//描述</span>
	<span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vh components&quot;</span>
	<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>下面为官网对一些参数的解释：

Print to console 代码片段名称
prefix 插件前缀
body 插件内容可以是字符串，也可以为数组，若为数组每个元素都做为单独的一行插入。
description 插件描述
Snippet 语法
制表位(Tabstops)
使用制表位(Tabstops)可是在代码片段中移动光标位置，使用$1,$2来指定光标的位置,数字代表光标的移动的顺序，值得注意的时$0代表光标的最后位置。如果有多个相同的制表位(Tabstops)会在编译器里同时出现多个光标（类似编译器的块编辑模式）。

占位符(Placeholders)
占位符(Placeholders) 是带默认值的制表位(Tabstops),占位符(Placeholders)的文本会被插入到制表位(Tabstops)所在位置并且全选以方便修改,占位符(Placeholders)可以嵌套使用，比如\${1:another \${2:placeholder}}。

选择项(Choice)
占位符(Placeholders)可以有多选值，每个选项的值用 , 分隔，选项的开始和结束用管道符号(|)将选项包含，例如: \${1|one,two,three|}，当插入代码片段，选择制制表位(Tabstops)的时候，会列出选项供用户选择。

变量(Variables)
使用 $name 或者 \${name|default} 可以插入变量的值，如果变量未被赋值则插入 default 的值或者空值 。当变量未被定义，则将变量名插入，变量(Variables)将被转换为占位符(Placeholders)
系统变量如下

TM_SELECTED_TEXT 当前选定的文本或空字符串
TM_CURRENT_LINE 当前行的内容
TM_CURRENT_WORD 光标下的单词的内容或空字符串
TM_LINE_INDEX 基于零索引的行号
TM_LINE_NUMBER 基于一索引的行号
TM_FILENAME 当前文档的文件名
TM_FILENAME_BASE 当前文档的文件名（不含后缀名)
TM_DIRECTORY 当前文档的目录
TM_FILEPATH 当前文档的完整文件路径
CLIPBOARD 剪切板里的内容
插入当前日期或时间：

CURRENT_YEAR 当前年(四位数)
CURRENT_YEAR_SHORT 当前年(两位数)
CURRENT_MONTH 当前月
CURRENT_MONTH_NAME 本月的全名（’十月’）
CURRENT_MONTH_NAME_SHORT 月份的简称（’Oct’）
CURRENT_DATE 当前日
CURRENT_DAY_NAME 当天的名称（’星期一’）
CURRENT_DAY_NAME_SHORT 当天的短名称（’Mon’）
CURRENT_HOUR 当前小时
CURRENT_MINUTE 当前分钟
CURRENT_SECOND 当前秒
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[l];function d(c,o){return s(),e("div",null,t)}const v=n(a,[["render",d],["__file","vscode代码片段.html.vue"]]);export{v as default};
