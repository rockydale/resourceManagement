<template>
    <div class="m-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/user' }">控制台</el-breadcrumb-item>
      <el-breadcrumb-item>薪酬发放管理</el-breadcrumb-item>
      <el-breadcrumb-item>薪酬发放登记</el-breadcrumb-item>
    </el-breadcrumb>
    <el-container>
      <el class="m-list">
        <el-form :model="salaryform" :rules="rules" label-width="120">
          <el-row>
            <el-col :span="8">
              <el-form-item label="薪酬标准编号">
                <el-input v-model="salaryform.salaryid"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="薪酬标准名称">
                <el-input v-model="salaryform.salaryname"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="薪酬总额">
                <el-input v-model="salaryform.salarytotal"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="制定人">
                <el-input v-model="salaryform.salarypostman"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="登记人">
                <el-input v-model="salaryform.salaryusername"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="登记时间">
                <el-input v-model="salaryform.salarytime"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="序号"></el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="薪酬项目名称"></el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="金额"></el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="20">
              <el-row
                :gutter="20"
                v-for="(item, index) in formData.list"
                :key="index"
                class="alignT spaceTop1"
              >
                <el-col :span="0.5">
                  <i
                    class="iconBtn"
                    @click="listMethod(index)"
                    :class="{
                      'el-icon-circle-plus-outline': index == 0,
                      'el-icon-remove-outline': index > 0,
                    }"
                    style="margin-top: 6px"
                  ></i>
                </el-col>
                <el-col :span="10">
                  <el-form-item
                   
                  >
                    <el-input
                      placeholder="请输入名称"
                      v-model="item.name"
                      auto-complete="off"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item
                   
                  >
                    <el-input
                      placeholder="请输入年龄"
                      v-model="item.age"
                      auto-complete="off"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <!-- 按钮 -->
          <el-row>
            <el-col :span="0.5">
              <el-form-item>
                <el-button type="primary" @click="submit('formData')"
                  >提交</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el>
    </el-container>
    </div>
</template>
<script>
export default {
  data() {
    return {
      salaryform: {},
      formData: {
        list: [{ name: "", age: "" }],
      },
    };
  },
  methods: {
    listMethod(n) {
      if (n > 0) {
        this.formData.list.splice(n, 1);
      } else {
        let o = { name: "", age: "" };
        this.formData.list.push(o);
      }
    },
    // rule_name(rule, value, callback) {
    //   console.log(value);
    //   // 姓名不能为空
    //   if (!value) {
    //     return callback(new Error("请输入姓名"));
    //   }
    //   callback();
    // },
    // // 年龄校验方法
    // rule_age(rule, value, callback) {
    //   if (!value) {
    //     return callback(new Error("请输入年龄"));
    //   }

    //   let n = Number(value);

    //   if (n < 1) {
    //     return callback(new Error("年龄不能小于1岁"));
    //   }

    //   if (n > 200) {
    //     return callback(new Error("年龄不能大于200岁"));
    //   }

    //   callback();
    // },
  },
};
</script>
<style lang="scss">
</style>