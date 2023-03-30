import{_ as a,M as e,p as i,q as t,R as s,t as c,N as l,a1 as r}from"./framework-f3fd2962.js";const o="/assets/202111271126733-88f2aa2e.png",d="/assets/202111271126276-0779f0cb.png",p={},u=r(`<h2 id="取消全局用户配置" tabindex="-1"><a class="header-anchor" href="#取消全局用户配置" aria-hidden="true">#</a> 取消全局用户配置</h2><p>查看当前是否使用了全局用户配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">11930</span><span class="token punctuation">\\</span>Desktop<span class="token operator">&gt;</span> <span class="token function">git</span> config user.name
zhuangzhuang-huang
PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">11930</span><span class="token punctuation">\\</span>Desktop<span class="token operator">&gt;</span> <span class="token function">git</span> config user.email
cau1403090523@gmail.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取消全局用户配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> user.name <span class="token string">&quot;zhuangzhuang-huang&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> user.email <span class="token string">&quot;cau1403090523@gmail.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成ssh-key" tabindex="-1"><a class="header-anchor" href="#生成ssh-key" aria-hidden="true">#</a> 生成SSH key</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ssh-keygen 参数说明</span>
-t:        指定要创建的密钥类型。可以使用：<span class="token string">&quot;rsa1&quot;</span><span class="token punctuation">(</span>SSH-1<span class="token punctuation">)</span> <span class="token string">&quot;rsa&quot;</span><span class="token punctuation">(</span>SSH-2<span class="token punctuation">)</span> <span class="token string">&quot;dsa&quot;</span><span class="token punctuation">(</span>SSH-2<span class="token punctuation">)</span>
-f:        指定密钥文件名。
-C:        提供一个新注释
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入到目录</span>
<span class="token builtin class-name">cd</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">11930</span><span class="token punctuation">\\</span>.ssh
<span class="token comment"># 在C:\\Users\\11930\\.ssh创建文件 </span>
<span class="token function">touch</span> id_rsa.github
<span class="token comment"># Github 注册的邮箱</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-f</span> id_rsa.github <span class="token parameter variable">-C</span> <span class="token string">&quot;cau1403090523@gmail.com&quot;</span>
<span class="token comment"># Gitee 注册的邮箱</span>
<span class="token function">touch</span> id_rsa.gitee
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-f</span> id_rsa.gitee <span class="token parameter variable">-C</span> <span class="token string">&quot;1193094618@qq.com&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="202111271126733"></p><h2 id="配置ssh-key到github和gitee" tabindex="-1"><a class="header-anchor" href="#配置ssh-key到github和gitee" aria-hidden="true">#</a> 配置SSH Key到Github和Gitee</h2><p><strong>id_rsa.gitee.pub</strong>和 <strong>id_rsa.github.pub</strong>的内容分别配置到gitee和github</p><p><img src="'+d+`" alt="202111271126276"></p><h3 id="配置config文件" tabindex="-1"><a class="header-anchor" href="#配置config文件" aria-hidden="true">#</a> 配置config文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入到目录</span>
<span class="token builtin class-name">cd</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">11930</span><span class="token punctuation">\\</span>.ssh
<span class="token comment"># 在C:\\Users\\11930\\.ssh创建文件 </span>
<span class="token function">touch</span> config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># gitee</span>
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa.gitee

<span class="token comment"># github</span>
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa.github
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh-key测试" tabindex="-1"><a class="header-anchor" href="#ssh-key测试" aria-hidden="true">#</a> SSH key测试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com

<span class="token comment"># 输入如</span>
Hi Aeroxian<span class="token operator">!</span> You&#39;ve successfully authenticated, but GitHub does not provide shell access.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="github-ping不通" tabindex="-1"><a class="header-anchor" href="#github-ping不通" aria-hidden="true">#</a> github ping不通</h3><p>在使用ssh key测试的时候，会识别不了github.com,在hosts文件添加如下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">140.82</span>.113.3 github.com
<span class="token number">199.232</span>.5.194 github.global.ssl.fastly.net
<span class="token number">54.231</span>.114.219 github-cloud.s3.amazonaws.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置用户全局信息" tabindex="-1"><a class="header-anchor" href="#设置用户全局信息" aria-hidden="true">#</a> 设置用户全局信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span>  user.name <span class="token string">&quot;Aeroxian&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span>  user.email <span class="token string">&quot;cau1403090523@gmail.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,24),h={href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys",target:"_blank",rel:"noopener noreferrer"};function m(b,v){const n=e("ExternalLinkIcon");return i(),t("div",null,[u,s("p",null,[s("a",h,[c("connecting to github with-ssh"),l(n)])])])}const k=a(p,[["render",m],["__file","11 win11配置github和gitee.html.vue"]]);export{k as default};
