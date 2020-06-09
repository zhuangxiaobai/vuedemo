<template>
    <el-row>
        <el-col>
            <span>庄发财的Blog</span>
        </el-col>
    
    <el-col v-for="(item,index) in blogList" :key="index">  
        <el-link>{{item.bigTitle}}<i class="el-icon-view el-icon--right"></i> </el-link>
        
        {{item.smallTitle}}
        {{item.blog}}
    </el-col>




    </el-row>
    
</template>
    
<script>
export default {
    data(){
       return{
 
          blogList:[             
            {
              bigTitle:'diyige',
              smallTitle:'ddd',
              blog:{}
            },
            {
              bigTitle:'feffw',
              smallTitle:'veffes',
              blog:{}
            },
            {
              bigTitle:'gvewvcwe',
              smallTitle:'rbrberbeverv',
              blog:{} 
            },
            {
              bigTitle:'xqwdqwewvewvw',
              smallTitle:'brebrnynnytnumt',
              blog:{}
            }

          ]

       }
    },
    methods:{


    },
    mounted(){

    }


}
</script>