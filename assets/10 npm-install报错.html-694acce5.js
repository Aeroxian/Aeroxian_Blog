import{_ as s,M as i,p as a,q as d,R as e,t,N as l,a1 as r}from"./framework-f3fd2962.js";const o={},c=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm ERR! gyp ERR! node -v v18.14.2
npm ERR! gyp ERR! node-gyp -v v8.4.1
npm ERR! gyp ERR! not ok
npm ERR! Build failed with error code: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般都是nodej版本与node-sass sass-loader不对应的问题，</p><p>我电脑上安装的电脑是nodejs v18.14.2, 后来改为v14.17.6</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>node-sass下载不下来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-sass@4.14.1 postinstall: \`node scripts/build.js\`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-sass@4.14.1 postinstall script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>一般下载不下来的原因大多的是因为默认是从github上去下载node-sass，而国内经常连不上或者网不好</strong></p><blockquote><p>Downloading binary from https://github.com/sass/node-sass/releases/download/v4.14.1/win32-ia32-83_binding.node</p></blockquote><p>设置成国内镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config set registry=https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,11),m={href:"https://www.yisu.com/zixun/622837.html",target:"_blank",rel:"noopener noreferrer"};function p(v,u){const n=i("ExternalLinkIcon");return a(),d("div",null,[c,e("p",null,[e("a",m,[t("node16+怎么配置对应的sass环境 - web开发 - 亿速云 (yisu.com)"),l(n)])])])}const g=s(o,[["render",p],["__file","10 npm-install报错.html.vue"]]);export{g as default};
