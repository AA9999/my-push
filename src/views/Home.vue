<template>
  <div class="about">
  
    <div class="header">
    <Carousel v-model="value1" autoplay>
        <Carousel-item>
            <div class="demo1"><img class="p1" src="../images/1.jpg"></div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo2"><img class="p2" src="../images/2.jpg"></div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo3"><img class="p3" src="../images/3.jpg"></div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo4"><img class="p4" src="../images/4.jpg"></div>
        </Carousel-item>
    </Carousel>
    </div>
      <app-nav></app-nav>
      <app-author></app-author>
  </div>
</template>

<script>
import AppNav from './Nav'
import AppAuthor from './Author'
export default {
  name: 'about',
  data () {
    return {  
            
    }
  },
  components: {
    'app-nav': AppNav,
    'app-author': AppAuthor
  }
}
</script>
<style scoped>
.about{
  text-align:center;
  background:pink;
  margin:0 auto;

}
.header{
  height:600px;
  width:100%;
  text-align:center;
  margin:0 auto;
}
.demo1 demo2 demo3 demo4{
  height:600px;
  width:100%;
  text-align:center;
  margin:0 auto;
}
.demo1 img{height:600px;width:100%;}
.demo2 img{height:600px;width:100%;}
.demo3 img{height:600px;width:100%;}
.demo4 img{height:600px;width:100%;}
.paper{
  font-family: "Helvetica Neue"
}

</style>
