(window.webpackJsonp=window.webpackJsonp||[]).push([[25,13,18],{188:function(t,e,r){var content=r(207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("34f41732",content,!0,{sourceMap:!1})},206:function(t,e,r){"use strict";r(188)},207:function(t,e,r){var d=r(32)(!1);d.push([t.i,"@media (min-width:600px){.meta[data-v-229746de]{padding:10px 0 40px;display:flex;align-items:center}.category[data-v-229746de]{display:inline-block;padding:2px 8px;border:1px solid #331cbf;color:#331cbf;white-space:nowrap;border-radius:3px;font-size:14px;margin:10px 0 2px}.timestamp[data-v-229746de]{display:inline-flex;align-items:center;color:#616269;margin-right:20px;white-space:nowrap}.timestamp img[data-v-229746de]{margin-right:6px;height:16px}.author[data-v-229746de]{display:inline-flex;align-items:center;color:#616269;white-space:nowrap}.author img[data-v-229746de]{margin-right:6px;height:16px}}@media (max-width:600px){.meta[data-v-229746de]{padding:4px 0 30px;font-size:14px}.category[data-v-229746de]{display:inline-block;padding:2px 8px;border:1px solid #331cbf;color:#331cbf;white-space:nowrap;border-radius:3px;font-size:14px;margin:10px 0 4px}.timestamp[data-v-229746de]{display:inline-flex;align-items:center;color:#616269;margin-right:20px;white-space:nowrap}.timestamp img[data-v-229746de]{margin-right:6px;height:14px}.author[data-v-229746de]{display:inline-flex;align-items:center;color:#616269;white-space:nowrap}.author img[data-v-229746de]{margin-right:6px;height:14px}}",""]),t.exports=d},214:function(t,e,r){"use strict";r.r(e);var d={props:{createdAt:{type:String,required:!0},author:{type:String,required:!1,default:void 0},category:{type:Object,required:!1,default:void 0}}},n=(r(206),r(34)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.category?r("span",{staticClass:"category"},[t._v(t._s(t.category.name))]):t._e(),t._v(" "),r("div",{staticClass:"meta"},[r("span",{staticClass:"timestamp"},[r("img",{attrs:{src:"/images/icon_clock.svg",alt:""}}),t._v(" "),r("time",{attrs:{datetime:t.$dayjs(t.createdAt).format("YYYY-MM-DD")}},[t._v("\n        "+t._s(t.$dayjs(t.createdAt).format("YYYY/MM/DD"))+"\n      ")])]),t._v(" "),t.author?r("span",{staticClass:"author"},[r("img",{attrs:{src:"/images/icon_author.svg",alt:""}}),t._v("\n      "+t._s(t.author)+"\n    ")]):t._e()])])}),[],!1,null,"229746de",null);e.default=component.exports},242:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("621c20fa",content,!0,{sourceMap:!1})},316:function(t,e,r){"use strict";r(242)},317:function(t,e,r){var d=r(32)(!1);d.push([t.i,"@media (min-width:1160px){.pageTitle[data-v-6e32e290]{font-size:20px;font-weight:700;background-color:#eee;padding:6px 10px;margin:60px 0 40px;border-radius:5px}.lists[data-v-6e32e290]{display:flex;justify-content:space-between;flex-wrap:wrap}.list[data-v-6e32e290]{width:340px;border-radius:5px;transition:box-shadow .1s linear}.list[data-v-6e32e290]:hover{box-shadow:0 0 10px rgba(0,0,0,.1)}.img[data-v-6e32e290]{width:340px;height:178px;border-radius:5px 5px 0 0}.content[data-v-6e32e290]{padding:10px 10px 0}.title[data-v-6e32e290]{font-size:20px;font-weight:700}}@media (min-width:820px) and (max-width:1160px){.pageTitle[data-v-6e32e290]{font-size:20px;font-weight:700;background-color:#eee;padding:6px 10px;margin:60px 0 40px;border-radius:5px}.lists[data-v-6e32e290]{display:flex;justify-content:space-between;flex-wrap:wrap}.list[data-v-6e32e290]{width:300px;border-radius:5px;transition:box-shadow .1s linear}.list[data-v-6e32e290]:hover{box-shadow:0 0 10px rgba(0,0,0,.1)}.img[data-v-6e32e290]{width:300px;height:157px;border-radius:5px 5px 0 0}.content[data-v-6e32e290]{padding:10px 10px 0}.title[data-v-6e32e290]{font-size:20px;font-weight:700}}@media (max-width:820px){.pageTitle[data-v-6e32e290]{font-size:20px;font-weight:700;background-color:#eee;padding:6px 10px;margin:40px 0 20px;border-radius:5px}.img[data-v-6e32e290],.list[data-v-6e32e290]{width:100%;border-radius:5px}.title[data-v-6e32e290]{padding-top:5px;font-size:18px;font-weight:700}}",""]),t.exports=d},407:function(t,e,r){var content=r(829);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("16013c08",content,!0,{sourceMap:!1})},412:function(t,e,r){"use strict";r.r(e);var d={props:{blogs:{type:Array,required:!1,default:function(){return[]}}}},n=(r(316),r(34)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("h2",{staticClass:"pageTitle"},[t._v("関連記事")]),t._v(" "),r("ul",{staticClass:"lists"},t._l(t.blogs,(function(e){return r("li",{key:e.id,staticClass:"list"},[r("nuxt-link",{staticClass:"link",attrs:{to:"/"+e.id}},[r("picture",[r("source",{attrs:{type:"image/webp","data-srcset":e.ogimage.url+"?w=820&fm=webp"}}),t._v(" "),r("img",{staticClass:"img lazyload",attrs:{"data-src":e.ogimage.url+"?w=820",alt:""}})]),t._v(" "),r("dl",{staticClass:"content"},[r("dt",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),r("dd",[r("Meta",{attrs:{"created-at":e.createdAt,author:null!==e.writer?e.writer.name:"",category:e.category}})],1)])])],1)})),0)])}),[],!1,null,"6e32e290",null);e.default=component.exports;installComponents(component,{Meta:r(214).default})},828:function(t,e,r){"use strict";r(407)},829:function(t,e,r){var d=r(32)(!1);d.push([t.i,'.category[data-v-002dab4a]{display:inline-block;padding:2px 10px;border-radius:3px;color:#fff;margin-top:10px;font-size:14px;font-weight:700}.loading[data-v-002dab4a]{color:#999}@media (min-width:1160px){.wrapper[data-v-002dab4a]{position:relative}.divider[data-v-002dab4a]{display:flex;justify-content:space-between;width:1160px;margin:20px auto 0}.article[data-v-002dab4a]{width:820px}.aside[data-v-002dab4a]{width:300px}.main[data-v-002dab4a]{display:flex;justify-content:space-between;margin-top:40px}.banner[data-v-002dab4a]{display:flex;justify-content:center;align-items:center;flex-direction:column;width:300px;height:250px;background-color:#2b2c30;color:#fff;border-radius:5px}.banner img[data-v-002dab4a]{width:160px;margin-top:10px}.banner p[data-v-002dab4a]{margin-top:30px;color:#999;padding-top:10px;width:260px;border-top:1px solid #666}.banner p[data-v-002dab4a],.banner span[data-v-002dab4a]{font-size:14px;text-align:center}.banner span[data-v-002dab4a]{display:block;border:1px solid #fff;width:120px;margin:10px auto 0;padding:4px 0}.ogimageWrap[data-v-002dab4a]{position:relative;overflow:hidden;border-radius:5px}.ogimage[data-v-002dab4a]{display:block;width:100%;transition:transform .5s ease,opacity .5s ease}.container[data-v-002dab4a]{position:relative;flex:1;background-color:#fff;margin-left:80px;-webkit-font-smoothing:antialiased}.title[data-v-002dab4a]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:700;font-size:40px;color:#2b2c30}}@media (min-width:820px) and (max-width:1160px){.wrapper[data-v-002dab4a]{position:relative}.divider[data-v-002dab4a]{margin:20px auto 0}.article[data-v-002dab4a],.divider[data-v-002dab4a]{width:740px}.aside[data-v-002dab4a]{margin-top:60px;margin-left:104px}.main[data-v-002dab4a]{display:flex;justify-content:space-between;margin-top:40px;align-items:strech}.banner[data-v-002dab4a]{display:flex;justify-content:center;align-items:center;flex-direction:column;width:300px;height:250px;background-color:#2b2c30;color:#fff;border-radius:5px}.banner img[data-v-002dab4a]{width:160px;margin-top:10px}.banner p[data-v-002dab4a]{margin-top:30px;color:#999;padding-top:10px;width:260px;border-top:1px solid #666}.banner p[data-v-002dab4a],.banner span[data-v-002dab4a]{font-size:14px;text-align:center}.banner span[data-v-002dab4a]{display:block;border:1px solid #fff;width:120px;margin:10px auto 0;padding:4px 0}.ogimageWrap[data-v-002dab4a]{position:relative;overflow:hidden;border-radius:5px}.ogimage[data-v-002dab4a]{display:block;width:100%;transition:transform .5s ease}.container[data-v-002dab4a]{position:relative;flex:1;background-color:#fff;margin-left:80px;-webkit-font-smoothing:antialiased}.title[data-v-002dab4a]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:700;font-size:40px;color:#2b2c30}.meta[data-v-002dab4a]{padding:10px 0 40px}.timestamp[data-v-002dab4a]{display:inline-flex;align-items:center;color:#919299;margin-right:20px}.timestamp img[data-v-002dab4a]{margin-right:6px}.author[data-v-002dab4a]{display:inline-flex;align-items:center;color:#919299}.author img[data-v-002dab4a]{margin-right:6px}}@media (min-width:600px) and (max-width:820px){.wrapper[data-v-002dab4a]{position:relative}.divider[data-v-002dab4a]{margin:20px 0 0;padding:0 20px}.article[data-v-002dab4a]{width:100%}.aside[data-v-002dab4a]{margin-top:60px;margin-left:104px}.main[data-v-002dab4a]{display:flex;justify-content:space-between;margin-top:40px;align-items:strech}.banner[data-v-002dab4a]{display:flex;justify-content:center;align-items:center;flex-direction:column;width:300px;height:250px;background-color:#2b2c30;color:#fff;border-radius:5px}.banner img[data-v-002dab4a]{width:160px;margin-top:10px}.banner p[data-v-002dab4a]{margin-top:30px;color:#999;padding-top:10px;width:260px;border-top:1px solid #666}.banner p[data-v-002dab4a],.banner span[data-v-002dab4a]{font-size:14px;text-align:center}.banner span[data-v-002dab4a]{display:block;border:1px solid #fff;width:120px;margin:10px auto 0;padding:4px 0}.ogimageWrap[data-v-002dab4a]{position:relative;overflow:hidden;border-radius:5px}.ogimage[data-v-002dab4a]{display:block;width:100%;transition:transform .5s ease}.container[data-v-002dab4a]{position:relative;flex:1;background-color:#fff;margin-left:80px;-webkit-font-smoothing:antialiased}.title[data-v-002dab4a]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:700;font-size:40px;color:#2b2c30}}@media (max-width:600px){.wrapper[data-v-002dab4a]{position:relative}.divider[data-v-002dab4a]{padding:0 16px}.article[data-v-002dab4a],.aside[data-v-002dab4a]{width:100%}.aside[data-v-002dab4a]{margin-top:60px}.breadcrumb[data-v-002dab4a]{display:flex;flex-wrap:wrap;padding-top:20px;margin-bottom:-20px}.breadcrumbList[data-v-002dab4a]{color:#616269;font-size:14px}.breadcrumbList a[data-v-002dab4a]{color:#331cbf}.breadcrumbList[data-v-002dab4a]:after{content:">";margin:0 10px}.breadcrumbList:last-child.breadcrumbList[data-v-002dab4a]:after{content:"";margin:0}.main[data-v-002dab4a]{display:flex;flex-direction:column-reverse;margin-top:30px}.banner[data-v-002dab4a]{display:flex;justify-content:center;align-items:center;flex-direction:column;height:270px;background-color:#2b2c30;color:#fff;border-radius:5px}.banner img[data-v-002dab4a]{width:160px;margin-top:10px}.banner p[data-v-002dab4a]{margin-top:30px;color:#999;padding-top:10px;width:260px;border-top:1px solid #666}.banner p[data-v-002dab4a],.banner span[data-v-002dab4a]{font-size:14px;text-align:center}.banner span[data-v-002dab4a]{display:block;border:1px solid #fff;width:120px;margin:10px auto 0;padding:4px 0}.ogimageWrap[data-v-002dab4a]{position:relative;overflow:hidden;width:calc(100% + 32px);margin:0 -16px}.ogimage[data-v-002dab4a]{display:block;width:100%;transition:transform .5s ease}.container[data-v-002dab4a]{position:relative;flex:1;background-color:#fff;-webkit-font-smoothing:antialiased}.title[data-v-002dab4a]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:700;font-size:24px;color:#2b2c30}}',""]),t.exports=d},841:function(t,e,r){"use strict";r.r(e);var d=r(2),n=(r(37),r(20),r(19),r(249)),o=r.n(n),l=r(341),c=r.n(l),x=r(406),f=r.n(x),m={asyncData:function(t){return Object(d.a)(regeneratorRuntime.mark((function e(){var r,d,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$config,e.next=3,o.a.get("https://".concat(r.serviceId,".microcms.io/api/v1/categories?limit=100"),{headers:{"X-API-KEY":r.apiKey}});case 3:return d=e.sent,e.next=6,o.a.get("https://".concat(r.serviceId,".microcms.io/api/v1/banner"),{headers:{"X-API-KEY":r.apiKey}});case 6:return n=e.sent.data,e.next=9,o.a.get("https://".concat(r.serviceId,".microcms.io/api/v1/blog"),{headers:{"X-API-KEY":r.apiKey}});case 9:return l=e.sent,c=l.data.contents,e.abrupt("return",{categories:d.data.contents,banner:n,contents:c});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{data:{id:"",ogimage:{url:""},body:"",title:"",createdAt:"",publishedAt:"",toc_visible:!1,writer:{id:"",name:"",image:{url:""},text:""},partner:{id:"",company:"",url:"",description:"",logo:{url:""}},category:{name:"",color:""},related_blogs:[]},toc:[],contents:[],categories:[]}},created:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var r,d,data,n,l,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(r=t.$route.query).id&&void 0!==r.draftKey){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,o.a.get("/.netlify/functions/draft?id=".concat(r.id,"&draftKey=").concat(r.draftKey)).catch((function(t){return{error:t}}));case 5:if(d=e.sent,data=d.data,!d.error){e.next=10;break}return e.abrupt("return");case 10:t.data=data,n=c.a.load(data.body),l=n("h1, h2, h3").toArray(),x=l.map((function(t){return{text:t.children[0].data,id:t.attribs.id,name:t.name}})),t.toc=x,n("pre code").each((function(t,e){var r=f.a.highlightAuto(n(e).text());n(e).html(r.value),n(e).addClass("hljs")})),t.data.body=n.html();case 17:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.data&&this.data.description},{hid:"og:title",property:"og:title",content:this.data&&this.data.title},{hid:"og:description",property:"og:description",content:this.data&&this.data.description},{hid:"og:url",property:"og:url",content:"https://blog.microcms.io/".concat(this.data&&this.data.id)},{hid:"og:image",property:"og:image",content:this.data&&this.data.ogimage&&this.data.ogimage.url}],link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai-sublime.min.css"}],script:[{src:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js",async:!0}]}}},v=(r(828),r(34)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("Header"),t._v(" "),r("div",{staticClass:"divider"},[t.data.id?t._e():r("p",{staticClass:"loading"},[t._v("Now Loading...")]),t._v(" "),t.data.id?r("article",{staticClass:"article"},[t.data.ogimage?r("div",{staticClass:"ogimageWrap"},[r("img",{ref:"ogimage",staticClass:"ogimage",attrs:{src:t.data.ogimage.url+"?w=820&q=100",srcset:t.data.ogimage.url+"?w=375&q=100 375w,"+t.data.ogimage.url+"?w=750&q=100 750w,"+t.data.ogimage.url+"?w=820&q=100 820w"}})]):t._e(),t._v(" "),r("Breadcrumb",{attrs:{category:t.data.category}}),t._v(" "),r("div",{staticClass:"main"},[r("Share",{attrs:{id:t.data.id,title:t.data.title}}),t._v(" "),r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v(t._s(t.data.title))]),t._v(" "),r("Meta",{attrs:{"created-at":t.data.publishedAt||t.data.createdAt,author:null!==t.data.writer?t.data.writer.name:"",category:t.data.category}}),t._v(" "),r("Toc",{attrs:{id:t.data.id,toc:t.toc,visible:t.data.toc_visible}}),t._v(" "),r("Post",{attrs:{body:t.data.body}}),t._v(" "),t.data.writer?r("Writer",{attrs:{writer:t.data.writer}}):t._e(),t._v(" "),t.data.partner?r("Partner",{attrs:{partner:t.data.partner}}):t._e(),t._v(" "),r("Conversion",{attrs:{id:t.data.id}}),t._v(" "),t.data.related_blogs.length>0?r("RelatedBlogs",{attrs:{blogs:t.data.related_blogs}}):t._e()],1)],1)],1):t._e(),t._v(" "),r("aside",{staticClass:"aside"},[r("Banner",{attrs:{id:"draft-"+t.data.id,banner:t.banner}}),t._v(" "),r("Search"),t._v(" "),r("Categories",{attrs:{categories:t.categories}}),t._v(" "),r("Latest",{attrs:{contents:t.contents}})],1)]),t._v(" "),r("Footer")],1)}),[],!1,null,"002dab4a",null);e.default=component.exports;installComponents(component,{Header:r(184).default,Breadcrumb:r(247).default,Share:r(325).default,Meta:r(214).default,Toc:r(326).default,Post:r(327).default,Writer:r(328).default,Partner:r(329).default,Conversion:r(330).default,RelatedBlogs:r(412).default,Banner:r(215).default,Search:r(248).default,Categories:r(216).default,Latest:r(331).default,Footer:r(185).default})}}]);