(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{381:function(t,s,i){"use strict";i.r(s);var a=i(1),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"前言"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),i("h3",{attrs:{id:"协作原理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#协作原理"}},[t._v("#")]),t._v(" 协作原理")]),t._v(" "),i("p",[t._v("我们经常会遇到多人合作开发的项目，但是问题是，当我们多个人共同开发一个项目时，怎么把大家的合起来呢？")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("是这样吗？")]),t._v(" "),i("p",[i("strong",[t._v("串行工作")]),t._v("：每个人负责一个模块，在这个人书写自己的模块时，其他人闲着，在这个人写好代码后，把代码打包，压缩包发送给下一个人。"),i("br"),t._v(" "),i("strong",[t._v("并行工作")]),t._v("：多人同时进行编码，写好之后进行合并。")])]),t._v(" "),i("p",[t._v("你平时是怎么操作的呢？实际上，显然是并行工作的效率高，但是怎么达到这个目的呢？答案就是，"),i("strong",[t._v("代码托管")]),t._v("。我们将代码放在某个平台的仓库里上，每个协作者在仓库中"),i("strong",[t._v("创建一个属于自己的分支")]),t._v("（branch），并将代码"),i("strong",[t._v("拷贝一份副本在本地")]),t._v("，在本地进行自己部分的编码和测试工作，在编码完成后，把这个工程推送（Push）到仓库中自己的分支里，并向主分支（main）发起"),i("strong",[t._v("合并请求")]),t._v("（pull request），在管理员审核过后，就可以自动比较二者不一样的地方，进行合并（Merge）。")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("举个栗子")]),t._v(" "),i("p",[t._v("比如，老师新出了一张试卷，但是老师不想自己得到答案，因此她安排A、B、C三位学霸来做这套试卷。分别将这三个同学的试卷记为a、b、c。假设老师那里有一张空白试卷m。那么老师就是一个"),i("strong",[t._v("仓库")]),t._v("。这张试卷m就是"),i("strong",[t._v("主分支")]),t._v("（branch main），试卷a、b、c就是另外三个"),i("strong",[t._v("子分支")]),t._v("。老师安排A同学做选择题，B同学做填空题，C做大题，在A做完选择题后，他将卷子交给老师（这叫提交"),i("strong",[t._v("合并请求")]),t._v("），老师看了之后觉得没问题，就把A的答案誊抄到空白卷m上（这叫"),i("strong",[t._v("合并")]),t._v("），B做完填空题后，手比较痒，就另外做了选择题，他也把卷子交给老师，老师看了之后，发现B的选择题答案和A的不一样（这叫产生了"),i("strong",[t._v("冲突")]),t._v("），老师经过仔细判断之后发现A写的是对的，就保留A的选择题答案，忽略B的选择题答案（这叫"),i("strong",[t._v("解决冲突")]),t._v("），然后将B的填空题"),i("strong",[t._v("合并上去")]),t._v("。C做完大题之后交给老师，老师经过审核发现没有冲突的地方，因此也把C的试卷"),i("strong",[t._v("合并")]),t._v("到m中。")]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("我们可以得出以下结论：")]),t._v(" "),i("blockquote",[i("ol",[i("li",[t._v("总有人来扮演老师的角色，负责审核和解决冲突。")]),t._v(" "),i("li",[t._v("做题时A、B、C三位协作者可以同时做试卷，不受其他人影响。")])])])]),t._v(" "),i("h3",{attrs:{id:"常见的协作平台"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#常见的协作平台"}},[t._v("#")]),t._v(" 常见的协作平台")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("平台名称")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("网址")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Github")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("代码托管、版本控制界老大哥，千万以上开发者活跃的开源平台，很多知名框架和软件如react、vue、vscode都在上面开发维护。但是由于一些不可描述的原因，处于“半墙”状态。")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com"),i("OutboundLink")],1)])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Gitee")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("国内的代码托管平台，和Github功能很像，但是目前越来越收紧开源政策了。")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("a",{attrs:{href:"https://gitee.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee.com"),i("OutboundLink")],1)])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("开源中国")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("在国内程序员圈子里名气最大的开源技术社区，程序员社区，提供了技术、学习、开发、甚至职业发展的各种互动，收录超过两万款开源软件。")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("a",{attrs:{href:"http://oschina.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://oschina.net"),i("OutboundLink")],1)])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("微信代码管理")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("微信开发者的工程托管平台，配套微信开发工具，对小程序之类的工程很友好。")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("a",{attrs:{href:"https://git.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git.weixin.qq.com/"),i("OutboundLink")],1)])])])]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("了解了上面的，那我们就开始吧！本文将结合Github讲解协作部署的全过程。")]),t._v(" "),i("h2",{attrs:{id:"注册github"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#注册github"}},[t._v("#")]),t._v(" 注册Github")]),t._v(" "),i("p",[t._v("首先，"),i("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),i("OutboundLink")],1),t._v("处于“半墙”状态，看它主页你就知道为什么了...因此你很可能无法访问，那么你需要一个boost或者ladder。"),i("br"),t._v("\n搞定ladder之后，进入Github，选择注册，按照流程来就可以。"),i("br"),t._v(" "),i("a",{attrs:{href:"https://blog.csdn.net/m0_59188912/article/details/124912340?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165641220616780357277503%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165641220616780357277503&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~times_rank-1-124912340-null-null.142%5Ev24%5Ehuaweicloudv2,157%5Ev15%5Enew_3&utm_term=%E6%B3%A8%E5%86%8Cgithub&spm=1018.2226.3001.4187",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册Github详细操作"),i("OutboundLink")],1)]),t._v(" "),i("h2",{attrs:{id:"下载github-desktop"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#下载github-desktop"}},[t._v("#")]),t._v(" 下载Github Desktop")]),t._v(" "),i("p",[t._v("我个人更加倾向于使用图形界面而不是一个黑色的字很小的命令窗口。因此这里会用Github Desktop作为版本控制工具。当然，Git也是程序员必备的技能之一，建议学一学。可参考"),i("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/30044692",target:"_blank",rel:"noopener noreferrer"}},[t._v("git教程"),i("OutboundLink")],1),i("br"),t._v("\n在上面注册完毕之后，访问"),i("a",{attrs:{href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Desktop"),i("OutboundLink")],1),t._v("并安装到桌面。")]),t._v(" "),i("h2",{attrs:{id:"创建仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[t._v("#")]),t._v(" 创建仓库")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("工程管理者需要建立仓库")])]),t._v(" "),i("p",[t._v("在Github中，点击右上角的“+”，选择“New repository”。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2pbb2wgj31ha0o44f4.jpg",alt:"1654389739458.png"}}),t._v("\n取一个名字，并将仓库设为public，勾选生成README.md文件。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2qgjiohj31b00oxakn.jpg",alt:"1654389808112.png"}}),t._v("\n点击“Create repository”。其他不用管。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2riszgnj311g0l6tg2.jpg",alt:"1654389869019.png"}}),t._v("\n如下，就建好了。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2s7afw3j31h30nf7e8.jpg",alt:"image.png"}})]),t._v(" "),i("h2",{attrs:{id:"添加协作成员"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#添加协作成员"}},[t._v("#")]),t._v(" 添加协作成员")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("工程管理者需要添加协作成员")])]),t._v(" "),i("p",[t._v("打开仓库界面，选择settings。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o5r4mnpbj31hc0pg15y.jpg",alt:"1656413883660.png"}}),i("br"),t._v("\n点击“Add People”。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o5ryb8drj31dl0p0tir.jpg",alt:"image.png"}}),i("br"),t._v("\n按照提示输入对方相关信息，发送请求即可。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o5t3mcu8j30jx0cvgnt.jpg",alt:"image.png"}}),i("br"),t._v("\n成功添加如图所示："),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o5tkkkiaj31900oitga.jpg",alt:"image.png"}})]),t._v(" "),i("h2",{attrs:{id:"接受协作请求"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#接受协作请求"}},[t._v("#")]),t._v(" 接受协作请求")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("协作者需要接受请求")])]),t._v(" "),i("p",[t._v("打开Github主页，在头像下拉栏找到消息通知。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o5xt7yjtj31g90nzdyj.jpg",alt:"1656414252719.png"}}),t._v("\n点击Join，即可加入。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o5yskxybj31h90lzdoa.jpg",alt:"1656414334382.png"}}),i("br"),t._v("\n加入成功如图所示："),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o61vovhgj31hc0m0dr7.jpg",alt:"1656414500841.png"}})]),t._v(" "),i("h2",{attrs:{id:"克隆仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#克隆仓库"}},[t._v("#")]),t._v(" 克隆仓库")]),t._v(" "),i("p",[t._v("打开下载好的Github Desktop，点击选择File-clone。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6bbrozrj31ha0ri48v.jpg",alt:"1656415054414.png"}}),i("br"),t._v("\n选择URL，填写仓库的地址。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6cev5eij30za0j5n2j.jpg",alt:"image.png"}}),i("br"),t._v("\n在仓库的主页进行获取。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6dluw1wj31a40m5ang.jpg",alt:"1656415176555.png"}}),i("br"),t._v("\n创建本地的空文件夹。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6eiq4fwj317p0mrtff.jpg",alt:"1656415235319.png"}}),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6f81p3fj30zd0iqjwl.jpg",alt:"image.png"}}),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6fpeic0j30uy0ibq8c.jpg",alt:"image.png"}}),i("br"),t._v("\n然后点击"),i("strong",[t._v("克隆")]),t._v("。"),i("br"),t._v("\n克隆过程："),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6gf6znij31hc0hpgoi.jpg",alt:"image.png"}}),i("br"),t._v("\n克隆成功后在相应的文件夹可以找到源代码了。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6hvd4khj30ux0bwjvs.jpg",alt:"image.png"}}),i("br"),t._v("\n用vscode打开这个文件夹就可以开始修改了。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6j3j9lbj30so0f477i.jpg",alt:"image.png"}}),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6jmad4yj310b0mnn2e.jpg",alt:"image.png"}}),i("br"),t._v("\n打开之后如图。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6k4chplj30tu0isdjk.jpg",alt:"image.png"}})]),t._v(" "),i("h2",{attrs:{id:"添加分支"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#添加分支"}},[t._v("#")]),t._v(" 添加分支")]),t._v(" "),i("p",[t._v("在管理员的仓库中，新建自己的分支。如下："),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7bergvjj30qa0kmagm.jpg",alt:"1656417137267.png"}}),i("br"),t._v("\n创建成功："),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7d5mw2jj314d0je7d6.jpg",alt:"1656417227576.png"}})]),t._v(" "),i("h2",{attrs:{id:"安装依赖"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),i("p",[t._v("这要求你的电脑必须安装了nodejs。计算机网络课程设计中已经安装了它。")])]),t._v(" "),i("p",[t._v("在上传时，由于依赖往往较大，所以都会被忽略掉，gitignore就记录了这些需要忽略的文件。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6l917vvj31860q711m.jpg",alt:"image.png"}}),i("br"),t._v("\n那么在下面打开"),i("strong",[t._v("终端")]),t._v("。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6mmvnwuj31fq0rq4qp.jpg",alt:"image.png"}}),i("br"),t._v("\n输入安装依赖指令。")]),t._v(" "),i("div",{staticClass:"language-npm line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("npm install\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br")])]),i("p",[i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6p2jfgrj30og08gab3.jpg",alt:"1656415849790.png"}})]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),i("p",[t._v("注意，npm安装时可能也需要打开ladder。")])]),t._v(" "),i("p",[t._v("安装过程："),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o6wg2ocuj30ly06zwfn.jpg",alt:"image.png"}})]),t._v(" "),i("h2",{attrs:{id:"测试"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),i("p",[t._v("完成上面的操作之后即可进行代码测试了。这里以vue的工程为例，在终端中输入：")]),t._v(" "),i("div",{staticClass:"language-npm line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("npm run dev\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br")])]),i("p",[t._v("如后在本地的"),i("strong",[t._v("环回地址")]),t._v("在浏览器中打开。")]),t._v(" "),i("div",{staticClass:"language-npm line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("localhost:8081\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br")])]),i("p",[i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o736thiwj314i0ktwkp.jpg",alt:"image.png"}})]),t._v(" "),i("h2",{attrs:{id:"push代码"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#push代码"}},[t._v("#")]),t._v(" Push代码")]),t._v(" "),i("p",[t._v("先进行代码Pull，先切换为main分支进行Pull。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7ilymv5j30zs0lp7a5.jpg",alt:"image.png"}})]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),i("p",[t._v("在每次你要开始写代码之前先进行Pull！不然冲突等着你呢！"),i("br"),t._v(" "),i("strong",[t._v("先Pull再Push！")]),i("br"),t._v(" "),i("strong",[t._v("先Pull再Push！")]),i("br"),t._v(" "),i("strong",[t._v("先Pull再Push！")])])]),t._v(" "),i("p",[t._v("进行Pull："),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7hkyeyej31hb0q7163.jpg",alt:"1656417485616.png"}}),i("br"),t._v("\n在完成源代码编写之后，即可上传代码了。"),i("br"),t._v("\n打开Github Desktop，即可看到修改后的文件。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7852oyyj31hc0s6na1.jpg",alt:"1656416948782.png"}}),i("br"),t._v("\n中间是前后对比。"),i("br"),t._v("\n在左下角添加提交评论。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7f0xb2fj31e10qp4bu.jpg",alt:"1656417345022.png"}}),i("br"),t._v("\n推送到你自己的分支："),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7jetlh6j30mt0fr0vv.jpg",alt:"image.png"}}),i("br"),t._v("\n点击Push。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7k8w5ldj31cd0o9tj2.jpg",alt:"1656417643177.png"}}),i("br"),t._v("\nPush完成后到管理员仓库自己的分支下，查看Push结果。如果这里的评论和你填写的评论一致，说明已经推送成功了。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7mlacslj31510oz4a0.jpg",alt:"1656417778838.png"}})]),t._v(" "),i("h2",{attrs:{id:"请求合并"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#请求合并"}},[t._v("#")]),t._v(" 请求合并")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7orky1ij31gy0mgk3m.jpg",alt:"image.png"}}),i("br"),t._v("\n仓库主页会提示你进行合并，点击合并即可。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7qf9ro3j30yi0dkq9e.jpg",alt:"image.png"}}),i("br"),t._v("\n写一下评论，点击提交。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7per1iaj31gj0ml47h.jpg",alt:"image.png"}}),i("br"),t._v("\n下面即代表提交成功。"),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7rimdgij314j0f67au.jpg",alt:"image.png"}}),i("br"),t._v("\n提交完合成后，你可以告诉你的管理员。")]),t._v(" "),i("h2",{attrs:{id:"审核并合并"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#审核并合并"}},[t._v("#")]),t._v(" 审核并合并")]),t._v(" "),i("p",[t._v("在管理员这边即可审核并合并："),i("br"),t._v(" "),i("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3o7t1jmazj31hc0p7dtv.jpg",alt:"image.png"}})]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),i("p",[t._v("若还有不详细的地方，后续补充。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);