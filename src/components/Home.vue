<template>
  <ion-content class="mobile-home-page">
    <ion-row>
      <ion-col v-for="item in items" :key="item.path" v-if="!item.homeDisable">
        <ion-card @click="goToPath(item.path, item.component)">
          <ion-icon :name="item.icon" :class="{'ion-color ion-color-primary' : item.component}"></ion-icon><br/>
          {{item.name}}
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col >
        <ion-card @click="goToBug">
          <ion-icon name="bug" color="warning"></ion-icon><br/>
          <p>意见反馈</p>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-content>
</template>

<script>
import '../style/home.scss';
import router from '../router/';

export default {
  data() {
    return {
      items: router.options.routes
    }
  },
  methods: {
    goToBug() {
      window.location.href = '';
    },
    goToPath(path, component) {
      if (component !== undefined) {
        this.$router.push(path);
      } else {
        this.$parent.showDialogAlert('模板未完成', '该功能完善中, 敬请期待');
      }
    }
  },
  mounted: function() {
    this.$parent.setTitle('Demo 首页');
  }
}
</script>