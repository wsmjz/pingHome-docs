# 介绍
<!-- - 快速创建页面，减少cv工作
- 整合社区优秀项目
- 自研高定制组件 -->
sailfish致力于完善一套默认好用，配套完全的一站式开发解决方案

## 开始
> 安装learn 管理项目
```sh
npm i @ping-home/sailfish-cli
psf c my-app
```
<!-- yarn create umi 创建项目 -->

<!-- ## 依赖集成(重应用) -->
<!-- > 使用第三方库(自研的 与 成熟社区的) -->

<!-- - rice 核心包
- 使用ahook
- antd TechUI
- 好玩的css -->
   <!-- - 动画库 -->
   <!-- - 不规则button -->
<!-- - Graph图形 -->
   <!-- - 路劲 -->
   <!-- - 原生柱状图 -->
<!-- - butterfly
- dophain
- 活动抽奖
- request 网络请求
- 前端文件下载html2canvas
- 图标
> 内置超千个图标
- vr(基于three再封装简易3D库) -->

## 推荐开发环境
> 工欲善其事 必先利其器
```js
// 要求
// 1. 安装fnm 管理node版本
/bin/bash -C "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"

// 切换源 nrm
npm install nrm -g
npm config set registry [registry url]
npm config get registry
npm cache clean --force  // 清除缓存
npm install -g cnpm --registry=https://registry.npm.taobao.org   # 全局安装 cnpm

// 2. 安装learn pnpm管理项目

// 3. 快速删除node_modules文件
npm i rimraf -g

// 4. 安装nodeman
```

## 工具环境配置
- vs code 常用插件 配置见下
   - 安装eslint
- 浏览器插件 `米诺` (账号管理，bug)
- 快速删除node_modules
```sh
npm i rimraf -g
rimraf node_modules
```
- 查看所有终端命令
- 源管理
```sh
npm i yrm -g

```
- 图片资源上传cdn

## 特性.天赋能力
- 支持 monorepo 模块启动 更快编译
   <!-- - 分包编写业务需求 -->
- 页面适配
- 骨架屏
- 内置应用级，页面级 错误边界处理
- 标签tab拖拽，缓存能力
- 组件销毁 取消销毁组件所有接口请求
   - 超时，中断
- 换肤 主题设置
- 菜单布局
- 默认支持代码分割 优化处理
- msp 多页打包
- webpack 优化
- @preset-rice
- 加密localStrong


## 提炼最佳实践指导

**sailfish致力于完善一套默认好用，配套完全的一站式开发解决方案 提供：**
   - 通过 `@ping-home/sailfish-cli` 实现的交互式的项目脚手架。
   - `rice` 驱动器
      <!-- - 一个运行时依赖 `(@ping/cli-service)`，该依赖： -->
      <!-- - 可升级 -->
      - 基于 webpack 构建，并带有合理的默认配置
      - 可以通过项目内的配置文件进行配置；
      - 可以通过插件进行扩展

      <!-- - 配置文件 `ping.config.js（可选，）`
      - 代码生成
         - 模拟数据Mock
         - 配置vuex,Store
      - 自动路由配置 -->
   - `pro` 集成项目模板 vue2主应用
   <!-- - `@ping/apps-vue` vue3子项目 -->
      <!-- - vue3应用 -->
      <!-- - 收集高级动效 -->
   <!-- - `@ping/apps-react` react子应用 -->
   - `maque`
      - hooks
      - 中间件
   <!-- - `@ping/vue-home` 集成vue全家桶，可独立安装 -->
   - `犀牛`
      <!-- 拆分 -->
      <!-- - 指令 -->
      <!-- - 方法 -->
   - `lint` 规范

   <!-- ```js
   - http-serve，axios搭建原始ajax
   - http服务端，node中间件
   - 开发性能监控
   ``` -->

   - `SSR`

      <!-- ```js
      - 响应式模板
      - 小程序
      - node 中间件
      - ssr等
      ``` -->

   - `butterfly` 原装react组件库
   - `schame` 校验
   - `Graph` 图表

   <!-- - `go` 关系图 -->
   <!-- - `store` 状态机 -->
   <!-- - `date` 日期格式化  -->
   
<!-- 
**工程主应用可集成vue, react, jq项目**
> vue 子应用 为原生 配合`@ping/ui-vue` 实现<br>
> react 子应用为antd 实现UI层 <br>
> jq 子应用实现 官网效果 -->

## 目录结构

