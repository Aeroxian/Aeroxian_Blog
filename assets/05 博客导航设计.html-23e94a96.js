import{_ as n,p as s,q as a,a1 as e}from"./framework-f3fd2962.js";const t={},p=e(`<h2 id="导航设计" tabindex="-1"><a class="header-anchor" href="#导航设计" aria-hidden="true">#</a> 导航设计</h2><ol><li><p>从首页进入能够浏览到所有专题（已在上一章首页配置中实现了）</p></li><li><p>头部导航，也是导航到所有专题</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在 docs\\.vuepress\\config\\navBar.js 维护了导航</span>
<span class="token doc-comment comment">/**
 * 导航栏维护
 */</span>
<span class="token keyword">const</span> titles <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../autoSiderbar/textTitle&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
navbar <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> titles<span class="token punctuation">[</span><span class="token string">&#39;topicNav&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/topicNav/&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> navbar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>页面底部导航，导航到本专题，如vuepress的文章就导航到vuepress的专题，如果是该专题的README.md页则导航到总的专题目录</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 专题的README.md页面</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span>
  <span class="token key atrule">text</span><span class="token punctuation">:</span> Back To 目录
  <span class="token key atrule">link</span><span class="token punctuation">:</span> /topicNav/
<span class="token comment"># 专题的具体文章页面则导航回该专题</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span>
  <span class="token key atrule">text</span><span class="token punctuation">:</span> Back To 目录
  <span class="token key atrule">link</span><span class="token punctuation">:</span> /vuepress/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>4.自定义回退导航</p><p>我觉得这个底部导航的使用方式有点难用,想回到目录就得划到最下面</p><p>这个东西应该不受页面滚动影响才比较好用一些</p>`,5),i=[p];function l(c,o){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","05 博客导航设计.html.vue"]]);export{u as default};
