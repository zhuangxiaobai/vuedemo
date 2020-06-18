<template>
<div>
    <el-row>
        <el-col class="big-title">
            <h3>庄发财的Blog</h3>
            <!-- <el-divider></el-divider> -->
        </el-col>
    
    <el-col v-for="(blog,index) in blogList" :key="index">  

        <!-- <el-link>{{blog.bigTitle}}<i class="el-icon-view el-icon--right"></i> </el-link>
        <span style="display:block">{{blog.smallTitle}}</span>
        <span style="display:block">{{blog.blogContent}}</span>
        <el-divider></el-divider> -->
        
          <el-card>
            <h4>
              <router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">
                {{blog.title}}
              </router-link>
            </h4>
            <p>{{blog.description}}</p>
          </el-card>

    </el-col>


    
   
    </el-row>
    <el-row>
        <div class="block">
        <span class="demonstration"></span>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total">
        </el-pagination>
        </div>
    </el-row>
    </div>
</template>
    
<script>
import { getBlogList } from '@/api/blog'
export default {
    data(){
       return{
 
          blogList:[            
            // {
            //   bigTitle:'博文标题1',
            //   smallTitle:'博文副标题1',
            //   blogContent:'博文内容1',
            //   createTime:'2020-05-11'
            // },
            // {
            //   bigTitle:'博文标题2',
            //   smallTitle:'博文副标题2',
            //   blogContent:'博文内容2',
            //   createTime:'2020-05-12'
            // },
            // {
            //   bigTitle:'博文标题3',
            //   smallTitle:'博文副标题3',
            //   blogContent:'博文内容3',
            //   createTime:'2020-05-13'
            // },
            // {
            //   bigTitle:'博文标题4',
            //   smallTitle:'博文副标题4',
            //   blogContent:'博文内容4',
            //   createTime:'2020-05-14'
            // }

          ],
          currentPage: 1,
          pageSize:10,
          total: 0,

       }
    },
    methods:{
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
        handleCurrentChange(currentPage) {
      
          getBlogList({currentPage:this.currentPage,pageSize:this.pageSize})
            .then(response=>{
                
              this.$set(this,'total',response.data.data.total);
              this.$set(this,'blogList',response.data.data.list);


            }).catch(error=>{
              this.$message({
              showClose: true,
              message: '错了哦，这是一条错误消息',
              type: 'error'
            });
        });






      }


    },
   created() {
      this.handleCurrentChange(1)
    }


}
</script>
<style lang="scss">
//定义一下大标题的css
.big-title {
    
    font-family: "Helvetica Neue";
    font-size:30px;

}
</style>