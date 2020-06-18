<template>
  <div>
    <!-- <Header></Header> -->

    <div class="mblog">
      <h2> {{ blog.title }}</h2>
      <el-link icon="el-icon-edit" v-if="ownBlog">
        <router-link :to="{name: 'BlogEditor', params: {blogId: blog.id}}" >
        编辑
        </router-link>
      </el-link>
      <el-divider></el-divider>
      <div class="markdown-body" v-html="blog.content"></div>

    </div>

  </div>
</template>

<script>
  import 'github-markdown-css'
  import { getBlogById } from '@/api/blog'
  export default {
    data() {
      return {
        blog: {
          id: "",
          title: "",
          content: ""
        },
        ownBlog: false
      }
    },
    created() {
      let blogId = this.$route.params.blogId;
      console.log(blogId);

      getBlogById(blogId). 
          then(response=>{
            let blogRes = response.data.data;
            this.blog.id = blogRes.id;
            this.blog.title = blogRes.title;

            let MardownIt = require("markdown-it");
            let md = new MardownIt();
            let result = md.render(blogRes.content);

            this.blog.content = result;
            
            this.ownBlog = true;
            }).catch(error=>{
              this.$message({
              showClose: true,
              message: '错了哦，这是一条错误消息',
              type: 'error'
            });
        });
     



    }
  }
</script>

<style scoped>
  .mblog {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    min-height: 700px;
    padding: 20px 15px;
  }
</style>