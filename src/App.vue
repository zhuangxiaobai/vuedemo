<template>
  <div id="app">
    <el-container>
    <el-header>

      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  @select="handleSelect" >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">关于</el-menu-item>
      <el-menu-item index="3">友链</el-menu-item>
      <li  class="el-menu-item my-menu-li" >
        <el-input  prefix-icon="el-icon-search"  v-model="input" placeholder="我是搜索框"></el-input>
        <i  class="el-icon-search" @click="search()"></i>
      </li>
   

      </el-menu>
   
   </el-header>
   <el-main>
     
       <template v-if="activeIndex === '1'">
      <router-link to="/"></router-link> 
      </template>
      <template v-else-if="activeIndex === '2'">
      <router-link to="/about"></router-link>
       </template>
      <template v-else-if="activeIndex === '3'">
      <router-link to="/friend"></router-link>
      </template> 

     <router-view /> 
   </el-main >
  
   
  <el-footer>
       <div  class="footer-div" text-align="center">
         <span>庄发财的个人博客</span>
         <span>谢谢访问</span>
       </div>
  </el-footer>
  </el-container>


  </div>
</template>


<script>
  export default {
    data() {
      return {
        input:'',
        activeIndex: '1'
        
      };
    },
  methods: {
      handleSelect(index) {
          this.$set(this,"activeIndex",index);
        //  console.log(index);
          if(index === '1'){
              this.$router.push("/");

          }else if(index === '2'){
              this.$router.push("/about");

          }else if(index === '3'){

              this.$router.push("/friend");
          }


      },
      search(){
        console.log("test search");
      }
    }
  }
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
//菜单栏的搜索框定义一些样式
.my-menu-li{

     float: right !important;
     margin-right: 5% !important;

}
//对菜单栏下的i标签定义一些样式
.el-menu-item i{
    padding-left:3%;
}
//设置一下页脚下面的span让他们成为块级元素换行
.footer-div span{
    display: block;

}


</style>
