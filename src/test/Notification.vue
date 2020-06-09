<template>
<div id="myCharts" ref="myCharts" style="height:800px;width:100%;"></div>
</template>

<script>
  export default {
    data(){
     return {
         warnListIndex: 0,   //预警集合的下标
         warnList: [    //用来存放返回的预警数据集合
         {             
            message:'上海mcc异常'
         },
         {

           message:'北京mcc异常'
         }
         ]  

        }    
       
    },
    methods: {
      initEcharts:function(){
          

      },
      open2:async function (){
        
          for(var i=0;i<this.warnList.length;i++){

            await this.$notify({
             title: '警告',
             message: this.warnList[i].message,
             type: 'warning',
             duration: 0, 
             onClick(){
              //点击通知栏目会跳转到折线图 

             alert("ddd");

          }
         });


         }


     

       

      }
       
    },
    mounted() {
        this.$nextTick(() => {
                 // 以下三步即可完成echarts的初始化使用,代码注释的详解别忘了看看
       const  myCharts = this.$echarts.init(this.$refs.myCharts);
       let options = {
          title: { 
             text: '未来一周气温变化',   //图表顶部的标题 
             subtext: '纯属虚构'    //副标题
          },
          tooltip: {   //鼠标悬浮框的提示文字
              trigger: 'axis'
            },
          legend: {
            data:['最高气温','最低气温']
          },
          xAxis : [{  //x轴坐标数据
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
            }],
           yAxis : [{   //y轴坐标数据
              type : 'value',
              axisLabel : {
                formatter: '{value} °C'
              }
            }],
          series: [  //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
            {
              name:"最高气温",
              type: "line",  //pie->饼状图  line->折线图  bar->柱状图
              data:[11, 11, 15, 13, 12, 13, 10], 
              },
            {
              name:"最低气温",
              type: "line",  //pie->饼状图  line->折线图  bar->柱状图
              data:[1, -2, 2, 5, 3, 2, 0],
              }
          ]}

         myCharts.setOption(options);

          this.open2();



        })

     

        
     
         

       


       
        
       
        
    }






  }
</script>