(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{483:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"执行过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行过程"}},[s._v("#")]),s._v(" 执行过程")]),s._v(" "),t("p",[s._v("webpack的运行流程是一个串行的过程")]),s._v(" "),t("ul",[t("li",[s._v("初始化：开始构建，读取与合并配置参数，加载plugin，实例化编译器对象 compiler。")]),s._v(" "),t("li",[s._v("编译：从entry出发，每个module串行的调用对应的loader，查找每个module依赖的module，递归的进行编译过程")]),s._v(" "),t("li",[s._v("输出：把module组合成chunk，转换为文件，输出到文件系统。")])]),s._v(" "),t("h2",{attrs:{id:"module、chunk、bundle-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#module、chunk、bundle-区别"}},[s._v("#")]),s._v(" module、chunk、bundle 区别")]),s._v(" "),t("p",[s._v("目录树")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("src/\n├── index.css\n├── index.html # 这个是 HTML 模板代码\n├── index.js\n├── common.js\n└── utils.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("webpack 配置")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("entry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("index")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../src/index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("utils")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../src/utils.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("output")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("filename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[name].bundle.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出 index.js 和 utils.js")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.css$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          MiniCssExtractPlugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建一个 link 标签")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// css-loader 负责解析 CSS 代码, 处理 CSS 中的依赖")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用 MiniCssExtractPlugin 抽离出 css 文件，以 link 标签的形式引入样式文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MiniCssExtractPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("filename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.bundle.css'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出的 css 文件名为 index.css")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("打包结果")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Asset")]),s._v(" "),t("th",[s._v("Size")]),s._v(" "),t("th",[s._v("Chunks")]),s._v(" "),t("th",[s._v("Chunk Names")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("favicon.ico")]),s._v(" "),t("td",[s._v("33 Kib")]),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("index.bundle.css")]),s._v(" "),t("td",[s._v("35 bytes")]),s._v(" "),t("td",[s._v("0")]),s._v(" "),t("td",[s._v("index")])]),s._v(" "),t("tr",[t("td",[s._v("index.bundle.js")]),s._v(" "),t("td",[s._v("1000 bytes")]),s._v(" "),t("td",[s._v("0")]),s._v(" "),t("td",[s._v("index")])]),s._v(" "),t("tr",[t("td",[s._v("index.html")]),s._v(" "),t("td",[s._v("541 bytes")]),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("utils.bundle.js")]),s._v(" "),t("td",[s._v("1.05 Kib")]),s._v(" "),t("td",[s._v("1")]),s._v(" "),t("td",[s._v("utils")])])])]),s._v(" "),t("p",[t("strong",[s._v("结论")])]),s._v(" "),t("ol",[t("li",[s._v("对于一份同逻辑的代码，当我们手写下一个一个的文件，他们都是 module ；")]),s._v(" "),t("li",[s._v("module => webpack 进行打包时，webpack 会根据文件引用关系生成 chunk 文件，webpack 会对这个 chunk 文件进行一些操作；")]),s._v(" "),t("li",[s._v("webpack 处理好 chunk 文件后，最后会输出 bundle 文件，这个 bundle 文件包含了经过加载和编译的最终源文件，所以它可以直接在浏览器中运行。")])]),s._v(" "),t("p",[s._v("ps: 一般来说，一个 chunk 生成一个 bundle， utils.js -> chunks 1 -> utils.bundle.js；但也有例外，如：index.bundle.css")]),s._v(" "),t("p",[s._v("我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。")]),s._v(" "),t("h2",{attrs:{id:"hmr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hmr"}},[s._v("#")]),s._v(" HMR")]),s._v(" "),t("ol",[t("li",[s._v("当修改了一个或多个文件，文件系统接收更改并通知webpack；")]),s._v(" "),t("li",[s._v("webpack compiler重新编译构建一个或多个模块，并通知HMR服务器进行更新；")]),s._v(" "),t("li",[s._v("HMR Server 使用 webSocket 通知HMR runtime 需要更新，HMR运行时通过HTTP请求更新jsonp；")]),s._v(" "),t("li",[s._v("HMR运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。")])]),s._v(" "),t("h2",{attrs:{id:"sourcemap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap"}},[s._v("#")]),s._v(" sourceMap")]),s._v(" "),t("p",[s._v("sourceMap 是一项将编译、打包、压缩后的代码映射回源代码的技术，由于打包压缩后的代码并没有阅读性可言，\nsourceMap 可以帮助我们快速定位到源代码的位置，提高我们的开发效率。\nsourceMap 其实并不是 Webpack 特有的功能，而是 Webpack 支持 sourceMap，像 JQuery 也支持 sourceMap。")]),s._v(" "),t("p",[s._v("映射表通常以 "),t("code",[s._v(".map")]),s._v(" 结尾，大概为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "version" : 3,                          // Source Map版本\n  "file": "out.js",                       // 输出文件（可选）\n  "sourceRoot": "",                       // 源文件根目录（可选）\n  "sources": ["foo.js", "bar.js"],        // 源文件列表\n  "sourcesContent": [null, null],         // 源内容列表（可选，和源文件列表顺序一致）\n  "names": ["src", "maps", "are", "fun"], // mappings使用的符号名称列表\n  "mappings": "A,AAAB;;ABCDE;"            // 带有编码映射数据的字符串\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("mappings 规则")]),s._v(" "),t("ul",[t("li",[s._v("生成文件中的一行的每个组用“;”分隔；")]),s._v(" "),t("li",[s._v("每一段用“,”分隔；")]),s._v(" "),t("li",[s._v("每个段由1、4或5个可变长度字段组成；")])]),s._v(" "),t("p",[t("strong",[s._v("development 开发模式下，每个 "),t("strong",[s._v("webpack_modules")]),s._v(" 文件模块的代码最末端，都会加上 "),t("code",[s._v("//# sourceURL=webpack://file-path?")]),s._v("，从而实现对 sourceMap 的支持")])])])}),[],!1,null,null,null);t.default=e.exports}}]);