<template>
      <div>
    <!-- <Header></Header> -->

    <div >

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="摘要" prop="description">
          <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>

        <el-form-item label="内容" prop="content">
          <mavon-editor v-model="ruleForm.content"></mavon-editor>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

    </div>



  </div>
</template>
<script>

import {createOrUpdate,getBlogById} from '@/api/blog'
export default {
    // name: "BlogEdit.vue",
    // components: {Header},
    data() {
      return {
        ruleForm: {
          id: '',
          title: '',
          description: '',
          content: ''
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
          ],
          description: [
            { required: true, message: '请输入摘要', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const _this = this
        //     this.$axios.post('/blog/edit', this.ruleForm, {
        //       headers: {
        //         "Authorization": localStorage.getItem("token")
        //       }
        //     }).then(res => {
        //       console.log(res)
        //       _this.$alert('操作成功', '提示', {
        //         confirmButtonText: '确定',
        //         callback: action => {
        //           _this.$router.push("/blogs")
        //         }
        //       });
        //     })
        createOrUpdate(this.ruleForm).then(response=>{

            
          this.$message({
              showClose: true,
              message: '操作成功',
              type: 'success'
            });
          this.$router.push("/");


          }).catch(error=>{
            this.$message({
            showClose: true,
            message: '错了哦，这是一条错误消息',
            type: 'error'
          });
     });


          } else {
            console.log('error submit!!');
            return false;
           }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created() {
      let blogId = this.$route.params.blogId
      console.log(blogId)

      if(blogId){
        getBlogById(blogId). 
            then(response=>{
              let blogRes = response.data.data;
              this.ruleForm.id = blogRes.id;
              this.ruleForm.title = blogRes.title;
              this.ruleForm.description = blogRes.description;
              this.ruleForm.content = blogRes.content;
            
              }).catch(error=>{
                this.$message({
                showClose: true,
                message: '错了哦，这是一条错误消息',
                type: 'error'
              });
          });
     }
    }

  }
  </script>