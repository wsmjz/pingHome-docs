module.exports = {
  title: '苹果家+',
  // description: '可能是你见过最完美的Vue组件示例文档解决方案',
  port: 8080,
  dest: './dist',
  base: '/',
  shouldPrefetch: () => false,
  themeConfig: {
    sidebarDepth: 3,
    nav: [{
      text: '指南',
      link: '/guide/intr'
    }, {
      text: '主题规范',
      link: '/theme/color'
    }, {
      text: '生态系统',
      items: [{
        text: '项目',
        items: [
        // {
        //   text: 'apps-vue',
        //   link: '/community/schema1'
        // }, {
        //   text: 'apps-react',
        //   link: '/community/schema'
        // }, {
        //   text: 'offical-vue(响应式)',
        //   link: '/community/schema11'
        // }, {
        //   text: 'ping-xcx',
        //   link: '/community/schema112'
        // }, {
        //   text: 'H5商城',
        //   link: '/community/schema1121'
        // }, {
        //   text: '@ping/vue-home',
        //   link: '/community/schema11221'
        // }, {
        //   text: '@ping/react-home',
        //   link: '/community/schema12211'
        // }
        {
          text: 'sailfish-pro',
          link: '/community/vue_ui/ui1'
        },
        {
          text: 'butterfly',
          link: '/community/vue_ui/ui1'
        },
        {
          text: '青鸟',
          link: '/community/vue_ui/ui1'
        }
      ]
      }, {
        text: '资源',
        items: [{
          text: '插件',
          link: '/community/vue_ui/ui1'
        }, {
          text: 'loader',
          link: '/community/vue_ui/ui11'
        }, {
          text: '@ping/beautify-ui-vue',
          link: '/community/vue_ui/ui221'
        }, {
          text: '@ping/beautify-ui-react',
          link: '/community/react_ui/ui11221'
        }, {
          text: '@ping/dophin-ui',
          link: '/community/react_ui/ui11221'
        }, {
          text: '@ping/dev-tool',
          link: '/community/dev-tool'
        }, {
          text: '@ping/rice',
          link: '/community/schema141115'
        }, {
          text: '@ping/cli',
          link: '/community/schema14111'
        }, {
          text: '@ping/lint',
          link: '/community/schema1411'
        }, {
          text: '@ping/webpack',
          link: '/community/schema22211'
        }, {
          text: '校验库',
          link: '/community/schema24241'
        }, {
          text: '状态管理',
          link: '/community/schema24245'
        }, {
          text: '路由',
          link: '/community/schema242422'
        }, {
          text: '日期',
          link: '/community/schema112111w3'
        }, {
          text: '图表',
          link: '/community/schema2221111'
        }, {
          text: '地图',
          link: '/community/schema22111'
        }, {
          text: '关系流程图',
          link: '/community/schema1221'
        }]
      }
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
      text: '文章',
      link: '/note'
    }, {
      text: '空间',
      link: '/space/base'
    }, {
      text: '音乐汇',
      link: '/music'
    }, {
      text: '创想',
      link: '/idea'
    }],
    sidebar: {
      '/guide/': [{
        // title: 'Sailfish-工程规划',
        title: '旗鱼-Sailfish',
        collapsable: false,
        children: [
          'intr',
          // 'base',
          // 'jingjie',
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
      }],
      '/community/': [{
        title: 'dev-tool',
        collapsable: true,
        children: [
          'dev-tool'
        ]
      }]
    }
  }
}

