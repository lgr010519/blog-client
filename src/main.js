import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false
import './global.less'
import 'lib-flexible'
import 'muse-ui/lib/styles/base.less';
import {
    Button,
    Select,
    AppBar,
    Icon,
    Menu,
    List,
    Popover,
    Avatar,
    BottomSheet,
    Paper,
    Pagination,
    Chip,
    Card,
    Carousel,
    Tooltip,
    TextField,
    Dialog,
    Snackbar,
    Divider,
    Badge,
    Form,
    AutoComplete
} from 'muse-ui';
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
Vue.use(TextField);
Vue.use(Dialog);
Vue.use(Snackbar);
Vue.use(Divider);
Vue.use(Badge);
Vue.use(Form);
Vue.use(AutoComplete);

import Toast from 'muse-ui-toast';

Vue.use(Toast, {
    position: "top", // 弹出的位置
    time: 2000, // 显示的时长
    closeIcon: "close", // 关闭的图标
    close: true, // 是否显示关闭按钮
    successIcon: "check_circle", // 成功信息图标
    infoIcon: "info", // 信息信息图标
    warningIcon: "priority_high", // 提醒信息图标
    errorIcon: "warning", // 错误信息图标
});

import Helpers from 'muse-ui/lib/Helpers';

Vue.use(Helpers);

import {isPC} from "@/utils";

Vue.prototype.isPC = isPC;

import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2F20210622113522288.gif&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663668150&t=3ff9deb442f8775aff0bf16869b246c3",
    loading: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2F20210622113522288.gif&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663668150&t=3ff9deb442f8775aff0bf16869b246c3",
    attempt: 1,
});

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

//过滤器
import * as filters from "./filter";

Object.keys(filters).forEach((k) => Vue.filter(k, filters[k])); //注册过滤器
Vue.prototype.filterDate = filters.filterDate; //时间过滤方法

import theme from 'muse-ui/lib/theme';

theme.add('selfDark', {
    primary: '#1976d2',
    secondary: '#ff4081',
    success: '#4caf50',
    warning: '#fdd835',
    info: '#2196f3',
    error: '#f44336',
    track: '#757575',
    text: {
        primary: '#fff',
        secondary: 'rgba(255, 255, 255, 0.7)',
        alternate: '#303030',
        disabled: 'rgba(255, 255, 255, 0.3)',
        hint: 'rgba(255, 255, 255, 0.3)' // 提示文字颜色
    },
    divider: 'rgba(255, 255, 255, 0.3)',
    background: {
        paper: '#424242',
        chip: '#616161',
        default: '#303030'
    }
}, 'dark');
theme.add('selfLight', {
    primary: '#2196f3',
    secondary: '#ff4081',
    success: '#4caf50',
    warning: '#fdd835',
    info: '#2196f3',
    error: '#f44336',
    track: '#bdbdbd',
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        alternate: '#fff',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
        paper: '#fff',
        chip: '#e0e0e0',
        default: '#fafafa'
    }
}, 'light');
const hours = new Date().getHours()
let defaultTheme = ''
if (hours >= 8 && hours <= 18) {
    defaultTheme = 'selfLight'
} else {
    defaultTheme = 'selfDark'
}
const selfTheme = localStorage.getItem('theme') || defaultTheme
theme.use(selfTheme);
Vue.prototype.theme = theme

Vue.prototype.avatar = "https://avatars.githubusercontent.com/u/100412666?s=400&u=3c51eadc7ed230e91353fc3362735fdab5327dd8&v=4"

import 'muse-ui-loading/dist/muse-ui-loading.css';
import Loading from 'muse-ui-loading';

Vue.use(Loading, {
    overlayColor: 'hsla(0,0%,100%,.9)',        // 背景色
    size: 48,
    color: 'primary',                           // color
    className: ''                               // loading class name
});

export default new Vue({
    beforeCreate() {
        //安装事件总线
        Vue.prototype.$EventBus = this
    },
    router,
    render: h => h(App)
}).$mount('#app')
