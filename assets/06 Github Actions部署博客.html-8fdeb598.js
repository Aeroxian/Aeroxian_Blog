import{_ as p,M as i,p as c,q as o,R as n,t as s,N as e,a1 as t}from"./framework-f3fd2962.js";const l="/assets/7744b11eeffebcfb4fa94d830e617c0ea81ed915-79281e1c.png",u="/assets/image-20211126134357721-555a5919.png",r="/assets/image-20211126140058431-ce019753.png",d="/assets/image-20211126135116578-8e8dbc8d.png",k="/assets/2023-03-21-17-10-47-image-75ae7688.png",m={},v=t('<h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>部署的时候使用<code>base: &#39;/&#39;</code> 的方式部署</p></div><blockquote><p>github actions的自动构建部署的好处就是，每次提交文件到github之后，它就会帮我们build和部署，网站的内容就会自动更新，非常方便</p><p>github actions可玩性非常高,可以指定某个动作触发</p></blockquote><img title="" src="'+l+'" alt="image-20211126110724435" style="zoom:50%;"><blockquote><p>vuepress指南-部署，提供的文件，自己做了一些修改如node.js版本，去掉cache dependcies,使用npm而不是yarn来构建</p></blockquote><p>可以看到github actions将构建的内容放到<strong>gh-pages</strong>分支</p><img src="'+u+'" alt="image-20211126134357721" style="zoom:50%;"><p>以上步骤是使用github actions的自动构建功能，但是不能访问页面，需要设置github pages的信息</p><img src="'+r+'" alt="image-20211126140058431" style="zoom:70%;"><p>到此为止，进行访问 https://aeroxian.github.io/</p><img src="'+d+'" alt="image-20211126135116578" style="zoom:50%;"><h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2><p>GitHub actions报错<code>root/id_rsa</code>之类的不对</p><h4 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h4><p>问题点:私钥的格式不对</p><p>git bash执行 <code>cat ~/.ssh/id_rsa</code></p><p><img src="'+k+`" alt=""></p><p>框选复制到仓库secrets时保留了空行导致</p><p>去掉换行恢复正常</p><h2 id="我的github-actions-参考" tabindex="-1"><a class="header-anchor" href="#我的github-actions-参考" aria-hidden="true">#</a> 我的GITHUB ACTIONS 参考</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> auto_deploy

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 main 分支时触发部署</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>
  <span class="token comment"># 手动触发部署</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 node 版本</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&quot;18.15.0&quot;</span>

      <span class="token comment"># 缓存 node_modules</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            **/node_modules</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-yarn-</span>

      <span class="token comment"># 如果缓存没有命中，安装依赖</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token comment"># run: npm ci</span>
        <span class="token comment"># run: yarn install</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token comment"># 运行构建脚本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run docs<span class="token punctuation">:</span>build

      <span class="token comment"># 查看 workflow 的文档来获取更多信息</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到 gh-pages 分支</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">GH_PAT</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token comment"># - name: Mirror the Github organization repos to Gitee.</span>
      <span class="token comment">#   uses: Yikun/hub-mirror-action@master</span>
      <span class="token comment">#   with:</span>
      <span class="token comment">#     src: &quot;github/Aeroxian&quot;</span>
      <span class="token comment">#     dst: &quot;gitee/aeroxian&quot;</span>
      <span class="token comment">#     dst_key: \${{ secrets.GITEE_PRIVATE_KEY }}</span>
      <span class="token comment">#     dst_token: \${{ secrets.GITEE_TOKEN }}</span>
      <span class="token comment">#     static_list: &quot;Aeroxian_Blog&quot;</span>
      <span class="token comment">#     clone_style: &quot;ssh&quot;</span>
      <span class="token comment">#     force_update: true</span>
      <span class="token comment">#     debug: true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Sync to Gitee
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> wearerequired/git<span class="token punctuation">-</span>mirror<span class="token punctuation">-</span>action@master
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
            <span class="token key atrule">SSH_PRIVATE_KEY</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_RSA_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
            <span class="token key atrule">source-repo</span><span class="token punctuation">:</span> git@github.com<span class="token punctuation">:</span>Aeroxian/aeroxian.github.io.git
            <span class="token key atrule">destination-repo</span><span class="token punctuation">:</span> git@gitee.com<span class="token punctuation">:</span>aeroxian/aeroxian.git

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build Gitee Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> yanglbme/gitee<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>action@main
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 注意替换为你的 Gitee 用户名</span>
          <span class="token key atrule">gitee-username</span><span class="token punctuation">:</span> aeroxian
          <span class="token comment"># 注意在 Settings-&gt;Secrets 配置 GITEE_PASSWORD</span>
          <span class="token key atrule">gitee-password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错</span>
          <span class="token key atrule">gitee-repo</span><span class="token punctuation">:</span> aeroxian/aeroxian
          <span class="token comment"># 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),b={class:"custom-container tip"},h=t('<p class="custom-container-title">实现的功能:</p><ol><li><p>提交代码到master时,触发action</p></li><li><p>检查依赖缓存/下载依赖</p></li><li><p>构建github pages</p></li><li><p>同步代码到gitee gitee作为国内镜像</p></li><li><p>缓存依赖</p></li><li><p>构建gitee pages</p></li></ol><p>用到的库:</p>',3),g={href:"https://github.com/wearerequired/git-mirror-action",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/yanglbme/gitee-pages-action",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/crazy-max/ghaction-github-pages",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,"以上库用到的key设置请到对应仓库查看",-1),x=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),s(" 参考")],-1),E={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages",target:"_blank",rel:"noopener noreferrer"};function G(T,q){const a=i("ExternalLinkIcon");return c(),o("div",null,[v,n("div",b,[h,n("p",null,[n("a",g,[s("Github | wearerequired/git-mirror-action"),e(a)])]),n("p",null,[n("a",_,[s("Github | yanglbme/gitee-pages-action"),e(a)])]),n("p",null,[n("a",y,[s("Github | crazy-max/ghaction-github-pages"),e(a)])]),f]),x,n("p",null,[n("a",E,[s("部署 | VuePress (vuejs.org)"),e(a)])])])}const I=p(m,[["render",G],["__file","06 Github Actions部署博客.html.vue"]]);export{I as default};
