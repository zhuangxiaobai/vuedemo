<template>
  <div id="app">
    <el-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/notification">Notifacation</router-link>
    </div>
    <router-view /> -->
    <el-header>
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  @select="handleSelect" >
  <el-menu-item index="1">通知栏1</el-menu-item>
  <el-menu-item index="2">通知栏2</el-menu-item>
  <el-menu-item index="3">通知栏3</el-menu-item>
    </el-menu>
   </el-header>
   <el-main>
     
      <!-- <template v-if="activeIndex === '1'">
      <router-link to="/">Home</router-link> |
      </template>
      <template v-else-if="activeIndex === '2'">
      <router-link to="/about">About</router-link>
       </template>
      <template v-else-if="activeIndex === '3'">
      <router-link to="/notification">Notifacation</router-link>
      </template> -->

     <router-view /> 
   </el-main >
  
   

  </el-container>
  </div>
</template>


<script>
  export default {
    data() {
      return {
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

           this.$router.push("/notification");
       }


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

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
