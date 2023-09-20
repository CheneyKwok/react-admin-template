# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## 环境代码校验插件

```
# 让所有与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查
# 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低
"eslint-plugin-prettier"
"eslint-config-prettier"
"eslint-plugin-import"
"eslint-plugin-node"
# react.js的Eslint插件
"eslint-plugin-react"
# 该解析器允许使用Eslint校验所有babel code
"@babel/eslint-parser"
```

### 安装指令

```npm
pnpm install -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-node eslint-plugin-react  @babel/eslint-parser
```

## 配置stylelint

### 使用scss作为预处理器，安装以下依赖

```npm
pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-scss stylelint-order stylelint-config-standard-scss -D
```

## 配置 commitlint

### 规则

```markdown
'feat',//新特性、新功能
'fix',//修改bug
'docs',//文档修改
'style',//代码格式修改, 注意不是 css 修改
'refactor',//代码重构
'perf',//优化相关，比如提升性能、体验
'test',//测试用例修改
'chore',//其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert',//回滚到上一个版本
'build',//编译相关的修改，例如发布版本、对项目构建或者依赖的改动\*\*\*\*
```
