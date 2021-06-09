(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{589:function(a,s,t){"use strict";t.r(s);var e=t(29),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("由于在使用lua5.1的"),t("code",[a._v("string.format()")]),a._v(" 发现将 number转为string时, 如果number过长达到14位就有可能会导致结果的后几位不正确, 网上查到使用lua作者的写的脚本可以解决, 然后做了尝试")]),a._v(" "),t("h2",{attrs:{id:"安装gcc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装gcc"}},[a._v("#")]),a._v(" 安装gcc")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("brew install gcc\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"操作脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作脚本"}},[a._v("#")]),a._v(" 操作脚本")]),a._v(" "),t("h3",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[a._v("#")]),a._v(" 下载")]),a._v(" "),t("p",[a._v("点开"),t("a",{attrs:{href:"https://web.tecgraf.puc-rio.br/~lhf/ftp/lua/",target:"_blank",rel:"noopener noreferrer"}},[a._v("脚本链接"),t("OutboundLink")],1),a._v(" , 找到"),t("code",[a._v("lint64")]),a._v(" 下载并解压, 我们得到以下文件")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lint64-101\n├── Makefile 打包文件\n├── README 使用说明\n├── lint64.c 需要调用的c文件\n├── mycompat.h\n└── test.lua 测试文件\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h3",{attrs:{id:"修改配置信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置信息"}},[a._v("#")]),a._v(" 修改配置信息")]),a._v(" "),t("p",[a._v("打开"),t("code",[a._v("Makefile")]),a._v("  修改")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# lua安装路径\nLUA_TOPDIR= /usr/local/Cellar/lua@5.1/5.1.5_8 \n# 可执行文件\nLUA_INCDIR= $(LUA_TOPDIR)/include/lua-5.1\nLUA_BINDIR= $(LUA_TOPDIR)/bin\n    LIBDIR= $(LUA_TOPDIR)/lib/lua/5.1\n       LUA= $(LUA_BINDIR)/lua5.1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h3",{attrs:{id:"打包生成lua可执行文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包生成lua可执行文件"}},[a._v("#")]),a._v(" 打包生成lua可执行文件")]),a._v(" "),t("p",[a._v("查看 "),t("code",[a._v("Makefile")]),a._v(" 文件可知 mac 系统需使用 "),t("code",[a._v("Darwin")]),a._v(" 指令, 运行 "),t("code",[a._v("make Darwin")]),a._v(" 得到"),t("code",[a._v("int64.so")]),a._v(" 文件")]),a._v(" "),t("h3",{attrs:{id:"运行-test"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行-test"}},[a._v("#")]),a._v(" 运行 test")]),a._v(" "),t("p",[a._v("运行"),t("code",[a._v("lua test")]),a._v(" , 输出结果则证明成功")]),a._v(" "),t("h2",{attrs:{id:"在kong中调用so文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在kong中调用so文件"}},[a._v("#")]),a._v(" 在kong中调用so文件")]),a._v(" "),t("p",[a._v("将文件复制到 "),t("code",[a._v("/usr/local/Cellar/kong/2.3.3/lib/lua/5.1")]),a._v(" 中在程序中直接引用即可")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('local int64 = require "int64"\nlocal str = int64.new(123213112)\nint64.tostring(str)\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[a._v("#")]),a._v(" 结语")]),a._v(" "),t("p",[a._v("虽然最后没有成功, 但是这个过程还是很有意思的")])])}),[],!1,null,null,null);s.default=r.exports}}]);