```md
├── build/                         # 构建产物
├── mock/                          # 本地模拟数据
│   ├── index.[j,t]s
├── public/
│   ├── index.html                 # 应用入口 HTML
│   └── favicon.png                # Favicon
├── src/                           # 源码路径
|   |__  assets                    # 静态资源, 不编译
│   ├── components/                # 自定义业务组件
│   │   └── Guide/
│   │       ├── index.[j,t]sx
│   │       ├── index.module.scss
│   ├── layouts/                   # 布局组件
│   │   └── BasicLayout/
│   │       ├── index.[j,t]sx
│   │       └── index.module.scss
│   ├── pages/                     # 页面
│   │   └── Home/                  # home 页面，约定路由转成小写
│   │       ├── components/        # 页面级自定义业务组件
│   │       ├── models.[j,t]sx     # 页面级数据状态
│   │       ├── index.[j,t]sx      # 页面入口
│   │       └── index.module.scss  # 页面样式文件
│   ├── configs/                   # [可选] 配置文件
│   │   └── menu.[j,t]s            # [可选] 菜单配置
│   ├── models/                    # [可选] 应用级数据状态
│   │   └── user.[j,t]s
│   ├── utils/                     # [可选] 工具库
│   ├── global.scss                # 全局样式
│   ├── routes.[j,t]s              # 路由配置
│   └── app.[j,t]s[x]              # 应用入口脚本
├── build.json                     # 工程配置
├── README.md
├── package.json
├── .editorconfig
├── .eslintignore
├── .eslintrc.[j,t]s
├── .gitignore
├── .stylelintignore
├── .stylelintrc.[j,t]s
├── .gitignore
|-- prevest.js      // 预设文件
|-- .bable.js       // es6解析文件
|-- ping.config.js    // 工程配置文件
└── [j,t]sconfig.json
```
<!-- - ping.config.js 配置文件
- src 源码目录
- 常量管理
- 业务组件
- blocks 安装的区块 （原则不可修改，修改加备注）
- components
- constans
- hooks
- locales
- pages
   - 多级缓存面板
      - 加载自定义（可设置，很强的预设）
   - 加强列表
      - 详情页
      - 高级搜索
      - 编辑提交
      - 错误处理

- services  
- redux 异步管理
- utils 公共方法 -->

## 应用类型
- console
- h5(无线)
   - px2rem loader支持 rem vw vh
- 小程序
   - 设计稿以IPhone6 2倍图为准，开发直接取设计尺寸 因为1rpx = 0.5px
   - NutUI
- 离线包
- npm 组件
- Chair
- APP
- 触屏设备


## 配置
<!-- - 全局配置(编译时配置)
   > 约定原则 -->
### ping.config.js 工程配置
> 根目录下 ping.config.js 是工程配置，即对开发环境、编译、辅助工具等与项目实现功能或业务无关的配置

- publicPath
- entry
- devServerPort
<!-- - dll 生产环境打包dll。默认：['vue', 'vue-router', 'vuex', 'axios', 'path-to-regexp', 'nprogress', 'qiankun'] -->
- autoRoutes 自动生成路由配置 (约定路由) 默认true
- staticConfig 开启静态配置 true
- coder 代码生成器配置对象 

- 子应用工程配置
- 子应用运行时配置
- 写入脚本文件 .sh shell脚本等


### 运行时配置 
> 支持获取和设置
- debug 开启debug模式，默认在开发模式开启，在产品模式关闭。
<!-- 关闭后 Vue实例内置与$log相关的方法不再打印信息 -->
- routePrefix 路由path前缀，只对hash模式的子应用有效

### 运行时插件
- 启用文件 app.tsx
- 应用优化

### 编译时(构建时)

## sailfish API(rice api)

```js
// rice.config.js
export const riceConfig = {
   delopMode: 'assets',
   applyType: 'console' | 'h5' | 'xcx',
   hash: true, // 按package.json 生成版本号
   router: {
      lazy: true
   },
   antd: {},
   qiankun: {

   },
   publicPath: '/',
   themeConfig: {

   },
   msfu: {
      esbuild: true,
      SSG: false,
      SSR: false,
      remoteRuntime: true
   },
   vite: false,
   isForceLint: true,
   tract: {
      a: '1123'
   }
}
```
- applyType 开启移动端 h5模式
- publicPath
- isForceLint  所有强限制（开发模式 启用）
- SSR 开启服务端渲染, mpa 多页应用 (设置打包出多个文件， 入口)
- SSG 构建时预渲染
- msfu: esbuild 极速编译
   - 流模式
- tract 开启埋点
- vite 模式
- 代码分割， 按需加载
- 开启PWA
- 开启预编译 remoteRuntime


