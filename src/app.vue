<template>
    <div id="app">
    <div class="main">
     <!-- 路由匹配到的组件将渲染在这里 -->
       <keep-alive><router-view></router-view></keep-alive>
     </div>
  </div>
</template>
<script>

    export default {
        name: 'app',
        data () {
            
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
<style scoped>
    @import 'styles/common.css'; 
.main{
    height: 720px;
    text-align:center;
    margin:0 auto;
}

</style>