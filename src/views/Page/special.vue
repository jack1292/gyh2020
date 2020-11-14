<template>
  <div class="special-list">
    <router-link to="/Content/special1" class="special-item">
      <img src="../../assets/img/special1.jpg" alt="">
      <div>
        <p>党的建设专题</p>
        <span>点击查看</span>
      </div>
    </router-link>
    <router-link to="/Content/special2" class="special-item">
      <img src="../../assets/img/special2.jpg" alt="">
      <div>
        <p>脱贫攻坚专题</p>
        <span>点击查看</span>
      </div>
    </router-link>
    <router-link to="/Content/special5" class="special-item">
      <img src="../../assets/img/special5.jpg" alt="">
      <div>
        <p>防控疫情专题</p>
        <span>点击查看</span>
      </div>
    </router-link>
    <router-link to="/Content/special4" class="special-item">
      <img src="../../assets/img/special4.jpg" alt="">
      <div>
        <p>公益慈善与志愿服务专题</p>
        <span>点击查看</span>
      </div>
    </router-link>
    
    <router-link to="/Content/special6" class="special-item">
      <img src="../../assets/img/special6.jpg" alt="">
      <div>
        <p>基层社会治理</p>
        <span>点击查看</span>
      </div>
    </router-link>
    <router-link to="/Content/special7" class="special-item">
      <img src="../../assets/img/special7.jpg" alt="">
      <div>
        <p>行业治理专题</p>
        <span>点击查看</span>
      </div>
    </router-link>
    <router-link to="/Content/special8" class="special-item">
      <img src="../../assets/img/special8.jpg" alt="">
      <div>
        <p>科技创新专题</p>
        <span>点击查看</span>
      </div>
    </router-link>
   
    <router-link to="/Content/special9" class="special-item">
      <img src="../../assets/img/special9.jpg" alt="">
      <div>
        <p>对外交流交往专题</p>
        <span>点击查看</span>
      </div>
    </router-link>
     <router-link to="/Content/special3" class="special-item">
      <img src="../../assets/img/special3.jpg" alt="">
      <div>
        <p>社会心理专题</p>
        <span>点击查看</span>
      </div>
    </router-link>
    <router-link to="/Content/special10" class="special-item">
      <img src="../../assets/img/special10.jpg" alt="">
      <div>
        <p>文化建设专题</p>
        <span>点击查看</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "special"
}
</script>

<style scoped lang="scss">
.special-list{
  background: #f1f1f1;
  padding: 40px;
  .special-item{
    display: block;
    border-radius: 10px ;
    background: #fff;
    overflow: hidden;
    margin-bottom: 20px;
    img{
      display: block;
      width: 100%;
    }
    div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      p{
        font-size: 28px;
      }
      span{
        display: block;
        width: 143px;
        height: 42px;
        text-align: center;
        line-height: 40px;
        border-radius: 21px;
        border: solid 1px #999999;
      }
    }
  }
}
</style>