<template>
  <div class="about">
  <app-nav></app-nav>
    <div class=ad-box @mouseenter='show =true' @mouseleave='show = true'>
        <h1 class="my-titl">个人简历</h1><br>
        <transition name='slide-fade'>
          <div id=ad v-show='show'>
           <Card>
            <div style="text-align:left">
                <h1 class="lef">基本资料</h1><br><br><br><hr><br>
                <p>姓 名：<b>屈自权</b></p>
                <p>政治面貌:  群众</p>
                <p>出生年月：1992.12.2 </p>
                <p>民 族：汉族</p>
                <p>性 别：男 </p>
                <p>学 历：<b>大学本科</b></p>
                <p>联系电话：<b>131-4825-9852</b></p>
                <p>电子邮件：<b>a2602176745@gmail.com</b></p>
                <p>个人网站：<b>http://www.quziquan.tk</b></p>
                <p>Github地址:<b><a>https://github.com/AA9999</a></b>
                <p>求职意向：web前端工程师 </p>
                </div>
            </Card>
            <Card>
            <div style="text-align:left">
                <h1 class="lef">自我评价</h1><br><br><hr>
                <li>大一开始接触并喜欢上H5开发</li>
                <li>自学能力强，容易接受并理解新知识、新事物。</li>
                <li> 具备信息技术和计算机网络方面的知识素养，具有熟练的计算机操作技能。</li>
                <li> 为人诚实守信，团结同学，做事勤奋、严肃认真，细心，有耐心。</li>
                <li> 为人诚实守信，团结同学，做事勤奋、严肃认真，细心，有耐心。</li>
                
            </div>
            </Card>
            <Card>
            <div style="text-align:left">
                <h1 class="lef">工作经验</h1><br><br><hr>
                <h2>2013.10-2014.12  周口师范学生会  网络信息采集</h2>
                <li>负责为学校网站通过摄影采集照片。</li>
                <li>熟练运用PHOTOSHOP编辑照片。</li>
                <li> 自学jaca,C语言并熟练掌握H5.CSS3.javascript。</li>
            </div>
            </Card>
            <Card>
            <div style="text-align:left">
                <h1 class="lef">社团活动</h1><br><br><hr>
                <h2>2013 2013年9月，作为网络技术部干事参与组织学校篮球赛。</h2>
                <li>2014年5月，作为学生会干部组织班集体拔河比赛。</li>
            </div>
            </Card>
            <Card>
            <div style="text-align:left">
                <h1 class="lef">技能证书</h1><br><br><hr>
                <li>通过CET4，能查阅技术类文档资料。</li>
                <li>普通话二甲证书，口语流利，善于交流。</li>
            </div>
            </Card>
            <Card>
            <div style="text-align:left">
                <h1 class="lef">教育背景</h1><br><br><hr>
                <h2>2013.9-2017.7   周口师范学院  学前教育专业   本科</h2>
                <li>◎  主要课程：计算机基础、大学英语、数据库基础及应用、动漫设计与制作、美术技法</li>
            </div>
            </Card>
          </div>
        </transition>
    </div>
  </div>
</template>

<script>
import AppNav from './Nav'
export default {
  name: 'about',
  data () {
    return {
      show:false,
    }
  },
  components: {
    'app-nav': AppNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
            width: 100%;
            height: 100%;
            text-align:center;
        }

.ad-box {
            width: 100%;
            height: 400px;
            position: fixed;
            text-align:center;
            
        }

#ad {
            width: 100%;
            height: 100%;
            background: pink;
            margin:0 auto;
        }

        .slide-fade-enter-active {
                    transition: all .3s ease;
          }
        .slide-fade-leave-active {
                      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
          }
         .slide-fade-enter, .slide-fade-leave-active {
                     transform: translateX(10px);
                      opacity: 0;
          }
.my-titl{
  font-size:400%;
  font-family:Impact, Charcoal, sans-serif;
  color:#00CCFF;
}
.lef{
  color:#00CCFF;
  float:left;
}   
hr{
  height:2px;
  color:#00CCFF;
  background-color:#00CCFF;
}       
</style>
