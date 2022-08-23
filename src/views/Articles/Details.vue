<template>
  <div class="details">
    <Header :light-index="1"></Header>
    <div class="toc-fixed">
      <mu-card class="card">
        <div class="toc">
          <div class="title">文章目录</div>
          <div><a href="">标题1</a></div>
          <div><a href="">标题2</a></div>
        </div>
      </mu-card>
      <div class="action" :class="toc.length > 0?'':'noContents'">
        <mu-tooltip placement="top" content="点赞">
          <mu-button fab color="primary">
            <mu-icon value="thumb_up"></mu-icon>
          </mu-button>
        </mu-tooltip>
        <mu-tooltip placement="top" content="收藏">
          <mu-button fab color="purple500">
            <mu-icon value="grade"></mu-icon>
          </mu-button>
        </mu-tooltip>
        <mu-tooltip placement="top" content="评论">
          <mu-button fab color="red">
            <mu-icon value="chat"></mu-icon>
          </mu-button>
        </mu-tooltip>
      </div>
    </div>
    <div class="content">
      <div class="right">
        <RightConfig></RightConfig>
      </div>
      <div class="left">
        <div class="left-box">
          <mu-card class="card">
            <mu-card-title :title="info.title" :sub-title="info.introduction"></mu-card-title>
            <mu-card-media>
              <img v-lazy="info.cover" style="height: 100%;" alt="">
            </mu-card-media>
            <mu-card-actions class="sub-title">
              <mu-button class="cursor-default" flat color="warning">字数（1000）</mu-button>
              <mu-button class="cursor-default" flat color="secondary">阅读大约2分钟</mu-button>
              <mu-button class="cursor-default" flat color="info">查看（1000）</mu-button>
              <mu-button class="cursor-default" flat color="error">评论（1000）</mu-button>
              <mu-button class="cursor-default" flat color="primary">点赞（1000）</mu-button>
              <mu-button class="cursor-default" flat color="#9e9e9e">2022-08-22 20:30</mu-button>
            </mu-card-actions>
            <mavon-editor
              v-model="content"
              defaultOpen="preview"
              :toolbarsFlag="false"
              :subfield="false"
              :navigation="true"
              codeStyle="tomorrow-night-eighties" />
            <mu-card-actions>
              <mu-button class="cursor-default" flat color="primary">
                <mu-icon left value="dns"></mu-icon>分类
              </mu-button>
              <mu-button class="cursor-default" flat>
                <mu-icon left value="loyalty"></mu-icon>Vue
              </mu-button>
              <mu-button class="cursor-default" flat>
                <mu-icon left value="loyalty"></mu-icon>React
              </mu-button>
            </mu-card-actions>
          </mu-card>
          <div class="action-list">
            <mu-tooltip placement="top" content="点赞">
              <mu-button fab color="primary">
                <mu-icon value="thumb_up"></mu-icon>
              </mu-button>
            </mu-tooltip>
            <mu-tooltip placement="top" content="收藏">
              <mu-button fab color="purple500">
                <mu-icon value="grade"></mu-icon>
              </mu-button>
            </mu-tooltip>
          </div>
          <mu-card class="card" id="comment">
            <Comment @comment="comment" :commentSuccess="commentSuccess"></Comment>
          </mu-card>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RightConfig from "@/components/RightConfig";
import Comment from "@/components/Comment";
import {markdown} from "@/utils/markdown";
import Clipboard from 'clipboard'

export default {
  name: "articlesDetails",
  components: {
    Header,
    Footer,
    RightConfig,
    Comment,
  },
  data(){
    return {
      info:{
        title:'使用jspdf+canvas2html将网页保存为pdf文件',
        introduction:'1234567890',
        cover:require('@/assets/photo.png')
      },
      toc:[],
      content:'',
      commentSuccess: false,
    }
  },
  mounted() {
    this.content = markdown(this.mavonEditor, '在前端开发中， html 转 pdf 是最常见的需求，实现这块需求的开发[html2canvas](http://html2canvas.hertzen.com/)和 [jspdf](http://mozilla.github.io/pdf.js/getting_started/) 是最常用的两个插件，插件都是现成的。\\n### 1.安装\\n### 2.使用 \\n ```js \\n console.log(123); \\n```')
    this.$nextTick(()=>{
      let clipboard = new Clipboard('.copy-btn')
      clipboard.on('success',()=>{
        this.$toast.success('复制成功')
      })
      clipboard.on('error',()=>{
        this.$toast.success('复制失败')
      })
    })
  },
  methods:{
    comment(data){
      console.log('评论数据',data)
      this.commentSuccess = true
    }
  }
}
</script>

<style lang="less" scoped>
.details {
  padding-top: 64px;
}

.toc-fixed {
  position: fixed;
  width: 20%;
  right: 20px;
  top: 80px;
  .toc {
    width: 100%;
    max-height: 400px;
    overflow-y: auto;
    word-break: break-all; //强制英文单词断行
    padding: 0.2rem 0 0.2rem 0.2rem;
    .title {
      font-size: 0.4rem;
      margin-bottom: 10px;
    }
    a {
      display: inline-block;
      color: #2196f3;
      font-size: 0.32rem;
      cursor: pointer;
      padding: 5px 0;
      &:hover {
        color: #00e676;
      }
    }
  }
}

.action-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.42667rem 0;
}
.action {
  margin-top: 0.42667rem;
  display: flex;
  justify-content: space-around;
}
.noContents {
  flex-direction: column;
  align-items: center;
  height: 400px;
}

.content {
  padding-bottom: 0.53333rem;
  display: flex;
  .left {
    flex: 9;
    margin-top: 16px;
    .card {
      border-radius: 5px;
      margin-bottom: 0.48rem;
      .article-detail {
        width: 100%;
        padding: 0.42667rem 0.42667rem 0.42667rem 0.69333rem;
        box-sizing: border-box;
        word-break: break-all;
      }
      .sub-title {
        display: flex;
        flex-wrap: wrap;
      }
      .text {
        padding: 0 0.42667rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      .chip {
        margin-right: 0.26667rem;
      }
      .cover {
        flex: 1;
        border-radius: 0;
        padding: 0.42667rem;
        .cover-img {
          object-fit: cover;
          width: 100%;
          height: 4.26667rem;
          vertical-align: middle;
        }
      }
      .card-box {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
  }
  .right {
    flex: 3;
    display: flex;
    justify-content: center;
  }
}
@media screen and (min-width: 750px) {
  .cover{
    display: block;
  }
  .left{
    margin-top: 16px;
  }
  .right{
    display: block;
  }
  .toc-fixed{
    display: block;
  }
  .left-box{
    width: 70%;
  }
}
@media screen and (max-width: 750px) {
  .cover{
    display: none;
  }
  .left{
    margin-top: 0;
  }
  .right{
    display: none;
  }
  .toc-fixed{
    display: none;
  }
  .left-box{
    width: 100%;
  }
}
</style>