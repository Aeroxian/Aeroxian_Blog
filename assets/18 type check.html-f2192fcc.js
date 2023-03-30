import{_ as s,M as t,p as o,q as l,R as n,t as e,N as a,a1 as r}from"./framework-f3fd2962.js";const c={},d=n("p",null,"https://stackoverflow.com/questions/51528780/typescript-check-typeof-against-custom-type",-1),v=n("code",null,"typeof",-1),u=n("strong",null,"at runtime to check",-1),m=n("code",null,"interface",-1),f={href:"https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",target:"_blank",rel:"noopener noreferrer"},b=r(`<p>https://stackoverflow.com/questions/40081332/what-does-the-is-keyword-do-in-typescript</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
import { library } from &quot;@fortawesome/fontawesome-svg-core&quot;;
// import { faPhone,faHatWizard  } from &quot;@fortawesome/free-solid-svg-icons&quot;;
// import * as all from &quot;@fortawesome/free-brands-svg-icons&quot;
import {fab } from &quot;@fortawesome/free-brands-svg-icons&quot;
// import  {IconDefinition} from &quot;@fortawesome/free-brands-svg-icons&quot;
library.add(fab)
// all是modal
//console.log(all[&#39;faTiktok&#39;] === faTiktok); // true
// console.log(faTiktok);
//console.log(faTiktok instanceof IconDefinition);

// console.log(Object.keys(all));
// console.log(all[&#39;fa42Group&#39;]);
//library.add()

// Object.keys(all).map(key=&gt;all[key])
// const icon = (Object.keys(all) as Array&lt;keyof typeof all&gt;).map(key=&gt;all[key])

// const a:Array&lt;keyof typeof all&gt; = []
// const icon = (Object.keys(all) as Array&lt;keyof typeof all&gt;).forEach(key=&gt;a.push(key))
// a.filter(i=&gt;i  IconDefinition)

// Object.keys(all).map(key=&gt;extractAndConvert(all,key))

// function extractAndConvert&lt;T extends object, U extends keyof T&gt;(
//     obj: T,
//     key: U
//   ) {
//     return obj[key];
//   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function p(y,k){const i=t("ExternalLinkIcon");return o(),l("div",null,[d,n("p",null,[e("You can't use "),v,e(),u,e(" for "),m,e(" types, which only exist at compile time. Instead you can write a "),n("a",f,[e("user-defined type guard function"),a(i)]),e(" to check for such types:")]),b])}const _=s(c,[["render",p],["__file","18 type check.html.vue"]]);export{_ as default};
