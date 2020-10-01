<template>
  <div class="neutral-colors">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-button>深色背景</el-button>
      </el-col>
      <el-col :span="12">
        <el-button>浅色背景</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'NeutralColors',
    data() {
      return {
      }
    }
  }
</script>
