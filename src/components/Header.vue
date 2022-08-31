<template>
  <div class="header">
    <mu-appbar :color="background">
<!--       昵称-->
<!--      <span style="cursor: pointer">liugaorong</span>-->
<!--       头像-->
      <mu-avatar slot="left" :size="40" class="header-avatar">
        <img src="https://avatars.githubusercontent.com/u/100412666?s=400&u=3c51eadc7ed230e91353fc3362735fdab5327dd8&v=4" title="liugaorong" alt="liugaorong">
      </mu-avatar>
<!--       tab栏-->
      <mu-button @click="go(item)" class="tab" flat slot="right" v-for="(item,index) in info.menu" :key="item.name" :color="lightIndex===index?'#2195f2':''">
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
              <mu-icon :value="item.icon" :color="lightIndex===index?'#2195f2':''"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title :style="{color:lightIndex===index?'#2195f2':''}">{{ item.name }}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-bottom-sheet>
<!--       主题切换-->
      <mu-button flat ref="theme" slot="right" @click="openTheme = !openTheme">
        <mu-icon value="color_lens"></mu-icon>
      </mu-button>
      <mu-popover :open.sync="openTheme" :trigger="triggerTheme">
        <mu-list>
          <mu-list-item button @click="toggleTheme('selfLight')">
            <mu-list-item-title>
              <mu-icon :color="myTheme === 'selfLight' ? 'primary' : ''" value="brightness_7"></mu-icon>
            </mu-list-item-title>
          </mu-list-item>
          <mu-list-item button @click="toggleTheme('selfDark')">
            <mu-list-item-title>
              <mu-icon :color="myTheme === 'selfDark' ? 'primary' : ''" value="brightness_4"></mu-icon>
            </mu-list-item-title>
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
          <mu-list-item button @click="$router.push({name: 'user'})">
            <mu-list-item-title>个人中心</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>退出登录</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>
    </mu-appbar>
    <!-- 搜索按钮 -->
    <div class="tool" v-if="isShowAction">

      <!-- 如果用户已经登录了那就不展示登录和注册按钮 !user 控制 -->
      <div v-if="info.login && !user" class="tool-row">
        <mu-slide-left-transition>
          <mu-button
            v-show="showToolBtn"
            @click="
              openLoginModal = true;
              showToolBtn = false;
            "
            fab
            color="primary"
          >登录</mu-button
          >
        </mu-slide-left-transition>
      </div>
      <div class="tool-row">
        <mu-tooltip placement="right" content="登录/注册/搜索">
          <mu-button
            @click="showToolBtn = !showToolBtn"
            fab
            color="info"
            class="search-fab"
          >
            <mu-icon value="adb"></mu-icon>
          </mu-button>
        </mu-tooltip>

        <mu-slide-left-transition>
          <mu-button
            v-show="showToolBtn && info.openSearch"
            @click="
              openSearchModal = true;
              showToolBtn = false;
            "
            fab
            color="error"
          >搜索</mu-button
          >
        </mu-slide-left-transition>
      </div>

      <!-- 如果用户已经登录了那就不展示登录和注册按钮 !user 控制 -->
      <div v-if="info.register && !user" class="tool-row">
        <mu-slide-left-transition>
          <mu-button
            v-show="showToolBtn"
            @click="
              openRegisterModal = true;
              showToolBtn = false;
            "
            fab
            color="warning"
          >注册</mu-button
          >
        </mu-slide-left-transition>
      </div>
    </div>

    <RegisterForm
      :open="openRegisterModal"
      @toggle="toggleRegisterModal"
    ></RegisterForm>
    <LoginForm
      :open="openLoginModal"
      @toggle="toggleLoginModal"
    ></LoginForm>
    <SearchForm
      :open="openSearchModal"
      @toggle="toggleSearchModal"
    ></SearchForm>
    <mu-slide-bottom-transition>
      <mu-tooltip placement="top" content="返回顶部">
        <mu-button v-show="showBackTop" @click="scrollTop" class="back-top" fab color="secondary">
          <mu-icon value="arrow_upward"></mu-icon>
        </mu-button>
      </mu-tooltip>
    </mu-slide-bottom-transition>
  </div>
</template>

<script>
const menus = [
  {
    name: "首页",
    router: "home",
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
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import SearchForm from "@/components/SearchForm";
export default {
  components:{
    RegisterForm,
    LoginForm,
    SearchForm,
  },
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
  computed: {
    isShowAction() {
      return !(
        !this.info.openSearch &&
        !this.info.register &&
        !this.info.login
      );
    },
  },
  data(){
    return {
      openUser: false,
      openTheme: false,
      openMobileMenu: false,
      triggerUser: null,
      trigger: null,
      triggerTheme: null,

      info: {
        menu: menus,
        login: true, // 是否开启登录
        openSearch: true,// 是否开启搜索
        register: true,// 是否开启注册
      },
      showToolBtn: false, // 点击切换显示操作按钮
      user: JSON.parse(localStorage.getItem("user")), // 用户信息

      openSearchModal: false, // 打开搜索弹框
      openLoginModal: false, // 打开登录弹框
      openRegisterModal: false, // 打开注册弹框

      showBackTop:false,

      myTheme: '',
    }
  },
  mounted () {
    this.triggerTheme = this.$refs.theme.$el;
    this.triggerUser = this.$refs.user.$el;
    window.onscroll=()=>{
      if (document.documentElement.scrollTop + document.body.scrollTop > 100){
        this.showBackTop = true
      }else{
        this.showBackTop = false
      }
    }

    const hours = new Date().getHours()
    let defaultTheme = ''
    if (hours >= 8 && hours <= 18){
      defaultTheme = 'selfLight'
    }else {
      defaultTheme = 'selfDark'
    }
    this.myTheme = localStorage.getItem('theme') || defaultTheme
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
    toggleRegisterModal(bool) {
      this.openRegisterModal = bool;
    },
    toggleLoginModal(bool) {
      this.openLoginModal = bool;
    },
    toggleSearchModal(bool) {
      this.openSearchModal = bool;
    },
    scrollTop(){
      document.body.scrollIntoView({
        block:'start',
        behavior:'smooth'
      })
    },
    toggleTheme(myTheme){
      this.theme.use(myTheme)
      this.myTheme = myTheme
      localStorage.setItem('theme',myTheme)
      this.openTheme = false
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
    transform: scale(1.0);
    transition: all 0.2s;
    &:hover {
      transform: scale(1.3);
      transition: all 0.2s;
    }
  }
}
.tool{
  position: fixed;
  left: 0;
  bottom: 2.66667rem;
  .tool-row{
    margin-top: 20px;
    height: 56px;
    .search-fab{
      margin-left: -28px;
      margin-right: 20px;
    }
  }
}
.back-top{
  position: fixed;
  right: 0.266667rem;
  bottom: 0.4rem;
  background: #595959;
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