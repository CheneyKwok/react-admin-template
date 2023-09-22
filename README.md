# React + TypeScript + Vite + Eslint + Stylelint + Prettier + Commitlint

## 插件

### eslint 插件

```
# 让所有与 prettier 规则存在冲突的 Eslint rules 失效，并使用 prettier 进行代码检查
# 运行更漂亮的 Eslint，使 prettier 规则优先级更高，Eslint 优先级低
"eslint-plugin-prettier"
"eslint-config-prettier"
"eslint-plugin-import"
"eslint-plugin-node"
# React 的 Eslint 插件
"eslint-plugin-react"
# 该解析器允许使用 Eslint 校验所有 babel code
"@babel/eslint-parser"
```

#### 安装指令

```npm
pnpm i -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-node eslint-plugin-react  @babel/eslint-parser
```

### stylelint 插件

使用 scss 作为预处理器，安装以下依赖

```npm
pnpm i -D sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-scss stylelint-order stylelint-config-standard-scss
```

### commitlint 规则

```markdown
build: 影响构建系统或外部依赖项的更改
feat: 添加功能 引入新的特性
fix: bug 修复
docs: 文档修改
style: 格式调整 不会影响代码含义的更改（空格，格式缺少分号等）
refactor: 代码重构 即不是修复 Bug，也不是添加功能的代码更改
perf: 性能优化 更改代码以提高性能
chore: 杂务处理 其他不会修改源文件或者测试文件的更改
evert: 恢复版本 恢复到上一个版本
ci: 脚本变更 对 CI 配置文件和脚本的更改
test: 测试用例修改
```

### svg 插件

#### 安装

```npm
pnpm i vite-plugin-svg-icons -D
```

### mock 插件

使用 vite-plugin-mock

#### 安装

```npm
pnpm install -D vite-plugin-mock mockjs
```
