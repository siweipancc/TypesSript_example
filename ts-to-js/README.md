# 基础
## 从JS 迁移 
### 概要 
- TypeScript 是 JavaScript 的超集
- TypeScript 的目的是对 JavaScript 的结构进行静态分析
- 编写中使用 ts 称为设计时代码，TypeScript 代码编译后的 JavaScript 称为运行时代码
- ts 编译器将设计时代码中的类及接口进行代码转换和类型擦除
### 环境基础
* [Node.js](https://nodejs.org/) 
* typescript `npm i typescript -g` 
### 代码演练
- `mkdir "ts-to-js"`
- `cd /d "ts-to-js"`
- `mkdir src`
- `cd src`
- `echo. > test.ts`
- `echo const t:number = 5; >> test.ts`
- `echo. >> test.ts`
- `echo console.log(t); >> test.ts`
- `tsc test.ts`
- `node test.js` 
### 说明
tsc 是 TypeScript 的编译器控制台接口，可以将 TypeScript 编译成 JavaScript;

node 是 node 的命令行 [reference](https://nodejs.org/docs/latest-v10.x/api/synopsis.html);
 
### 补充
IntelliJ IDEA 可以安装 [Run Configuration for TypeScript](https://plugins.jetbrains.com/plugin/10841-run-configuration-for-typescript/) 插件，右键 ts 文件运行代码


