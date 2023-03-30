import{_ as e,M as p,p as o,q as i,R as n,t as s,N as t,a1 as c}from"./framework-f3fd2962.js";const l={},u=n("h2",{id:"sidebar侧边栏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sidebar侧边栏","aria-hidden":"true"},"#"),s(" sidebar侧边栏")],-1),r=n("p",null,"vuepress支持两种方式的侧边栏",-1),d=n("ol",null,[n("li",null,"所有页面会使用相同的侧边栏"),n("li",null,"不同子路径下的页面会使用不同的侧边栏")],-1),k=n("h2",{id:"自动生成侧边栏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自动生成侧边栏","aria-hidden":"true"},"#"),s(" 自动生成侧边栏")],-1),v={href:"https://www.npmjs.com/package/directory-tree",target:"_blank",rel:"noopener noreferrer"},m=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i directory-tree
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="所有页面相同侧边栏" tabindex="-1"><a class="header-anchor" href="#所有页面相同侧边栏" aria-hidden="true">#</a> 所有页面相同侧边栏</h3><blockquote><p><code>docs\\.vuepress\\autoSiderbar\\AllPageSameSildeBar.js</code></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 所有页面会使用相同的侧边栏
 */</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dirTree <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;directory-tree&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> titles <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./textTitle&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">SRC_PATH</span> <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../../&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * 默认使用文件夹名称作为route,如果文件有中文则sidebar不会生效
 * 维护了一个份textTitle来将route转换为title
 */</span>
<span class="token keyword">function</span> <span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>titles<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;===================================================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;[Warn]: 请在textTitle.js 文件中维护一个 %s 的title&quot;</span><span class="token punctuation">,</span><span class="token string">&#39;vuepress1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;===================================================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> titles<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">toSidebarOption</span><span class="token punctuation">(</span><span class="token parameter">tree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


  <span class="token keyword">return</span> tree<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> stat <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>stat<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token function">getTitle</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// link: v.path.split(&quot;docs&quot;)[1]+&#39;/&#39;,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token function">toSidebarOption</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.md$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> v<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;docs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 去除.vuepress的节点
 <span class="token punctuation">{</span>
            &quot;path&quot;:&quot;d:/Github/vlog/docs/.vuepress&quot;,
            &quot;name&quot;:&quot;.vuepress&quot;,
            &quot;children&quot;:Array[4]
 <span class="token punctuation">}</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">srcDir</span> 
 * <span class="token keyword">@returns</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">removeDotvuepress</span><span class="token punctuation">(</span><span class="token parameter">srcDir</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> srcDir<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.vuepress&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">autoGetSidebarOptionBySrcDir</span><span class="token punctuation">(</span><span class="token parameter">srcPath <span class="token operator">=</span> <span class="token constant">SRC_PATH</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> srcDir <span class="token operator">=</span> <span class="token function">dirTree</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.md$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">normalizePath</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">README.md|readme.md</span><span class="token regex-delimiter">/</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token function">removeDotvuepress</span><span class="token punctuation">(</span>srcDir<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//console.log(JSON.stringify(children))</span>

  <span class="token keyword">const</span> sideBar <span class="token operator">=</span> <span class="token function">toSidebarOption</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Generated sidebar finished :)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> sideBar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//=================测试===============================</span>
<span class="token comment">//const result = autoGetSidebarOptionBySrcDir();</span>
<span class="token comment">//console.log(JSON.stringify(result));</span>

<span class="token doc-comment comment">/** 生成的结果
[
    <span class="token punctuation">{</span>
        &quot;text&quot;:&quot;Vuepress博客搭建&quot;,
        &quot;link&quot;:&quot;/vuepress/&quot;,
        &quot;children&quot;:[
            <span class="token punctuation">{</span>
                &quot;text&quot;:&quot;01 搭建vuepress2&quot;,
                &quot;link&quot;:&quot;/vuepress/01 搭建vuepress2.md&quot;
            <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span>
                &quot;text&quot;:&quot;02 图片存放路径&quot;,
                &quot;link&quot;:&quot;/vuepress/02 图片存放路径.md&quot;
            <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span>
                &quot;text&quot;:&quot;03 侧边栏配置&quot;,
                &quot;link&quot;:&quot;/vuepress/03 侧边栏配置.md&quot;
            <span class="token punctuation">}</span>
        ]
    <span class="token punctuation">}</span>
]
 */</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> autoGetSidebarOptionBySrcDir<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不同子路径不同侧边栏⭐" tabindex="-1"><a class="header-anchor" href="#不同子路径不同侧边栏⭐" aria-hidden="true">#</a> 不同子路径不同侧边栏⭐</h3><blockquote><p><code>docs\\.vuepress\\autoSiderbar\\DiffRouteDifSidebar.js</code></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 不同子路径下的页面会使用不同的侧边栏
 */</span>

