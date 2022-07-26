(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{395:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"插入本地图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入本地图片"}},[t._v("#")]),t._v(" 插入本地图片")]),t._v(" "),s("p",[t._v("首先，将图片文件放入 "),s("code",[t._v("miniprogram\\images")]),t._v(" 文件夹中。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3p8byeedzj30pw0bgacv.jpg",alt:"image.png"}}),s("br"),t._v("\n然后在小程序代码编辑窗书写wxml代码,注意图片路径。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("../../images/1.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3p8cuk8emj31240d7qbj.jpg",alt:"image.png"}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("注意，小程序中没有<img>标签，因此请使用<image>标签。")])]),t._v(" "),s("h2",{attrs:{id:"插入云图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入云图片"}},[t._v("#")]),t._v(" 插入云图片")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小程序对程序包的限制")]),t._v(" "),s("p",[t._v("微信小程序要求在没有分包的情况下，小程序的包大小不超过 "),s("code",[t._v("2M")]),t._v(",因此这就意味着，你不能在小程序文件夹中放过多图片。那么必要的图片都放在哪呢？你可以使用微信的云开发云存储，将文件放到云存储中进行调用(会产生相关费用），或者使用别的图床工具，例如 "),s("code",[t._v("微博图床")]),t._v(" （完全免费）,在我"),s("RouterLink",{attrs:{to:"/pages/4a1aa8/"}},[t._v("前面的文章")]),t._v("中有说明。")],1)]),t._v(" "),s("p",[t._v("在这里，比如我要将图片放入云存储中（云存储的开通合使用将在之后讲解）。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3p8od820xj315a0o2qh7.jpg",alt:"image.png"}}),s("br"),t._v("\n这里有张待添加的图片。我们复制中间的连接，以相同的方式把将其写进wxml代码中。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cloud://nannan-1g1q4u2i02398ecf.6e61-nannan-1g1q4u2i02398ecf-1311679880/iPhone 13 Pro Max 1.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如果使用微博图床。首先将图片上传到图床窗口："),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3p8r4lj5ej30r20iuwm8.jpg",alt:"image.png"}}),s("br"),t._v("\n然后复制图片连接，以同样的方式插入wxml代码中。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3p8r4lj5ej30r20iuwm8.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);