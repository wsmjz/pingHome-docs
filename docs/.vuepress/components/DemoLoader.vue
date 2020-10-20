<template>
  <div class="demo-loader">
    <ClientOnly>
      <component v-if="component" :is="component" :style="styles"></component>
      <div class="demo-loader__loading" v-if="!component">正在努力加载中...</div>
    </ClientOnly>
  </div>

</template>

<script>

  export default {
    name: 'DemoLoader',
    props: {
      id: String,
      fullscreen: Boolean
    },

    data() {
      return {
        component: null
      }
    },
    computed: {
      styles() {
        return {
          'min-height': this.fullscreen ? '100vh' : null
        }
      }
    },
    // mounted() {
    //   import(`../../../.my/${this.id}.vue`).then(res => {
    //     this.component = res.default
    //   })
    // }
  }
</script>

