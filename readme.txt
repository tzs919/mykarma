
============================begin======================
通过babel运行esmodule，同时支持原来的commonJS
(1)npm install --save @babel/core @babel/preset-env
(2)定义babel.config.js
==============================end====================

============================begin======================
使用node.js的实验性ESM(不建议用)
cross-env
https://github.com/kentcdodds/cross-env

package.json里的配置
  "type": "module",   运行esmodule

交叉环境
    "test2": "cross-env NODE_OPTIONS=--experimental-vm-modules jest"
==============================end====================

Jest 结合 Babel，支持 JavaScript 版 ESM
Babel 的作用是把 ES6+ 语法转换成 ES5 语法，ESM 属于 ES6+ 的内容，被 Babel 转成 ES5 之后就是一个立即执行表达式（IIFE），这时 Jest 当然就不存在不支持 ESM 的问题了。

如果想让 Babel 支持 ESM，我们需要三个 npm package，首先需要@babel/core 然后支持 ES 语法转换的 @babel/preset-env，最后和 Jest 通信的 babel-jest。

但是因为我们在安装 Jest 的时候 babel-jest 默认被安装了，所以我们只需要安装，剩下两个 package 就行了。

安装依赖：

npm install @babel/core @babel/preset-env
package.json 同级目录下新建 babel.config.js 文件，内容输入为：

// babel.config.js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  // node: "current" 表示基于你当前 Node 的版本进行编译，其中 current 可替换为 process.versions.node
};
重新 npm run test 运行测试用例即可。


链接：https://www.jianshu.com/p/d09f259574e4
来源：简书

// import {jest} from '@jest/globals'