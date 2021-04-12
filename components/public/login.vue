<template>
  <el-tabs type="border-card">
    <el-tab-pane label="登录">
      <el-form
        :model="loginform"
        :rules="rules"
        ref="loginform"
        label-width="120"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginform.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginform.password" type="password"></el-input>
        </el-form-item>
        <el-form-item align="center">
          <el-button type="primary" @click="login('loginform')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="注册">
      <el-form :model="newform" :rules="rules" ref="newform" label-width="120">
        <el-form-item label="用户名">
          <el-input v-model="newform.newusername" prop="newusername" placeholder="用户名长度为3-10位"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="newform.newpassword"
            prop="newpassword"
            type="password"
            placeholder="密码长度为6-15位"
          ></el-input>
        </el-form-item>
        <el-form-item align="center">
          <el-button type="primary" @click="register('newform')"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      loginform: {
        username: "",
        password: "",
      },
      newform: {
        newusername: "",
        newpassword: "",
      },
      rules: {
        username: [
          { required: true, trigger: "blur" },
          { min: 3, max: 10 },
        ],
        password: [
          { required: true, trigger: "blur" },
          { min: 6, max: 15 },
        ],
        newusername: [
          { required: true, message: "用户名长度为3-10位", trigger: "blur" },
          { min: 3, max: 10 },
        ],
        newpassword: [
          { required: true, message: "密码长度为6-15位", trigger: "blur" },
          { min: 6, max: 15 },
        ],
      },
    };
  },
  methods: {
    login(loginform) {
      // this.$refs[loginform].validate((vaild) => {
      //   if (valid) {
      //     } else {
      //       alert("数据有误");
      //   }
      // });
      this.$router.push('/user')
    },
    register(newform) {
      let that = this
      this.$refs[newform].validate((valid) => {
        if (valid) {
          //验证通过 进行注册
          console.log('请求接口ing')
          axios.post('/signup',{
            username:that.newform.username,
            password:that.newform.password
          }).then(({
            status,
            data
          })=>{
            if(status === 200){
              if(data && data.code === 0){
                console.log('注册成功')
              }
            }else{
              console.log('注册失败')
            }
          })
        } else {
          alert("数据有误");
        }
      });
    },
  },
};
</script>
<style lang="scss">
</style>