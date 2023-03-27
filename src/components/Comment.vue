<template>
  <div class="clearfix">
    <mu-card-title></mu-card-title>
    <mu-text-field
      ref="commentTextField"
      class="comment-input"
      placeholder="说点什么..."
      multi-line
      :rows="4"
      full-width
      v-model="content"
    ></mu-text-field>
    <mu-button @click="submit" class="comment-btn" color="primary">评论</mu-button>
  </div>
</template>
<script>
    export default {
        props: {
            commentSuccess: {
                type: Boolean,
                default: false,
            },
            focusComment: {
                type: function () {
                },
                default: false,
            }
        },
        data() {
            return {
                content: "",
            };
        },
        methods: {
            submit() {
                if (this.content) {
                    this.$emit("comment", {
                        content: this.content,
                    });
                } else {
                    this.$toast.info("请输入评论内容哦");
                }
            },
        },
        watch: {
            // 评论成功后关闭弹框
            commentSuccess(val) {
                if (val) {
                    this.openAlert = !val;
                    this.content = "";
                }
            },
        },
    };
</script>
<style lang="less" scoped>
  .comment-input {
    padding: 0 0.42667rem;
  }

  .comment-btn {
    margin: 0 0.42667rem 0.42667rem 0;
    float: right;
  }
</style>