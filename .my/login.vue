<template>
  <div class="bg">
    <h1>登录</h1>
  </div>
</template>

<script>

  export default {
    // props: {
    //   // url查询参数名称
    //   urlQueryName: {
    //     type: String,
    //     default: 'url'
    //   },
    //   // 默认登录成功跳转页面地址
    //   defaultUrl: {
    //     type: String,
    //     default: '/'
    //   }
    // },
    // methods: {
    //   login({account, password}) {
    //     // todo: 根据业务实现对接登录接口
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         resolve({
    //             id: 123,
    //             token: 'abc'
    //           }
    //         )
    //       }, 300)
    //     })
    //   },
    //   handleSuccess(res) {
    //     // 在此记录登录信息和跳转
    //     if (!this.$access) return
    //     this.$access.login(res)
    //     this.redirect()
    //   },
    //   isSelf(url) {
    //     const {fullPath, path} = this.$route
    //     return url === fullPath || url === path || url === window.location.href
    //   },
    //   redirect() {
    //     const redirectUrl = this.$route.query[this.urlQueryName] || this.defaultUrl
    //     const path = decodeURIComponent(redirectUrl)
    //     // 如果准备要跳转的地址就是页面本身，不需要处理
    //     if (this.isSelf(path)) return
    //     const regex = /^http(s)?:\/\/.+/
    //     if (regex.test(path)) {
    //       window.location.href = path
    //     } else {
    //       this.$router.push(path)
    //     }
    //   }
    // },
    // created() {
    //   // 如果已经是登录状态，跳转到首页或指定页面
    //   if (this.$access && this.$access.isLogin()) {
    //     this.redirect()
    //   }
    // }
  }
</script>

