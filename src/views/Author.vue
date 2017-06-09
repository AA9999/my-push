<template>
<div class="author">
<div class="banner">
<div v-for='a in author' class='item'>
<div class="msg">
<img :src="setAutherSrc(a.src)"/>
<span class="name">{{a.name}}</span>
<span class="slogan">{{a.slogan}}</span>
</div>
</div>
</div>
</div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  computed: mapState({
    author: state => state.AuthorStore.author
  }),
   methods: {
    setAutherSrc (src) {
      return src
    },
    setOtherSrc (src) {
      return src
    }
  }
}
</script>
<style>
.author{
  background: pink;
  border-right: 1px solid #666;}
.item{
      height: 10px;
      width: 20%;
      margin: 1%;
      color: dark;
      opacity: 0.9;
      display: inline-block;
      text-align: center;
      background: pink;}
.msg{
        display: flex;
        flex-direction: column;
        background: pink;
        padding: 10px 0;
        justify-content: space-around;
        align-items: center;}
img{
          height: 200px;
          width: 200px;
        }
.name{
          margin: 0 auto;
        }
 .slogan{
          color: dark;
          width: 80%;
          font-size: 13px;
          overflow: hidden;
          
        }       
</style>