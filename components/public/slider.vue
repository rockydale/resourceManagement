<template>
  <div class="my-slider">
    <el-row class="tac">
      <el-col :span="24">
        <h5>  控制台</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-receiving"></i>
              <span>人力资源档案管理</span>
            </template>
            <el-menu-item-group>
              <nuxt-link to="/user/archive/register">
                <el-menu-item index="1-1"> 档案登记 </el-menu-item>
              </nuxt-link>
              <nuxt-link to="/user/archive/search">
                <el-menu-item index="1-2"> 档案查询 </el-menu-item>
              </nuxt-link>
              <nuxt-link to="/user/archive/change">
                <el-menu-item index="1-3"> 档案变更 </el-menu-item>
              </nuxt-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>
              <span>薪酬标准管理</span>
            </template>
            <el-menu-item-group>
              <nuxt-link to="/user/salary/register">
                <el-menu-item index="2-1">标准登记</el-menu-item>
              </nuxt-link>
              <nuxt-link to="/user/salary/search">
                <el-menu-item index="2-2">标准查询</el-menu-item>
              </nuxt-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-folder-checked"></i>
              <span>薪酬发放管理</span>
            </template>
            <el-menu-item-group>
              <nuxt-link to="/user/pay/register">
                <el-menu-item index="3-1">发放登记</el-menu-item>
              </nuxt-link>
              <nuxt-link to="/user/pay/search">
                <el-menu-item index="3-2">发放查询</el-menu-item>
              </nuxt-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/public/slider";
</style>
