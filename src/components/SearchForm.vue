<template>
  <div>
    <mu-dialog width="60%" :open.sync="openModal">
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

      <mu-button class="close" icon @click="clear(false)">
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
      keywords: [],
      keyword: "",
      list: null,
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
      this.list = null;
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