## Api
```js
import { useTheme } from '@ping-home/sailfish/ahooks'
import { useState } from '@ping-home/sailfish/maque'
import {} from '@ping-home/sailfish/utils/events'
import { Authority} from '@ping-home/sailfish/utils' // 高阶组件 鉴权能力
```
- useTheme 主题换肤
- 复制剪切板
- 工具集
   - 错误处理函子
- react
- react-router
- 使用antd,techUI,Ping-ui
- butterfly-ui
- maque
- phooks
- 工具包
   - js-cookies
   - moment
   - 事件总线events
   - lodash
   <!-- - moment 换用date库 -->

## 使用图标  && 静态资源
- 背景图小于1M 自动转成base64
- 放在public 文件下 避免打包 使用staticPath 访问
- 使用cdn

## 路由守卫
- 继承umi wrapper
<!-- ## 快速刷新 -->

## 服务端渲染
<!-- > ssr 服务端 </br>csr 客户端渲染 -->
- 说明：特别需求，或需做SEO则开启，中台系统一般不适用  会增加服务器压力

<!-- ### 支持同构 ssr
- ssr 支持局部刷新 -->

## 预渲染 SSG
> 开启方法： 配置config属性
> 其他 ssf等 做node中间层 前端请求到这一层

## 数据流管理仓库
> 开启方法：新建文件 自动读取
- 使用`@ping/store`
- 使用dva, redux, vuex,pinan
- 简易数据流 useModel()
- useModel(@@INIT) 初始数据
- 缓存引擎
> localstrong 提供加密
<!-- > 服务端仓库 使用：react-query -->
<!-- - 强缓存，内置模式 -->

## 数据转化
- 打平前后端数据不一致问题

## 接口服务 oneApi & Mock数据
> 开启方法：运行脚本 run oneapi
<!-- - 提效 -->
<!-- - 全链路自动化 -->

## 网络请求 request
<!-- > 很有必要写一个请求库 方便处理问题
- 统一请求
- 统一错误处理
- 统一接口规范 -->
- 代理配置
   - 设置cookie 确保会话

## 常量管理
> 使用_分词 例如 AA_BB
要求表格字段采用常量管理，因为数据量会很大
- 环境变量
> 一些用户信息 不方便上传的
- 工程配置常量
  - 端口，ip
- 应用业务常量
  - 下拉options
## 竞态条件
<!-- ## 实例扩展TODU vue实例支持 -->

## 适配
> 自动
<!-- - 移动端放弃rem 方案 使用最新方案 -->

## 微前端
> 写入插件支持

## 区块模板
> 脚本命令安装

## 官网类支持

## 可视化大屏
- 使用recharts 高度自定义,非常灵活，会写svg 就可以搭配出各种图表
- 适配方案（采用缩放比例）

## 优化

## 使用TS

## 新增页面
```sh
psf block page1
```

## 权限管理 & 路由拦截
- jwt登陆认证
- 视图鉴权

## 内置布局
> config 配置layout 菜单 导航 用户等特有定制模块

## 国际化
- 写入加载语言包
```js
exports['default'] = {
    locale: 'en',
    Pagination: _en_US2['default'],
    DatePicker: _en_US4['default'],
    TimePicker: _en_US6['default'],
    Calendar: _en_US8['default'],
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        notFoundContent: 'Not Found',
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Not Found'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    }
};
```

## 样式主题 && 换肤 && 修改样式
<!-- （全局，叠加覆盖样式） -->
> global.less 文件
- 科技
- 健康
- 明亮
### 换肤
采用``css-vars-ponyfill`` 纯js实现，对外暴露初始主题方法 不依赖css预处理器

### 特殊字体

## 领域模型
>DSL
- 表单领域模型
- 面板领域模型
<!-- - 桥接器 -->

## 支持业务需求
<!-- - 鉴权
   - 视图鉴权
   - 路由鉴权
- 路由进度条 -->
- 列表领域模型
- 表单领域模型
   - 文件上传
- 消息中心
- 购物车订单管理
- 星空地图
- 代码编辑器
- 单点登录
- PDF 签名
- 文件预览（world, pdf）
- 滚动加载更多
<!-- - 常用 `流程图`, `树结构`,`表单`, `表格列表`,`购物车`, `地址管理`等 -->

## 音视频方案
> flv hls 265 264格式
- Vercel
- easyplayer
- SkeyeWebPlayer
- hls.js
- 西瓜 (264可以，h265不行)


## world 预览编辑

##  excel 前端下载

## 函数式编程推荐

## 测试


