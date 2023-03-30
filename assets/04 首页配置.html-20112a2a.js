import{_ as a,M as e,p as t,q as p,R as n,t as o,N as i,a1 as l}from"./framework-f3fd2962.js";const c="/assets/image-20211126094052080-58b18fb6.png",u={},r=l(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>将一个markdown文档变成首页</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> ../.vuepress/public/images/logo.png
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> <span class="token string">&#39;🏷️Hi : )🏷️&#39;</span>
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> <span class="token string">&#39;Aeroxian的Vuepress Blog🏷️&#39;</span>
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 👉ENTRY
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /topicNav/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导航设计" tabindex="-1"><a class="header-anchor" href="#导航设计" aria-hidden="true">#</a> 导航设计</h2><blockquote><p>点击进去之后，能够浏览到所有的专题分类的笔记</p><img src="`+c+`" alt="image-20211126094052080" style="zoom:50%;"></blockquote><p>增加了/topicNav/的功能,由于vuepress在访问/topicNav/ 需要有一个默认的首页，所以建立了一个topicNav文件夹</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;/topicNav/&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;children&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;Vuepress博客搭建&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;link&quot;</span><span class="token operator">:</span><span class="token string">&quot;/vuepress/&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;/vuepress/&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;Vuepress博客搭建&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;children&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;01 搭建vuepress2&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;link&quot;</span><span class="token operator">:</span><span class="token string">&quot;/vuepress/01 搭建vuepress2.md&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;02 图片存放路径&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;link&quot;</span><span class="token operator">:</span><span class="token string">&quot;/vuepress/02 图片存放路径.md&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;03 侧边栏配置&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;link&quot;</span><span class="token operator">:</span><span class="token string">&quot;/vuepress/03 侧边栏配置.md&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;04 首页配置&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;link&quot;</span><span class="token operator">:</span><span class="token string">&quot;/vuepress/04 首页配置.md&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,8),d={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"};function v(k,m){const s=e("ExternalLinkIcon");return t(),p("div",null,[r,n("p",null,[n("a",d,[o("Frontmatter | VuePress (vuejs.org)"),i(s)])])])}const q=a(u,[["render",v],["__file","04 首页配置.html.vue"]]);export{q as default};
