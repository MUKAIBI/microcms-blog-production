(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{181:function(t,e,o){var content=o(195);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("1d956088",content,!0,{sourceMap:!1})},184:function(t,e,o){"use strict";o.r(e);o(87);var n={data:function(){return{params:this.params||"",open:!1}},mounted:function(){this.params=location.search||""},methods:{setOpen:function(t){this.open=t},toggleOpen:function(){this.open=!this.open}}},c=(o(194),o(34)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("header",{staticClass:"header"},[t._m(0),t._v(" "),o("button",{staticClass:"menuBtn",on:{click:function(e){return t.toggleOpen()}}},[o("img",{attrs:{src:"/images/icon_menu.svg",alt:"menu"}})]),t._v(" "),t.open?o("div",{staticClass:"mask",on:{click:function(e){return t.setOpen(!1)}}}):t._e(),t._v(" "),o("div",{staticClass:"menu",class:{isOpen:t.open}},[t._m(1),t._v(" "),o("ul",{staticClass:"lists"},[t._m(2),t._v(" "),o("li",{staticClass:"list"},[o("a",{staticClass:"signup",attrs:{href:"https://app.microcms.io"+t.params}},[t._v("新規登録")])])])])]),t._v(" "),o("div",{staticClass:"empty"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"logo"},[e("a",{attrs:{href:"https://microcms.io"}},[e("img",{staticClass:"logoImg",attrs:{src:"/images/logo.svg",alt:"microCMS"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"lists"},[o("li",{staticClass:"list"},[o("a",{attrs:{href:"https://microcms.io/pricing"}},[t._v("料金")])]),t._v(" "),o("li",{staticClass:"list"},[o("a",{attrs:{href:"https://document.microcms.io"}},[t._v("ドキュメント")])]),t._v(" "),o("li",{staticClass:"list"},[o("a",{attrs:{href:"https://blog.microcms.io"}},[t._v("ブログ")])]),t._v(" "),o("li",{staticClass:"list"},[o("a",{attrs:{href:"https://microcms.io/contact"}},[t._v("お問い合わせ")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"list"},[o("a",{staticClass:"signin",attrs:{href:"https://app.microcms.io/signin"}},[t._v("ログイン")])])}],!1,null,"70c13ab8",null);e.default=component.exports;installComponents(component,{Header:o(184).default})},194:function(t,e,o){"use strict";o(181)},195:function(t,e,o){var n=o(32)(!1);n.push([t.i,'@media (min-width:800px){.header[data-v-70c13ab8]{position:fixed;top:0;left:0;right:0;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:12px 40px;z-index:10;border-bottom:1px solid #ddd;background-color:#fff}.empty[data-v-70c13ab8]{height:80px;margin-bottom:40px}.logo[data-v-70c13ab8]{padding:8px 0;margin-right:30px}.logo a[data-v-70c13ab8]{display:block}.logo a[data-v-70c13ab8],.logoImg[data-v-70c13ab8]{height:28px}.menuBtn[data-v-70c13ab8]{display:none}.menu[data-v-70c13ab8]{display:flex;padding:12px 0}.lists[data-v-70c13ab8]{display:flex;align-items:center}.lists[data-v-70c13ab8]:first-child:after{content:"";width:1px;height:30px;background-color:#999;margin-right:40px}.list[data-v-70c13ab8]{margin-right:30px;white-space:nowrap}.list.noMargin[data-v-70c13ab8]{margin:0}.list a[data-v-70c13ab8],.list a[data-v-70c13ab8]:visited{color:#2b2c30}.list a.signup[data-v-70c13ab8],.list a:visited.signup[data-v-70c13ab8]{border-radius:5px;background:linear-gradient(to right bottom,#5630af,#3067af);color:#fff;text-align:center;padding:8px 24px}.list a.signin[data-v-70c13ab8],.list a:visited.signin[data-v-70c13ab8]{border-radius:5px;background-color:#e7e7f3;text-align:center;padding:8px 24px}}@media (max-width:800px){.header[data-v-70c13ab8]{position:fixed;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;background-color:#fff;padding:16px;z-index:10;border-bottom:1px solid #ddd}.empty[data-v-70c13ab8]{height:61px}.logo[data-v-70c13ab8]{display:inline-block}.logo[data-v-70c13ab8],.logoImg[data-v-70c13ab8]{height:28px}.menuBtn[data-v-70c13ab8]{border:none;background:none;margin:0;padding:0;cursor:pointer}.menu[data-v-70c13ab8]{position:absolute;left:0;top:61px;display:none;flex-direction:column-reverse;width:100%;background-color:#fff;border-bottom:1px solid #ddd;z-index:2001;padding-top:8px}.menu.isOpen[data-v-70c13ab8]{display:flex}.lists[data-v-70c13ab8]{padding:8px 0}.lists[data-v-70c13ab8]:first-child{padding-top:0}.list[data-v-70c13ab8]{padding:0 16px;white-space:nowrap}.list a[data-v-70c13ab8]{display:block;color:#2b2c30;padding:8px 0;border-bottom:1px solid #eee}.list a.signup[data-v-70c13ab8]{background:linear-gradient(to right bottom,#5630af,#3067af);color:#fff}.list a.signin[data-v-70c13ab8],.list a.signup[data-v-70c13ab8]{border-radius:5px;text-align:center;font-weight:700}.list a.signin[data-v-70c13ab8]{display:block;background-color:#e7e7f3;margin-bottom:12px}.list:last-child a[data-v-70c13ab8]{border-bottom:none}.mask[data-v-70c13ab8]{position:fixed;top:61px;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.5);z-index:2000}}',""]),t.exports=n}}]);