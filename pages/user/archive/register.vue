<template>
  <div class="my-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/user' }">控制台</el-breadcrumb-item>
      <el-breadcrumb-item>人力资源档案管理</el-breadcrumb-item>
      <el-breadcrumb-item>档案登记</el-breadcrumb-item>
    </el-breadcrumb>
    <el-container>
      <div class="m-list">
        <el-form
          :model="archiveform"
          :rules="rules"
          label-width="120"
          :label-position="labelPosition"
        >
          <el-row>
            <el-col :span="24">
              <el-form-item label="档案编号">
                <el-input v-model="archiveform.archiveid" prop="newusername">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="Ⅰ级机构">
                <el-input v-model="archiveform.archive_one"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Ⅱ级机构">
                <el-input v-model="archiveform.archive_two"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Ⅲ级机构">
                <el-input v-model="archiveform.archive_three"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="职位分类">
                <el-input v-model="archiveform.archive_type"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="职位名称">
                <el-input v-model="archiveform.archive_name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="职称">
                <el-input v-model="archiveform.professional"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="姓名">
                <el-input v-model="archiveform.archive_username"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别">
                <el-select
                  v-model="archiveform.archive_gender"
                  placeholder="请选择"
                >
                  <el-option label="男" value="man"></el-option>
                  <el-option label="女" value="woman"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="email">
                <el-input v-model="archiveform.archive_email"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="电话">
                <el-input v-model="archiveform.archive_telephone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="QQ">
                <el-input v-model="archiveform.archive_qq"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="手机">
                <el-input v-model="archiveform.archive_phone"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="住址">
                <el-input v-model="archiveform.archive_address"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="邮编">
                <el-input v-model="archiveform.archive_stamp"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="国籍">
                <el-input v-model="archiveform.archive_nationality"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="出生地">
                <el-input v-model="archiveform.archive_birthplace"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="生日">
                <el-input v-model="archiveform.archive_birthday"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="民族">
                <el-input v-model="archiveform.archive_nation"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="宗教信仰">
                <el-input v-model="archiveform.archive_religion"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="政治面貌">
                <el-input v-model="archiveform.archive_politics"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="身份证号码">
                <el-input v-model="archiveform.archive_idcard"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="社会保障号码">
                <el-input v-model="archiveform.archive_ssid"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="年龄">
                <el-input v-model="archiveform.archive_age"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="学历">
                <el-input v-model="archiveform.archive_degree"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="教育年限">
                <el-input v-model="archiveform.archive_schoolyears"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="学历专业">
                <el-input v-model="archiveform.archive_major"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="薪酬标准">
                <el-input v-model="archiveform.archive_salary"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="开户行">
                <el-input v-model="archiveform.archive_name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="账号">
                <el-input v-model="archiveform.archive_bankid"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="复核人">
                <p>admin</p>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="复核时间">
                <el-input v-model="archiveform.archive_chicktime"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="特长">
                <el-input v-model="archiveform.archive_skill"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="爱好">
                <el-input v-model="archiveform.archive_hobby"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="个人履历">
                <el-input
                  type="textarea"
                  v-model="archiveform.archive_self"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="家庭关系信息">
                <el-input
                  type="textarea"
                  v-model="archiveform.archive_family"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="备注">
                <el-input
                  type="textarea"
                  v-model="archiveform.archive_btw"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- <el-form-item label="密码">
          <el-input
            v-model="newform.newpassword"
            prop="newpassword"
            type="password"
            placeholder="密码长度为6-15位"
          ></el-input>
        </el-form-item>
        </el-form-item> -->
        <el-form-item align="center">
          <el-button type="success" plain @click="register(newform)"
            >提交</el-button
          >
        </el-form-item>
        </el-form>
      </div>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "right",
      archiveform: {
        archiveformid: "",
        archivename: "",
      },
    };
  },
  methods:{
    register(list){

    }
  }
};
</script>
<style lang="scss">
.m-list {
  width: 100%;
  margin-top: 20px;
  .el-form-item {
    margin-bottom: 22px;
    display: flex;
    margin-top: 10px;
  }
  .el-form-item__content {
    width: 60%;
    p {
      line-height: 40px;
    }
  }
  .el-form-item__label {
    width: 100px;
  }
}
.m-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>