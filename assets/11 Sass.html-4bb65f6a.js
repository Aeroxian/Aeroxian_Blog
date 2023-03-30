import{_ as t,M as c,p,q as l,R as s,t as n,N as e,a1 as i}from"./framework-f3fd2962.js";const o="/assets/image-20220721001120735-bedf3db6.png",d={},r=s("h2",{id:"sass-scss",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sass-scss","aria-hidden":"true"},"#"),n(" Sass / Scss")],-1),u={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},v=i('<p><img src="'+o+`" alt="image-20220721001120735"></p><h2 id="npm安装sass" tabindex="-1"><a class="header-anchor" href="#npm安装sass" aria-hidden="true">#</a> npm安装Sass</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>我觉得scss格式比sass格式更符合需求</li><li>项目中使用webback来安装相应的插件来解决</li></ol></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局安装在了E:\\nodejs\\node_global\\sass -&gt; E:\\nodejs\\node_global\\node_modules\\sass\\sass.js</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看安装的版本</span>
sass <span class="token parameter variable">--version</span>
<span class="token number">1.53</span>.0 compiled with dart2js <span class="token number">2.17</span>.3

<span class="token comment"># 编译</span>
sass main.scss main.css
sass <span class="token parameter variable">--watch</span> main.scc:main.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2><h3 id="nested嵌套" tabindex="-1"><a class="header-anchor" href="#nested嵌套" aria-hidden="true">#</a> nested嵌套</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.documentation-links</span><span class="token punctuation">{</span>
    <span class="token selector">.documentation-link</span><span class="token punctuation">{</span>
        <span class="token selector"><span class="token parent important">&amp;</span>:active,
        <span class="token parent important">&amp;</span>:hover</span><span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
        
        <span class="token selector"><span class="token parent important">&amp;</span>.something-else</span><span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> properties</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/**感觉有点鸡肋*/</span>
<span class="token selector">flex:</span><span class="token punctuation">{</span>
	<span class="token property">direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
	<span class="token property">wrap</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> variables</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/** $开头 */</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$size-default</span></span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>

<span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
<span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">$size-default</span> <span class="token operator">*</span> 0.5<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list-maps" tabindex="-1"><a class="header-anchor" href="#list-maps" aria-hidden="true">#</a> List &amp; Maps</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/** List*/</span>
<span class="token property"><span class="token variable">$border-default</span></span><span class="token punctuation">:</span> 0.05rem solid <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
<span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">$border-default</span><span class="token punctuation">;</span>

<span class="token comment">/** Map */</span>
<span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token property">main</span><span class="token punctuation">:</span> red<span class="token punctuation">,</span><span class="token property">secondary</span><span class="token punctuation">:</span> orange<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用map-get函数获取值</span>
<span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$colors</span><span class="token punctuation">,</span>main<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="built-in-functions" tabindex="-1"><a class="header-anchor" href="#built-in-functions" aria-hidden="true">#</a> Built -in Functions</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$primary-color</span><span class="token punctuation">,</span>72%<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="import-partial-抽离到一个文件" tabindex="-1"><a class="header-anchor" href="#import-partial-抽离到一个文件" aria-hidden="true">#</a> Import &amp; Partial(抽离到一个文件)</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// css3 在浏览器中会单独加载这个文件</span>
<span class="token keyword">@import</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;./xxx.css&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>scss会整合到一个文件</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 文件名以下划线开头 _variables.scss</span>

<span class="token keyword">@import</span> <span class="token string">&quot;_variables.scss&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="advance-media" tabindex="-1"><a class="header-anchor" href="#advance-media" aria-hidden="true">#</a> Advance Media</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss中使得media更加接近标签</span>
<span class="token selector">html</span><span class="token punctuation">{</span>
    @media <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 40rem<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// css3中是</span>
@media <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 40rem<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token selector">html</span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inheritance" tabindex="-1"><a class="header-anchor" href="#inheritance" aria-hidden="true">#</a> Inheritance</h3>`,23),m={href:"https://aeroxian.github.io/minifrontendproject/20%20Hidden%20Search%20Widget.html#hidden-search-widget",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 抽离公共的区域部分</span>
<span class="token selector">.share-section</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.introduction</span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .share-section<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins" aria-hidden="true">#</a> Mixins</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>类似自定义函数</p></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>
<span class="token keyword">@mixin</span> <span class="token function">custom-name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -ms-flexbox<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@mixin</span> <span class="token function">media-min-width</span><span class="token punctuation">(</span><span class="token variable">$width</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    @<span class="token function">media</span><span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 动态添加内容</span>
        <span class="token keyword">@content</span><span class="token punctuation">:</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">custom-name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">@include</span> <span class="token function">media-min-width</span><span class="token punctuation">(</span>40rem<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 动态添加内容</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 125%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.sub-container</span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">media-min-width</span><span class="token punctuation">(</span>40rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">containerDisplayFlex</span><span class="token punctuation">(</span>$<span class="token property">direction</span><span class="token punctuation">:</span> row<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> $direction<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 使用的时候也可以传入值</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">containerDisplayFlex</span><span class="token punctuation">(</span>column<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$white-font-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用模块" tabindex="-1"><a class="header-anchor" href="#使用模块" aria-hidden="true">#</a> 使用模块</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:math&quot;</span><span class="token punctuation">;</span>

<span class="token selector">li </span><span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> math.<span class="token function">div</span><span class="token punctuation">(</span><span class="token variable">$globe-spacing</span><span class="token punctuation">,</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开源库" tabindex="-1"><a class="header-anchor" href="#开源库" aria-hidden="true">#</a> 开源库</h3>`,10),b={href:"https://gerillass.com/",target:"_blank",rel:"noopener noreferrer"},h=s("p",null,"使用开源库的目的：",-1),g=s("ol",null,[s("li",null,"学习封装的思想"),s("li",null,"提高开发效率")],-1),f=s("h2",{id:"编译sass文件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#编译sass文件","aria-hidden":"true"},"#"),n(" 编译sass文件")],-1),y={href:"https://sass-lang.com/guide",target:"_blank",rel:"noopener noreferrer"},x=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将当前文件style.scss文件编译到dist文件夹下的style.css</span>
sass style.scss dist/style.css

<span class="token comment"># 在开发模式下使用watch模式，这样style.scss文件发生了变化就会实时编译更新到style.css文件中</span>
sass <span class="token parameter variable">--watch</span> style.scss:dist/style.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发遇到问题" tabindex="-1"><a class="header-anchor" href="#开发遇到问题" aria-hidden="true">#</a> 开发遇到问题</h2>`,2),_={href:"https://stackoverflow.com/questions/17982111/sass-variable-in-css-calc-function",target:"_blank",rel:"noopener noreferrer"},w=i(`<div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">calc</span><span class="token punctuation">(</span><span class="token variable">#{$a}</span> <span class="token operator">+</span> 7px<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1);function S($,q){const a=c("ExternalLinkIcon");return p(),l("div",null,[r,s("p",null,[s("a",u,[n("Sass: Syntactically Awesome Style Sheets (sass-lang.com)"),e(a)])]),v,s("p",null,[s("a",m,[n("Hidden Search Widget"),e(a)])]),k,s("p",null,[s("a",b,[n("Gerillass: The best Sass mixins library for modern web design"),e(a)])]),h,g,f,s("p",null,[s("a",y,[n("Sass: Sass Basics (sass-lang.com)"),e(a)])]),x,s("p",null,[s("a",_,[n("Sass Variable in CSS calc() function - Stack Overflow"),e(a)])]),w])}const I=t(d,[["render",S],["__file","11 Sass.html.vue"]]);export{I as default};