<!-- ## 配置化 && 增强 自定义 表单表格
> 拒绝copy 可维护性
- 痛点：无法联动自定义模块数据
- 场景：巨型表单 上百字段
- 抽象化 协议描述
```js
// 协议
[
   {
      type: 'input' | 'select' | 'radio'
   }
]
``` -->

## 监控错误处理与上报（埋点监控）
> 及时发现错误
- 运行时
   - 语法错误
- 网络
   - 网络中断
   - 网络超时
- 资源加载
- 未处理的promise
- 异步请求错误（fetch与xhr）
- 组件接口提示信息 统一常量管理
- json语法错误

## 部署 && 环境
> 快速 使用 `洛神工作台` 一键部署 - 发布
### 静态资源组织类型
   <!-- - Assets
   - bff
   - sff
- 强缓存 协商缓存
- 自动配置webpack nginx cdn
- 手动上传 -->

### 自动化部署
<!-- - 雨燕平台 会往源代码中注入一些代码片段 脚本 -->
- Docker
- Jenkins
<!-- - es-build 构建 -->
### 模式
- site 静态站点 无服务端交互 使用sailfish具备seo能力
- assets 部署html 片段，css js 部署在cdn上
- 容器自动托管
   <!-- 燕鸥模式（自动托管容器） -->
- BFF
- SFF
- k8s
- severless 一体化
- dockers 镜像
- 离线包
- chain 后端应用部署

### 分支 & tag
<!-- > 个人 merge dev 合并commit 到pre??????
- 个人分支
- dev 分支
- 预发
- tag
- branch
- release 发布分支 -->

### 版本管理
- 线上问题 方便秒级回滚
- 自动以package 为版本号
### 持续集成CICD
<!-- - jekens 配置
- docker 文件
- nglix 配置 -->

### 环境
- dev 环境
- 测试环境
- 灰度环境
- 预发环境
- 正式环境

### CDN 购买与部署

## 迭代与修复
- 新建feature 分支
- 从master切出 hotfix/ui_20230710_zp

## 调试
- 二分法
- 小黄鸭 
<!-- https://zh.wikipedia.org/wiki/%E5%B0%8F%E9%BB%84%E9%B8%AD%E8%B0%83%E8%AF%95%E6%B3%95 -->
- 重写
- 建议后端支持cookie 前端资源代理配置，方便调试线上代码

<!-- 
## 高阶配置- 工具

### 推荐使用vscode 编辑器插件
> 方便更快项目开发 更好开发体验

### 使用`青鸟`低代码平台

## 插件系统 && 插件生命周期 & api
- preset-rice 预设插件集
   - plugin-access 鉴权管理
   - 支持ssr
   - 支持ssg
   - px2rem 适配方案

- 国际化
- request mock server
- useModel
- 乾坤

## 高阶应用
- 桥接器
   - ui 桥接器
   - 功能桥接器 （比如启用hooks路由）
- 启用hooks 路由
- 内置包
   - mustache 模板引擎
   - cross-env 跨平台解析
   - friendly-errors-webpack-plugin / node-notifier 错误提示
   - speed-measure-webpack5-plugin / webpack-bundle-analyzer 打包速度分析
- 支持高阶组件装饰器
   - 增强第三方组件库
- 是否开启 react 优化深比较
### 单点登录
### 集成taro跨端应用

## FAQ
- 如何自定义路由？？
- 开启log 日志 设置localStrong
- 跨域问题
1. 浏览器访问 链接设置 diableed -->


## 规范
> 参见规范

<!-- - 生产模式与开发模式表现的不同
   - 严格模式下ueState 会刷新两次 确保挂载
   - 添加按钮 开发环境会刷新变灰（可能自动处理了 不严格），生产未变灰，就是严格模式下依赖不刷新（useEffect 只执行一次） 可使用useMemo -->

<!-- ## 项目工程化

### 模块化
- js模块化
   - commonjs,es6
- css模块化
   - css in js
   - css_modules
- 资源模块化

### 规范化

### 自动化
- 一键部署

### 页面研发规范

### 统一错误处理

### 统一接口规范 -->

## 修改内置模块
<!-- > 收敛 rice 带有40多个模块，sailfish 带有20多个模块, 社区常用30多个模块
```js
"@ping-home/rice": "^0.0.1",
"lodash": "^4.17.21",
"moment": "^2.29.1"

"@babel/preset-env": "^7.16.11",
"@babel/preset-react": "^7.16.7",
"antd": "^4.20.0",
"babel-loader": "^8.2.5",
"css-loader": "^6.7.1",
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-router-dom": "^5.2.0",
"style-loader": "^3.3.1"
"动画": "^3.3.1"
"day.js 日期库"
``` -->