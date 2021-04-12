<template>
<div class="m-header">
  <el-row>
    <el-col :span="12"><div class="title">人力资源管理系统</div></el-col>
    <!-- <el-col :span="6"><div class="grid-content bg-purple-light">欢迎您！</div></el-col>
    <el-col :span="3"><div class="grid-content bg-purple-light">用户名</div></el-col>
    <el-col :span="3"><div class="grid-content bg-purple-light">状态</div></el-col> -->
  </el-row>
</div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.m-header{
  width: 100%;
  background-color: rgb(54, 51, 92);
  line-height: 60px;
  // padding-left: 20px
  .title{
    padding-left: 20px;
    color: white;
  }
}
</style>