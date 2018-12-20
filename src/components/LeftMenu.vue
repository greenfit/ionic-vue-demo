<template>
<ion-menu side="start">
  <ion-header>
    <ion-toolbar>
      <ion-title>菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="mobile-menu-page">
    <div class="spacer" style="height: 1px"/>
    <h3 style="color:#000000;text-align:center;" data-componentid="heading1">Welcome, {{userInfo.name}}</h3>
    <ion-list>
      <ion-item v-for="item in items" :key="item.path" v-if="item.component" @click="goToPath(item.path, item.component)">
        <ion-icon :name="item.icon" color="primary"/><ion-label>{{item.name}}</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</ion-menu>
</template>

<script>
import '../style/menu.scss';
import router from '../router/';

export default {
  data() {
    return {
      items: router.options.routes,
      userInfo: {
        name: 'Gay'
      }
    }
  },
  methods: {
    goToPath(path) {
      this.$router.push(path);
      this.$parent.closeMenu();
    }
  },
  mounted: function() {
    // 可以加载用户信息
  }
}
</script>