<template>
  <ClientOnly>
    <div class="demo">
      <div ref="preview" class="demo__preview" :class="{'full-screen ':fullscreen}">
        <slot :fullscreen="fullscreen"></slot>
        <div class="demo__actions">

          <el-tooltip v-if="fullscreen" effect="dark" content="取消全屏" placement="top">
            <i class=" el-icon-switch-button" @click="fullscreen=false" title="取消全屏"></i>
          </el-tooltip>
          <el-tooltip v-else effect="dark" content="全屏" placement="top">
            <i class="el-icon-full-screen" @click="fullscreen=true"></i>
          </el-tooltip>


        </div>
      </div>
      <transition name="el-zoom-in-top">
        <div class="demo__body" v-if="!collapsed">
          <div class="demo__desc" v-if="$slots.desc">
            <slot name="desc"></slot>
          </div>
          <div class="demo__code">
            <slot name="code"></slot>
          </div>
        </div>
      </transition>
      <div class="demo__handler" @click="handleCollapsed">
        <span v-if="collapsed"><i class="el-icon-caret-bottom"></i> 显示代码</span>
        <span v-else="collapsed"><i class="el-icon-caret-top"></i> 隐藏代码</span>
      </div>
    </div>
  </ClientOnly>
</template>

<script>
  import {on, off} from 'element-ui/lib/utils/dom'

  export default {
    name: 'Demo',
    data() {
      return {
        collapsed: true,
        fullscreen: false
      }
    },
    watch: {
      fullscreen(val) {
        val ? this.setFullscreen() : this.cancelFullscreen()
      }
    },
    methods: {
      handleCollapsed() {
        this.collapsed = !this.collapsed
      },

      setFullscreen() {
        const el = this.$refs.preview
        const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if (typeof rfs !== 'undefined' && rfs) {
          rfs.call(el);
        }
      },
      cancelFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      },
      isFullScreen() {
        return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
      },
      handleFullscreenChange() {
        this.fullscreen = this.isFullScreen()
      }
    },
    mounted() {
      on(this.$refs.preview, 'webkitfullscreenchange', this.handleFullscreenChange)
    },
    beforeDestroy() {
      off(this.$refs.preview, 'webkitfullscreenchange', this.handleFullscreenChange)
    }

  }
</script>
