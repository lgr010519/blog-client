import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false
import './global.less'
import 'lib-flexible'
import 'muse-ui/lib/styles/base.less';
import { Button, Select, AppBar, Icon, Menu, List, Popover, Avatar, BottomSheet, Paper, Pagination, Chip, Card, Carousel, Tooltip } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

Vue.use(Button);
Vue.use(Select);
Vue.use(AppBar);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(List);
Vue.use(Popover);
Vue.use(Avatar);
Vue.use(BottomSheet);
Vue.use(Paper);
Vue.use(Pagination);
Vue.use(Chip);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(Tooltip);

import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2F20210622113522288.gif&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663668150&t=3ff9deb442f8775aff0bf16869b246c3",
  loading: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2F20210622113522288.gif&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663668150&t=3ff9deb442f8775aff0bf16869b246c3",
  attempt: 1,
});

Vue.prototype.avatar = "https://avatars.githubusercontent.com/u/100412666?s=400&u=3c51eadc7ed230e91353fc3362735fdab5327dd8&v=4"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
