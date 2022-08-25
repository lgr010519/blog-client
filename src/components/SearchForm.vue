<template>
  <div>
    <mu-dialog :fullscreen="!isPC" width="60%" :open.sync="openModal">
      <slot name="title">
        <mu-auto-complete
          action-icon="search"
          label-float
          :data="keywords"
          label="文章搜索"
          :max-search-results="20"
          v-model="keyword"
          open-on-focus
          avatar
          full-width
          @change="handleSearch"
          :action-click="handleSearch"
        >
          <template slot-scope="scope">
            <mu-list-item-action>
              <mu-avatar color="primary">{{scope.item.substring(0, 1)}}</mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content v-html="scope.highlight"></mu-list-item-content>
          </template>
        </mu-auto-complete>
      </slot>
      <div v-if="list && list.length === 0" class="no-content">暂无内容</div>

      <mu-list v-else class="list" textline="two-line">
        <mu-list-item :key="item._id" v-for="item in list" button @click="goDetail(item)">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="item.cover" />
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{item.title}}</mu-list-item-title>
            <mu-list-item-sub-title>
              <span>{{item.introduction}}</span>
            </mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action style="min-width:140px;">{{item.createTime | filterDate}}</mu-list-item-action>
        </mu-list-item>
      </mu-list>

      <mu-button v-if="!isPC" class="close" icon @click="clear(false)">
        <mu-icon value="close"></mu-icon>
      </mu-button>
    </mu-dialog>
  </div>
</template>
<script>
export default {
  props: ["open"],
  computed: {
    openModal: {
      get() {
        return this.open;
      },
      set(val) {
        this.clear(val);
      }
    }
  },
  data() {
    return {
      keywords: [
        'Apple', 'Apricot', 'Avocado',
        'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
        'Boysenberry', 'Blood Orange',
        'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
        'Coconut', 'Cranberry', 'Clementine',
        'Damson', 'Date', 'Dragonfruit', 'Durian',
        'Elderberry',
        'Feijoa', 'Fig',
        'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
        'Honeydew', 'Huckleberry',
        'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
        'Kiwi fruit', 'Kumquat',
        'Lemon', 'Lime', 'Loquat', 'Lychee',
        'Nectarine',
        'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
        'Olive', 'Orange',
        'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
        'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
        'Quince',
        'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
        'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
        'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
        'Ugli fruit',
        'Watermelon'
      ],
      keyword: "",
      list: [{
        categories: "技术",
        collect: 0,
        comment: 0,
        content:
          "### 1.toRefs↵把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref↵↵`应用`: ",
        cover: "http://nevergiveupt.top/vue/vue_composition_api.jpeg",
        createTime: 1611739740,
        introduction:
          "toRefs把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref ，和响应式对象 property 一一对应。",
        isCollect: true,
        isComment: true,
        isLike: true,
        isReward: false,
        like: 0,
        publishStatus: 1,
        sort: 0,
        status: 1,
        tags: ["Vue"],
        title: "Vue3.x-toRefs & shallowReactive & shallowRef & shallowReadonly",
        updateTime: 1611739813,
        views: 5,
        _id: "6011325cc4ae0128013d3210",
      }],
      fullscreen: false
    };
  },
  mounted() {
    this.getTags();
  },
  methods: {
    async getTags() {
      // 接口请求获取默认的标签列表
    },
    clear(val) {
      this.keyword = "";
      this.$emit("toggle", val);
      this.list = [];
    },
    async handleSearch() {
      if (!this.keyword) return;
      // 接口请求搜索 传递this.keyword
    },
    goDetail(item) {
      this.clear();
      this.$router.push({
        name: "articlesDetails",
        query: { id: item._id }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  overflow-y: auto;
  max-height: 450px;
}
.no-content {
  text-align: center;
}
@media screen and (max-width: 750px) {
  .close {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media screen and (min-width: 750px) {
  .close {
    display: none;
  }
}
</style>