<span class="token keyword">const</span> autoGetSidebarOptionBySrcDir <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./AllPageSameSildeBar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">autoGenSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> contents <span class="token operator">=</span> <span class="token function">autoGetSidebarOptionBySrcDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    contents<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>link <span class="token keyword">in</span> result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>element<span class="token punctuation">.</span>link<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>

        result<span class="token punctuation">[</span>element<span class="token punctuation">.</span>link<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> element<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> element<span class="token punctuation">.</span>children
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试</span>
<span class="token comment">//console.log(JSON.stringify(autoGenSidebar()));</span>
<span class="token doc-comment comment">/**
<span class="token punctuation">{</span>
    &quot;/vuepress/&quot;:[
        <span class="token punctuation">{</span>
            &quot;text&quot;:&quot;Vuepress博客搭建&quot;,
            &quot;children&quot;:[
                <span class="token punctuation">{</span>
                    &quot;text&quot;:&quot;01 搭建vuepress2&quot;,
                    &quot;link&quot;:&quot;/vuepress/01 搭建vuepress2.md&quot;
                <span class="token punctuation">}</span>,
                <span class="token punctuation">{</span>
                    &quot;text&quot;:&quot;02 图片存放路径&quot;,
                    &quot;link&quot;:&quot;/vuepress/02 图片存放路径.md&quot;
                <span class="token punctuation">}</span>,
                <span class="token punctuation">{</span>
                    &quot;text&quot;:&quot;03 侧边栏配置&quot;,
                    &quot;link&quot;:&quot;/vuepress/03 侧边栏配置.md&quot;
                <span class="token punctuation">}</span>
            ]
        <span class="token punctuation">}</span>
    ]
<span class="token punctuation">}</span>
*/</span>

 module<span class="token punctuation">.</span>exports <span class="token operator">=</span> autoGenSidebar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="title维护😁" tabindex="-1"><a class="header-anchor" href="#title维护😁" aria-hidden="true">#</a> Title维护😁</h3><blockquote><p><code>docs\\.vuepress\\autoSiderbar\\textTitle.js</code></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 本来的想法是使用文件夹的名称来作为sidebar的route
 * 但是发现route不能使用中文
 * 所以将文件夹的名称的作为route的情况下,route对应的text则在这里维护一份
 * 
 * key: route
 * val: text
 */</span>

<span class="token keyword">const</span> titles <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;vuepress&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Vuepress博客搭建&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


module<span class="token punctuation">.</span>exports <span class="token operator">=</span> titles<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><blockquote><p>配置自动生成的侧边栏</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> autoGenSidebar <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./autoSiderbar/DiffRouteDifSidebar&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token function">autoGenSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Aeroxian的Vlog&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Aeroxian的Vuepress Blog&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;../.vuepress/public/images/favicon-32x32.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// icon设置</span>

  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;../.vuepress/public/images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>   <span class="token comment">// 禁用显示更新时间</span>
    <span class="token literal-property property">contributors</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>   <span class="token comment">// 禁用显示贡献者</span>
    sidebar
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,14),b={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar",target:"_blank",rel:"noopener noreferrer"};function q(g,h){const a=p("ExternalLinkIcon");return o(),i("div",null,[u,r,d,k,n("p",null,[s("使用依赖"),n("a",v,[s("directory-tree - npm (npmjs.com)"),t(a)])]),m,n("p",null,[n("a",b,[s("配置 | VuePress (vuejs.org)"),t(a)])])])}const f=e(l,[["render",q],["__file","03 侧边栏配置.html.vue"]]);export{f as default};
