<template>
  <div class="m-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/user' }">控制台</el-breadcrumb-item>
      <el-breadcrumb-item>人力资源档案管理</el-breadcrumb-item>
      <el-breadcrumb-item>人力资源档案查询</el-breadcrumb-item>
    </el-breadcrumb>
    <el-container>
      <div class="m-select">
        <el-form
          :model="selectform"
          :rules="rules"
          label-width="120"
          :label-position="labelPosition"
        >
          <el-row>
            <el-col :span="8">
              <el-form-item label="Ⅰ级机构">
                <el-select
                  v-model="selectform.archive_one"
                  placeholder="请选择"
                >
                  <el-option label="集团" value="集团"></el-option>
                  <!-- <el-option label="女" value="woman"></el-option> -->
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="Ⅱ级机构">
                <el-select
                  v-model="selectform.archive_two"
                  placeholder="请选择"
                >
                  <el-option label="软件公司" value="软件公司"></el-option>
                  <!-- <el-option label="女" value="woman"></el-option> -->
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="Ⅲ级机构">
                <el-select
                  v-model="selectform.archive_three"
                  placeholder="请选择"
                >
                  <el-option label="外包组" value="外包组"></el-option>
                  <!-- <el-option label="女" value="woman"></el-option> -->
                </el-select>
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
  data() {
    return {
      selectform: {
        archive_one: "",
        archive_two: "",
        archive_three: "",
      },
    };
  },
  methods: {
    search(list) {
      console.log(list);
    },
  },
};
</script>
<style lang="scss">
.m-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.m-select {
  margin-top: 20px;
  width: 100%;
}
.m-table{
    margin-top: 20px;
}
</style>