(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{385:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("背景")]),s._v(" "),a("p",[s._v("在我的博客建立之初，由于懵懂无知，把图片放在工程本地，导致打包大小变得很大，并且托管到GithubPages后图片加载的速度惨不忍睹。因此我上网搜索一些前辈的经验，这个经验就是建立图床，使用外链引入到Markdown笔记中，这样工程包的大小缩小了，访问速度也有所提升。")])]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("image.png")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3p10rb6uwj31400kl7e5.jpg")]),s._v(")")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("最开始使用的图床就是"),a("strong",[s._v("微博图床")]),s._v("，首先感谢新浪微博提供的免费图床(对外链无限制),以及速度快到惊人的cdn图片加速服务，还有丰富的浏览器插件，简直是薅羊毛！")]),s._v(" "),a("p",[s._v("但是，由于这个图床服务并不是微博官方提供给用户的服务，所以，一旦微博停止这个服务，我们的图片将无法访问，有一种“命运攥在别人手里”的感觉。因此，我还决定趁现在博客还不多的时候，将微博图床迁移到别的地方，这里，我选择"),a("em",[s._v("阿里云oss")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"爬取已经使用的图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#爬取已经使用的图片"}},[s._v("#")]),s._v(" 爬取已经使用的图片")]),s._v(" "),a("p",[s._v("首先我要把之前上传到微博图床的图片全部下载下来，放到本地，再转移到阿里云。")]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("解决方案")]),s._v(" "),a("p",[s._v("先用"),a("code",[s._v("Python")]),s._v("爬虫将我的博客上的所有用微博图床存储的图片爬下来放在本地，以图片后缀命名。脚本的核心思想是使通过遍历"),a("code",[s._v("HTML")]),s._v("中的img标签，用正则表达式比对并抓取标签内的"),a("code",[s._v("src")]),s._v("地址参数。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    ex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<img.*?src=\"(.*?)\".*?'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比对")]),s._v("\n    img_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" web_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后再把链接地址对应的图片下载到本地。")])]),s._v(" "),a("p",[s._v("使用下面的Pyhton脚本：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" re\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("download_img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    error_img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    success_img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入网站地址：'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user-agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 Edg/87.0.664.75'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    web_text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text\n\n    ex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<img.*?src=\"(.*?)\".*?'")]),s._v("\n    img_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("findall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" web_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'图片地址:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" img_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'该站有反爬虫机制，请换一个网站'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" img "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" img_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 补充协议头")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("startswith"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("startswith"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http:'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" img\n            img_binary "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("content\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切割出最后一个字符串")]),s._v("\n            file_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切割 query字符")]),s._v("\n            file_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" file_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("f'./img/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("file_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_binary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("file_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'，下载成功'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            success_img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            error_img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'下载图片完成！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" success_img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" error_img\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    success_img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" error_img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" download_img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("f'总计下载：")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("success_img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("，下载失败：")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("error_img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br")])]),a("p",[s._v("执行结果抓图："),a("br"),s._v(" "),a("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220704140150.png",alt:"image.jpg"}}),a("br"),s._v("\n保存结果如图："),a("br"),s._v(" "),a("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220704140607.png",alt:"1.png"}})]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("脚本参考")]),s._v(" "),a("p",[s._v("来自CSDN"),a("code",[s._v("夏2同学")]),s._v("，"),a("a",{attrs:{href:"http://t.csdn.cn/6pWJ5",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://t.csdn.cn/6pWJ5"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"阿里云oss注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云oss注册"}},[s._v("#")]),s._v(" 阿里云oss注册")]),s._v(" "),a("h3",{attrs:{id:"注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册"}},[s._v("#")]),s._v(" 注册")]),s._v(" "),a("p",[s._v("首先，在阿里云首页选择对象存储OSS服务。"),a("br"),s._v(" "),a("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1656914971349.png",alt:"1.png"}})]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"创建bucket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建bucket"}},[s._v("#")]),s._v(" 创建bucket")]),s._v(" "),a("p",[s._v("点击创建一个新的bucket。"),a("br"),s._v(" "),a("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220704141214.png",alt:"1"}}),a("br"),s._v("\n填写bucket参数。"),a("br"),s._v(" "),a("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220704141354.png",alt:"2"}})]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"获取地域结点信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取地域结点信息"}},[s._v("#")]),s._v(" 获取地域结点信息")]),s._v(" "),a("p",[s._v("打开创建的bucket列表，如图，只需要复制oss-cn-beijing即可，不需要后面的.aliyuncs.com。"),a("br"),s._v(" "),a("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220704142346.png",alt:"2"}})]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"创建accesskey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建accesskey"}},[s._v("#")]),s._v(" 创建AccessKey")]),s._v(" "),a("p",[s._v("来到页面的右上角，鼠标放在你的头像上，在弹出的框里选择AccessKey管理。"),a("br"),s._v(" "),a("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220704142626.png",alt:"2"}}),a("br"),s._v("\n进入后，创建一个"),a("code",[s._v("AccessKey")]),s._v("。"),a("br"),s._v(" "),a("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220704142811.png",alt:"4"}}),a("br"),s._v("\n在弹出的界面里，记住你的accessKeyId和accessKeySecret.")]),s._v(" "),a("h2",{attrs:{id:"picgo配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picgo配置"}},[s._v("#")]),s._v(" PicGo配置")]),s._v(" "),a("p",[s._v("在Github中下载"),a("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("PicGo"),a("OutboundLink")],1),s._v("，并点击安装。在电脑桌面右下角的PicGo图标打开软件。在图床设置里面选择阿里云OSS，依照以下步骤填写信息：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("设定"),a("code",[s._v("Keyld")]),s._v("：填写刚刚获得的AccessKeyID")])]),s._v(" "),a("li",[a("p",[s._v("设定"),a("code",[s._v("KeySecret")]),s._v("：填写AccessKeyIDSecret")])]),s._v(" "),a("li",[a("p",[s._v("设定储存空间名：填写"),a("code",[s._v("bucket")]),s._v("名称，这里填写的是bucket名称，不是浏览器里的域名。")])]),s._v(" "),a("li",[a("p",[s._v("确认存储区域：填写你的地域节点，注意复制的格式。")])]),s._v(" "),a("li",[a("p",[s._v("指定存储路径：其实就是自定义一个文件夹的名字，以/结尾，它会自动在你的bucket里面创建一个文件夹，并把图片上传进去。")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220704143542.png",alt:"3"}})]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("参考文章链接")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://t.csdn.cn/oZkFg",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://t.csdn.cn/oZkFg"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"替换原来博客中的微博图床"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替换原来博客中的微博图床"}},[s._v("#")]),s._v(" 替换原来博客中的微博图床")]),s._v(" "),a("p",[s._v("将前面爬取的图片上传到bucket文件夹中。"),a("br"),s._v(" "),a("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220704143735.png",alt:"3"}}),a("br"),s._v("\n找到上传后文件的地址。")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[s._v("https://xxxxxx.oss-cn-beijing.aliyuncs.com/blog/1656914971349.png\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们可以观察到该地址是以"),a("code",[s._v("https://xxxxxx.oss-cn-beijing.aliyuncs.com/blog/")]),s._v("作为前缀的，而微博图床的连接是"),a("code",[s._v("https://tva1.sinaimg.cn/large/1656914971349.png")]),s._v("，由于两者后缀可以一一对应，我们只需要到工程文件中替换前缀即可。使用vscode的替换功能。"),a("br"),s._v(" "),a("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220704144126.png",alt:"2"}}),a("br"),s._v("\n如图，替换后，全部连接就生效了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);