<template>
  <div class="common" :style="{background:`url(${categoryDetailBg}) center center no-repeat`,backgroundSize:'cover'}">
    <Header :light-index="3" background="transparent"></Header>
    <div class="PC-footer">
      <Footer fixed></Footer>
    </div>
    <div class="content mobile-content">
      <mu-paper class="pc-box" :z-depth="5">
        <mu-list>
          <div class="sub-title">分类-技术（100）</div>
          <mu-list-item button>
            <mu-list-item-title class="item">
              <span class="title">文章标题</span>
              <span>2022-08-20 20:30</span>
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <div class="pagination">
          <mu-pagination raised circle :total="100" :current.sync="currentPage" :page-size.sync="pageSize"></mu-pagination>
        </div>
      </mu-paper>
      <div class="mobile-box">
        <mu-list>
          <div class="sub-title">分类-技术（100）</div>
          <mu-list-item button>
            <mu-list-item-title class="item">
              <span class="title">文章标题</span>
              <span>2022-08-20 20:30</span>
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <div class="mobile-footer">
          <Footer></Footer>
        </div>
      </div>
      <mu-button class="mobile-backBtn" small fab color="#fff" @click="$router.go(-1)">
        <mu-icon color="#ccc" value="arrow_back"></mu-icon>
      </mu-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "categoriesDetails",
  components:{
    Header,
    Footer,
  },
  data(){
    return{
      categoryDetailBg: require('@/assets/categoryBg.png'),
      currentPage: 1,
      pageSize: 15,
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (min-width: 750px){
  .PC-footer{
    display: block;
  }
  .mobile-footer,
  .mobile-backBtn{
    display: none;
  }
  .content{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 64px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
}
@media screen and (max-width: 750px){
  .PC-footer{
    display: none;
  }
  .mobile-footer,
  .mobile-backBtn{
    display: block;
  }
  // 移动端返回上一页
  .mobile-backBtn {
    position: fixed;
    left: 10px;
    top: 50%;
  }
  .mobile-content{
    position: absolute;
    top: 56px;
    bottom: 0;
    overflow: auto;
    width: 100%;
    padding-top: 20px;
  }
}
</style>