<template>
  <div class="header">
    <mu-appbar :color="background">
<!--       昵称-->
<!--      <span style="cursor: pointer">liugaorong</span>-->
<!--       头像-->
      <mu-avatar slot="left" :size="50" class="header-avatar">
        <img src="https://avatars.githubusercontent.com/u/100412666?s=400&u=3c51eadc7ed230e91353fc3362735fdab5327dd8&v=4" alt="">
      </mu-avatar>
<!--       tab栏-->
      <mu-button @click="go(item)" class="tab" flat slot="right" v-for="(item,index) in info.menu" :key="item.name" :color="lightIndex===index?'#00e676':''">
        <mu-icon size="16" :value="item.icon"></mu-icon>
        {{item.name}}
      </mu-button>
<!--      移动端菜单-->
      <mu-button class="mobileMenu" slot="left" icon @click="toggleMobileMenu(true)">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <mu-bottom-sheet class="mobileMenu" :open.sync="openMobileMenu">
        <mu-list @item-click="toggleMobileMenu(false)">
          <mu-list-item @click="go(item)" button v-for="(item,index) in info.menu" :key="item.name">
            <mu-list-item-action>
              <mu-icon :value="item.icon" :color="lightIndex===index?'#00e676':''"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title :style="{color:lightIndex===index?'#00e676':''}">{{ item.name }}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-bottom-sheet>
<!--       主题切换-->
      <mu-button flat ref="theme" slot="right" @click="openTheme = !openTheme">
        <mu-icon value="color_lens"></mu-icon>
      </mu-button>
      <mu-popover :open.sync="openTheme" :trigger="triggerTheme">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>Light</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Dark</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>
<!--       用户操作-->
      <mu-button flat ref="user" slot="right" @click="openUser = !openUser">
        <span>liugaorong</span>
        <mu-icon value="expand_more"></mu-icon>
      </mu-button>
      <mu-popover :open.sync="openUser" :trigger="triggerUser">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>个人中心</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>退出登录</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>
<!--      <mu-menu slot="right">-->
<!--        <mu-button flat>MENU</mu-button>-->
<!--        <mu-list slot="content">-->
<!--          <mu-list-item button>-->
<!--            <mu-list-item-content>-->
<!--              <mu-list-item-title>Menu Item 1</mu-list-item-title>-->
<!--            </mu-list-item-content>-->
<!--          </mu-list-item>-->
<!--          <mu-list-item button>-->
<!--            <mu-list-item-content>-->
<!--              <mu-list-item-title>Menu Item 2</mu-list-item-title>-->
<!--            </mu-list-item-content>-->
<!--          </mu-list-item>-->
<!--        </mu-list>-->
<!--      </mu-menu>-->
    </mu-appbar>
  </div>
</template>

<script>
const menus = [
  {
    name: "首页",
    router: "index",
    icon: "home",
  },
  {
    name: "文章",
    router: "articles",
    icon: "note_add",
  },
  {
    name: "归档",
    router: "archives",
    icon: "drafts",
  },
  {
    name: "分类",
    router: "categories",
    icon: "dns",
  },
  {
    name: "标签",
    router: "tags",
    icon: "loyalty",
  },
  {
    name: "关于",
    router: "about",
    icon: "perm_identity",
  },
];
export default {
  props:{
    // 选中tab高亮
    lightIndex:{
      type: Number,
      default: 0,
    },
    // 背景色
    background:{
      type: String,
    }
  },
  data(){
    return {
      info: {
        menu: menus
      },
      openTheme: false,
      triggerTheme: null,
      openUser: false,
      triggerUser: null,
      openMobileMenu: false,
    }
  },
  mounted () {
    this.triggerTheme = this.$refs.theme.$el;
    this.triggerUser = this.$refs.user.$el;
  },
  methods:{
    // 切换移动端
    toggleMobileMenu(bool){
      this.openMobileMenu = bool
    },
    // 路由跳转
    go(item){
      // 点击相同路由不跳转
      if(this.$route.name === item.router) return
      this.$router.push({
        name: item.router
      })
    },
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  z-index: 1501;
  width: 100%;
  top: 0;
  .header-avatar {
    margin-left: 20px;
    cursor: pointer;
  }
}
@media screen and (max-width: 750px){
  .tab{
    display: none;
  }
}
@media screen and (min-width: 750px){
  .mobileMenu{
    display: none;
  }
}
</style>