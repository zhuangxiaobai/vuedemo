<template>
     <div>
    
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="16%" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
    

  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const _this = this
        //     this.$axios.post('/login', this.ruleForm).then(res => {
        //       console.log(res.data)
        //       const jwt = res.headers['authorization']
        //       const userInfo = res.data.data
        //       // 把数据共享出去
        //       _this.$store.commit("SET_TOKEN", jwt)
        //       _this.$store.commit("SET_USERINFO", userInfo)
        //       // 获取
        //       console.log(_this.$store.getters.getUser)
        //       _this.$router.push("/blogs")
        //     })
        //   } else {
        //     console.log('error submit!!');
        //     return false;
           
           
           }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">

  .demo-ruleForm {
    max-width: 40%;
    margin: 0 auto; //居中
  }
</style>