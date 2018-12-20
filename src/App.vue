<template>
  <div id="app">
    <ion-app>
      <!-- 菜单 -->
      <left-menu/>

      <!-- 页面信息 -->
      <div class="ion-page" main>
        <!-- 标题栏 -->
        <ion-header>
          <ion-toolbar color="primary">
            <ion-button icon-only @click="openMenu()">
              <ion-icon name="menu"></ion-icon>
            </ion-button>
            <ion-title>{{title}}</ion-title> 
          </ion-toolbar>
        </ion-header>
        
        <!-- 正文内容, 根据路由显示 -->
        <router-view/>
      </div>
    </ion-app>
    <ion-menu-controller></ion-menu-controller>
    <ion-alert-controller></ion-alert-controller>
    <ion-toast-controller></ion-toast-controller>
    <ion-loading-controller></ion-loading-controller>
  </div>
</template>

<script>
import './style/styles.scss';
import LeftMenu from './components/LeftMenu'

export default {
  name: 'App',
  data: function() {
    return {
      title: 'Ionic & VueJS Demo'
    };
  },
  components: { LeftMenu },
  methods: {
    /**
     * 打开菜单
     */
    openMenu () {
      document.querySelector('ion-menu-controller').open('start');
    },
    /**
     * 关闭菜单
     */
    closeMenu() {
      document.querySelector('ion-menu-controller').close('start');
    },
    /**
     * 设置导航栏的标题
     * @param title 标题
     */
    setTitle(title) {
      this.title = title;
    },
    /**
     * 显示提醒对话框
     * @param headerStr 标题要显示的内容
     * @param messageStr 消息体显示的内容
     */
    async showDialogAlert(headerStr, messageStr) {
      const alertController = document.querySelector('ion-alert-controller');
      await alertController.componentOnReady();
      const alert = await alertController.create({
        header: headerStr,
        message: messageStr,
        buttons: ['OK']
      });
      return await alert.present();
    },
    /**
     * 显示 toast
     * @param position 显示的位置, 可取值: top, middle, bottom
     * @param messageStr 显示的内容, 可以传入 div 自定义内容
     */
    async showToast(position, messageStr) {
      const toastController = document.querySelector('ion-toast-controller');
      await toastController.componentOnReady();
      const toast = await toastController.create({
        message: messageStr,
        duration: 1000,
        position: position,
        cssClass: 'toast'
      });
      return await toast.present(toast);
    },
    /**
     * 显示等待框, 10秒兜底关闭.
     * 后期优化点: 传入一个 function, 超时时候做什么操作.
     */
    async getLoading() {
      const loadingController = document.querySelector('ion-loading-controller');
      await loadingController.componentOnReady();
      const loading = await loadingController.create({
        spinner: 'bubbles',
        duration: 10000,    // 兜底时间, 以防加载失败的情况下无限显示
        message: `数据加载中`
      });
      return await loading;
    }
  }
}
</script>