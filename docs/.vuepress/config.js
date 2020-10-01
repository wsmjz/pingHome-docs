module.exports = {
  title: '苹果家',
  description: '可能是你见过最完美的Vue组件示例文档解决方案',
  port: 8080,
  dest: './dist',
  base: '/xdh-docs/',
  shouldPrefetch: () => false,
  themeConfig: {
    sidebarDepth: 3,
    nav: [{
      text: '指南',
      link: '/guide/base'
    }, {
      text: '主题规范',
      link: '/theme/color'
    }, {
      text: '生态系统',
      items: [{
        text: '项目',
        items: [{
          text: 'ping-admin-vue',
          link: '/community/schema'
        }, {
          text: 'ping-admin-react',
          link: '/community/schema'
        }, {
          text: 'ping-offical-vue(响应式)',
          link: '/community/schema'
        }, {
          text: 'ping-xcx',
          link: '/community/schema'
        }, {
          text: 'H5商城',
          link: '/community/schema'
        }, {
          text: '@ping/vue-home',
          link: '/community/schema'
        }, {
          text: '@ping/react-home',
          link: '/community/schema'
        }]
      }, {
        text: '资源',
        items: [{
          text: 'vue-ui-components',
          link: '/community/vue_ui/ui'
        }, {
          text: 'react-ui-components',
          link: '/community/react_ui/ui'
        }, {
          text: '基础资源ping-base-lib',
          link: '/community/schema'
        }, {
          text: 'ping(核心，自动化配置)',
          link: '/community/schema'
        }, {
          text: '脚手架ping-cli',
          link: '/community/schema'
        }, {
          text: 'ping-lint',
          link: '/community/schema'
        }, {
          text: '打包工具ping-webpack',
          link: '/community/schema'
        }, {
          text: '校验库',
          link: '/community/schema'
        }, {
          text: '状态管理',
          link: '/community/schema'
        }, {
          text: '路由',
          link: '/community/schema'
        }, {
          text: '日期',
          link: '/community/schema'
        }, {
          text: '图表',
          link: '/community/schema'
        }, {
          text: '地图',
          link: '/community/schema'
        }, {
          text: '关系流程图',
          link: '/community/schema'
        }]
      }, 
      // {
      //   text: 'vue-charts',
      //   link: '/community/vue_ui/index'
      // }, {
      //   text: 'vue-go(流程图库)',
      //   link: '/community/vue_ui/index'
      // }, {
      //   text: 'vue-map',
      //   link: '/community/vue_ui/index'
      // }
    ]
    }, {
      // text: '文章与讨论，话题',
      text: '日志',
      link: '/journal'
    }, {
      text: '学习笔记',
      link: '/note'
    }, {
      text: '空间',
      link: '/space/base'
    }, {
      text: '创想',
      link: '/idea'
    }],
    sidebar: {
      '/guide/': [{
        title: 'shouwang指南',
        collapsable: true,
        children: [
          'base',
          'app',
          'coder',
          'cmd',
          'guifan'
        ]
      }],
      '/theme/': [{
        title: '主题管理',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          'color',
          'base'
        ]
      }],
      '/space/': [{
        title: '服务',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          'base'
        ]
      }],
      '/community/vue_ui/': [{
        title: 'vue-ui',
        collapsable: true,
        children: [
          'ui'
        ]
      }],
      '/community/react_ui/': [{
        title: 'react-ui',
        collapsable: true,
        children: [
          'ui'
        ]
      }]
    }
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: require('@xdh/my/core/loaders/docs-extend-md-loader')
  },
  chainWebpack: chain => {
    // 增加 ui 别名
    chain.resolve.alias.set('$ui', '@xdh/my/ui/lib')

    // 为了同时兼容 core-js 2.x 和 core-js 3.x
    chain.resolve.alias.set('core-js/library', 'babel-runtime/node_modules/core-js/library')
    chain.resolve.alias.set('core-js/fn', 'babel-runtime/node_modules/core-js/fn')
    chain.resolve.alias.set('core-js/shim', 'babel-runtime/node_modules/core-js/shim')
    chain.resolve.alias.set('core-js/core', 'babel-runtime/node_modules/core-js/core')
    chain.resolve.alias.set('core-js/es5', 'babel-runtime/node_modules/core-js/es5')
    chain.resolve.alias.set('core-js/es6', 'babel-runtime/node_modules/core-js/es6')
    chain.resolve.alias.set('core-js/es7', 'babel-runtime/node_modules/core-js/es7')
    chain.resolve.alias.set('core-js/client', 'babel-runtime/node_modules/core-js/client')
  }
}

