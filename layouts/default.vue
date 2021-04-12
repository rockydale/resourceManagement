<template>
  <div class="mycontainer">
  <el-header>
    <myheader/>
  </el-header>
  <el-container>
    <el-aside width="220px">
      <myslider/>
    </el-aside>
    <el-main>
      <Nuxt />
    </el-main>
  </el-container>
  <el-footer>
    <!-- footer -->
  </el-footer>
</div>
</template>
<script>
import myheader from '@/components/public/header'
import myslider from '@/components/public/slider'
export default {
  components:{
    myslider,
    myheader
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
