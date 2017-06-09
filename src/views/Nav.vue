<template>
    <div class="nav">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <router-link to="/about" style="color:white">我的爱好</router-link> |
                <router-link to="/about" style="color:white">我的简历</router-link> |
                <router-link to="/hello" style="color:white">我的日记</router-link> |    
            </div>
             <div class="nav-left"><router-link to="/home" style="color:white">首页</router-link></div>
        </div>       
    </div>    
</template>  
<script>
    export default {
        name: 'nav',
        data () {
            
        }
    }
</script>  
<style scoped>
.nav{
        width:93%;
        border: 5px solid #e9eaec;
        background: #f5f7f9;
        position: relative;
        border-radius: 17px;
        overflow: hidden;
        margin:0 auto;
    }
    
    
    .layout-ceiling{
        background: #FE007F;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 16px;
    }
    .nav-left{
    margin-left: 15px;
    float: left;
    }
    .layout-ceiling-main h6 a{
        color: #9ba7b5;
    }
</style>        