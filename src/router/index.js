import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
Vue.config.ignoredElements = [/^ion-/]

/**
 * path: 路径
 * name: 名称
 * icon: 图标
 * homeDisable: 首页不展示
 * component: 组件页面
 */
export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      icon: 'home',
      homeDisable: true,
      component: () => import('@/components/Home')
    },
    {
      path: '/list',
      name: '静态列表',
      icon: 'list'
    },
    {
      path: '/query',
      name: '查询模板',
      icon: 'cloud-outline',
      component: () => import('@/components/Query')
    },
    {
      path: '/chat',
      name: '图表模板',
      icon: 'stats'
    },
    {
      path: '/userSetting',
      name: '个性化设置',
      icon: 'construct',
      homeDisable: true
    }
  ]
});
