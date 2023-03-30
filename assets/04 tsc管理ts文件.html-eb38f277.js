import{_ as s,p as n,q as a,a1 as e}from"./framework-f3fd2962.js";const t={},o=e(`<h2 id="tsc管理ts文件" tabindex="-1"><a class="header-anchor" href="#tsc管理ts文件" aria-hidden="true">#</a> tsc管理ts文件</h2><h3 id="单个文件" tabindex="-1"><a class="header-anchor" href="#单个文件" aria-hidden="true">#</a> 单个文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc file.ts <span class="token parameter variable">-w</span>
<span class="token comment"># 或者</span>
tsc file.ts <span class="token parameter variable">--watch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整个项目" tabindex="-1"><a class="header-anchor" href="#整个项目" aria-hidden="true">#</a> 整个项目</h3><p>将整个项目交给TypeScript Compiler管理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行命令会生成 tsconfig.json</span>
tsc <span class="token parameter variable">--init</span>
<span class="token comment"># model模式</span>
tsc <span class="token parameter variable">--watch</span>   <span class="token comment"># 或者tsc -w</span>

<span class="token comment">#直接执行tsc，则一次性编译所有ts文件</span>
tsc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tsconfig-json文件" tabindex="-1"><a class="header-anchor" href="#tsconfig-json文件" aria-hidden="true">#</a> tsconfig.json文件</h2><p>用于配置tsc如何编译ts文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span> <span class="token comment">/*指定typescript compiler编译的版本*/</span>
<span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">/* 用于debug ts文件⭐*/</span>
<span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span> <span class="token comment">/*编译后的js文件存放根目录*/</span>
<span class="token property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./src&quot;</span><span class="token punctuation">,</span> <span class="token comment">/*指定要编译的文件所在的根目录*/</span>
<span class="token property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">/*如果报告任何类型检查错误，则禁用编译文件*/</span>
<span class="token comment">// =================严格模式================================</span>
<span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">/*对于可能为null的进行检查*/</span>
<span class="token property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">/*对声明却没有被使用的进行检查*/</span>

<span class="token comment">// ======================配置相对路径=====================================</span>
<span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;src/*&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这样就能导入 import TodoItem from &#39;@/types/TodoItems&#39;     在src/types/TodoItems.ts</span>
<span class="token comment">// ==========================================================================</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// !告诉typescript compiler 这个不会返回null,是永远存在的</span>
<span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>

<span class="token comment">// 为了确保的确存在，自己需要处理一下</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// ... ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[o];function c(i,l){return n(),a("div",null,p)}const d=s(t,[["render",c],["__file","04 tsc管理ts文件.html.vue"]]);export{d as default};
