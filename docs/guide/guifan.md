# 规范
## 主题样式规范(统一变量)
- 建议全部使用sailfish内置scss变量，[参考主题]()
- 抽离文件统一设置变量（方便统一使用`调色板变量`改颜色）
   - $border--color：$red-1
   - 色彩$color-primary: $blue-1
   - 间距
   - 投影
   - padding
   - 文字
### 规范命名词汇
- `warp` 组件容器
- `nav` 导航
- `content` 页面内容体
- `selider` 侧栏
- `main` 主要内容
- `footer` 页脚
## 命名规范
- 文件夹：原则上一个主菜单为一个文件夹以`-`连接
   - utils 工具类（写为首页目录结构）
   - views 视图文件
- 文件
   - 组件以大驼峰形式`HelloWord`
- 方法为小驼峰
   - 下划线`_`标识引入的公共方法
   - 获取列表`get开头`, 尽量语义化
## 流程规范
- 分支管理
- 环境管理
CICD持续集成
   - 灰度区
   - 体验区
   - 稳定区
## 容错规范
1. 检测空类型
2. 解构赋值-默认

## 业务规范（sailfish规范）
- 使用`@ping-home/sailfish-cli`创建项目demo，文件结构
- 设计规范

内置市场高频业务场景
   - 设计与项目的匹配妥协，非特别业务，原则上设计遵从sailfish(提炼最佳实践)

### 状态机范式

### 使用其他设计模式
使用一定的设计模式，提升可读性

### 拥抱rxjs

## CodeReview规范（代码评审）
<!-- (https://www.jianshu.com/p/f79c4e948954)
代码回顾，审查，定时检查 -->
- 完整性检查
- 一致性检查
- 正确性检查
- 可修改性检查
- 可预测性检查
- 健壮性检查
> 敏捷开发流程

## pnpm 包管理 规范统一包管理器 只能使用pnpm安装依赖  only-allow
## ESLint (编码规范)
- 期望基于`@ping/lint`
- Airbnb javascript编码规范 eslint
- js
## 分支管理
- 个人分支
- dev 分支
- pre 分支
- release 发布分支
- 灰度环境
## CommitLint
- 配置
- git 提交规范
   - feat 增加新功能
   - fix 修复问题/BUG
   - style 代码风格相关无影响运行结果的
   - perf 优化/性能提升
   - refactor 重构
   - revert 撤销修改
   - test 测试相关
   - docs 文档/注释
   - chore 依赖更新/脚手架配置修改等 与功能无关
   - workflow 工作流改进
   - ci 持续集成
   - mod 不确定分类的修改
   - wip 开发中
   - types 类型修改
- 关闭
在 .husky/commit-msg 内注释以下代码即可
```sh
# npx --no-install commitlint --edit "$1"
```
- 示例
```sh
git commit -m 'feat(home): add home page'
```
## Stylelint
- 配置 stylelint.config.js
- vscode 插件 `StyleLint`
## Prettier
- prettier 可以用于统一项目代码风格，统一的缩进，单双引号，尾逗号等等风格
- prettier 配置文件位于项目根目录下 prettier.config.js
- VScode 插件 `Prettier`
如果您使用的是 vscode 编辑器的话，只需要安装下面插件，即可在保存的时候自动格式化文件内部 js 格式

## Git Hook

## 拥抱hooks 函数式编程

## ts限制

## 代码组织

## 编辑器设置
- 本地历史文件记录，最小影响，便于找回代码

## 其他强约束
- 谨慎使用全局变量，使用函数，或reducer管理， 全局变量 使用方法管理
- 限制文件不超过400行
- 使用less
- 其他js, css 规范

## 内置vite 配置 兼容支持scss less


 