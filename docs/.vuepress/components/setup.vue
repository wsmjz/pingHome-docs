<template>
  <div class="setup">
    <el-button round type="primary" icon="el-icon-view" @click="go">主页设计</el-button>
  </div>
</template>

<script>
let notify = null;
export default {
  name: "setup",
  methods: {
    go(url, isOpen = false) {
      alert(111);
    },
  },
  mounted() {
    if (notify) {
      notify.close();
    }
    notify = this.$notify({
      title: "版本更新",
      message: "v3.0 正式版发布",
      type: "success",
      duration: 3000,
    });
  },
};
</script>


