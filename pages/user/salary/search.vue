<template>
    <div class="m-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/user' }">控制台</el-breadcrumb-item>
      <el-breadcrumb-item>薪酬标准管理</el-breadcrumb-item>
      <el-breadcrumb-item>薪酬标准查询</el-breadcrumb-item>
    </el-breadcrumb>
    <el-container>
      <div class="m-select">
        <el-form
          :model="payform"
          :rules="rules"
          label-width="120"
          :label-position="labelPosition"
        >
          <el-row>
            <el-col :span="8">
              <el-form-item label="请输入薪酬标准编号">
                <el-input v-model="payform.payformid" prop="newusername">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="请输入关键字">
                <el-input v-model="payform.payform" prop="newusername">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          
          <el-row>
            <el-button
              type="primary"
              icon="el-icon-search"
              @click="search(selectform)"
              >搜索</el-button
            >
          </el-row>
          <el-row>
            <div class="m-table">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed prop="date" label="日期" width="150">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="province" label="省份" width="120">
                </el-table-column>
                <el-table-column prop="city" label="市区" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="300">
                </el-table-column>
                <el-table-column prop="zip" label="邮编" width="120">
                </el-table-column>
              </el-table>
            </div>
          </el-row>
        </el-form>
      </div>
    </el-container>
    </div>
    
</template>
<script>
export default {
  data(){
    return{

      payform:{
  
      },
      tableData:""
    }
  }
}
</script>